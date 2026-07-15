import "./Pricing.css";

function Pricing() {
  return (
    <section className="pricing">

      <p className="pricing-tag">PRICING</p>

      <h2>Simple pricing for every team</h2>

      <p className="pricing-text">
        Choose a plan that fits your business and start building
        better workflows today.
      </p>

      <div className="pricing-cards">

        <div className="price-card">

          <h3>Starter</h3>

          <h1>$19</h1>

          <p>Per Month</p>

          <ul>
            <li>Unlimited Projects</li>
            <li>5 Team Members</li>
            <li>Email Support</li>
            <li>Basic Analytics</li>
          </ul>

          <button>Choose Plan</button>

        </div>

        <div className="price-card active">

          <h3>Professional</h3>

          <h1>$49</h1>

          <p>Per Month</p>

          <ul>
            <li>Unlimited Projects</li>
            <li>Unlimited Members</li>
            <li>Priority Support</li>
            <li>Advanced Analytics</li>
          </ul>

          <button>Choose Plan</button>

        </div>

        <div className="price-card">

          <h3>Enterprise</h3>

          <h1>$99</h1>

          <p>Per Month</p>

          <ul>
            <li>Unlimited Everything</li>
            <li>Dedicated Manager</li>
            <li>24/7 Support</li>
            <li>Enterprise Security</li>
          </ul>

          <button>Choose Plan</button>

        </div>

      </div>

    </section>
  );
}

export default Pricing;