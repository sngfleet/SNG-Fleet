import { useEffect, useState } from "react"
import "../Fleet.css"

function Fleet() {
  const [ownedVehicles, setOwnedVehicles] = useState(0)
  const [associatedVehicles, setAssociatedVehicles] = useState(0)

  useEffect(() => {
    let owned = 0
    let associated = 0

    const ownedInterval = setInterval(() => {
      owned += 12
      if (owned >= 720) {
        owned = 720
        clearInterval(ownedInterval)
      }
      setOwnedVehicles(owned)
    }, 20)

    const associatedInterval = setInterval(() => {
      associated += 40
      if (associated >= 2500) {
        associated = 2500
        clearInterval(associatedInterval)
      }
      setAssociatedVehicles(associated)
    }, 20)

    return () => {
      clearInterval(ownedInterval)
      clearInterval(associatedInterval)
    }
  }, [])

  return (
    <main className="fleet-page">

      {/* HERO */}
      <br></br>
      <br></br>

      <section className="fleet-hero">
        <h1>Our Fleet</h1>
        <p>
          A large, diverse, and professionally managed fleet designed to support
          enterprise-scale employee transportation across India, built for
          reliability, compliance, and operational efficiency.
        </p>
      </section>

      {/* STATS — REDESIGNED */}
<section className="fleet-stats">
  <div className="fleet-stats-grid">

    <div className="fleet-stat-card">
      <h3>{ownedVehicles}+</h3>
      <span>Owned Vehicles</span>
      <p>Company-operated fleet under direct compliance control</p>
    </div>

    <div className="fleet-stat-card">
      <h3>{associatedVehicles}+</h3>
      <span>Associated Vehicles</span>
      <p>Verified partner vehicles across operational cities</p>
    </div>

    <div className="fleet-stat-card">
      <h3>Pan-India</h3>
      <span>Operational Coverage</span>
      <p>Multi-city enterprise transport network</p>
    </div>

  </div>
</section>


      {/* VEHICLE GRID */}
      <section className="fleet-vehicles">
  <div className="fleet-vehicles-header">
    <h2>Vehicle Categories</h2>
    <p>
      Vehicles selected to meet comfort, safety, and corporate compliance standards.
    </p>
  </div>

  <div className="vehicle-grid">
    {[
      { name: "Tata Tigor EV", img: "/fleet/tigor.jpg", tag: "Electric Sedan" },
      { name: "Maruti Ertiga", img: "/fleet/ertiga.jpg", tag: "MPV" },
      { name: "Toyota Innova Crysta", img: "/fleet/innova.jpg", tag: "Premium MPV" },
      { name: "Maruti Brezza", img: "/fleet/brezza.jpg", tag: "Compact SUV" },
      { name: "Maruti WagonR", img: "/fleet/wagonr.jpg", tag: "Hatchback" },
      { name: "Maruti Dzire", img: "/fleet/dzire.jpg", tag: "Sedan" },
      { name: "Maruti Ciaz", img: "/fleet/ciaz.jpg", tag: "Executive Sedan" },
      { name: "Mini Buses", img: "/fleet/minibus.jpg", tag: "Staff Transport" },
      { name: "Executive Vans", img: "/fleet/van.jpg", tag: "Corporate Vans" },
    ].map((v, i) => (
      <div className="vehicle-card" key={i}>
        <div className="vehicle-image">
          <img src={v.img} alt={v.name} />
        </div>

        <div className="vehicle-info">
          <h4>{v.name}</h4>
          <span>{v.tag}</span>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* SUSTAINABILITY */}
      <section className="fleet-sustainability">
  <div className="sustainability-container">

    <div className="sustainability-text">
      <span className="sustainability-badge">SUSTAINABILITY</span>
      <h2>Electric & Sustainable Mobility</h2>
      <p>
        We actively deploy electric vehicles to support ESG and sustainability
        goals while maintaining enterprise-grade operational reliability and
        cost efficiency.
      </p>

      <ul className="sustainability-points">
        <li>Lower carbon footprint operations</li>
        <li>EV-first corporate deployment</li>
        <li>Cost-efficient green mobility</li>
      </ul>
    </div>

    <div className="sustainability-image">
      <img src="/fleet/ev.jpg" alt="Electric vehicle sustainability" />
    </div>

  </div>
</section>


    </main>
  )
}

export default Fleet
