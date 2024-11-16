import Selfie from './assets/selfie.png'
import './App.css'

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="leftSideFc col-5 d-flex flex-column align-items-start">
          <h1>Hi,</h1>
          <h2>I'm John Edward Gonzalez</h2>
          <h2>Frontend developer</h2>
          <button type="button" className="watchCv btn btn-dark mt-5">
            Ver CV
          </button>
        </div>
        <div className="rightSideFc col-7 d-flex flex-column align-items-end">
          <button type="button" className="traductionButton btn btn-sm-md btn-outline-secondary">
            Traducir página
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

export default App