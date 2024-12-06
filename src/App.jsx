import AboutMe from "./components/AboutMe"
import TitlePhoto from "./components/title&photo"
import MySkills from "./components/MySkills"
import MyProjects from "./components/MyProjects"

function App() {
  return (
    <div className="container-fluid">
      <div>
        <TitlePhoto />
        <AboutMe />
        <MySkills />
        <MyProjects />
      </div>
    </div>
  )
}

export default App