import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const handleSubmit = (e) => {
    emailjs
      .sendForm(
        "service_l6z60tn",
        "template_roged9v",
        e.target,
        "user_vwv2gACW5zeoReEJrIBrX"
      )
      .then(
        (result) => {
          if (result) {
            alert("Message sent Successfully..");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    e.preventDefault();
  };
  return (
    <section className='resume-section' id='contact'>
      <div className='resume-section-content'>
        <h2 className='mb-3'>Contact</h2>

        <div className='contact'>
          <div className='max-width'>
            <div className='row contact-content'>
              <div className='col-md-6 column left'>
                <div className='text text-primary'>Get in Touch</div>
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
                <div className='icons'>
                  <div className='row'>
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className='text-primary'
                    />
                    <div className='info'>
                      <div className='head text-primary'>Address</div>
                      <div className='sub-title'>
                        Surovi 51/B, Sylhet, Bangladesh.
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <FontAwesomeIcon icon={faPhone} className='text-primary' />
                    <div className='info'>
                      <div className='head text-primary'>Phone</div>
                      <div className='sub-title'>+880 1762943903</div>
                    </div>
                  </div>
                  <div className='row'>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className='text-primary'
                    />
                    <div className='info'>
                      <div className='head text-primary'>Email</div>
                      <div className='sub-title'>
                        officialkamruzzaman@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* //contact form */}
              <div className='col-md-6 column right'>
                <div className='text text-primary'>Message me</div>
                <form onSubmit={handleSubmit}>
                  <div className='fields'>
                    <div className='field name'>
                      <input
                        type='text'
                        name='user_name'
                        placeholder='Name'
                        required
                      />
                    </div>
                    <div className='field email'>
                      <input
                        type='email'
                        name='user_email'
                        placeholder='Email'
                        required
                      />
                    </div>
                  </div>
                  <div className='field'>
                    <input
                      type='text'
                      name='subject'
                      placeholder='Subject'
                      required
                    />
                  </div>
                  <div className='field textarea'>
                    <textarea
                      cols='30'
                      rows='10'
                      name='message'
                      placeholder='Message..'
                      required
                    ></textarea>
                  </div>
                  <div className='button'>
                    <button type='submit'>Send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
