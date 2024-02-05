import {useRef, useImperativeHandle, forwardRef} from "react";

const CreateProjectModal = forwardRef(function CreateProjectModal({onCloseModal, onSaveProject}, ref){
    const dialog = useRef();

    const labelClasses = "mt-6 text-left uppercase font-bold text-stone-500";
    const inputClasses = "px-1 py-2 bg-stone-200";
    const createdProject = {
        title: "",
        description: "",
        date: ""
    };

    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.show();
            },
            close(){
                dialog.current.close();
            }
        }
    });

    function onTitleChange(event){
        createdProject.title = event.target.value;
    }

    function onDescriptionChange(event){
        createdProject.description = event.target.value;
    }

    function onDateChange(event){
        createdProject.date = event.target.value;
    }

    return (
        <dialog ref={dialog} className="bg-stone-50 h-screen w-3/5">
            <form className="h-screen flex flex-col items-stretch justify-center mx-10" action="#" onSubmit={(event) => onSaveProject(event, createdProject)}>
                <div className="flex items-center justify-end gap-4">
                    <button className="px-5 py-1.5" onClick={onCloseModal}>Cancel</button>
                    <button 
                        className="px-5 py-1.5 text-xs md:text-base rounded-md bg-stone-800 text-stone-200 hover:bg-stone-600 hover:text-stone-100">
                        Save
                    </button>
                </div>
                <label for="title" className={labelClasses}>Title</label>
                <input name="title" type="text" required className={inputClasses} onChange={onTitleChange}/>
                <label for="description" className={labelClasses}>Description</label>
                <textarea name="date" className={inputClasses} onChange={onDescriptionChange}/>
                <label for="date" className={labelClasses}>Due date</label>
                <input name="date" type="date" className={inputClasses} onChange={onDateChange}/>
            </form>
        </dialog>
    );
});

export default CreateProjectModal;