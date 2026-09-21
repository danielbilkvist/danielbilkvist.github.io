import "./ProcessSteps.css";

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
        text: project[key],
        image: project[`image${number}`],
      };
    });

  return (
    <section className="process-list" aria-label="Project process">
      {processSteps.map((step) => (
        <article className="process-step" key={step.number}>
          {step.image && (
            <div className="process-image-link">
              <img
                className="process-image"
                src={step.image}
                alt={`${project.title} process ${step.number}`}
                loading="lazy"
              />
            </div>
          )}

          <div className="process-step-content">
            <p className="eyebrow">Step {step.number}</p>
            <p>{step.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default ProcessSteps;
