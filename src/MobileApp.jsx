import "./MobileApp.css";

import phone1 from "./assets/tm-622-screen-01.jpg";
import phone2 from "./assets/tm-622-screen-02.jpg";
import phone3 from "./assets/tm-622-screen-03.jpg";
import phone4 from "./assets/tm-622-screen-04.jpg";
import phone5 from "./assets/tm-622-screen-05.jpg";
function MobileApp() {
  return (
    <section className="mobile">

      <span className="tag">
        MOBILE APP
      </span>

      <h2>
        Your workspace,
        <br />
        <span>in your pocket</span>
      </h2>

      <p>
        The Clearwave mobile app brings every dashboard,
        task and notification beautifully adapted for
        every screen.
      </p>

      <div className="slider">
        <span></span>
        <span className="active"></span>
        <span></span>
      </div>

      <div className="phones">

  <img src={phone1} alt="Phone 1" className="phone-img" />

  <img src={phone2} alt="Phone 2" className="phone-img" />

  <img src={phone3} alt="Phone 3" className="phone-img" />

  <img src={phone4} alt="Phone 4" className="phone-img" />
  <img src={phone5} alt="Phone 5" className="phone-img" />

</div>

    </section>
  );
}

export default MobileApp;