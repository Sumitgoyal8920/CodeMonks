import "../Css/HomeSlider.css";
import React, { useState, useEffect } from "react";
const data = [
  "Working with Code Monks was a game-changer for our business. Their team not only delivered high-quality solutions on time but also went the extra mile to understand our needs. Truly a partner you can rely on!",

  "The professionalism, attention to detail, and technical expertise of Code Monks exceeded our expectations. They transformed our vision into a flawless product, and the support post-launch has been outstanding.",

  "code Monks brought creativity, skill, and efficiency to the table. The communication was seamless, and their problem-solving approach helped us overcome challenges with ease. Highly recommended!",

  "From day one, Code Monks demonstrated exceptional commitment and technical brilliance. They delivered a robust, scalable solution that perfectly aligned with our goals. A top-tier IT partner!"
];

export default function HomeSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    },4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="HomeSlider">
      <h1>Testimonials</h1>
      <p className="data">{data[index]}</p>

      <div className="dots">
        {data.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={index === i ? "dot active" : "dot"}
          ></span>
        ))}
      </div>
    </div>
  );
}