import { NavLink } from "react-router";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
        <img
          className="brand-footer"
          src={`${import.meta.env.BASE_URL}public/logo.svg`}
          alt="Signature"
        />
    </footer>
  );
}

export default Footer;
