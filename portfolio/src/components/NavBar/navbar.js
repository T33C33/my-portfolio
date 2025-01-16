import React from 'react';
import './navbar.css';
import logo from '../../Assets/Logo 1.png';
// import contactImg from '../../Assets/icons8-contact-64.png';
import { MdContactEmergency } from 'react-icons/md';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Services</Link>
        <Link className="desktopMenuListItem">SEOlympus</Link>
      </div>
      <button className="desktopMenuBtn">
        {/* <img src={contactImg} alt="" className="desktopMenuImg" /> */}
        <MdContactEmergency className="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
