import React, { useRef } from 'react';
import './contact.css';
import SOS from '../../Assets/SOSCreativity.png';
import Battabox from '../../Assets/Battabox.png';
import Naijalist from '../../Assets/Naijalist.png';
import TMLT from '../../Assets/TMLT.png';
import Facebook from '../../Assets/Facebook.png';
import LinkedIn from '../../Assets/LinkedIn.png';
import Whatsapp from '../../Assets/Whatsapp.jpeg';
import Twitter from '../../Assets/Twitter.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_baomgv1', 'template_069ylo7', form.current, {
        publicKey: 'ZQz4DgGXzbCWT4PA2ZI2u',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the pleasure of working with a variety of clients, from
          small businesses to large corporations. Here are some of the companies
          I have collaborated with:
        </p>
        <div className="clientImgs">
          <img src={SOS} alt="" className="clientImg" />
          <img src={Naijalist} alt="" className="clientImg" />
          <img src={Battabox} alt="" className="clientImg" />
          <img src={TMLT} alt="" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          I am always interested in new projects and collaborations. Let's work
          together to create something amazing!
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="text"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={Facebook} alt="Facebook Icon" className="link" />
            <img src={LinkedIn} alt="LinkedIn Icon" className="link" />
            <img src={Twitter} alt="Twitter Icon" className="link" />
            <img src={Whatsapp} alt="Whatsapp Icon" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
