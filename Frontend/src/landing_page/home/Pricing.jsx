import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

function Pricing() {
    return (
        <div className="container p-5 mb-5">
            <div className="row">
                <div className="col-4">
                    <h3 className="fs-2">Unbeatable pricing</h3>
                    <p>We pioneed the concept of discount broling and price transperncy in india. Flat fees and no hidden charges.</p>
                    <a href="#" className="mx-3" style={{ textDecoration: "none" }}>See pricing   <FontAwesomeIcon icon={faArrowRight} /></a>
                </div>


                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col p-2 border">
                            <h1 className="mb-3"><FontAwesomeIcon style={{ fontSize: "1.7rem" }} icon={faIndianRupeeSign} />0</h1>
                            <p>Free equity delivery and <br /> direct mutual funds</p>
                        </div>
                        <div className="col p-2  border">
                            <h1 className="mb-3"><FontAwesomeIcon style={{ fontSize: "1.7rem" }} icon={faIndianRupeeSign} />20</h1>
                            <p>Intraday and F&O </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Pricing;