import { useState } from "react"
import { NavLink } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import "../Navbar.css"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">

      {/* TOP BAR */}
      <div className="topbar">

        {/* LEFT */}
        <NavLink to="/" onClick={() => window.scrollTo(0, 0)} className="topbar-left">
  <img src="/logo.png" alt="Logo" className="logo" />
  <div className="divider"></div>
  <img src="/logo2.png" alt="Logo 2" className="years" />
</NavLink>

        {/* CENTER */}
        <div className="topbar-center">
          <a href="https://facebook.com" target="_blank" className="social"><FaFacebookF /></a>
          <a href="https://www.instagram.com/sng.fleetsolutions?igsh=MThoeHp1M2N4ZXU1NQ==" target="_blank" className="social"><FaInstagram /></a>
          {/* <a href="https://linkedin.com" target="_blank" className="social"><FaLinkedinIn /></a> */}
          <span className="email">sngfleetsolution@gmail.com</span>
        </div>

        {/* CONTACT */}
        <div className="topbar-contact">
          <div className="contact-box">
            <span>CAB ATTACHMENTS / CORPORATE ENQUIRY</span>
            <strong>+91-9667936624 / 7840055519</strong>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="topbar-right">
  <NavLink to="/demo" className="btn black">
    REQUEST A DEMO
  </NavLink>

  <NavLink to="/attach-car" className="btn yellow">
    ATTACH CAR TO COMPANY
  </NavLink>
</div>


        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>

      </div>

      {/* MOBILE MENU */}
      <nav className={`mobile-nav ${open ? "show" : ""}`}>
        <ul>
          <li><NavLink to="/" onClick={()=>setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={()=>setOpen(false)}>About Us</NavLink></li>
          <li><NavLink to="/services" onClick={()=>setOpen(false)}>Services</NavLink></li>
          <li><NavLink to="/fleet" onClick={()=>setOpen(false)}>Fleet</NavLink></li>
          <li><NavLink to="/demo" onClick={()=>setOpen(false)}>Contact Us</NavLink></li>
          <li><NavLink to="/attach-car" onClick={()=>setOpen(false)}>Attach your Car</NavLink></li>
        </ul>

        <div className="mobile-socials">
          <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
          <a href="https://www.instagram.com/sng.fleetsolutions?igsh=MThoeHp1M2N4ZXU1NQ==" target="_blank"><FaInstagram /></a>
          {/* <a href="https://linkedin.com" target="_blank"><FaLinkedinIn /></a> */}
        </div>
      </nav>

      {/* DESKTOP NAV */}
      <nav className="nav">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/fleet">Fleet</NavLink></li>
          <li><NavLink to="/demo">Contact Us</NavLink></li>
        </ul>
      </nav>

    </header>
  )
}

export default Navbar
