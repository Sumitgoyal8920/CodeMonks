import "../Css/HomeAbout.css";
function HomeAbout(){
    return (
        <div className="HomeAbout">
            <div className="HomeAbout-left">
                <h1>About Code Monks</h1>
                <p>At Code Monks, we’re not just developers—we’re problem solvers.<br></br> We build smart, scalable, and elegant software that powers startups <br></br>and enterprises alike <br></br> With a deep understanding of technology and a passion for innovation,<br></br> we turn complex ideas into powerful digital products..</p>
                <button id="btn1">Get more Details</button>
                <button id="btn2">Let`s Connect</button>
            </div >
            
            <div className="HomeAbout-right">
                <img src="../src/assets/side.jpg"></img>
            </div>
        </div>

        )
}
export default HomeAbout ;