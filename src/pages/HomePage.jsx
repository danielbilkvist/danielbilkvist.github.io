import { Link } from "react-router";
import projects from "../data/projects";
import styles from "./HomePage.module.css";

function HomePage() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className={`page hero ${styles.homePage}`}>
      <section className={styles.heroFull}>
        <section className={styles.heroTop}>
          <section className={styles.heroLeft}>
            <h2 className={styles.heroName}>Daniel Bentzen-Bilkvist</h2>
            <div className={styles.create}>
              <img
                src={`${import.meta.env.BASE_URL}CreateHero.svg`}
                alt="Create"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </section>
          <section className={styles.heroRight}>
            <Link to="/projects" className={styles.more}>
              <img
                src={`${import.meta.env.BASE_URL}MoreHero.svg`}
                alt="More"
                loading="eager"
                fetchPriority="high"
              />
            </Link>
          </section>
        </section>
        <section className={styles.heroBot}>
          <img
            src={`${import.meta.env.BASE_URL}Profession.svg`}
            alt="UI/UX Design and Frontend Development"
            loading="eager"
            fetchPriority="high"
          />
        </section>
      </section>
    </div>
  );
}

export default HomePage;
