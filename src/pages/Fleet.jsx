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
      <section className="fleet-hero">
        <h1>Our Fleet</h1>
        <p>
          A large, diverse, and professionally managed fleet designed to support enterprise-scale employee transportation across India, enabling organizations to operate seamlessly across multiple locations. Our fleet is maintained to the highest safety and compliance standards and is capable of scaling rapidly to meet evolving workforce mobility demands while ensuring reliability, comfort, and operational efficiency.
        </p>
      </section>

     {/* FLEET STATS */}
<section className="fleet-stats">
  <div className="fleet-stats-grid">

    <div className="fleet-stat-card">
      <h3>{ownedVehicles}+</h3>
      <p>Owned Vehicles</p>
    </div>

    <div className="fleet-stat-card">
      <h3>{associatedVehicles}+</h3>
      <p>Associated Vehicles</p>
    </div>

    <div className="fleet-stat-card">
      <h3>Pan-India</h3>
      <p>Operational Coverage</p>
    </div>

  </div>
</section>

      {/* VEHICLE GRID */}
      <section className="fleet-vehicles">
        <h2>Vehicle Categories</h2>
        <p className="fleet-subtext">
          Vehicles selected to meet comfort, safety, and corporate compliance standards.
        </p>

        <div className="vehicle-grid">
          {[
            { name: "Tata Tigor EV", img: "/fleet/tigor.jpg" },
            { name: "Maruti Ertiga", img: "/fleet/ertiga.jpg" },
            { name: "Toyota Innova Crysta", img: "/fleet/innova.jpg" },
            { name: "Maruti Brezza", img: "/fleet/brezza.jpg" },
            { name: "Maruti WagonR", img: "/fleet/wagonr.jpg" },
            { name: "Maruti Dzire", img: "/fleet/dzire.jpg" },
            { name: "Maruti Ciaz", img: "/fleet/ciaz.jpg" },
            { name: "Mini Buses", img: "/fleet/minibus.jpg" },
            { name: "Executive Vans", img: "/fleet/van.jpg" },
          ].map((v, i) => (
            <div className="vehicle-card" key={i}>
              <img src={v.img} alt={v.name} />
              <span>{v.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SUSTAINABILITY */}
<section className="fleet-sustainability">
  <div className="sustainability-grid">
    {/* TEXT */}
    <div className="sustainability-text">
      <h2>Electric & Sustainable Mobility</h2>
      <p>
        We actively deploy electric vehicles to support sustainability goals
        while maintaining operational reliability and cost efficiency.
      </p>
    </div>

    {/* IMAGE */}
    <div className="sustainability-image">
      <img src="/fleet/ev.jpg" alt="Electric vehicle fleet" />
    </div>
  </div>
</section>


    </main>
  )
}

export default Fleet
