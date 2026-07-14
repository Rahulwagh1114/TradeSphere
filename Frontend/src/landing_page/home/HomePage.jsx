import Footer from "../../footer";
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
        <Navbar/>
        <Hero/>
        <Awards/>
        <State/>
        <Pricing/>
        <Eduction/>
        <OpenAccount/>
        <Footer/>

        </>
    )
}

export default HomePage;