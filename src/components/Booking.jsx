import axios from "axios";
import "./Booking.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export function Booking() {
  const [services, setServices] = useState([]);
  const maxLen = Math.max(...services.map((s) => s.name.length));
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      customer_name: "",
      phone_number: "",
      email: "",
      service: "",
      car_make: "",
      car_model: "",
      location: "",
      date: "",
      time: "",
      extra_notes: "",
    },
  });

  useEffect(() => {
    axios.get("/api/services/").then((response) => {
      setServices(response.data);
    });
  }, []);

  const onSubmit = async (data) => {
    try {
      await axios.post("/api/orders/", {
        ...data,
        service: Number(data.service),
      });
      alert("Submitted successfully");
      reset();
    } catch (error) {
      alert("An Error occured while submitting");
    }
  };
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="form-control"
                {...register("customer_name", { required: "Name is required" })}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
            <div className="row g-3 form-group">
              <div className="col">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="07XX XXX XXX"
                  className="form-control"
                  {...register("phone_number", {
                    required: "Phone Number is required.",
                    pattern: {
                      value: /^(?:\+254|0)[17]\d{8}$/,
                      message: "Enter a valid Kenyan phone number.",
                    },
                  })}
                />
                {errors.phone_number && (
                  <p className="error">{errors.phone_number.message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@email.com"
                  className="form-control"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Enter a valid email address.",
                    },
                  })}
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
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
                {...register("service", {
                  required: "Please select a service",
                })}
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
              {errors.service && (
                <p className="error">{errors.service.message}</p>
              )}
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
                  {...register("car_make", {
                    required: "What is your car make",
                  })}
                />
                {errors.car_make && (
                  <p className="error">{errors.car_make.message}</p>
                )}
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
                  {...register("car_model", {
                    required: "What is your car model",
                  })}
                />
                {errors.car_model && (
                  <p className="error">{errors.car_model.message}</p>
                )}
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
                {...register("location")}
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
                  {...register("date")}
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
                  {...register("time")}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="notes" className="form-label">
                Additional Notes
              </label>
              <textarea
                id="notes"
                placeholder="Any extra details about the issue..."
                className="form-control"
                style={{ minHeight: "75px" }}
                {...register("extra_notes")}
              ></textarea>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn"
                style={{ width: "100%", background: "#c8922a" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "BOOK APPOINTMENT"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
