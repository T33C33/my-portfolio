import React from 'react';
import './intro.css';
import bg from '../../Assets/TeeCee3.png';
// import btnImg from '../../Assets/icons8-hire-me-50 (2).png';
import { SlBriefcase } from 'react-icons/sl';
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
          I work with businesses to improve their online presence and drive more
          traffic to their websites. With a strong background in both SEO and
          software engineering, I bring a unique blend of technical expertise
          and marketing savvy to every project.
        </p>
        <Link>
          <button className="btn">
            {/* <img src={SlBriefcase} alt="Hire" className="btnImg" /> */}
            <SlBriefcase className="btnImg" />
            Hire Me.
          </button>
        </Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Intro;
