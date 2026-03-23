import "../Css/AboutPost.css";
function AboutPost({Image,Heading,Paragraph,Founder}){
const isHeading =true;
const isFounder =true;
        return(
            <div className="Post">
                <div className="left">
                    {isFounder?<h3>{Founder}</h3>:""}
                    <img src ={Image}/>
                </div>
                <div className="right">
                       {isHeading?<h2>{Heading}</h2>:""}
                    
                    {Paragraph.map((Paragraph, index) => (
                        <p  >{Paragraph}</p>
        ))}
                </div>
            </div>
        )}
         export default AboutPost