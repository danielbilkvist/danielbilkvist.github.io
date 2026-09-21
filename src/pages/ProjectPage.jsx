import { Link, useParams } from "react-router";
import projects from "../data/projects";
import ProcessSteps from "../components/ProcessSteps";
import styles from "./ProjectPage.module.css";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="page narrow">
        <p className="eyebrow">404</p>
        <h1>Projektet blev ikke fundet</h1>
        <p>Det projekt findes ikke i listen endnu.</p>
        <Link className="button" to="/projects">
          Tilbage til projekter
        </Link>
      </div>
    );
  }

  return (
    <article className="page narrow">
      {/* <Link className="back-link" to="/projects">
        Go back
      </Link> */}
      <div className={styles.topContent}>
        <div className="project-title">
          <p className="eyebrow">{project.year}</p>
          <h1>{project.title}</h1>
          <div className="actions">
            {project.links.map((link) => (
              <a
                className="button"
                href={link.href}
                key={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.leadRow}>
        <p className="lead">{project.summary}</p>
        <img
          className={styles.detailImage}
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
        />
      </div>

      <ProcessSteps project={project} />

      {/* <p className="eyebrow">{project.year}</p>
      <p className="lead">{project.description}</p>
      <img className="detail-image" src={project.image1} alt={project.title} loading="lazy" /> */}

      {/* <section className="tag-links">
        <ul className="tag-list">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </section> */}
    </article>
  );
}

export default ProjectPage;
