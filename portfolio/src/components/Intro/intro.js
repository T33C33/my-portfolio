import React from 'react';
import './intro.css';
import bg from '../../Assets/Me2-removebg-preview.png';
import btnImg from '../../Assets/icons8-contact-64.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm <span className="introName">Tikuochi</span>
          <br />
          SEO Specialist & Software Engineer
        </span>
        <p className="introPara">
          I am a software engineer and SEO specialist with experience in
          developing and optimizing websites to improve their search engine
          rankings.
        </p>
        <Link>
          <button className="btn">
            <img src="" alt="" />
            Hire Me.
          </button>
        </Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Intro;
