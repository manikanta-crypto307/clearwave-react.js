import "./FAQ.css";
import { FaPlus } from "react-icons/fa";

function FAQ() {

  const questions = [
    "Is there a free trial?",
    "How does pricing work for larger teams?",
    "Can I migrate data from another tool?",
    "What does the 99.9% uptime SLA mean?",
    "Is my data secure?"
  ];

  return (
    <section className="faq">

      <div className="faq-left">

        <span className="faq-tag">
          ● FAQ
        </span>

        <h2>
          Questions,
          <br />
          <span>answered</span>
        </h2>

        <p>
          Can't find what you're looking for?
          Reach our team at hello@clearwave.io —
          we reply within 2 hours.
        </p>

        <button className="expand-btn">
          + Expand all
        </button>

      </div>

      <div className="faq-right">

        {questions.map((item, index) => (

          <div className="faq-item" key={index}>

            <h3>{item}</h3>

            <button className="plus-btn">
              <FaPlus />
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQ;