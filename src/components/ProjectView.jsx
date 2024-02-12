import { useState } from "react";

export default function ProjectView({project, onDeleteProject, onAddTask, onDeleteTask}){
    const [taskName, setTaskName] = useState();
    const anyTasks = project.tasks != null && project.tasks.length > 0;
    const buttonClasses = "px-2 py-1 text-stone-900 hover:text-red-500";

    function handleChange(event){
        setTaskName(event.target.value);
    }

    function handleAddTask(){
        onAddTask(taskName);
        setTaskName("");
    }

    return (
        <section className="h-screen w-4/5 py-16 flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-stone-900">{project.title}</h2>
                <button className={buttonClasses} onClick={onDeleteProject}>Delete</button>
            </div>
            <p className="text-stone-400">{project.date}</p>
            <p>{project.description}</p>

            <hr className="h-0.5 bg-stone-300"/>

            <h2 className="text-xl font-bold text-stone-900">Tasks</h2>
            <div>
                <input 
                    type="text" 
                    className="w-1/4 p-1 mr-4 rounded bg-stone-200"
                    value={taskName}
                    onChange={handleChange}/>
                <button className={buttonClasses} onClick={handleAddTask}>
                    Add Task
                </button>
            </div>
            {!anyTasks && <p>This project does not have any tasks yet.</p>}
            {anyTasks && (
                <ul className="rounded bg-stone-100 p-4">
                    {project.tasks.map((task) => (
                        <li key={task.id} className="my-1">
                            <div className="flex items-center justify-between">
                                <p>{task.name}</p>
                                <button className={buttonClasses} onClick={() => onDeleteTask(task)}>
                                    Clear
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}