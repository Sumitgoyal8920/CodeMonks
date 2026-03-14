import React from "react";
 import "../Css/ProductIntro.css";
function ProductIntro(){
    return(
        <div className="ProductIntro">
            <h1>
Portfolio
            </h1>
            <p>At Code Monks, every project reflects our commitment to innovation, quality, and results.<br></br> We partner with clients across industries to build impactful digital solutions that solve<br></br> problems, enhance experiences, and drive growth. Here’s a glimpse of what we’ve delivered —<br></br> each crafted with precision and purpose.</p>
            <div className="buttonGrp">
                <button>All</button>
                <button>web</button>
                <button>App</button>
            </div>
        </div>
    )
}
export default ProductIntro ;