function Universe(){
    let imgStyle={
        width:"40%"
    }
    return(
        <div className="container">
            <div className="row text-center">
                <h1>The TradeSphere Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platform</p>
                <div className="col-4 p-4 mt-5">
                  <img src="media\smallcaseLogo.png" alt="" />
                  <p className=" text-small text-muted">Thematic Investment Platform</p>
                </div>
                 <div className="col-4 p-4 mt-5">
                    <img src="media\streakLogo.png" style={imgStyle} alt="" />
                  <p className=" text-small text-muted">Algo & Strategy platform</p>
                 </div>
                  <div className="col-4 p-4 mt-5">
                       <img src="media\sensibullLogo.svg" style={imgStyle} alt="" />
                  <p className=" text-small text-muted">Options trading platform</p>
                  </div>
                   <div className="col-4 p-4 mt-5">
                  <img src="media\zerodhaFundhouse.png" style={imgStyle} alt="" />
                  <p className=" text-small text-muted">Asset Management</p>
                </div>
                 <div className="col-4 p-4 mt-5">
                    <img src="media\goldenpiLogo.png" style={imgStyle} alt="" />
                  <p className=" text-small text-muted">Bonds trading platform</p>
                 </div>
                  <div className="col-4 p-4 mt-5">
                       <img src="media\dittoLogo.png" style={imgStyle} alt="" />
                  <p className=" text-small text-muted">Inssurance</p>
                  </div>
                              <button className=" btn btn-primary fs-5" style={{width:"20%",margin:"0 auto"}}>Signup Now</button>
            </div>
        </div>
    )
}

export default Universe;