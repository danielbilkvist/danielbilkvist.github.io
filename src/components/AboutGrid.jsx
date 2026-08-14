import { useState } from "react";
import about from "../data/about";
import "./AboutGrid.css";

function AboutGrid() {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="about-grid">
      {about.map((item) => (
        <div
          className={`about-card ${activeId === item.id ? "active" : ""}`}
          key={item.id}
          onClick={() => handleClick(item.id)}
        >
          <img src={item.image} alt={item.title} />

          <div className="about-overlay">
            <h2 className="about-title">{item.title}</h2>
            <p className="about-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutGrid;
