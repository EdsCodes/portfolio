import Selfie from '../assets/selfie.png'

function TitlePhoto() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="leftSideFc col-5 d-flex flex-column align-items-start">
          <h1>Hi,</h1>
          <h2>I'm <span className="name">John Edward Gonzalez</span></h2>
          <h3>Frontend developer</h3>
          <button type="button" className="watchCv btn mt-5">
            Watch CV
          </button>
        </div>
        <div className="rightSideFc col-7 d-flex flex-column align-items-end">
          <button type="button" className="traductionButton btn btn-sm-md btn-outline-secondary">
            translate
          </button>
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