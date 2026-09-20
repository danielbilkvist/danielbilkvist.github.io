import {useEffect, useRef, useState} from "react";
import {Link} from "react-router";
import styles from "./ProjectScroller.module.css";

function ProjectScroller({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isLocked = useRef(false);
  const indexRef = useRef(0);
  const projectCount = projects.length;
  const changeProject = (direction) => {
    if (isLocked.current || projectCount === 0) return;
    isLocked.current = true;
    const nextIndex =
      (indexRef.current + direction + projectCount) % projectCount;

    indexRef.current = nextIndex;
    setActiveIndex(nextIndex);

    setTimeout(() => {
      isLocked.current = false;
    }, 500);
  };

   useEffect(() => {
     const handleWheel = (event) => {
       event.preventDefault();

       if (Math.abs(event.deltaY) < 10) return;

       if (event.deltaY > 0) {
         changeProject(1);
       } else {
         changeProject(-1);
       }
     };

     window.addEventListener("wheel", handleWheel, {
       passive: false,
     });

     return () => {
       window.removeEventListener("wheel", handleWheel);
     };
   }, []);

  const repeatedProjects = [...projects, ...projects, ...projects];

  const middleIndex = projectCount + activeIndex;
  const activeProject = projects[activeIndex];

  return (
    <section className={styles.scroller}>

      {/* LEFT */}
      <div className={styles.infoColumn} key={activeProject.slug}>
        <p className="eyebrow">{activeProject.year}</p>

        <h1>{activeProject.title}</h1>

        <p className={styles.description}>{activeProject.summary}</p>

        <ul className={styles.tags}>
          {activeProject.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      {/* MIDDLE — infinite project list */}
      <div className={styles.navigationColumn}>
        <div className={styles.navigationWindow}>
          <div
            className={styles.projectTrack}
            style={{
              transform: `translateY(-${middleIndex * 120}px)`,
            }}
          >
            {repeatedProjects.map((project, index) => {
              const isActive = index % projectCount === activeIndex;

              return (
                <button
                  type="button"
                  key={`${project.slug}-${index}`}
                  className={`${styles.projectItem} ${
                    isActive ? styles.active : ""
                  }`}
                  onClick={() => {
                    const realIndex = index % projectCount;

                    indexRef.current = realIndex;
                    setActiveIndex(realIndex);
                  }}
                >
                  <img
                    src={project.image}
                    alt=""
                    className={styles.thumbnail}
                  />

                  <span>{project.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className={styles.imageColumn}>
        <div className={styles.imageWrapper} key={activeProject.slug}>
          <Link
            to={`/projects/${activeProject.slug}`}
          >
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className={styles.mainImage}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectScroller;