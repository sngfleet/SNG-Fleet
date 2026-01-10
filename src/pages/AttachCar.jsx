import { useState } from "react"
import useSEO from "../hooks/useSEO";

function AttachCar() {

  useSEO(
  "Attach Your Car to SNG Fleet | Partner With Us",
  "Attach your vehicle to SNG Fleet Solution and get corporate transport contracts."
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
    } catch {
      alert("Submission failed. Try again.")
    }

    setLoading(false)
  }

  return (
    <section className="attach-section">
      <div className="attach-container">

        <div className="attach-left">
          <span className="attach-eyebrow">PARTNER WITH SNG</span>
          <h1>Attach Your Vehicle to Our Corporate Network</h1>
          <p>
            Join India’s trusted enterprise mobility ecosystem.
            Receive consistent trips, transparent settlements, and
            long-term corporate contracts backed by professional fleet operations.
          </p>
        </div>

        <div className="attach-form-card">
          <h3>Vehicle Partner Registration</h3>

          {success ? (
            <div className="attach-success">
              ✅ Thank you! Your request has been submitted successfully.  
              Our team will contact you shortly.
            </div>
          ) : (
            <form className="attach-form" onSubmit={handleSubmit}>

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New Vehicle Attach Request" />
              <input type="text" name="website" style={{ display: "none" }} />

              <div className="attach-row">
                <input name="Owner Name" placeholder="Owner Name" required />
                <input name="Mobile Number" placeholder="Mobile Number" required />
              </div>

              <div className="attach-row">
                <input name="Email" type="email" placeholder="Email Address" required />
                <input name="City" placeholder="City of Operation" required />
              </div>

              <div className="attach-row">
                <input name="Vehicle Model" placeholder="Vehicle Model" required />
                <input name="Vehicle Number" placeholder="Vehicle Number" required />
              </div>

              <textarea
                name="Additional Info"
                placeholder="Additional Information (optional)"
              ></textarea>

              <button
                type="submit"
                className="attach-submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Vehicle Request"}
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  )
}

export default AttachCar
