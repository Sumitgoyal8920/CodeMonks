import HeroSection from "../components/HeroSection";
import HomeCard from "../components/HomeCard";
import HomeCardData from "../data/HomeCardData.json";
import HomeAbout from "../components/HomeAbout";
import HomeSlider from "../components/HomeSlider";
import { FiSmartphone, FiMonitor, FiGrid, FiCloud } from "react-icons/fi";

const IconMap = {
  Mobile: <FiSmartphone />,
  Web: <FiMonitor />,
  Crm: <FiGrid />,
  Cloud: <FiCloud />
};

function Home() {
    return (
        <>
            <HeroSection />

            <div className="container">
                {HomeCardData.map((card, index) => (
                    <HomeCard
                        key={index}
                        Icon={IconMap[card.Icon]}
                        title={card.title}
                        description={card.description}
                        items={card.items}
                        type ={card.Icon}
                    />
                ))}
            </div>

            <HomeAbout />
            <HomeSlider />
        </>
    )
}
export default Home;