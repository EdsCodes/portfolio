import logoRecortadoEdsCodes from '../assets/logoRecortadoEdsCodes.jpg';

function AboutMe() {
    return (
        <div className="container-fluid row aboutMeContainer align-items-center">
            <div className="aboutMe col-12 col-md-6 d-flex justify-content-start">
                <div className="aboutMeParagraph text-start fs-5 lh-lg d-flex flex-column align-items-center text-center">
                    <h2 className="interactiveAboutMe position-relative">
                        <div className="content">
                            <div className="visible d-flex flex-row">
                                <p className="about">About</p>
                                <ul>
                                    <li>Me</li>
                                    <li>John</li>
                                    <li>edsCodes</li>
                                </ul>
                            </div>
                        </div>
                    </h2>
                    <p>
                        Frontend developer with experience in the banking sector, specialized in React and Angular. I have strong skills in HTML, CSS, and JavaScript, along with fluent English for collaborating on international projects. Passionate about creating efficient and intuitive web solutions.
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

{/* Desarrollador frontend con experiencia en el sector bancario, especializado en React y Angular. Tengo habilidades sólidas en HTML, CSS, JavaScript, y manejo fluido de inglés para colaborar en proyectos internacionales. Apasionado por crear soluciones web eficientes e intuitivas. */}