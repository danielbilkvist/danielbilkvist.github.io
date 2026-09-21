import { useState } from "react";
import about from "../data/about";
import styles from "./AboutGrid.module.css";

function AboutGrid() {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className={styles.grid}>
      {about.map((item) => (
        <div
          className={`${styles.card} ${activeId === item.id ? styles.activeCard : ""}`}
          key={item.id}
          onClick={() => handleClick(item.id)}
        >
          <img src={item.image} alt={item.title} loading="lazy"/>

          <div className={styles.overlay}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutGrid;
