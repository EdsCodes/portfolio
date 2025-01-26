import { FaReact } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const MySkills = () => {
    const { t } = useTranslation('MySkills');
    return (
        <div className="MySkillsContainer container-fuid d-flex flex-column">
            <div className="myMainSkillsTittle">
                <h2 className="skillsTittle mb-5">{t('MySkills')}</h2>
            </div>
            <div className="row">
                <div className="skill col-2">
                    <div className="photoNameSkill">
                        <div className="skillImg">
                            <FaReact size={150} color="#61DAFB" />
                        </div>
                        <div className="skillName">
                            <h3>React Js</h3>
                        </div>
                    </div>
                </div>
                <div className="skill col-2">
                    <div className="photoNameSkill">
                        <div className="skillImg">
                            <FaAngular size={150} color="#bd002e" />
                        </div>
                        <div className="skillName">
                            <h3>Angular Js</h3>
                        </div>
                    </div>
                </div>
                <div className="skill col-2">
                    <div className="photoNameSkill">
                        <div className="skillImg">
                            <FaJsSquare size={150} color="#f0dc4e" />
                        </div>
                        <div className="skillName">
                            <h3>HTML+CSS+Js</h3>
                        </div>
                    </div>
                </div>
                <div className="skill col-2">
                    <div className="photoNameSkill">
                        <div className="skillImg">
                            <FaGitAlt size={150} color="#f34f29" />
                        </div>
                        <div className="skillName">
                            <h3>git</h3>
                        </div>
                    </div>
                </div>
                <div className="skill col-2">
                    <div className="photoNameSkill">
                        <div className="skillImg">
                            <FaSass size={150} color="#cd669a" />
                        </div>
                        <div className="skillName">
                            <h3>SASS</h3>
                        </div>
                    </div>
                </div>
                <div className="skill col-2">
                    <div className="photoNameSkill">
                        <div className="skillImg">
                            <FaBootstrap  size={150} color="#7a09f7" />
                        </div>
                        <div className="skillName">
                            <h3>Bootstrap</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MySkills