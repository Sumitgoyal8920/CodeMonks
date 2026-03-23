import "../Css/HeroSection.css";
import {Link} from "react-router-dom" ;


function HeroSection() {
  return (
    <div className="hero">
      <div className="overlay">
        <h1>Welcome to Code Monks</h1>
        <p>
          We build awesome things. Ready to grow your brand?
          Let’s build <br></br>something great together.
        </p>
       <Link to = "/Services"><button>Explore Our Services</button></Link> 
      </div>
    </div>
  );
}

export default HeroSection;