import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <div className={styles.brand}>
          <img
            className={styles.logo}
            src={`${import.meta.env.BASE_URL}LogoB.svg`}
            alt="Signature"
          />
        </div>
        <div className={styles.title}>
          <h3 className={styles.titleSub}>LETS CREATE SOMETHING TOGETHER!</h3>
          <h1 className={styles.titleHeading}>FIND ME HERE:</h1>
        </div>
      </div>

      <div>
        <nav className={styles.links} aria-label="Contact links">
          <a href="mailto:danielbilkvist@gmail.com">
            <img
              src={`${import.meta.env.BASE_URL}GMail.svg`}
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
              src={`${import.meta.env.BASE_URL}LinkedIn.svg`}
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
              src={`${import.meta.env.BASE_URL}GitHub.svg`}
              alt="GitHub"
              aria-label="GitHub"
            />
          </a>
        </nav>
        <span className={styles.copyright}>
          &copy; 2026 Daniel Bentzen-Bilkvist
        </span>
      </div>
    </footer>
  );
}

export default Footer;
