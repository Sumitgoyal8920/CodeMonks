import AboutPost from "../components/AboutPost";
import AboutPostData from "../data/AboutPostData.json";


function AboutUs(){
    return(
        <>
            {AboutPostData.map((item)=>{
               return <AboutPost
                key ={item.id}
                Image ={item.Image}
                Heading ={item.Heading}
                Paragraph={item.Paragraph}
                Founder ={item.Founder}
                
            />
            }
        )}
        </>
    )   
}

 export default AboutUs ;