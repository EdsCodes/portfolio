import AboutMe from "./components/AboutMe"
import TitlePhoto from "./components/title&photo"
import MySkills from "./components/MySkills"

function App() {
  return (
    <div className="container-fluid">
      <div>
        <TitlePhoto />
        <AboutMe />
        <MySkills />
      </div>
    </div>
  )
}

export default App