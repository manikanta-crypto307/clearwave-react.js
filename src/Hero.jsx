import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* LEFT */}

      <div className="hero-left">

        <span className="hero-tag">
          Rated #1 Productivity SaaS of 2024
        </span>

        <h1>
          Your workflow,
          <br />
          <span>finally clear.</span>
        </h1>

        <p>
          Clearwave unifies your team's projects,
          data and communication into one calm,
          focused workspace.
        </p>

        <div className="hero-buttons">

          <button className="start-btn">
            Start Free Trial
          </button>

          <button className="demo-btn">
            See it in action
          </button>

        </div>

      </div>

      {/* RIGHT */}

      <div className="hero-right">

        {/* Floating Card */}

        <div className="floating-card">

          <h2>+34%</h2>

          <p>User Growth</p>

        </div>

        {/* Dashboard */}

        <div className="dashboard">

          <div className="dashboard-title">
            Team Performance
          </div>

          <div className="chart">

            <div className="bar b1"></div>
            <div className="bar b2"></div>
            <div className="bar b3"></div>
            <div className="bar b4"></div>
            <div className="bar b5"></div>

          </div>

          <div className="dashboard-stats">

            <div>
              <h3>94%</h3>
              <span>Success</span>
            </div>

            <div>
              <h3>2.4K</h3>
              <span>Users</span>
            </div>

            <div>
              <h3>18h</h3>
              <span>Saved</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;