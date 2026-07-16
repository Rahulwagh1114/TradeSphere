import Hero from "./Hero";
import LeftSection from "./LeftSection";

function ProductPage() {
    return (
        <>
            <Hero />
            <LeftSection 
            imgUrl="media\kite.png" 
            productName="Kite" 
            productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
            tryDemo="" 
            learnMore="" 
            googlePlay="" 
            appStore="" />
        </>
    )
}

export default ProductPage;