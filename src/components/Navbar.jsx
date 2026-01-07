import { Link } from "react-router-dom"
import { useState } from "react"


function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
  <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
    <img src="/src/assets/logo.png" alt="SNG Fleet Logo" />
  </Link>
</div>


        {/* Desktop nav */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          {/* <Link to="/contact">Contact</Link> */}
          <Link to="/fleet">Fleet</Link>
          <Link to="/attach-car">Attach Car</Link>
          <Link to="/demo" className="cta">Request Demo</Link>
        </nav>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="mobile-nav">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          {/* <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link> */}
          <Link to="/fleet" onClick={() => setOpen(false)}>Fleet</Link>
          <Link to="/attach-car" onClick={() => setOpen(false)}>Attach Car</Link>
          
          <Link to="/demo" className="cta" onClick={() => setOpen(false)}>

            Request Demo
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navbar
