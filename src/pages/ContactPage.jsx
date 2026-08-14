function ContactPage() {
  return (
    <div className="page narrow">
      <p className="eyebrow">Contact</p>
      <h1>Lets create something together</h1>
      <p className="lead">
        Feel free to reach out via any of my medias! 
      </p>

      <ul className="contact-list">
        <li>
          <a href="mailto:dinmail@example.com">dinmail@example.com</a>
        </li>
        <li>
          <a href="https://github.com/username" rel="noreferrer" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com" rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactPage;
