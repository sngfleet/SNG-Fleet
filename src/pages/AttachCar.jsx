function AttachCar() {
  return (
    <section className="tg-contact">
      <div className="tg-container">

        {/* LEFT CONTENT */}
        <div className="tg-left">
          <span className="tg-eyebrow">PARTNER WITH US</span>

          <h1>Attach your vehicle with SNG Fleet</h1>

          <p>
            Partner with India’s growing corporate mobility network.
            Get consistent enterprise trips, transparent operations,
            and professional fleet management backed by centralized support.
          </p>
        </div>

        {/* RIGHT — GOOGLE FORM */}
        <div className="tg-form">
          {/* <h3>Send vehicle details</h3> */}

          <div className="tg-form-embed">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf0AawcSi0iWZXYi0Sb3h1uOsZXRAVglJfmhoEa9Ebd9hIf8Q/viewform?embedded=true"
              title="Attach Car Form"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AttachCar
