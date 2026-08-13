import AboutGrid from "../components/AboutGrid";

function AboutPage() {
  return (
    <div className="page">
      <p className="eyebrow">About me</p>
      <h1>Who am I?</h1>
      {/* <p className="lead">
        Underneath i have carefully picked pictures from my life, which i think are capable of representing who i was, am and will be.
      </p> */}

      <section className="info-list" aria-label="About me">
        <AboutGrid />
        {/* <div>
          <h2>Jeg arbejder med</h2>
          <p>
            React, HTML, CSS, JavaScript, designproces og digitale produkter.
          </p>
        </div>
        <div>
          <h2>Jeg er nysgerrig på</h2>
          <p>
            Brugeroplevelser, visuel identitet og hvordan kode bliver til noget
            brugbart.
          </p>
        </div> */}
      </section>
    </div>
  );
}

export default AboutPage;
