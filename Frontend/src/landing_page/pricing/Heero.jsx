function Heero(){
    return(
        <div className="container">
            <div className="row p-3 mt-5 text-center">
                <h1>Pricing</h1>
                <h3 className="text-muted fs-5 mb-5">Free equity investments and flat ₹20 Traday and F&O Traders</h3>
                <div className="col-4 p-5 mt-5 text-center border-top">
                    <img src="media\pricing0.svg" alt="" />
                    <h2 className="fs-4" >Free equity delivery</h2>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free - 0 brokerage.</p>
                </div>
                <div className="col-4 p-3 mt-5 text-center">
                    <img src="media\intradayTrades.svg" alt="" />
                    <h2 className="fs-4">Intraday and F&O trades</h2>
                    <p className="text-muted">Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
                </div>
                <div className="col-4  p-3 mt-5 text-center">
                   <img src="media\pricing0.svg" alt="" />
                    <h2 className="fs-4">Free Direct MF</h2>
                    <p className="text-muted">All direct mutual fund investments are absolutely free commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}
export default Heero;