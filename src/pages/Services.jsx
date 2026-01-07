import hero from "../assets/services-hero.jpg";

import empImg from "../assets/service-employee.jpg";
import rentalImg from "../assets/service-rental.jpg";
import vipImg from "../assets/service-vip.jpg";
import opsImg from "../assets/service-operations.jpg";

import "../services.css";

function Services() {
  return (
    <>
      
{/* HERO */}
            <div
              className="hero"
              style={{ backgroundImage: `url(${hero})` }}
            >
              <div className="hero-overlay">
                <div className="hero-content">
                  <div className="hero-content-inner">
                    <h1>
                     Enterprise Mobility Services
                      <br />
                     
                    </h1>
                    <p>
                     Comprehensive transportation solutions built for reliability,
            compliance, and large-scale enterprise operations.
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>

      {/* SERVICES */}
      <main className="services">
        <section className="services-grid-section">
          <div className="services-grid">

            <div className="service-card">
              <img src={empImg} alt="Employee Transport" />
              <div className="service-body">
                <span className="service-icon">🚌</span>
                <h3>Employee Transportation</h3>
                <p>
                  Shift-aligned employee commute management with strict safety
                  and compliance controls.
                </p>
                <ul>
                  <li>Route & shift planning</li>
                  <li>Pickup & drop execution</li>
                  <li>Live tracking & monitoring</li>
                  <li>24×7 operations support</li>
                </ul>
              </div>
            </div>

            <div className="service-card">
              <img src={rentalImg} alt="Corporate Rentals" />
              <div className="service-body">
                <span className="service-icon">🚗</span>
                <h3>Corporate & Spot Rentals</h3>
                <p>
                  Flexible vehicle rentals designed for business travel and
                  corporate mobility needs.
                </p>
                <ul>
                  <li>Short & long-term rentals</li>
                  <li>Professional chauffeurs</li>
                  <li>Transparent pricing</li>
                </ul>
              </div>
            </div>

            <div className="service-card">
              <img src={vipImg} alt="VIP Transport" />
              <div className="service-body">
                <span className="service-icon">⭐</span>
                <h3>VIP & Executive Transport</h3>
                <p>
                  Premium mobility solutions for leadership, guests, and
                  high-priority movements.
                </p>
                <ul>
                  <li>Executive vehicles</li>
                  <li>Discreet, punctual service</li>
                  <li>Dedicated coordination</li>
                </ul>
              </div>
            </div>

            <div className="service-card">
              <img src={opsImg} alt="Operations Control" />
              <div className="service-body">
                <span className="service-icon">🧭</span>
                <h3>Operations & Control</h3>
                <p>
                  Centralized command backed by technology-driven monitoring
                  and reporting systems.
                </p>
                <ul>
                  <li>Central control room</li>
                  <li>Real-time monitoring</li>
                  <li>Multi-city scalability</li>
                </ul>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}

export default Services;


