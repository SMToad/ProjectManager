import Button from "./Button";
import Tasks from "./Tasks";

export default function ProjectView({project, onDeleteProject, onAddTask, onDeleteTask}){

    const formattedDate = new Date(project.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <section className="h-screen w-4/5 py-16 flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-stone-900">{project.title}</h2>
                <Button onClick={onDeleteProject}>Delete</Button>
            </div>
            <p className="text-stone-400">{formattedDate}</p>
            <p>{project.description}</p>

            <hr className="h-0.5 bg-stone-300"/>

            <Tasks
                tasks={project.tasks}
                onAddTask={onAddTask}
                onDeleteTask={onDeleteTask}/>
        </section>
    );
}