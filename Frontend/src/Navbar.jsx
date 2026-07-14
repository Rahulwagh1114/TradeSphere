function Navbar() {
    const navLinkst={
        marginLeft:"1rem"
    }
    return (

        <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"fff"}}>
            <div class="container">
                <a class="navbar-brand" href="#">TradeSphere</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"  style={navLinkst}>
                            <a class="nav-link active" aria-current="page" href="#">Signup</a>
                        </li>
                         <li class="nav-item"  style={navLinkst}>
                            <a class="nav-link active" aria-current="page" href="#">About</a>
                        </li >
     <li class="nav-item"  style={navLinkst}>
                            <a class="nav-link active" aria-current="page" href="#">Product</a>
                        </li>
     <li class="nav-item"  style={navLinkst}>
                            <a class="nav-link active" aria-current="page" href="#">Pricing</a>
                        </li>
     <li class="nav-item"  style={{marginRight:"1.5rem",marginLeft:"1rem"}}>
                            <a class="nav-link active" aria-current="page" href="#">Support</a>
                        </li>
    
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;