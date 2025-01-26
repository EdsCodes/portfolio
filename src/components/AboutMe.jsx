import logoRecortadoEdsCodes from '../assets/logoRecortadoEdsCodes.jpg';
import { useTranslation } from 'react-i18next';


const AboutMe = () => {
    const { t } = useTranslation('AboutMe');
    return (
        <div className="container-fluid row aboutMeContainer align-items-center">
            <div className="aboutMe col-12 col-md-6 d-flex justify-content-start">
                <div className="aboutMeParagraph text-start fs-5 lh-lg d-flex flex-column align-items-center text-center">
                    <h2 className="interactiveAboutMe position-relative">
                        <div className="content">
                            <div className="visible d-flex flex-row">
                                <p className="about">{t('p')}</p>
                                <ul>
                                    <li>{t('li')}</li>
                                    <li>John</li>
                                    <li>edsCodes</li>
                                </ul>
                            </div>
                        </div>
                    </h2>
                    <p className="text-start description"> 
                        {t('description')}
                    </p>
                </div>
            </div>
            <div className="edscodesLogo col-12 col-md-6 d-flex justify-content-end">
                <div className="d-flex flex-column align-items-center">
                    <img
                        src={logoRecortadoEdsCodes}
                        className="photo img-fluid"
                        style={{ maxHeight: "19.4em", width: "auto" }}
                        alt="edsCodesLogo"
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;