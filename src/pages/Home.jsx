import { Link } from "react-router-dom"
import ibm from "../assets/clients/ibm.png"
import tcs from "../assets/clients/tcs.png"
import techMahindra from "../assets/clients/tech-mahindra.png"
import barclays from "../assets/clients/barclays.png"
import starMedia from "../assets/clients/star-media.png"
import republic from "../assets/clients/republic.png"
import ukg from "../assets/clients/ukg.png"
import accessHealthcare from "../assets/clients/access-healthcare.png"
import { useEffect, useRef, useState } from "react"
import {
  FaBuilding,
  FaRoute,
  FaCarSide,
  FaUsers
} from "react-icons/fa"
import homeImage from "../assets/home_1.png";
import useSEO from "../hooks/useSEO";


function Home() {

    useSEO(
    "SNG Fleet Solution | Corporate Transportation Services in India",
    "Corporate employee transportation and fleet management solutions across India by SNG Fleet Solution."
  );
  
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  const [clients, setClients] = useState(0)
  const [trips, setTrips] = useState(0)
  const [vehicles, setVehicles] = useState(0)
  const [commuters, setCommuters] = useState(0)

  useEffect(() => {
    const animate = (setter, max, step, delay) => {
      let value = 0
      const interval = setInterval(() => {
        value += step
        if (value >= max) {
          value = max
          clearInterval(interval)
        }
        setter(value)
      }, delay)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animate(setClients, 110, 2, 20)
          animate(setTrips, 5000, 100, 15)
          animate(setVehicles, 720, 10, 20)
          animate(setCommuters, 10000, 200, 15)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      {/* HERO */}
      <div
        className="hero"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-content-inner">
              <h1>
                Employee Transportation,
                <br />
                Engineered for Reliability
              </h1>
              <p>
                ISO certified, enterprise-focused employee mobility solutions
                delivered with safety, scale, and precision.
              </p>

              <div className="hero-cta">
  <Link to="/contact">
    <button className="hero-primary">Request a Demo</button>
  </Link>
  <Link to="/attach-car">
    <button className="hero-secondary">Attach your Car!</button>
  </Link>
</div>


            </div>
          </div>
        </div>
      </div>
      

      {/* WHAT WE OFFER */}
<section className="offer-section">
  <div className="offer-content">
    <h2>What we offer</h2>

    <p>
      At SNG Fleet Solution Pvt. Ltd., we specialize in delivering
      high-performance employee transportation services that align
      with the operational demands of today’s dynamic enterprises.
      Our solutions are engineered for reliability, safety, and
      efficiency—ensuring every ride contributes to a more
      productive, punctual, and satisfied workforce.
    </p>

    <p>
      From daily employee commutes and airport transfers to event
      logistics and end-to-end transport management, we offer
      tailored mobility solutions across India’s key business hubs.
      Our modern fleet, trained personnel, and tech-enabled
      operations reflect our unwavering commitment to service
      excellence.
    </p>
  </div>

  <div className="offer-image">
    <img src={homeImage} alt="Fleet Operations" />

  </div>
</section>

      {/* MILESTONES — FIXED */}
      <div className="section-band">
        <section className="impact-section" ref={sectionRef}>
          <div className="impact-left">
            <h1>Our Milestones</h1>
            <div
  
/><br></br>
            <p>
              Scale that enterprise clients trust. Operations built for
              reliability, safety, and daily performance across India.
            </p>
          </div>

          <div className="impact-grid">
  <div className="impact-card">
    <FaBuilding size={32} color="#2563eb" />
    <h3>{clients}+</h3>
    <span>Corporate Clients</span>
  </div>

  <div className="impact-card">
    <FaRoute size={32} color="#2563eb" />
    <h3>{trips}+</h3>
    <span>Trips Per Day</span>
  </div>

  <div className="impact-card">
    <FaCarSide size={32} color="#2563eb" />
    <h3>{vehicles}+</h3>
    <span>Fleet Vehicles</span>
  </div>

  <div className="impact-card">
    <FaUsers size={32} color="#2563eb" />
    <h3>{commuters}+</h3>
    <span>Daily Commuters</span>
  </div>
</div>

        </section>
      </div>
<br></br>
<br></br>
<br></br>
<br></br>

      {/* CLIENT LOGOS — FIXED */}
      <div className="section-band">
        <section style={{ padding: "40px 20px" }}>
          <h1>Trusted by Leading Organizations</h1>
          <p style={{ marginTop: "12px" }}>
            We work with enterprises across industries to deliver reliable
            employee transportation solutions.
          </p>

          <div className="client-logos">
            <div className="logo-box"><img src={ibm} alt="IBM" /></div>
            <div className="logo-box"><img src={tcs} alt="TCS" /></div>
            <div className="logo-box"><img src={techMahindra} alt="Tech Mahindra" /></div>
            <div className="logo-box"><img src={barclays} alt="Barclays" /></div>
            <div className="logo-box"><img src={starMedia} alt="Star Media" /></div>
            <div className="logo-box"><img src={republic} alt="Republic Network" /></div>
            <div className="logo-box"><img src={ukg} alt="UKG" /></div>
            <div className="logo-box"><img src={accessHealthcare} alt="Access Healthcare" /></div>
          </div>
        </section>
      </div>

      <br></br>
<br></br>
<br></br>
<br></br>

      {/* WHAT WE DO — REDESIGNED */}
<section className="services-section">
  <div className="services-container">

    <div className="services-header">
      <h1>What We Do</h1>
      <p>
        Enterprise-grade mobility solutions designed around reliability,
        safety, and operational excellence.
      </p>
    </div>

    <div className="services-diagram">

      {/* Core */}
      <div className="service-core">
        <span>Core Services</span>
      </div>

      {/* Service Cards */}
      <div className="service-cards">

        <div className="service-card">
          <h3>Employee Transport Solutions</h3>
          <ul>
            <li>Shift-based route planning</li>
            <li>Verified drivers & maintained fleet</li>
            <li>End-to-end route management</li>
            <li>24×7 operations & live tracking</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Corporate & Spot Car Rentals</h3>
          <ul>
            <li>Flexible short & long-term rentals</li>
            <li>Wide range of corporate vehicles</li>
            <li>Transparent pricing</li>
            <li>Business & executive travel</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>VIP & Special Event Transport</h3>
          <ul>
            <li>Luxury sedans & executive vans</li>
            <li>Discreet & premium service</li>
            <li>Dedicated coordination team</li>
            <li>On-time, white-glove execution</li>
          </ul>
        </div>

      </div>
    </div>

  </div>
</section>

      {/* CTA */}
      {/* <section style={{ padding: "60px 20px" }}>
        <h2>Let’s Work Together</h2>
        <p style={{ marginTop: "12px" }}>
          Discover how SNG Fleet can optimize your workforce transportation.
        </p>
        <div style={{ marginTop: "20px", display: "flex", gap: "16px" }}>
          <Link to="/demo"><button>Request Demo</button></Link>
          <Link to="/attach-car"><button>Attach Your Vehicle</button></Link>
        </div>
      </section> */}
    </main>
  )
}

export default Home
