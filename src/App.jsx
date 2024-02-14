import { useState } from "react";

import DefaultView from "./components/DefaultView";
import SideBar from "./components/SideBar";
import CreateProject from "./components/CreateProject";
import ProjectView from "./components/ProjectView";

function App() {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(undefined);

  let projectSelected = activeProject != null && activeProject != undefined;
  let createMode = activeProject === null;

  function handleCreateNewProject(){
    setActiveProject(null);
  }

  function handleCancelCreate(){
    setActiveProject(undefined);
  }

  function handleAddProject(event, createdProject){
    event.preventDefault();
    setProjects(prevProjects => {
      let newProjects = [...prevProjects, createdProject];
      return newProjects;
    })
    setActiveProject(undefined);
  }

  function handleSelectProject(projectName){
    setActiveProject(projects.find(project => project.title === projectName));
  }

  function handleDeleteProject(){
    setProjects(prevProjects => {
      let newProjects = [...prevProjects];
      const index = newProjects.indexOf(activeProject);
      if (index > -1) { 
        newProjects.splice(index, 1);
        setActiveProject(undefined);
      }
      return newProjects;
    })
  }

  function updateTasksInActiveObject(newTasks){
    const index = projects.indexOf(activeProject);
    var newProject = {...activeProject,
      tasks: newTasks};
    setProjects(projects => {
      let newProjects = [...projects];
      newProjects[index] = newProject;
      return newProjects;
    })
    return newProject;
  }

  function handleAddTask(taskName){
      if(projectSelected && taskName){
        setActiveProject(project => {
          var newTasks = [...project.tasks, {id: projects.length, name: taskName}];
          return updateTasksInActiveObject(newTasks);
        });
      }
  }

  function handleDeleteTask(taskToDelete){
    if(projectSelected && taskToDelete !== null){
      setActiveProject(project => {
        var newTasks = [...project.tasks];
        const index = newTasks.indexOf(taskToDelete);
        if (index > -1) { 
          newTasks.splice(index, 1);
        }

        return updateTasksInActiveObject(newTasks);
      });
    }
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar projects={projects} 
          activeProject={activeProject} 
          onCreateNewProject={handleCreateNewProject}
          onSelectProject={handleSelectProject}/>
        <div id="main-content" className="flex-grow">
          {!projectSelected && !createMode && <DefaultView onCreateNewProject={handleCreateNewProject}/>}
          {createMode && <CreateProject onCancel={handleCancelCreate} onAddProject={handleAddProject}/>}
          {projectSelected && 
            <ProjectView 
              project={activeProject} 
              onDeleteProject={handleDeleteProject}
              onAddTask={handleAddTask}
              onDeleteTask={handleDeleteTask}/>}
        </div>
      </main>
    </>
  );
}

export default App;
