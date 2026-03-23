import { useState } from "react";
import "../Css/ProductSlider.css";



function ProductSlider(){
    const [Image,SetImage] =useState("All");
    

    return(
            <div className="buttonGrp">
                <button onClick={()=>SetImage("All")}>All</button>
                <button onClick={()=>SetImage("Web")}>web</button>
                <button onClick={()=>SetImage("App")}>App</button>
<div className="ClickImage">

                {(Image==="All" || Image ==="App")&&(
                    <img src ="../src/assets/Nukkad.png"/>
                )}
                {(Image==="All" || Image ==="Web")&&(
                    <img src ="../src/assets/Hrms.jpg"/>
                )}
                </div>
                
            </div>
            
       
    )
}
export default ProductSlider ;