import logoRecortadoEdsCodes from '../assets/logoRecortadoEdsCodes.jpg'

function AboutMe() {
    return (
        <div className="container-fluid">
            <div className="row aboutMeContainer justify-content-between">
                <div className="edscodesLogo col-6 d-flex flex-column  align-items-start justify-content-center">
                    <img 
                    src={logoRecortadoEdsCodes} 
                    className="photo img-fluid" 
                    style={{ maxHeight: "20em", width: "auto" }} 
                    alt="edsCodesLogo"
                    />
                </div>
                <div className="aboutMe col-6 d-flex flex-column align-items-start mt-3 ml-auto">
                    <h2>About me 👨‍💻</h2>
                    <div className="aboutMeParagraph text-start fs-4 lh-lg">
                        <p>  
                            Frontend developer with experience in the banking sector, specialized in React and Angular. I have strong skills in HTML, CSS, and JavaScript, along with fluent English for collaborating on international projects. Passionate about creating efficient and intuitive web solutions.
                            {/* Desarrollador frontend con experiencia en el sector bancario, especializado en React y Angular. Tengo habilidades sólidas en HTML, CSS, JavaScript, y manejo fluido de inglés para colaborar en proyectos internacionales. Apasionado por crear soluciones web eficientes e intuitivas. */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe