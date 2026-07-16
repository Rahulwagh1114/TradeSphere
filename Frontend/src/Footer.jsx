function Footer() {
    const ancherStyle={
        textDecoration:"none",
        lineHeight:"12px",
        color:"black",
        
        
    }
    return (
        <footer style={{background:"rgb(250,250,250)"}}>
        <div className="container border-top mt-5">
            <div className="row mt-5">
                <div className="col">
                    <h2>TradeSphere</h2>
                    <p className="text-muted">&copy; 2026, Not TradeSphere Broking Ltd. All rights reserved.</p>
                </div>
                <div className="col">
                    <p>Company</p>
                    <a href=""className="text-muted" style={ancherStyle}>About</a><br />
                    <a href="" className="text-muted" style={ancherStyle}>Products</a><br />
                    <a href=""  className="text-muted"style={ancherStyle}>Pricing</a><br />
                    <a href="" className="text-muted" style={ancherStyle}>Referral Programme</a><br />
                    <a href="" className="text-muted" style={ancherStyle}>Careers</a><br />
                    <a href="" className="text-muted" style={ancherStyle}>TradeSphere.tech</a><br />
                    <a href="" className="text-muted" style={ancherStyle}>Press & media</a><br />
                    <a href="" className="text-muted" style={ancherStyle}>TradeSphere cares (CSR)</a><br />
                </div>
                <div className="col">
                    <p>Support</p>
                    <a href="" className="text-muted" style={ancherStyle}>Contact</a><br />
                    <a href="" className="text-muted" style={ancherStyle}>Support Portal</a><br />
                    <a href="" className="text-muted" style={ancherStyle}>Z-connect blog</a><br />
                    <a href="" className="text-muted" style={ancherStyle}>List of charges</a><br />
                    <a href="" className="text-muted" style={ancherStyle}>Downloads & resources</a><br />
                </div>
                <div className="col">
                    <p>Account</p>
                    <a href="" className="text-muted" style={ancherStyle}>Open an account</a><br />
                    <a href="" className="text-muted" style={ancherStyle}>Fund Transfer</a><br />
                    <a href="" className="text-muted" style={ancherStyle}>60 Day challenge</a><br />
                </div>
            </div>
            <div>
                <div className="mt-5 text-muted" style={{fontSize:"14px"}}>
                    <p>TradeSphere Broking Ltd.: Member of NSE & BSE SEBI Registration no.:

                        INZ000031633 CDSL: Depository services through TradeSphere Securities Pvt. Ltd. SEBI Registration no.: IN-DP-100-2015 Commodity Trading through TradeSphere Commodities Pvt. Ltd. MCX: 46025 SEBI Registration no.: INZ000038238 Registered Address:TradeSphere Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Nagpur - 440034, Maharashtra, India. For any complaints pertaining to securities broking please write to complaints@tradesphere.com, for DP related to dp@tradesphere.com. Please ensure you carefully read thi Disclosure Document as prescribed by SEBI | ICF</p>
                    <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>
                    <p>Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors.

                        re KYC is one time exercise while dealing in securities markets SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the once KYC is done through a same process again when you approach another intermediary." Dear Investor subscribing to an IPO, there is no need to issue a cheque. Please wr number and sign the IPO application form to authorize your bank to of allotment. In case of non allotment the funds will remain in y business we don't give stock tips, and have not authorized anyon others. If you find anyone claiming to be part of TradeSphere and o please create a ticket here.</p>
                </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer;