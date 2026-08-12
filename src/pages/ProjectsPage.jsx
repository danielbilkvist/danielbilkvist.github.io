import { Link } from "react-router";
import projects from "../data/projects";

function ProjectsPage() {
  return (
    <div className="page">
      <section className="section intro">
        <p className="eyebrow">Projekter</p>
        <h1>Mine projekter</h1>
        <p>
          Udskift eksemplerne med dine egne projekter. Brug korte beskrivelser,
          tydelige billeder og links til live versioner eller GitHub repos.
        </p>
      </section>

      <section className="project-grid" aria-label="Projektliste">
        {projects.map((project) => (
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
      </section>
    </div>
  );
}

export default ProjectsPage;
