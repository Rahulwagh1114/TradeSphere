import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function RightSection({
    imgUrl,
    productName,
    productDescription,
    learnMore,
}){  
    return(
<div className="container mt-5">
        <div className="row">
            <div className="col-6 p-5">
               <h1>{productName}</h1>
               <p>{productDescription}</p>
               <div className="mt-3 ">
               <a href={learnMore} style={{textDecoration:"none"}}>Learn More <FontAwesomeIcon icon={faArrowRight}/></a>
               </div>
            </div>
             <div className="col-6 p-5">
               <img src={imgUrl} style={{width:"90%"}} alt="" />
            </div>
        </div>
       </div>
    )
}
export default RightSection;