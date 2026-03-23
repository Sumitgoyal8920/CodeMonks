import "../Css/Footer.css";
import {Link} from "react-router-dom";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <>
        <div className="Footer">
            <div>
                <h1>Code Monks</h1>
                <p>Building reliable, scalable, and <br></br>intelligent software solutions<br></br> with clean code and great <br></br>minds.</p>
            </div>
            <div>
                <h2>Company</h2>
                <ul className="list">
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div>
                <h2>Services</h2>
                <ul className="list">
                    <li>Web Development</li>
                    <li>Mobile Apps</li>
                    <li>Cloud Solutions</li>
                    <li>AI / ML</li>
                </ul>
            </div>

            <div className="Reach">
                <h2>Reach Us</h2>
                <p>Email: crm@codemonks.in<br></br>
                    Phone: +91-9999131058<br></br>
                    +91-7503366400</p>

                    <div className="social-icons">
  <a href="https://linkedin.com" target="_blank">
    <FaLinkedin />
  </a>

  <a href="https://twitter.com" target="_blank">
    <FaTwitter />
  </a>

  <a href="https://instagram.com" target="_blank">
    <FaInstagram />
  </a>
</div>
            </div>
            
            
            <div><Link to ="/Contact"><button>Contact with Us</button></Link></div>
            
        </div>
      
        <p className="footer-title">© 2025 Code Monks. Crafted with ❤️ for innovation.</p>
        </>
    )
}



export default Footer;