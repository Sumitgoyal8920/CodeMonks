import "../Css/HomeCard.css";
function HomeCard({  title, description, items,Icon ,type}) {
  return (
    <div className="HomeCard">
  <div className={`icon ${type}`}>
        {Icon}
      </div>
      
      <h3 className="cardHeading">{title}</h3>
      <p className="desc">{description}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomeCard;