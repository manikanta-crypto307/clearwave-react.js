import "./TrustedCompanies.css";

import {
  FaCircle,
  FaRegCircle,
  FaRegSquare,
  FaUser,
  FaBriefcase,
} from "react-icons/fa";

function TrustedCompanies() {
  return (
    <section className="trusted">

      <p className="trusted-title">
        TRUSTED BY FORWARD-THINKING TEAMS AT
      </p>

      <div className="trusted-logos">

        <div className="trusted-item">
          <FaRegSquare />
          <span>Nexaflow</span>
        </div>

        <div className="trusted-item">
          <FaCircle />
          <span>Meridian</span>
        </div>

        <div className="trusted-item">
          <FaRegCircle />
          <span>Vanta Labs</span>
        </div>

        <div className="trusted-item">
          <FaRegSquare />
          <span>Pulsar HQ</span>
        </div>

        <div className="trusted-item">
          <FaUser />
          <span>Arclight</span>
        </div>

        <div className="trusted-item">
          <FaBriefcase />
          <span>Korova Co.</span>
        </div>

      </div>

    </section>
  );
}

export default TrustedCompanies;