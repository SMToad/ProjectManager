import {useRef} from "react";
import Input from "./Input";
import Button from "./Button";
import InfoModal from "./InfoModal";

export default function CreateProject({onCancel, onAddProject}){
    const infoModal = useRef();

    const title = useRef();
    const description = useRef();
    const date = useRef();

    function handleAddProject(event){
        event.preventDefault();

        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDate = date.current.value;

        let validInput = enteredTitle.trim().length >= 3
                    || enteredDescription.trim().length >= 3;

        if(!validInput) {
                infoModal.current.open();
                return;
            }

        let createdProject = {
            title: enteredTitle,
            description: enteredDescription,
            date: enteredDate,
            tasks: []
        };

        onAddProject(event, createdProject);
    }

    return (
        <>
        <InfoModal ref={infoModal} buttonCaption="Okay">
            <h2 className="text-lg font-bold text-stone-700">
                Invalid input
            </h2>
            <p className="text-stone-600 mt-4">
                Some of the input fields did not have valid data in them.
            </p>
            <p className="text-stone-600 mt-4">
                Please make sure that all of the input fields are not empty and the text fields are at least 3-digit long.
            </p>
        </InfoModal>
            <section className="bg-stone-50 h-screen w-3/5 py-16">
                <form 
                    className="h-screen flex flex-col items-stretch mx-10" action="#" 
                    onSubmit={handleAddProject}>
                    <div className="flex items-center justify-end gap-4">
                        <Button onClick={onCancel}>
                            Cancel
                        </Button>
                        <Button borded>
                            Save
                        </Button>
                    </div>
                    <Input 
                        ref={title}
                        label="Title" 
                        type="text" 
                        required/>
                    <Input 
                        ref={description}
                        label="Description" 
                        textarea 
                        required/>
                    <Input
                        ref={date}
                        label="Due Date"
                        type="date" 
                        required/>
                </form>
            </section>
        </>
    );
};