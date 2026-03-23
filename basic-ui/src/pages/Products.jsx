import { Link } from "react-router-dom";
import TopBanner from "../components/TopBanner";
import ProductSlider from "../components/ProductSlider";
import "../Css/LowerBannerProduct.css";


function Products(){
    return(
        <>
<TopBanner Title="Portfolio" Description="At Code Monks, every project reflects our commitment to innovation, quality, and results. We partner with clients across industries to build impactful digital solutions that solve problems, enhance experiences, and drive growth. Here’s a glimpse of what we’ve delivered  each crafted with precision and purpose"/>
<ProductSlider/>

<div className="LowerBannerProduct">
            <h1>Need a Custom Solution?</h1>
            <p>Get in touch with our team to build something tailored to your business</p>
           <Link to="/Contact"> <button>Contacts Us</button></Link>
        </div>


</>
    )
}

 export default Products ;