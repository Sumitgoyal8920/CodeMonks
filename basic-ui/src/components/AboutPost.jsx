import "../Css/AboutPost.css";
function AboutPost({Image,Heading,Paragraph,type}){
 
    if(type === "first"){
        return(
            <div className="Post">
                <div className="left">
                    <img src ={Image}/>
                </div>
                <div className="right">
                    <h2>{Heading}</h2>
                    
                    {Paragraph.map((Paragraph, index) => (
                        <p key={index}>{Paragraph}</p>
        ))}
                </div>
            </div>
        )
    }
    if(type === "second"){
        return (
            <div className="Post">
                <div className="left">
                    <h2>{Heading}</h2>
                    <img src ={Image}/>
                </div>
                <div className="right">
                    {Paragraph.map((Paragraph, index) => (
          <p key={index}>{Paragraph}</p>
        ))}
                </div>
            </div>
        )
    }

}
export default AboutPost ;