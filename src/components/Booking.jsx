import axios from "axios";
import "./Booking.css";
import { useEffect, useState } from "react";

export function Booking() {
  const [services, setServices] = useState([]);
  const maxLen = Math.max(...services.map(s => s.name.length));


  useEffect(() => {
    axios.get("/api/services/").then((response) => {
      setServices(response.data);
    });
  }, []);
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
              <label htmlFor="name" className="form-label">
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
                <label htmlFor="phone" className="form-label">
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
                <label htmlFor="email" className="form-label">
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
              <label htmlFor="service" className="form-label">
                Service
              </label>
              <select
                name="service"
                id="service"
                className="form-control"
                required
              >
                <option value="">Select a service…</option>
                {services.map((service) => {
                  return (
                    <option key={service.id} value={service.id}>
                      <option key={service.id} value={service.id}>
                        {`${service.name.padEnd(maxLen + 50, "\u00A0")}KES: ${service.price}`}
                      </option>
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="row g-3 form-group">
              <div className="col">
                <label htmlFor="make" className="form-label">
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
                <label htmlFor="model" className="form-label">
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
              <label htmlFor="location" className="form-label">
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
                <label htmlFor="date" className="form-label">
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
                <label htmlFor="time" className="form-label">
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
              <label htmlFor="notes" className="form-label">
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
