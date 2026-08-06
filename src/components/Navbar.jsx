import { NavLink } from "react-router";

function Navbar() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/">
        <img
          src={`${import.meta.env.BASE_URL}public/Union.png`}
          alt="Hero"
        />
      </NavLink>

      <nav className="site-nav" aria-label="Primær navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
