import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section class='resume-section' id='contact'>
      <div class='resume-section-content'>
        <h2 class='mb-3'>Contact</h2>

        <div class='contact'>
          <div class='max-width'>
            <div class='row contact-content'>
              <div class='col-md-6 column left'>
                <div class='text text-primary'>Get in Touch</div>
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
                <div class='icons'>
                  <div class='row'>
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className='text-primary'
                    />
                    <div class='info'>
                      <div class='head text-primary'>Address</div>
                      <div class='sub-title'>
                        Surovi 51/B, Sylhet, Bangladesh.
                      </div>
                    </div>
                  </div>
                  <div class='row'>
                    <FontAwesomeIcon icon={faPhone} className='text-primary' />
                    <div class='info'>
                      <div class='head text-primary'>Phone</div>
                      <div class='sub-title'>+880 1762943903</div>
                    </div>
                  </div>
                  <div class='row'>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className='text-primary'
                    />
                    <div class='info'>
                      <div class='head text-primary'>Email</div>
                      <div class='sub-title'>officialkamruzzaman@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* //contact form */}
              <div class='col-md-6 column right'>
                <div class='text text-primary'>Message me</div>
                <form action='#'>
                  <div class='fields'>
                    <div class='field name'>
                      <input type='text' placeholder='Name' required />
                    </div>
                    <div class='field email'>
                      <input type='email' placeholder='Email' required />
                    </div>
                  </div>
                  <div class='field'>
                    <input type='text' placeholder='Subject' required />
                  </div>
                  <div class='field textarea'>
                    <textarea
                      cols='30'
                      rows='10'
                      placeholder='Message..'
                      required
                    ></textarea>
                  </div>
                  <div class='button'>
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
