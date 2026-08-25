import { Link } from "react-router";
import projects from "../data/projects";
import "./HomePage.css";

function HomePage() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="page home-page">
      <section className="hero-full">
        <section className="hero-section">
          <p className="eyebrow">Daniel Bentzen-Bilkvist</p>
          <h1>Create more than you consume</h1>
          <div className="skills">
            <img src={`${import.meta.env.BASE_URL}Figma.svg`} alt="Figma" />
            <img src={`${import.meta.env.BASE_URL}React.svg`} alt="React" />
            <img src={`${import.meta.env.BASE_URL}Adobe.svg`} alt="Adobe" />
          </div>
          {/* <p className="hero-text">UI/UX Design | React Coding | Figma Prototyping</p> */}
          {/* <p className="hero-text">UI/UX Design | Social Media Marketing</p>
          <p className="hero-text">Figma | Adobe | React | HTML, CSS, JavaScript</p> */}
          <div className="actions">
            <Link className="button" to="/projects">
              View Creations
            </Link>
            {/* <Link className="button secondary" to="/contact">
              Talk to me
            </Link> */}
          </div>
        </section>
        <div className="hero-image">
          <img src={`${import.meta.env.BASE_URL}Daniel.png`} alt="Hero" />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">You might also like:</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <Link
              to={`/projects/${project.slug}`}
              className="project-card"
              key={project.slug}
            >
              <img src={project.image} alt={`Preview af ${project.title}`} />
              <div className="project-card-content">
                <div className="project-card-content-top">
                  <p className="eyebrow">{project.year}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
                <div className="project-card-content-bottom">
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
