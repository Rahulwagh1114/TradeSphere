import Footer from "../../Footer";
import Navbar from "../../Navbar";
import OpenAccount from "../../opneAccount";
import Awards from "./Awards";
import Eduction from "./Eduction";
import Pricing from "./Pricing";
import State from "./State";
import Hero from "./Hero";

function HomePage(){
    return(
        <>
    
        <Hero/>
        <Awards/>
        <State/>
        <Pricing/>
        <Eduction/>
        <OpenAccount/>
   

        </>
    )
}

export default HomePage;