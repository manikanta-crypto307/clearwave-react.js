import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-logo">

          <h2>clearwave</h2>

          <p>
            Organize projects, collaborate with your team,
            and achieve more every day.
          </p>

        </div>

        <div className="footer-links">

          <h3>Company</h3>

          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>

        </div>

        <div className="footer-links">

          <h3>Resources</h3>

          <a href="#">Blog</a>
          <a href="#">Help Center</a>
          <a href="#">Support</a>
          <a href="#">Privacy Policy</a>

        </div>

        <div className="footer-social">

          <h3>Follow Us</h3>

          <div className="icons">

            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />

          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © 2026 Clearwave. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;