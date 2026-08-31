import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>

      <h2>Devesh Dadi</h2>

      <div aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </div>

    </nav>
  );
}

export default Navbar;