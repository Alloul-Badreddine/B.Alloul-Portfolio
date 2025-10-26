import React from "react";
import { MdOutlineEmail, MdLocationCity, MdPhone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>I do receive your messages and will respond as soon as possible:</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-children">
              <MdOutlineEmail className="contact__option-icon" />
              <MdPhone className="contact__option-icon" />
              <FaLinkedin className="contact__option-icon" />
              <FaGithub className="contact__option-icon" />
              <MdLocationCity className="contact__option-icon" />
            </div>
            <div className="contact__option-children">
              
              <h5>be.alloul@gmail.com</h5>
              <a href="tel:+212663556696">
              <h5>+212663556696</h5> {/* Replace with your phone number */}
              </a>
              <a
                href="https://www.linkedin.com/in/badreddine-alloul/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Alloul-Badreddine"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              
              <h5>Ifrane, Morocco</h5>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
