import { Link } from "react-router";
import projects from "../data/projects";
import "./ProjectsPage.css";

function ProjectsPage() {
  return (
    <div className="page projects-page">
      <section className="section-intro">
        <p className="eyebrow">Projects</p>
        <h1>What I Create</h1>
        {/* <p>Discover my projects, workflows and small experiments</p> */}
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
                <p className="eyebrow">{project.year}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className="tag-list">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default ProjectsPage;
