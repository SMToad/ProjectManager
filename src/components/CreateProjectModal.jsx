import {useRef, useImperativeHandle, forwardRef, useState} from "react";

const DEFAULT_PROJECT = {
    title: "",
    description: "",
    date: "",
    tasks: []
};

const CreateProjectModal = forwardRef(function CreateProjectModal({onCloseModal, onSaveProject}, ref){
    const dialog = useRef();
    const [createdProject, setCreatedProject] = useState(DEFAULT_PROJECT);

    const labelClasses = "mt-6 text-left uppercase font-bold text-stone-500";
    const inputClasses = "px-1 py-2 bg-stone-200 rounded";

    useImperativeHandle(ref, () => {
        return {
            open(){
                setCreatedProject(DEFAULT_PROJECT);
                dialog.current.show();
            },
            close(){
                dialog.current.close();
            }
        }
    });

    function onTitleChange(event){
        setCreatedProject(oldCreatedProject => {
            return {...oldCreatedProject, title: event.target.value}
        });
    }

    function onDescriptionChange(event){
        setCreatedProject(oldCreatedProject => {
            return {...oldCreatedProject, description: event.target.value}
        });
    }

    function onDateChange(event){
        setCreatedProject(oldCreatedProject => {
            return {...oldCreatedProject, date: event.target.value}
        });
    }

    return (
        <dialog ref={dialog} className="bg-stone-50 h-screen w-3/5 py-16">
            <form className="h-screen flex flex-col items-stretch mx-10" action="#" onSubmit={(event) => onSaveProject(event, createdProject)}>
                <div className="flex items-center justify-end gap-4">
                    <button className="px-5 py-1.5 hover:text-red-500" onClick={onCloseModal}>Cancel</button>
                    <button 
                        className="px-5 py-1.5 text-xs md:text-base rounded-md bg-stone-800 text-stone-200 hover:bg-stone-600 hover:text-stone-100">
                        Save
                    </button>
                </div>
                <label for="title" className={labelClasses}>Title</label>
                <input name="title" type="text" required value={createdProject.title} className={inputClasses} onChange={onTitleChange}/>
                <label for="description" className={labelClasses}>Description</label>
                <textarea name="description" required value={createdProject.description} className={inputClasses} onChange={onDescriptionChange}/>
                <label for="date" className={labelClasses}>Due date</label>
                <input name="date" type="date" required value={createdProject.date} className={inputClasses} onChange={onDateChange}/>
            </form>
        </dialog>
    );
});

export default CreateProjectModal;