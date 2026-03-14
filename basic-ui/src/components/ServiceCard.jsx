export default function ServiceCard({img ,heading1,paragraph1,heading2,p1,p2,p3 }){
    return(
        <div className="Servicecard">
            <div >
                <img className="image" src={img}/>
                <h1>{heading1}</h1>
                <p>{paragraph1}</p>
            </div>
            <div className="text">
                <h1>{heading2}</h1>
                <p>{p1}</p>
                <p>{p2}</p>
                <p>{p3}</p>
                
            </div>
        </div>
    )
}