import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"
import { useState } from "react"
import useSEO from "../hooks/useSEO";

function Demo() {

  useSEO(
  "Contact SNG Fleet Solution | Corporate Transport India",
  "Contact SNG Fleet Solution for corporate employee transportation and fleet management services across India."
);

  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const form = e.target
    const data = new FormData(form)

    try {
      await fetch("https://formsubmit.co/ajax/fleetsng@gmail.com", {
        method: "POST",
        body: data
      })

      form.reset()
      setSuccess(true)
    } catch (err) {
      alert("Submission failed. Please try again.")
    }

    setLoading(false)
  }

  return (
    <section className="attach-section">
      <div className="attach-container">

        {/* LEFT */}
        <div className="attach-left">
          <span className="attach-eyebrow">REQUEST A DEMO</span>

          <h1>Discover Enterprise Mobility with SNG Fleet</h1>

          <p>
            Experience how SNG Fleet delivers reliable, compliant and
            scalable employee transportation solutions for enterprises
            across India.
          </p>

          <ul className="attach-benefits">
            <li>✔ Enterprise-grade transport operations</li>
            <li>✔ Technology-driven route management</li>
            <li>✔ Dedicated corporate support team</li>
          </ul>

          <div className="attach-contact">
            <p><FaEnvelope className="contact-icon" /> sngfleetsolution@gmail.com</p>
            <p><FaPhoneAlt className="contact-icon" /> +91-9667936624 / 7840055519</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="attach-form-card">
          <h3>Request a Demo</h3>

          {success ? (
            <div className="attach-success">
              ✅ Thank you! Your demo request has been submitted.
            </div>
          ) : (
            <form className="attach-form" onSubmit={handleSubmit}>

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New Demo Request" />
              <input type="text" name="website" style={{ display: "none" }} />

              <div className="attach-row">
                <input name="Full Name" placeholder="Full Name" required />
                <input name="Company" placeholder="Company Name" required />
              </div>

              <div className="attach-row">
                <input name="Mobile" placeholder="Mobile Number" required />
                <input name="Email" type="email" placeholder="Email Address" required />
              </div>

              <div className="attach-row">
                <input name="City" placeholder="City" required />
                <input name="Fleet Size" placeholder="Expected Fleet Size" required />
              </div>

              <textarea name="Requirement" placeholder="Describe your requirement"></textarea>

              <button
                type="submit"
                className="attach-submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Demo Request"}
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  )
}

export default Demo
