import { Link } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h3>SNG Fleet Solution</h3>
          <p>
            Reliable corporate transport and fleet management solutions across India.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-section">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/fleet">Fleet</Link>
          <Link to="/attach-car">Attach Car</Link>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <Link to="/demo">Request Demo</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* SOCIAL */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/sng.fleetsolutions" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            {/* <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a> */}
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        © 2026 SNG Fleet Solution. All rights reserved.  
        <span>
          Designed by <a href="https://www.linkedin.com/in/singh-sanmeet/" target="_blank" rel="noreferrer">Sanmeet Singh</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
