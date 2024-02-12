export default function SideBar({projects, activeProject, onCreateNewProject, onSelectProject}){

    const buttonClassesBase = "px-2 py-1 text-left rounded-md";
    const activeButtonClasses = "bg-stone-800 " + buttonClassesBase;

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="font-bold uppercase mb-8 md:text-xl text-stone-200">Your projects</h2>
            <button 
                className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
                onClick={onCreateNewProject}>
                + Add Project
            </button>
            <menu className="my-8">
                {projects.map((project, index) => 
                    <li key={index} className="grid my-2">
                        <button 
                            className={((activeProject != null && activeProject.title === project.title) ? activeButtonClasses : buttonClassesBase)}
                            onClick={() => onSelectProject(project.title)}>
                            {project.title}
                        </button>
                    </li>
                )}
            </menu>
        </aside>
    );
}