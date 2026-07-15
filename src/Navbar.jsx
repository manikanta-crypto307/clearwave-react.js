import "./Navbar.css";
import { FaArrowRight } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <div className="logo">
          <h2>
            clear<span>wave</span>
          </h2>
        </div>

        <nav>
          <ul className="nav-links">
            <li><a href="#">App</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </nav>

        <div className="nav-buttons">
          <button className="signin-btn">Sign In</button>

          <button className="trial-btn">
            Start Free Trial
            <FaArrowRight />
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;