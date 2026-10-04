import { packagesData, whatsappUrl } from '../data/contentData'

export function PricingPage({ onOpenBooking, onOpenBookingWithData }) {
  return (
    <div className="page-content pricing-page">
      <div className="page-header center">
        <span className="eyebrow">Transparent Pricing</span>
        <h1>Simple, Predictable Mentorship Packages</h1>
        <p>No hidden fees, no subscriptions. Transparent one-time packages with 100% academic integrity compliance.</p>
      </div>

      <div className="pricing-grid">
        {packagesData.map((pkg) => (
          <div
            key={pkg.id}
            className={`pricing-card glass-panel hover-card ${pkg.popular ? 'featured-card' : ''}`}
          >
            {pkg.popular && <span className="popular-badge">⭐ Most Popular Choice</span>}
            <div className="pricing-card-header">
              <h3>{pkg.name}</h3>
              <p className="pkg-tagline">{pkg.tagline}</p>
              <div className="price-box">
                <span className="price-val">{pkg.price}</span>
                <span className="price-sub">/ {pkg.billing}</span>
              </div>
              <p className="rec-for">Best for: <strong>{pkg.recommendedFor}</strong></p>
            </div>

            <div className="pkg-features">
              <h4>What's Included:</h4>
              <ul>
                {pkg.features.map((feat, idx) => (
                  <li key={idx}>✓ {feat}</li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className={`button ${pkg.popular ? 'button-primary' : 'button-secondary'} pkg-cta-btn ripple-btn`}
              onClick={() =>
                onOpenBookingWithData({
                  recommendedPackage: pkg.name,
                })
              }
            >
              {pkg.ctaText}
            </button>
          </div>
        ))}
      </div>

      {/* FEATURE COMPARISON TABLE */}
      <section className="section matrix-section">
        <div className="section-header center">
          <span className="eyebrow">Detailed Comparison</span>
          <h2>Package Feature Comparison Matrix</h2>
        </div>

        <div className="table-responsive glass-panel">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Feature / Advisory Scope</th>
                <th>Starter Guidance (€290)</th>
                <th>Full Mentorship (€790)</th>
                <th>Final Polish (€450)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1:1 Video Mentoring Sessions</td>
                <td>2 x 45-min</td>
                <td>6 x 50-min</td>
                <td>1 x 45-min</td>
              </tr>
              <tr>
                <td>Topic & Exposé Validation</td>
                <td>✓ Included</td>
                <td>✓ Included</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Red Line (Roter Faden) Blueprint</td>
                <td>Basic Outline</td>
                <td>Full Chapter Breakdown</td>
                <td>Audit Report</td>
              </tr>
              <tr>
                <td>Empirical Methodology (SPSS/R/Interviews)</td>
                <td>—</td>
                <td>✓ Deep Guidance</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Academic Proofreading & Tone Polish</td>
                <td>—</td>
                <td>✓ Included</td>
                <td>✓ Full Thesis Polish</td>
              </tr>
              <tr>
                <td>APA / Harvard Citation Audit</td>
                <td>—</td>
                <td>✓ Included</td>
                <td>✓ Included</td>
              </tr>
              <tr>
                <td>Defense / Colloquium Viva Practice</td>
                <td>—</td>
                <td>✓ Included</td>
                <td>—</td>
              </tr>
              <tr>
                <td>WhatsApp Priority Support</td>
                <td>48h Email</td>
                <td>24h Priority WhatsApp</td>
                <td>48h Email</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* INTEGRITY GUARANTEE BOX */}
      <section className="guarantee-box glass-panel center">
        <span className="shield-icon">🛡️</span>
        <h3>Our Academic Integrity Guarantee</h3>
        <p>
          We operate strictly within university ethical standards. We provide tutoring, feedback, proofreading, statistical consulting, and structural guidance. We do NOT ghostwrite or sell completed papers. Your thesis remains 100% your original academic work.
        </p>
        <div className="guarantee-actions">
          <button type="button" className="button button-primary ripple-btn" onClick={onOpenBooking}>
            Book Free Initial Consultation
          </button>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button-secondary ripple-btn">
            Chat On WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
