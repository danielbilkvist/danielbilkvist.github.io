import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img
          className="brand-footer"
          src={`${import.meta.env.BASE_URL}public/LogoBlockWhite.svg`}
          alt="Signature"
        />

        <span className="footer-copyright">© 2026 Daniel Bentzen-Bilkvist</span>
      </div>

      {/* <div className="footer-title">
        <h3>Like what you see?</h3>
        <h2>et's create something together</h2>
      </div> */}

      <nav className="footer-links" aria-label="Contact links">
        <a href="mailto:danielbilkvist@gmail.com">
          <img
            src={`${import.meta.env.BASE_URL}public/GMail.svg`}
            alt="Email"
            aria-label="Email"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/daniel-bentzen-bilkvist-79b731267/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${import.meta.env.BASE_URL}public/LinkedIn.svg`}
            alt="LinkedIn"
            aria-label="LinkedIn"
          />
        </a>

        <a
          href="https://github.com/danielbilkvist"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${import.meta.env.BASE_URL}public/GitHub.svg`}
            alt="GitHub"
            aria-label="GitHub"
          />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
