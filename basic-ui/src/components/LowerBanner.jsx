import "../Css/LowerBanner.css";
function LowerBanner({Title ,Description,Button}){
    return(
        <div className="LowerBanner">
            <h1>{Title}</h1>
            <p>{Description}</p>
            <button>{Button}</button>
        </div>
    )
}
export default LowerBanner;