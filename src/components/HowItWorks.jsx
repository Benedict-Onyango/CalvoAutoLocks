import "./HowItWorks.css";

export function HowItWorks() {
  return (
    <>
      <section id="emergency_banner">
        <div className="left_side">
          <div className="big_text">LOCKED OUT RIGHT NOW?</div>
          <div className="small_text">
            Call us — we'll be there as soon as possible, guaranteed.
          </div>
        </div>
        <div className="right_side">
          <a href="tel:+254712345678">0712 345 678</a>
        </div>
      </section>

      <section id="how-it-works">
        <div className="introduction">
          <h5>THE PROCESS</h5>
          <h1>HOW IT WORKS</h1>
          <p>Four steps from your call to getting back on the road.</p>
        </div>
        <div className="steps">
          <div className="steps_tags">
            <p className="numbering">01</p>
            <h4 className="sub-heading">CALL OR BOOK</h4>
            <p>
              Call us directly or fill in the booking form. Tell us your
              location, car make, and the problem.
            </p>
          </div>
          <div className="steps_tags">
            <p className="numbering">02</p>
            <h4 className="sub-heading">WE COME TO YOU</h4>
            <p>
              Our technician heads to your exact location. No towing. No
              dealership wait. We work on-site.
            </p>
          </div>
          <div className="steps_tags">
            <p className="numbering">03</p>
            <h4 className="sub-heading">PROBLEM SOLVED</h4>
            <p>
              We resolve the issue and get you moving again. Payment is
              collected on the spot — card or cash.
            </p>
          </div>
          <div className="steps_tags">
            <p className="numbering">04</p>
            <h4 className="sub-heading">ALL CARS COVERED</h4>
            <p>
              Toyota, Subaru, Nissan, Mercedes, BMW and more — any make, any
              model, any year.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
