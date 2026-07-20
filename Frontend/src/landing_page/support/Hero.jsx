import '../../AllStyle.css'
function Hero(){
    return(
        <section className="container-fluid" id="supportHero">
           <div className="mt-5 p-4" id="supportWrapper">
            <h4>Support Portal</h4>
            <a href="">Track Ticket</a>
           </div>
            <div className=" row p-3  id='supportCol1'">
                <div className='col-1'></div>
            <div className="col-5  mb-5 p-3">
                <h3>Search for an answer or browse help topics to create a ticket</h3>
                <input type="text" placeholder='Eg. How do I activate F&O' /><br/>
                <a href="">Track account opening</a>
                <a href="">Track segment activation</a>
                <a href="">Itraday margins</a>
                <a href="">Kite user manual</a>
            </div>
            <div className='col-1'></div>
            <div className="col-5 mb-5 p-3 " >
                <h3>Featured</h3>
                <ol>
                    <li> <a href="">Current Tackeovers and Delesting-January 2025</a></li>
                    <li> <a href=''>Latest Intraday Leverages-MIS & CO</a></li>
                </ol>
            </div>
              <div className='col-1 mb-4'></div>
           </div>
        </section>
    )
}
export default Hero;