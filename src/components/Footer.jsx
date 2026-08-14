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

        <span className="footer-copyright">
          © 2026 Daniel Bentzen-Bilkvist.
        </span>
      </div>

      <nav className="footer-links" aria-label="Contact links">
        <img
          src={`${import.meta.env.BASE_URL}public/GMail.svg`}
          alt="Email"
          href="mailto:danielbilkvist@gmail.com"
          aria-label="Email"
        />

        <img
          src={`${import.meta.env.BASE_URL}public/LinkedIn.svg`}
          alt="LinkedIn"
          href="https://www.linkedin.com/in/your-profile"
          aria-label="LinkedIn"
        />

        <img
          src={`${import.meta.env.BASE_URL}public/GitHub.svg`}
          alt="GitHub"
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        />
      </nav>
    </footer>
  );
}

export default Footer;
