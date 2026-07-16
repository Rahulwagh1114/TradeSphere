import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
    const navLinkst={
        marginLeft:"1rem"
    }
    return (

        <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"fff"}}>
            <div class="container">
                <Link class="navbar-brand" to="/">TradeSphere</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"  style={navLinkst}>
                            <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
                        </li>
                         <li class="nav-item"  style={navLinkst}>
                            <Link class="nav-link active" aria-current="page" to="/about">About</Link>
                        </li >
     <li class="nav-item"  style={navLinkst}>
                            <Link class="nav-link active" aria-current="page" to="/product">Product</Link>
                        </li>
     <li class="nav-item"  style={navLinkst}>
                            <Link class="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
                        </li>
     <li class="nav-item"  style={{marginRight:"1.5rem",marginLeft:"1rem"}}>
                            <Link class="nav-link active" aria-current="page" to="/support">Support</Link>
                        </li>
    
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;