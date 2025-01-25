import { useTranslation } from 'react-i18next'
import imgEcommerceHtmlCssJs from '../assets/imgs/Ecommerce HTML CSS & Js.png'
import imgEcommerceReact from '../assets/imgs/Ecommerce React.png'
import imgScholarApp from '../assets/imgs/scholar app image.png'

function MyProjects () {
    const { t } = useTranslation('MyProjects');
    return (
        <div className="MyProjectsContainer container-fuid d-flex flex-column mb-5">
            <div className="myProjectsTittle">
                <h2 className="projectsTittle mb-5">{t('MyProjects')}</h2>
            </div>
            <div className="row">
                <div className="skill col-4">
                    <div className="project">
                        <div className="projectImg">
                            <a href="https://edscodes.github.io/E-Commerce-De-Ropa/index.html">
                                <img src={imgEcommerceHtmlCssJs} alt="Vista previa eccomerce con HTML+CSS+JS" target="_blank" rel="noopener noreferrer"></img>
                            </a>
                        </div>
                        <div className="projectName">
                            <h3 className='mt-5 text-center'>E-commerce HTML+CSS+JS</h3>
                        </div>
                    </div>
                </div>
                <div className="skill col-4">
                    <div className="project">
                        <div className="projectImg">
                            <a href="https://proyecto-final-gonzalez-coder.netlify.app/">
                                <img src={imgScholarApp} alt="Vista previa app control escolar" target="_blank" rel="noopener noreferrer"></img>
                            </a>
                        </div>
                        <div className="projectName">
                            <h3 className='mt-5 text-center'>{t('ProjectName')}</h3>
                        </div>
                    </div>
                </div>
                <div className="skill col-4">
                    <div className="project">
                        <div className="projectImg">
                            <a href="https://proyecto-final-gonzalez-coder.netlify.app/">
                                <img src={imgEcommerceReact} alt="Vista previa eccomerce React" target="_blank" rel="noopener noreferrer"></img>
                            </a>
                        </div>
                        <div className="projectName">
                            <h3 className='mt-5 text-center'>E-commerce React Js</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProjects