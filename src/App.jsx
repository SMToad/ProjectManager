import { useState, useRef } from "react";

import DefaultView from "./components/DefaultView";
import SideBar from "./components/SideBar";
import CreateProjectModal from "./components/CreateProjectModal";
import ProjectView from "./components/ProjectView";

function App() {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const createDialog = useRef();

  let projectSelected = activeProject != null;

  function handleCreateNewProject(){
    createDialog.current.open();
    setModalIsOpen(true);
  }

  function handleSaveProject(event, createdProject){
    event.preventDefault();
    setProjects(prevProjects => {
      let newProjects = [...prevProjects, createdProject];
      return newProjects;
    })
    handleCloseModal();
  }

  function handleSelectProject(projectName){
    setActiveProject(projects.find(project => project.title === projectName));
  }

  function handleCloseModal(){
    createDialog.current.close();
    setModalIsOpen(false);
  }

  function handleDeleteProject(){
    setProjects(prevProjects => {
      let newProjects = [...prevProjects];
      const index = newProjects.indexOf(activeProject);
      if (index > -1) { 
        newProjects.splice(index, 1);
        setActiveProject(null);
      }
      return newProjects;
    })
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar projects={projects} 
          activeProject={activeProject} 
          onCreateNewProject={handleCreateNewProject}
          onSelectProject={handleSelectProject}/>
        <div id="main-content" className="flex-grow">
          {!projectSelected && !modalIsOpen && <DefaultView onCreateNewProject={handleCreateNewProject}/>}
          <CreateProjectModal ref={createDialog} onCloseModal={handleCloseModal} onSaveProject={handleSaveProject}/>
          {projectSelected && 
            <ProjectView project={activeProject} onDeleteProject={handleDeleteProject}/>}
        </div>
      </main>
    </>
  );
}

export default App;
