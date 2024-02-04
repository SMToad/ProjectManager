import DefaultView from "./components/DefaultView";
import SideBar from "./components/SideBar";

function App() {
  function handleCreateNewProject(){

  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar/>
        <div className="flex-grow">
          <DefaultView onCreateNewProject={handleCreateNewProject}/>
        </div>
      </main>
    </>
  );
}

export default App;
