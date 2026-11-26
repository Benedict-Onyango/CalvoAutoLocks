import { useEffect, useRef } from "react";
import bmwCar from "../assets/bmwCar_clean.png";
import discovery from "../assets/discovery_clean.jpg";
import gWagon from "../assets/G-wagonCar_clean.png";
import porscheCar from "../assets/porscheCar_clean.png";
import vwCar from "../assets/vwCar.jpg";

import "./Hero.css";

export function Hero() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    let carouselInstance = null;

    const initCarousel = () => {
      const BoostrapCarousel = window.bootstrap?.Carousel;
      if (!BoostrapCarousel) return;

      carouselInstance = BoostrapCarousel.getOrCreateInstance(element, {
        interval: 4000,
        ride: "carousel",
        pause: false,
      });
      carouselInstance.cycle();
    };
    if (window.bootstrap?.Carousel) {
      initCarousel();
    } else {
      window.addEventListener("load", initCarousel);
    }

    return () => {
      window.removeEventListener("load", initCarousel);
      carouselInstance?.dispose();
    };
  }, []);
  return (
    <>
      <section id="hero">
        <div
          ref={carouselRef}
          id="hero-carousel"
          className="carousel slide carousel-fade"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={gWagon} className="d-block w-100" alt="G-Wagon" />
            </div>
            <div className="carousel-item">
              <img
                src={discovery}
                className="d-block w-100"
                alt="Range-Rover Discovery"
              />
            </div>
            <div className="carousel-item">
              <img
                src={porscheCar}
                className="d-block w-100"
                alt="Porsche Cayenne"
              />
            </div>
            <div className="carousel-item">
              <img src={bmwCar} className="d-block w-100" alt="Bmw" />
            </div>
            <div className="carousel-item">
              <img src={vwCar} className="d-block w-100" alt="Volks-Wagon" />
            </div>
          </div>
        </div>

        <div id="quick_link">
          <div className="sub">
            <p>
              LOCKED <br />
              OUT OF YOUR <br />
              <span style={{ color: "#c8922a" }}>CAR?</span>
            </p>
          </div>
          <div className="links">
            <div>
              <button className="call-btn">
                <a href="tel:+254712345678">CALL NOW</a>
              </button>
            </div>
            <div>
              <button className="book-btn">
                <a href="#book">BOOK A VISIT</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
