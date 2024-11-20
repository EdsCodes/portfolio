import AboutMe from "./components/AboutMe"
import TitlePhoto from "./components/title&photo"

function App() {
  return (
    <div className="container-fluid">
      <div>
        <TitlePhoto />
        <AboutMe />
      </div>
    </div>
  )
}

export default App