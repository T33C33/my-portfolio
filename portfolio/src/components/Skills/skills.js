import React from 'react';
import './skills.css';
import CntWrtng from '../../Assets/Content and Technical Writing.png';
import WebDesign from '../../Assets/Web Development.png';
import SEO from '../../Assets/SEO.png';

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <br />
      <span className="skillDesc">
        I specialize in creating visually appealing, yet functional,
        user-friendly websites. I manage these sites for SEO, boosting their
        performance and traffic. When I am neither coding nor optimizing, I
        write high-ranking blogs and clear technical articles.
      </span>
    </section>
  );
};

export default Skills;
