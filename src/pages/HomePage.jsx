import { Link } from "react-router";
import projects from "../data/projects";
import styles from "./HomePage.module.css";

function HomePage() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className={`page ${styles.homePage}`}>
      <section className={styles.heroFull}>
        <section className={styles.heroSection}>
          <p className="eyebrow">Daniel Bentzen-Bilkvist</p>
          <h1>Create more than you consume</h1>
          <div className={styles.skills}>
            <img src={`${import.meta.env.BASE_URL}Figma.svg`} alt="Figma" />
            <img src={`${import.meta.env.BASE_URL}React.svg`} alt="React" />
            <img src={`${import.meta.env.BASE_URL}Adobe.svg`} alt="Adobe" />
          </div>
          {/* <p className="hero-text">UI/UX Design | React Coding | Figma Prototyping</p> */}
          {/* <p className="hero-text">UI/UX Design | Social Media Marketing</p>
          <p className="hero-text">Figma | Adobe | React | HTML, CSS, JavaScript</p> */}
          <div className={styles.actions}>
            <Link className="button" to="/projects">
              View Creations
            </Link>
            {/* <Link className="button secondary" to="/contact">
              Talk to me
            </Link> */}
          </div>
        </section>
        <div className={styles.heroImage}>
          <img src={`${import.meta.env.BASE_URL}Daniel.png`} alt="Hero" />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className="eyebrow">You might also like:</p>
          <h2>Featured Creations</h2>
        </div>

        <div className={styles.projectGrid}>
          {featuredProjects.map((project) => (
            <Link
              to={`/projects/${project.slug}`}
              className={styles.projectCard}
              key={project.slug}
            >
              <img src={project.thumbnail} alt={`Preview af ${project.title}`} />
              <div className={styles.projectCardContent}>
                <div>
                  <p className="eyebrow">{project.year}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
                <div>
                  <ul className="tag-list">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
