import './Services.css'
export function Services() {
  return (
    <>
      <section id="services">
        <div>
          <h5 className="introduction">WHAT WE DO</h5>
          <h1 className="main_title">OUR SERVICES</h1>
          <p className="sub-text">
            From emergency lockouts to full key programming, we handle every
            auto lock situation.
          </p>
        </div>
        <div className="services_list">
          <div className="service_card">
            <svg
              className="service-icon"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <rect x="10" y="20" width="28" height="22" rx="2"></rect>
              <path d="M16 20V14a8 8 0 0116 0v6"></path>
              <circle cx="24" cy="32" r="3"></circle>
              <line x1="24" y1="35" x2="24" y2="39"></line>
            </svg>
            <h4 className="service-name">CAR LOCKOUT</h4>
            <p>
              Locked your keys inside? We open your car without damage — fast
              and guaranteed.
            </p>
            <p className="service-price">FROM KES 1500</p>
          </div>
          <div className="service_card">
            <svg
              className="service-icon"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <circle cx="20" cy="22" r="12"></circle>
              <line x1="30" y1="32" x2="44" y2="44"></line>
              <circle cx="20" cy="22" r="5"></circle>
            </svg>
            <h4 className="service-name">KEY DUPLICATION</h4>
            <p>
              Lost a key or need a spare? We cut and program all types of car
              keys on-site.
            </p>
            <p className="service-price">FROM KES 2000</p>
          </div>
          <div className="service_card">
            <svg
              className="service-icon"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <circle cx="24" cy="24" r="14"></circle>
              <path d="M24 16v8l5 5"></path>
              <path d="M10 24H6M42 24h-4M24 10V6M24 42v-4"></path>
            </svg>
            <h4 className="service-name">IGNITION REPAIR</h4>
            <p>
              Ignition won't turn or feels stuck? We diagnose and repair all
              ignition systems.
            </p>
            <p className="service-price">FROM KES 3500</p>
          </div>
          <div className="service_card">
            <svg
              className="service-icon"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <rect x="8" y="14" width="32" height="20" rx="2" />
              <circle cx="24" cy="24" r="4" />
              <line x1="16" y1="34" x2="16" y2="38" />
              <line x1="32" y1="34" x2="32" y2="38" />
              <line x1="12" y1="38" x2="36" y2="38" />
            </svg>
            <h4 className="service-name">TRANSPONDER KEY</h4>
            <p>
              Modern cars need chip keys. We program transponder and smart keys
              for all makes.
            </p>
            <p className="service-price">FROM KES 4000</p>
          </div>
          <div className="service_card">
            <svg
              className="service-icon"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <path d="M24 6l4 12h12l-10 7 4 12-10-7-10 7 4-12L8 18h12z" />
            </svg>
            <h4 className="service-name">EMERGENCY CALL-OUT</h4>
            <p>
              Stranded at night or far from town? Our emergency team is on call
              around the clock.
            </p>
            <p className="service-price">FROM KES 2500</p>
          </div>
          <div className="service_card">
            <svg
              className="service-icon"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <rect x="10" y="26" width="28" height="16" rx="2" />
              <path d="M18 26V18a6 6 0 0112 0v8" />
              <rect x="21" y="32" width="6" height="5" rx="1" />
            </svg>
            <h4 className="service-name">LOCK REPLACEMENT</h4>
            <p>
              Broken, worn, or compromised locks? We replace and rekey car door
              locks on-site.
            </p>
            <p className="service-price">FROM KES 4400</p>
          </div>
        </div>
      </section>
    </>
  );
}
