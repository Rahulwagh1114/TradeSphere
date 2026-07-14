import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Eduction(){
    return(
       <div className="container mt-5">
        <div className="row">
            <div className="col-6">
                <img src="media\education.svg" alt="" style={{width:"70%"}} />
            </div>
            <div className="col-6 ">
                <h1 className="fs-2">Free and open market education</h1>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading</p>
              <a href="#" className="mx-3" style={{textDecoration:"none"}}>Versity  <FontAwesomeIcon icon={faArrowRight} /></a>

              <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
               <a href="#" className="mx-3" style={{textDecoration:"none"}}>TradingQ&A   <FontAwesomeIcon icon={faArrowRight} /></a>
            </div>
        </div>  
       </div>
    )
}
export default Eduction;