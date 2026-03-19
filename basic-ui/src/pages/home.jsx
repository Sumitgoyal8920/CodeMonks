import HeroSection from "../components/HeroSection";
import HomeCard from "../components/HomeCard";
import HomeCardData from "../data/HomeCardData.json";
import HomeAbout from "../components/HomeAbout";
import HomeSlider from "../components/HomeSlider";

function Home() {
    return (
        <>
            <HeroSection />

            <div className="container">
                {HomeCardData.map((card, index) => (
                    <HomeCard
                        key={index}
                        title={card.title}
                        description={card.description}
                        items={card.items}
                    />
                ))}
            </div>

            <HomeAbout />
            <HomeSlider />
        </>
    )
}
export default Home;