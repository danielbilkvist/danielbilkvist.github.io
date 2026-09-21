import { useState } from "react";
import { Link } from "react-router";
import projects from "../data/projects";
import styles from "./ProjectsPage.module.css";

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
    <div className="page">
      <section className={styles.intro}>
        <p className="eyebrow">Projects</p>
        <h1>What I Create</h1>
        {/* <p>Discover my projects, workflows and small experiments</p> */}

        <div className={styles.filters}>
          {categories.map((category) => (
            <button
            className={selectedCategory === category ? styles.active : ""}
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            >
            {category}
          </button>
        ))}
      </div>
      </section>

      <section className={styles.grid} aria-label="Projektliste">
        {filteredProjects.map((project) => (
          <Link
            to={`/projects/${project.slug}`}
            className={styles.card}
            key={project.slug}
          >
            <img src={project.thumbnail} alt={`Preview af ${project.title}`} />
            <div className={styles.cardContent}>
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
