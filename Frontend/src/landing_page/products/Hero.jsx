import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Hero(){
    return(
        <div className="container mt-5 p-3">
            <div className="row text-center">
                <h2>Technology</h2>
                <h3 className="mt-2 p-1 fs-4 text-muted">Sleek, modern and intutive trading platforms</h3>
                <p className="mt-2 p-1 text-muted">Check out our <a href="" style={{textDecoration:"none"}}>investment offerings <FontAwesomeIcon icon={faArrowRight}/></a></p>
            </div>
        </div>
    )
}
export default Hero;