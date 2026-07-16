import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from '../src/landing_page/home/HomePage'
import Signup from "./landing_page/signup/Signup";
import SupportPage from "./landing_page/support/SupportPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from "./landing_page/products/ProductPage";
import AboutPage from "./landing_page/about/AboutPage";
import NotFound from "./landing_page/NotFound";

import Navbar from "./Navbar";
import Footer from "./footer";

function App() {

  return (
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/about" element={<AboutPage/>}/>
  <Route path="/pricing" element={<PricingPage/>} />
  <Route path="/product" element={<ProductPage/>}/>
  <Route path="/support" element={<SupportPage/>}/>
  <Route path="*" element={<NotFound/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>
  )
}

export default App
