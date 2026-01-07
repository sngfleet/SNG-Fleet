function Demo() {
  return (
    <main className="demo-page">
      <section className="demo-section">
        <div className="demo-container">

          {/* LEFT — BLUE FORM */}
          <div className="demo-form-blue">
            {/* <h1>Request a Demo</h1>
            <p>
              Discover how SNG Fleet can optimize employee transportation
              with reliable, technology-driven mobility solutions.
            </p> */}

            <div className="demo-form-embed">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf6VHpr13-vzxSDKvx3viSmMEpfSZnxiKRC-Rh03LsgO923pg/viewform?embedded=true"
                title="Request Demo Form"
                frameBorder="0"
              >
                Loading…
              </iframe>
            </div>
          </div>

          {/* RIGHT — CONTACT INFO */}
          <div className="demo-info-light">
            <h2>Let’s get in touch</h2>
            <p>
              Our team is ready to assist you with demos,
              pricing, and operational queries.
            </p>

            <div className="info-block">
  <strong>📧 Email</strong>
  <span>sngfleetsolution@gmail.com</span>
</div>

<div className="info-block">
  <strong>📞 Phone</strong>
  <span>+91-9667936624 / 7840055519</span>
</div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Demo;
