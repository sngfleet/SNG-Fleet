import { Link } from "react-router-dom"
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub
} from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
  <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
    <span className="slash"></span>SNG Fleet
  </Link>
</div>

        <nav className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="fleet">Fleet</Link>
          <Link to="attach-car">Attach Car</Link>
          <Link to="/demo">Contact Us</Link>
          {/* <Link to="/contact">Help</Link> */}
        </nav>

        <div className="footer-divider" />

        <div className="footer-social">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>

        <div className="footer-copy">
          © 2026 Travel Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
