
import "../Css/TopBanner.css";

function TopBanner({Title,Description}){
    return(
        <div className="TopBanner">
            <h1 className="Title">{Title}</h1>
            <p className="Description">{Description}</p>
            

        </div>    
        )
};
export default TopBanner ;