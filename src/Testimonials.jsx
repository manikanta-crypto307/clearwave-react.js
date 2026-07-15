import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <p className="testimonial-tag">TESTIMONIALS</p>

      <h2>Loved by teams worldwide</h2>

      <p className="testimonial-text">
        Thousands of businesses use Clearwave to manage
        projects and improve collaboration.
      </p>

      <div className="testimonial-container">

        <div className="testimonial-card">
          <p className="review">
            "Clearwave has completely transformed how our
            team works together. Everything is organized
            and easy to manage."
          </p>

          <h4>John Smith</h4>
          <span>Project Manager</span>
        </div>

        <div className="testimonial-card">
          <p className="review">
            "The interface is simple, fast and beautiful.
            Our productivity has improved significantly."
          </p>

          <h4>Emily Johnson</h4>
          <span>Product Designer</span>
        </div>

        <div className="testimonial-card">
          <p className="review">
            "Amazing experience. Collaboration has never
            been easier for our remote team."
          </p>

          <h4>David Brown</h4>
          <span>Software Engineer</span>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;