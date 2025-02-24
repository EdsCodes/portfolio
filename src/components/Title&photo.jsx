import Selfie from '../assets/selfie.png'
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import LangSwitch from './ChangeLang';
import { useTranslation } from 'react-i18next';

const TitlePhoto = () => {
  const { t } = useTranslation('Title&photo');
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="leftSideFc col-6 d-flex flex-column align-items-start">
          <p></p>
          <h1>{t("h1Title&photo")}</h1>
          <h2>{t("h2Title&photo")}<span className="name">John Edward Gonzalez</span></h2>
          <h3>Frontend developer</h3>
          <button type="button" className="watchCv btn mt-5">
            {t("buttonTitle&photo")}
          </button>
          <div className="socials d-flex flex-row align-items-start mt-4">
            <div className="socialImg">
              <a href="https://www.linkedin.com/in/johnedscodes/" target="_blank" alt="LinkedIn" rel="noopener noreferrer">
                <FaLinkedinIn alt="LinkedInLogo" style={{ width: '30px', height: 'auto', color: '#0B0B0B' }}/>
              </a>
            </div>
            <div className="socialImg">
              <a href="https://github.com/EdsCodes" target="_blank" alt="GitHub" rel="noopener noreferrer">
                <IoLogoGithub alt="LinkedInLogo" style={{ width: '30px', height: 'auto', color: '#0B0B0B' }}/>
              </a>
            </div>
          </div>
        </div>
        <div className="rightSideFc col-6 d-flex flex-column align-items-end">
          <LangSwitch />
          <div className="d-flex justify-content-center mx-auto d-block">
            <img 
              src={Selfie} 
              className="photo img-fluid rounded-circle" 
              style={{ maxHeight: "20em", width: "auto" }} 
              alt="Selfie"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitlePhoto