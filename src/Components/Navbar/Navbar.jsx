import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">AISHWARYA</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link
                spy={true}
                to="Navbar"
                smooth={true}
                activeClass="activeClass"
              >
                Home
              </Link>
            </li>

            <li>
              <Link spy={true} to="services" smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link spy={true} to="works" smooth={true}>
                Research
              </Link>
            </li>

            <li>
              <Link spy={true} to="portfolio" smooth={true}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
