import "../Css/ServiceCard.css";
import "../Css/LowerBannerServices.css";

import ServiceCard from "../components/ServiceCard";
import ServiceCardData from "../data/ServiceCardData.json";
import TopBanner from "../components/TopBanner";


function Services(){
    return(
        <>
<TopBanner Title="Our Services" Description={"At Code Monks, we offer smart, scalable, and future-ready technology solutions tailored to your business goals. Here’s a closer look at what we do"}/>

<div className="ServiceContainer">
                {ServiceCardData.map((card, index) => (
                    <ServiceCard
                        key={index}
                        Image={card.Image}
                        Title={card.Title}
                        Description={card.Description}
                        Paragraphs={card.Paragraphs}
                    />
                ))}
            </div>

            <div className="LowerBannerServices">
            <h1>Why People Choose Our Code-Monks IT Solutions?</h1>
            <p>At Code Monks, we don’t just deliver projects — we craft digital solutions that drive measurable business success. With a perfect blend of technical expertise,creativity, and client-focused service, we help brands grow, innovate, and stay ahead in the digital era.</p>
            <button>Got an idea? Let make it happen</button>
        </div>
</>
    )
}

 export default Services ;