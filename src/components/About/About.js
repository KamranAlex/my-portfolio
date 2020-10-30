import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section className='resume-section' id='about'>
      <div className='resume-section-content'>
        <h2 className='mb-1' style={{ fontFamily: "Ubuntu" }}>
          Kamruzzaman
          <span className='text-primary'> Kamran</span>
        </h2>
        <h4 className='mb-2'>
          <span style={{ textTransform: "capitalize " }}>
            MERN Stack Developer
          </span>
        </h4>
        <div className='subheading mb-5'>
          <p className='mb-1'>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            &nbsp; Surovi 51/B, Rajpara, Sylhet-3100{" "}
          </p>{" "}
          <a
            href='mailto:officialkamruzzaman@gmail.com'
            style={{ textTransform: "lowercase", fontStyle: "italic" }}
          >
            officialkamruzzaman@gmail.com
          </a>
        </div>
        <p className='lead mb-3'>
          I am a full-stack web developer who specializes in JavaScript
          Technologies across the stack. With my strong problem-solving,
          designing, and developing skills, I have build multiple full-stack web
          application using back-end APIs. <br />I am very enthusiastic and
          curious about the latest technologies, and I always try to learn
          something new.
        </p>
        <div className='resume-btn mb-5'>
          <a href='https://drive.google.com/file/d/1nXgnxNtSnd753NF53ukwuEw63yaM6g6j/view?usp=sharing'>
            Get My Resume
          </a>
        </div>
        <div className='social-icons mb-1'>
          <a
            className='social-icon icon-linkedin'
            href='https://www.linkedin.com/in/kamruzzaman-kamran-151b5a114'
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            className='social-icon icon-github'
            href='https://github.com/KamranAlex'
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className='social-icon icon-facebook'
            href='https://www.facebook.com/kamruzzaman.kamran.3532/'
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
