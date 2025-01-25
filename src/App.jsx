import TitlePhoto from "./components/title&photo"
import MySkills from "./components/MySkills"
import MyProjects from "./components/MyProjects"
import ContactMe from "./components/ContactMe"
import AboutMe from "./components/AboutMe";
import './config/i18next.config';

function App() {
  return (
    <div className="container-fluid">
      <div>
        <TitlePhoto />
        <AboutMe />
        <MySkills />
        <MyProjects />
        <ContactMe />
      </div>
    </div>
  )
}

export default App