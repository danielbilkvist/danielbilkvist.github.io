import AboutGrid from "../components/AboutGrid";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="page">
      <div className="profile">
        <p className="profile-info">
          <p className="eyebrow">About me</p>
          <h1>Who am i?</h1>
          <p className="intro">
            {/* My name is Daniel Bentzen-Bilkvist, and I am a 23 year old designer and developer from Denmark. I have a passion for creating digital products that are both visually appealing and user-friendly. My goal is to create more than I consume, and I strive to make a positive impact through my work. */}
            I am a danish UI/UX designer based in Aarhus. Currently i am studying at EAAA to become a Multimedia Designer by 2027. I love the concept of bringing my ideas to life, wether its through graphic design, coding a website, or creating fictional stories.
          </p>

          <p className="outro">
            Underneath i have carefully picked pictures from my life, which i
            think are capable of representing who i was, am and will be.
          </p>
          <div className="contact-info">
              <a className="mail" href="mailto:danielbilkvist@gmail.com">danielbilkvist@gmail.com</a>
            <a className="phone" href="tel:+4560694929">+45 60694929</a>
          </div>
        </p>
        <img
          className="profile-image"
          src={`${import.meta.env.BASE_URL}Amsterdam.png`}
          alt="Me"
        />
      </div>

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
