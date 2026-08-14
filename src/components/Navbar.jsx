import { NavLink } from "react-router";
import "./Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      {/* <NavLink className="brand" to="/">
        <img src={`${import.meta.env.BASE_URL}public/logo.svg`} alt="Hero" />
      </NavLink> */}

      <nav className="site-nav" aria-label="Primær navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/projects">Creations</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
