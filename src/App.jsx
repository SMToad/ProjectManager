import { useState, useRef } from "react";

import DefaultView from "./components/DefaultView";
import SideBar from "./components/SideBar";
import CreateProjectModal from "./components/CreateProjectModal";

function App() {
  const [projects, setProjects] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const createDialog = useRef();

  let noProjects = projects.length == 0;

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

  function handleCloseModal(){
    createDialog.current.close();
    setModalIsOpen(false);
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar onCreateNewProject={handleCreateNewProject} projects={projects}/>
        <div id="main-content" className="flex-grow">
          {noProjects && !modalIsOpen && <DefaultView onCreateNewProject={handleCreateNewProject}/>}
          <CreateProjectModal ref={createDialog} onCloseModal={handleCloseModal} onSaveProject={handleSaveProject}/>
        </div>
      </main>
    </>
  );
}

export default App;
