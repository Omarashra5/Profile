import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer py-5 bg-body-tertiary">
      <div className="container text-center text-md-start">
        <div className="row align-items-center">

          {/* Brand & Description */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="footer-brand fw-bold">Omar Ashraf</h3>
            <p className="footer-text">
              Full Stack Web Developer | React, Laravel, PHP, Bootstrap
            </p>
          </div>
            <div className="ms-3 mt-4">
              <a
                href="/OmarAshraf_Cv.docx"
                download
                className="btn btn-success"
              >
                Download CV
              </a>
            </div>
          {/* Contact Info */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="footer-title">Contact</h5>
            <ul className="list-unstyled footer-contact">
              <li>
                <FaEnvelope className="me-2" /> omarcreat33@gmail.com
              </li>
              <li>
                <FaPhone className="me-2" /> 01012329975
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-4">
            <h5 className="footer-title">Social</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              <a href="https://www.linkedin.com/in/omarashraf22" target="_blank" className="footer-icon linkedin">
                <FaLinkedin />
              </a>
              <a href="https://github.com/omarashra5" target="_blank" className="footer-icon github">
                <FaGithub />
              </a>
            </div>
          </div>

        </div>

        <hr className="my-4" />

        <div className="text-center small">
          &copy; {new Date().getFullYear()} Omar Ashraf. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
