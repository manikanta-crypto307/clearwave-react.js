import "./PlatformFeatures.css";
import { FaBolt, FaChartLine, FaShieldAlt, FaUsers } from "react-icons/fa";

function PlatformFeatures() {
  return (
    <section className="platform">

      <p className="platform-tag">PLATFORM FEATURES</p>

      <h2>Everything your team needs</h2>

      <p className="platform-text">
        Powerful tools designed to simplify collaboration,
        improve productivity, and help your team achieve more.
      </p>

      <div className="platform-cards">

        <div className="platform-card">
          <FaBolt className="platform-icon" />
          <h3>Fast Performance</h3>
          <p>
            Complete your work faster with an optimized workflow.
          </p>
        </div>

        <div className="platform-card">
          <FaChartLine className="platform-icon" />
          <h3>Analytics</h3>
          <p>
            Monitor progress using real-time reports and insights.
          </p>
        </div>

        <div className="platform-card">
          <FaShieldAlt className="platform-icon" />
          <h3>Security</h3>
          <p>
            Enterprise-grade security keeps your data protected.
          </p>
        </div>

        <div className="platform-card">
          <FaUsers className="platform-icon" />
          <h3>Team Work</h3>
          <p>
            Collaborate with your team from anywhere.
          </p>
        </div>

      </div>

    </section>
  );
}

export default PlatformFeatures;