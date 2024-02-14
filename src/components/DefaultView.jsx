import noProjectsImage from "../assets/no-projects.png";
import Button from "./Button";

export default function DefaultView({onCreateNewProject}){
    return (
    <section className="h-screen flex flex-col items-center justify-center gap-4">
        <>
            <img className="w-16 h-16 object-contain mx-auto" src={noProjectsImage} alt="Image of a notepad with a pen"/>
            <h2 className="text-lg font-bold text-stone-600">No Projects Selected</h2>
            <p className="text-stone-500">Select a project or get started with a new one</p>
            <Button onClick={onCreateNewProject} borded>
                Create new project
            </Button>
        </>
    </section>
    );
}