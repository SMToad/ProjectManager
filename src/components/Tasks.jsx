import Button from "./Button";
import CreateTask from "./CreateTask";

export default function Tasks({tasks, onAddTask, onDeleteTask}){
    const anyTasks = tasks != null && tasks.length > 0;

    return (
        <section>
        <h2 className="text-2xl font-bold text-stone-900">Tasks</h2>
            <CreateTask onAddTask={onAddTask}/>
            {!anyTasks && <p>This project does not have any tasks yet.</p>}
            {anyTasks && (
                <ul className="rounded bg-stone-100 p-4">
                    {tasks.map((task) => (
                        <li key={task.id} className="my-1">
                            <div className="flex items-center justify-between">
                                <p>{task.name}</p>
                                <Button onClick={() => onDeleteTask(task)}>
                                    Clear
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}