import React from 'react';
import './skills.css';
import CntWrtng from '../../Assets/icons8-technical-writing-68.png';
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
      <div className="skillBars">
        <div className="skillBar">
          <img
            src={CntWrtng}
            alt="Content & Technical Writing"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Content/Technical Writing</h2>
            <p>
              I craft clear, concise, and engaging content that resonates with
              the target audience. My technical writing ensures complex
              information is easily understood.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="Web Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>
              I design and develop responsive, user-friendly websites that
              provide an optimal user experience across all devices. My designs
              are not only visually appealing but also functional and
              accessible.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={SEO}
            alt="Search Engine Optimization"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Search Engine Optimization(SEO)</h2>
            <p>
              I optimize websites to improve their search engine rankings and
              increase organic traffic. My SEO strategies are data-driven and
              focused on delivering results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
