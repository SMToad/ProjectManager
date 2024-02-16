import Button from "./Button";
import { useState } from "react";

export default function CreateTask({onAddTask}){
    const [taskName, setTaskName] = useState('');

    function handleChange(event){
        setTaskName(event.target.value);
    }

    function handleAddTask(){
        onAddTask(taskName);
        setTaskName("");
    }

    return (
        <div className="mt-2 mb-4">
            <input 
                type="text" 
                className="w-1/4 p-1 mr-4 rounded border-b-2 bg-stone-200 border-stone-300  focus:outline-none focus:border-stone-600"
                value={taskName}
                onChange={handleChange}/>
            <Button onClick={handleAddTask}>
                Add Task
            </Button>
        </div>
    )
};