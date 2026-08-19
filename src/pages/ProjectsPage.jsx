import { useState } from "react";
import { Link } from "react-router";
import projects from "../data/projects";
import "./ProjectsPage.css";

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(projects.flatMap((project) => project.category)),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.category.includes(selectedCategory)
        );

  return (
    <div className="page projects-page">
      <section className="section-intro">
        <p className="eyebrow">Projects</p>
        <h1>What I Create</h1>
        {/* <p>Discover my projects, workflows and small experiments</p> */}

        <div className="project-filter">
          {categories.map((category) => (
            <button
            className={selectedCategory === category ? "active" : ""}
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            >
            {category}
          </button>
        ))}
      </div>
      </section>

      <section className="project-grid" aria-label="Projektliste">
        {filteredProjects.map((project) => (
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
