
export default function ServiceCard({Image,Title,Description,Paragraphs }){
    return(
        <div className="ServiceCard">
            <div >
                <img className="image" src={Image}/>
                <h1>{Title}</h1>
                <p>{Description}</p>
            </div>
            <div className="text">
                <h1>{Title}</h1>
                 {Paragraphs.map((Paragraphs, index) => (
          <p key={index}>{Paragraphs}</p>
        ))}
                
            </div>
        </div>
    )
}