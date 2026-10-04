import { useState } from 'react'
import { servicesData } from '../data/contentData'
import { ServiceIcon, IconClock } from '../components/Icons'

export function ServicesPage({ onSelectService, onOpenBooking }) {
  const [filter, setFilter] = useState('All')

  const filterOptions = ['All', 'Topic & Exposé', 'Methodology & Data', 'Structure & Writing', 'Editing & Defense']

  const filteredServices = servicesData.filter((service) => {
    if (filter === 'All') return true
    if (filter === 'Topic & Exposé') return service.id === 'topic-proposal'
    if (filter === 'Methodology & Data') return service.id === 'research-methodology'
    if (filter === 'Structure & Writing') return service.id === 'structure-planning' || service.id === 'editing-review'
    if (filter === 'Editing & Defense') return service.id === 'citation-formatting' || service.id === 'defense-prep'
    return true
  })

  return (
    <div className="page-content services-page">
      <div className="page-header center">
        <span className="eyebrow">Services Catalog</span>
        <h1>Academic Advisory Tailored To Your Needs</h1>
        <p>Whether you need help with your initial Exposé, empirical SPSS/R coding, red line structure, or final defense, our experienced mentors are here to guide you.</p>
      </div>

      <div className="filter-tab-bar">
        {filterOptions.map((opt) => (
          <button
            key={opt}
            type="button"
            className={`tab-btn ${filter === opt ? 'active' : ''}`}
            onClick={() => setFilter(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="services-full-grid">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="service-full-card glass-panel hover-card"
            onClick={() => onSelectService(service)}
          >
            <div className="service-card-header">
              <div className="icon-badge-row">
                <span className="service-big-icon">
                  <ServiceIcon id={service.id} size={28} />
                </span>
                <span className="rec-badge">{service.badge}</span>
              </div>
              <h3>{service.title}</h3>
              <p className="service-dur"><IconClock size={14} /> {service.duration}</p>
            </div>

            <p className="service-desc">{service.fullDesc}</p>

            <div className="deliverables-preview">
              <h4>Key Deliverables:</h4>
              <ul>
                {service.deliverables.slice(0, 3).map((item, idx) => (
                  <li key={idx}>✓ {item}</li>
                ))}
              </ul>
            </div>

            <div className="card-actions">
              <button
                type="button"
                className="button button-secondary card-detail-btn"
                onClick={(e) => {
                  e.stopPropagation()
                  onSelectService(service)
                }}
              >
                View Details & Scope
              </button>
              <button
                type="button"
                className="button button-primary card-book-btn ripple-btn"
                onClick={(e) => {
                  e.stopPropagation()
                  onOpenBooking()
                }}
              >
                Book Service
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* METHODOLOGY COMPARISON BOX */}
      <section className="section comparison-section">
        <div className="section-header center">
          <span className="eyebrow">Methodology Advisory</span>
          <h2>Qualitative vs. Quantitative Empirical Support</h2>
          <p>We support both qualitative interview designs and quantitative statistical modeling.</p>
        </div>

        <div className="comparison-grid">
          <div className="comp-card glass-panel">
            <div className="comp-header qual">
              <h3>🗣️ Qualitative Research Support</h3>
              <p>For Interview-Based & Case Study Theses</p>
            </div>
            <ul>
              <li>Semi-structured interview guideline creation</li>
              <li>Sampling strategy & expert recruitment planning</li>
              <li>Mayring / Gioia qualitative content coding</li>
              <li>MAXQDA / NVivo categorization guidance</li>
              <li>Cross-case synthesis & qualitative discussion</li>
            </ul>
          </div>

          <div className="comp-card glass-panel">
            <div className="comp-header quant">
              <h3>📊 Quantitative Research Support</h3>
              <p>For Survey & Data Analysis Theses</p>
            </div>
            <ul>
              <li>Online survey questionnaire design (Qualtrics, LimeSurvey)</li>
              <li>Hypothesis testing formulation (H1, H2, Moderation/Mediation)</li>
              <li>SPSS, R, Python, & Stata syntax setup</li>
              <li>Regression analysis, ANOVA, Factor analysis & SEM</li>
              <li>Clean visualization tables for results chapter</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BANNER CTA */}
      <section className="banner-cta-box glass-panel center">
        <h3>Need a Custom Combination of Services?</h3>
        <p>We can design a bespoke advisory package tailored specifically to your thesis topic and deadline.</p>
        <button type="button" className="button button-primary ripple-btn" onClick={onOpenBooking}>
          Discuss Custom Requirements
        </button>
      </section>
    </div>
  )
}
