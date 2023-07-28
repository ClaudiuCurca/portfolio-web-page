import React from "react";
import { Link } from "react-scroll";

type Props = {
  currentSection: string;
};

const Navbar = ({ currentSection }: Props) => {
  return (
    <nav className="navbar">
      <div className="navbar__links">
        <Link
          to="about"
          className={currentSection === "about" ? "active" : ""}
          smooth={true}
          duration={100}
        >
          About
        </Link>
        <Link
          to="projects"
          className={currentSection === "projects" ? "active" : ""}
          smooth={true}
          duration={100}
        >
          Projects
        </Link>
        <Link
          to="contact"
          className={currentSection === "contact" ? "active" : ""}
          smooth={true}
          duration={100}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
