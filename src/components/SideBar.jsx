import { useState } from "react";

export default function SideBar({projects, onCreateNewProject}){
    const [activeProject, setActiveProject] = useState();

    const projectSelected = activeProject != null;

    function handleSelectProject(projectName){
        setActiveProject(projects.find(project => project.name === projectName));
    }

    const buttonClassesBase = "px-1 py-0.5 text-left rounded-md";
    const activeButtonClasses = "bg-stone-800" + buttonClassesBase;

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <p className="text-xl font-bold uppercase mb-8">Your projects</p>
            <button 
                className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
                onClick={onCreateNewProject}>
                + Add Project
            </button>
            <menu className="my-8">
                {projects.map((project, index) => 
                    <li key={index} className="grid my-2">
                        <button 
                            className={((projectSelected && activeProject.name === project.name) ? activeButtonClasses : buttonClassesBase)}
                            onClick={handleSelectProject}>
                            {project.title}
                        </button>
                    </li>
                )}
            </menu>
        </aside>
    );
}