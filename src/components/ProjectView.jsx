export default function ProjectView({project, onDeleteProject}){
    const anyTasks = project.tasks != null && project.tasks.length > 0;

    return (
        <section className="h-screen w-4/5 py-16 flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-stone-900">{project.title}</h2>
                <button className="px-2 py-1 text-stone-900" onClick={onDeleteProject}>Delete</button>
            </div>
            <p className="text-stone-400">{project.date}</p>
            <p>{project.description}</p>

            <hr className="h-0.5 bg-stone-300"/>

            <h2 className="text-xl font-bold text-stone-900">Tasks</h2>
            <form>
                <input type="text" className="p-1 mr-4 rounded-s bg-stone-200"/>
                <button className="px-2 py-1">Add Task</button>
            </form>
            {!anyTasks && <p>This project does not have any tasks yet.</p>}
            {anyTasks && 
                <ul>
                    {project.tasks.map((task, index) => {
                        <li key={index}>
                            <p>
                                <p>{task.title}</p>
                                <button>Clear</button>
                            </p>
                        </li>
                    })}
                </ul>
            }
        </section>
    );
}