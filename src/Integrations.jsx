import "./Integrations.css";

function Integrations() {

  const integrations = [
    "Slack",
    "Google Sheets",
    "Google Drive",
    "Zapier",
    "Stripe",
    "GitHub",
    "Notion",
    "Mailchimp",
    "HubSpot",
    "Airtable",
    "Intercom",
    "Salesforce",
    "Figma",
    "Linear",
    "Jira",
    "Webflow",
  ];

  return (
    <section className="integrations">

      <span className="integration-tag">
        ● INTEGRATIONS
      </span>

      <h2>
        Connects with your
        <br />
        <span>existing stack</span>
      </h2>

      <p>
        Clearwave works with the apps your team already uses,
        so you can get started quickly.
      </p>

      <div className="integration-list">
        {integrations.map((item, index) => (
          <div className="integration-pill" key={index}>
            {item}
          </div>
        ))}
      </div>

    </section>
  );
}

export default Integrations;