import React, { useState } from "react";
import "./navbar.css";
import logo from "../../Assets/Logo 1.png";
import { MdContactEmergency } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import menu from "../../Assets/icons8-hamburger-menu-50.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <RouterLink to="/">
        <img src={logo} alt="logo" className="logo" />
      </RouterLink>

      <div className="desktopMenu">
        <ScrollLink
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Services
        </ScrollLink>
        <RouterLink to="/seolympus" className="desktopMenuListItem">
          SEOlympus
        </RouterLink>
      </div>
      <ScrollLink
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className="desktopMenuBtn"
      >
        <MdContactEmergency className="desktopMenuImg" />
        Contact Me
      </ScrollLink>

      {/* mobMenu */}
      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <ScrollLink
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Services
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="contact"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </ScrollLink>
        <RouterLink to="/seolympus" className="ListItem">
          SEOlympus
        </RouterLink>
      </div>
    </nav>
  );
};

export default Navbar;
