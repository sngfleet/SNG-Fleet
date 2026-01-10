import hero from "../assets/about-hero-wide.jpg";
import ops from "../assets/operations.jpg";
import leader1 from "../assets/leader1.jpg";
import leader2 from "../assets/leader2.jpg";
import "../about.css";

function About() {
  return (
    <>
      {/* FULL BLEED HERO */}
      {/* <section
        className="about-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="about-hero-overlay" />

        <div className="about-hero-inner">
          <h1>
            Built to Move
            <br />
            India’s Workforce
          </h1>

          <p>
            Enterprise-grade employee transportation with uncompromising
            standards of safety, scale, and operational discipline.
          </p>
        </div>
      </section> */}

      {/* HERO */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-content-inner">
              <h1>
               Built to Move
                <br />
                India’s Workforce
              </h1>
              <p>
               Enterprise grade employee transportation with uncompromising
            standards of safety, scale, and operational discipline.
              </p>
              
            </div>
          </div>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <main className="about-page">

        {/* WHO WE ARE */}
        <section className="about-section about-story">
          <div className="story-grid">
            <div className="story-image">
              <img src={ops} alt="Fleet Operations" />
            </div>

            <div className="story-content">
              <h1>Who We Are</h1>

              <p>
                Founded in 2017, SNG Fleet Solution Pvt. Ltd. is a Delhi-NCR
                headquartered corporate mobility company serving enterprises
                across India with reliable, compliant, and technology enabled
                employee transportation.
              </p>

              <p>
                Our operations are designed for scale combining trained
                personnel, modern fleet infrastructure, and strict governance to
                ensure punctual and secure workforce movement every day.
              </p>

              <div className="story-metrics">
                <div>
                  <strong>ISO 9001:2015</strong>
                  <span>Certified</span>
                </div>
                <div>
                  <strong>Pan India</strong>
                  <span>Coverage</span>
                </div>
                <div>
                  <strong>Enterprise</strong>
                  <span>Focused</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="leadership-section">
  <div className="leadership-header">
    <span className="eyebrow">LEADERSHIP</span>
    <h1>Driven by Experience</h1>
    <p>
      Leadership with deep expertise in enterprise mobility, compliance,
      and large-scale transportation operations.
    </p>
  </div>

  <div className="leadership-grid">
    <div className="leader-card">
      <div className="leader-image">
        <img src={leader1} alt="Dharmender Chauhan" />
      </div>
      <h2>Dharmender Chauhan</h2>
      <span>Founder & Managing Director</span>
    </div>

    <div className="leader-card">
      <div className="leader-image">
        <img src={leader2} alt="Atin Sharma" />
      </div>
      <h2>Atin Sharma</h2>
      <span>Director</span>
    </div>
  </div>
</section>


        {/* CORE VALUES — REDESIGNED */}
<section className="core-values">
  <div className="core-values-inner">
    <span className="eyebrow">What Drives Us</span>
    <h1>Our Core Values</h1>
    <p className="subtitle">
      Principles that guide every decision, every route, and every partnership.
    </p>

    <div className="values-grid">
      <div className="value-card accent-blue">
        <div className="icon">🤝</div>
        <h3>Respect</h3>
        <p>
          We value people, partnerships, and long-term trust above everything
          else.
        </p>
      </div>

      <div className="value-card accent-indigo">
        <div className="icon">🎯</div>
        <h3>Ownership</h3>
        <p>
          We take full accountability for outcomes — not excuses, not shortcuts.
        </p>
      </div>

      <div className="value-card accent-slate">
        <div className="icon">🛡️</div>
        <h3>Integrity</h3>
        <p>
          Transparent, ethical, and disciplined operations at enterprise scale.
        </p>
      </div>
    </div>
  </div>
</section>


      </main>
    </>
  );
}

export default About;
