import styles from "./ProcessSteps.module.css";

function ProcessSteps({ project }) {
  const processSteps = Object.keys(project)
    .filter((key) => /^process\d+$/.test(key) && project[key])
    .sort((first, second) => {
      return (
        Number(first.replace("process", "")) -
        Number(second.replace("process", ""))
      );
    })
    .map((key) => {
      const number = key.replace("process", "");

      return {
        number,
        title: project[`title${number}`],
        text: project[key],
        image: project[`image${number}`],
      };
    });

  return (
    <section className={styles.list} aria-label="Project process">
      {processSteps.map((step) => (
        <article className={styles.step} key={step.number}>
          <div className={styles.stepHeading}>
            <p className="eyebrow">Step {step.number}</p>
            {step.title && <h2>{step.title}</h2>}
          </div>

          <div className={styles.stepRow}>
            {step.image && (
              <div className={styles.imageLink}>
                <img
                  className={styles.image}
                  src={step.image}
                  alt={`${project.title} process ${step.number}`}
                  loading="lazy"
                />
              </div>
            )}

            <div className={styles.stepContent}>
              <p>{step.text}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default ProcessSteps;
