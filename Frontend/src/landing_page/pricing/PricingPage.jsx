import OpenAccount from "../../OpneAccount";
import Brokerage from "./Brokerage";
import Heero from "./Heero";

function PricingPage(){
    return(
        <>
          <Heero/>
           <OpenAccount/>
           <Brokerage/>
        </>
    )
}

export default PricingPage;