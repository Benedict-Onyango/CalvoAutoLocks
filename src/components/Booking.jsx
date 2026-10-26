import "./Booking.css";

export function Booking() {
  return (
    <>
      <section id="book">
        <div className="left_side">
          <p className="section-label">Schedule a visit</p>
          <h2 className="section-title">
            BOOK A<br />
            TECHNICIAN
          </h2>
          <p className="section-sub">
            Fill in the details and we'll confirm your appointment within 15
            minutes.
          </p>

          <ul className="trust_list">
            <li>
              <span className="trust_check"></span>Licensed & insured
              technicians
            </li>
            <li>
              <span className="trust_check"></span>No fix, no fee guarantee
            </li>
            <li>
              <span className="trust_check"></span>Upfront pricing, no hidden
              charges
            </li>
            <li>
              <span className="trust_check"></span>All makes and models covered
            </li>
            <li>
              <span className="trust_check"></span>Available nights and weekends
            </li>
          </ul>
        </div>
        <div className="right_side">
          <form action="">
            <div className="form-group">
              <label for="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="form-control"
              />
            </div>
            <div className="row g-3 form-group">
              <div className="col">
                <label for="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="07XX XXX XXX"
                  className="form-control"
                />
              </div>
              <div className="col">
                <label for="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="john@email.com"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label for="service" className="form-label">
                Service
              </label>
              <select
                name="service"
                id="service"
                className="form-control"
                required
              >
                <option value="">Select a service…</option>
                <option>Car Lockout</option>
                <option>Key Duplication</option>
                <option>Ignition Repair</option>
                <option>Transponder Key</option>
                <option>Emergency Call-Out</option>
                <option>Lock Replacement</option>
              </select>
            </div>
            <div className="row g-3 form-group">
              <div className="col">
                <label for="make" className="form-label">
                  Car Make
                </label>
                <input
                  type="text"
                  id="make"
                  placeholder="Porsche"
                  className="form-control"
                />
              </div>
              <div className="col">
                <label for="model" className="form-label">
                  Car Model
                </label>
                <input
                  type="text"
                  id="model"
                  placeholder="Cayenne"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label for="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Westlands, Nairobi"
                className="form-control"
              />
            </div>
            <div className="row g-3 form-group">
              <div className="col">
                <label for="date" className="form-label">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="form-control"
                />
              </div>
              <div className="col">
                <label for="time" className="form-label">
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label for="notes" className="form-label">
                Additional Notes
              </label>
              <textarea
                name="notes"
                id="notes"
                placeholder="Any extra details about the issue..."
                className="form-control"
                style={{ minHeight: "75px" }}
              ></textarea>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn"
                style={{ width: "100%", background: "#c8922a" }}
              >
                BOOK APPOINTMENT
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
