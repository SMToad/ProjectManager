import noProjectsImage from "../assets/no-projects.png";

export default function DefaultView({onCreateNewProject}){
    return (
    <section className="h-screen flex flex-col items-center justify-center gap-4">
        <>
            <img className="h-16" src={noProjectsImage} alt="Image of a notepad with a pen"/>
            <h2 className="text-lg font-bold text-stone-600">No Projects Selected</h2>
            <p className="text-stone-500 ">Select a project or get started with a new one</p>
            <button 
                className="px-4 py-2 my-4 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" 
                onClick={onCreateNewProject}>
                    Create new project
            </button>
        </>
    </section>
    );
}