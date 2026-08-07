import { Link } from "react-router";
import projects from "../data/projects";

function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="page">
      <section className="hero-full">
        <section className="hero-section">
          <p className="eyebrow">Daniel Bentzen-Bilkvist</p>
          <h1>Create more than you consume</h1>
          <p className="hero-text">
            UI/UX Design | Figma | Adobe | React | HTML, CSS, JavaScript | Social Media Marketing 
          </p>
          <div className="actions">
            <Link className="button" to="/projects">
              Se projekter
            </Link>
            <Link className="button secondary" to="/contact">
              Kontakt mig
            </Link>
          </div>
        </section>
        <div className="hero-image">
          <img
            src={`${import.meta.env.BASE_URL}public/att.rmKBjZP613naZ-_RswJb4pMvxoZO15LjI9EV3Uj8PYU 2.png`}
            alt="Hero"
          />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Udvalgte projekter</p>
          <h2>Projects</h2>
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
                <p className="eyebrow">{project.year}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                {/* <span className="card-text">Click to view</span> */}
                <ul className="tag-list">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
