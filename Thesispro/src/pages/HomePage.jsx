import { useState } from 'react'
import thesisDesk from '../assets/thesis-consultation.jpg'
import {
  trustMetrics,
  servicesData,
  successStories,
  faqsData,
  whatsappUrl,
} from '../data/contentData'
import { ThesisCalculator } from '../components/ThesisCalculator'
import { ServiceIcon, IconStar, IconGradCap } from '../components/Icons'

export function HomePage({ navigateTo, onOpenBooking, onSelectService, onOpenBookingWithData }) {
  const [activeFaqCategory, setActiveFaqCategory] = useState('All')
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const faqCategories = ['All', 'Academic Integrity & Ethics', 'Consultation & Process', 'Services & Scope', 'Universities & Degrees']

  const filteredFaqs = activeFaqCategory === 'All'
    ? faqsData
    : faqsData.filter((f) => f.category === activeFaqCategory)

  return (
    <div className="page-content home-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-pill-badge">
              <span className="pill-dot"></span>
              <span>Trusted Master & MBA Thesis Advisory in Germany</span>
            </div>
            <h1 className="hero-title">
              Elevate Your Thesis With <span className="text-highlight">Expert Academic Guidance</span>.
            </h1>
            <p className="hero-description">
              Overcome topic hurdles, structure your research, master empirical data analysis (SPSS/R), and maintain a flawless <em>Roter Faden</em>. Confidential, ethical, and tailored to your faculty guidelines.
            </p>

            <div className="hero-cta-group">
              <button
                type="button"
                className="button button-primary hero-btn ripple-btn"
                onClick={onOpenBooking}
              >
                <span>Book Free Consultation</span>
                <span className="btn-arrow">→</span>
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary hero-btn ripple-btn"
              >
                <span>💬 WhatsApp Us</span>
              </a>
            </div>

            <div className="hero-feature-tags">
              <span className="tag-item">✓ 100% Ethical Advisory</span>
              <span className="tag-item">✓ German Uni Standards</span>
              <span className="tag-item">✓ Free 1st Consultation</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-wrapper glass-panel hover-tilt">
              <img
                src={thesisDesk}
                alt="Academic desk prepared for thesis consultation"
                className="hero-img"
              />
              <div className="hero-floating-badge">
                <span className="badge-icon"><IconGradCap size={28} /></span>
                <div>
                  <strong>99.2% On-Time Completion</strong>
                  <p>Guided 450+ MBA & Master Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS METRIC STRIP */}
      <section className="metrics-strip">
        <div className="metrics-container">
          {trustMetrics.map((item, idx) => (
            <div className="metric-card" key={idx}>
              <span className="metric-number">{item.value}</span>
              <span className="metric-label">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK STAGE DIAGNOSIS BANNER */}
      <section className="stage-banner-section">
        <div className="stage-banner-card glass-panel">
          <div className="banner-copy">
            <span className="eyebrow">Quick Stage Diagnosis</span>
            <h3>Unsure Where To Start With Your Thesis?</h3>
            <p>Use our interactive estimator to pinpoint your exact required hours, package, and deadline roadmap.</p>
          </div>
          <button
            type="button"
            className="button button-primary ripple-btn"
            onClick={() => navigateTo('calculator')}
          >
            Launch Thesis Estimator
          </button>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="section services-overview-section">
        <div className="section-header center">
          <span className="eyebrow">Services & Support</span>
          <h2>Comprehensive Thesis Advisory Services</h2>
          <p>Targeted mentoring designed for every critical phase of your Master or MBA thesis.</p>
        </div>

        <div className="services-grid">
          {servicesData.slice(0, 4).map((service) => (
            <div
              key={service.id}
              className="service-card glass-panel hover-card"
              onClick={() => onSelectService(service)}
            >
              <div className="service-card-top">
                <span className="service-icon-box">
                  <ServiceIcon id={service.id} size={24} />
                </span>
                <span className="service-num">{service.number}</span>
              </div>
                <span className="service-badge">{service.badge}</span>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
                <button
                  type="button"
                  className="card-text-link"
                  onClick={(e) => {
                    e.stopPropagation()
                    onSelectService(service)
                  }}
                >
                  Learn More & Deliverables →
                </button>
              </div>
          ))}
        </div>

        <div className="section-cta-row center">
          <button
            type="button"
            className="button button-secondary ripple-btn"
            onClick={() => navigateTo('services')}
          >
            View All 6 Advisory Services
          </button>
        </div>
      </section>

      {/* HOW IT WORKS TIMELINE */}
      <section className="section how-it-works-section dark-accent-bg">
        <div className="section-header center light-text">
          <span className="eyebrow light-eyebrow">4-Step Proven Process</span>
          <h2>How ThesisPro Mentorship Works</h2>
          <p>A structured, collaborative approach that puts you in full control of your academic timeline.</p>
        </div>

        <div className="timeline-grid">
          <div className="timeline-step glass-dark-card hover-card">
            <div className="step-number">01</div>
            <h4>Free Initial Consultation</h4>
            <p>Discuss your thesis topic, faculty requirements, deadline, and challenges in a 30-minute 1:1 call.</p>
          </div>
          <div className="timeline-step glass-dark-card hover-card">
            <div className="step-number">02</div>
            <h4>Custom Strategy & Roadmap</h4>
            <p>Receive a clear chapter-by-chapter outline, methodological blueprint, and milestone submission dates.</p>
          </div>
          <div className="timeline-step glass-dark-card hover-card">
            <div className="step-number">03</div>
            <h4>1:1 Mentoring & Iterative Feedback</h4>
            <p>Work directly with an expert advisor to refine literature, conduct data analysis (SPSS/R), and polish drafts.</p>
          </div>
          <div className="timeline-step glass-dark-card hover-card">
            <div className="step-number">04</div>
            <h4>Final Review & Defense Prep</h4>
            <p>Ensure 100% citation compliance, red line coherence, and rehearse your viva oral presentation with confidence.</p>
          </div>
        </div>

        <div className="section-cta-row center">
          <button
            type="button"
            className="button button-primary ripple-btn"
            onClick={onOpenBooking}
          >
            Start With Step 1: Free Consultation
          </button>
        </div>
      </section>

      {/* INTERACTIVE CALCULATOR PREVIEW */}
      <section className="section calculator-section">
        <div className="section-header center">
          <span className="eyebrow">Interactive Estimator</span>
          <h2>Calculate Your Recommended Thesis Roadmap</h2>
          <p>Customized advice tailored to your university type, degree level, and timeline.</p>
        </div>
        <ThesisCalculator onOpenBookingWithData={onOpenBookingWithData} />
      </section>

      {/* TESTIMONIALS HIGHLIGHT */}
      <section className="section testimonials-section">
        <div className="section-header center">
          <span className="eyebrow">Success Stories</span>
          <h2>What German University Students Say</h2>
          <p>Real experiences from MBA and Master’s graduates who completed their thesis with top marks.</p>
        </div>

        <div className="testimonials-grid">
          {successStories.map((story) => (
            <div key={story.id} className="testimonial-card glass-panel hover-card">
              <div className="rating-stars">
                {[...Array(story.rating || 5)].map((_, i) => (
                  <IconStar key={i} size={16} />
                ))}
              </div>
              <p className="quote-text">"{story.quote}"</p>
              <div className="student-profile">
                <div className="student-avatar">{story.name.charAt(0)}</div>
                <div className="student-info-text">
                  <strong className="student-name">{story.name}</strong>
                  <span className="student-degree">{story.degree}</span>
                  <span className="student-uni">{story.university}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-cta-row center">
          <button
            type="button"
            className="button button-secondary ripple-btn"
            onClick={() => navigateTo('reviews')}
          >
            Read More Student Reviews
          </button>
        </div>
      </section>

      {/* FAQ SECTION WITH ACCORDION */}
      <section className="section faq-section">
        <div className="section-header center">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h2>Everything You Need To Know</h2>
          <p>Transparent answers regarding our ethical guidelines, advisory scope, and process.</p>
        </div>

        <div className="faq-category-filter">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-chip ${activeFaqCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveFaqCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="faq-accordion-list">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx
            return (
              <div key={idx} className={`faq-accordion-item glass-panel ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                >
                  <span className="faq-q-text">{faq.question}</span>
                  <span className="faq-icon-toggle">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                    <span className="faq-tag-label">Category: {faq.category}</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* FINAL CTA HERO */}
      <section className="final-cta-section glass-dark-card">
        <div className="cta-content">
          <span className="eyebrow light-eyebrow">Take The Next Step</span>
          <h2>Ready To Complete Your Thesis With Confidence?</h2>
          <p>Book your free 30-minute consultation today. No obligations, 100% confidential.</p>
          <div className="cta-btn-row">
            <button
              type="button"
              className="button button-primary ripple-btn"
              onClick={onOpenBooking}
            >
              Book Free Consultation
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary light-outline-btn ripple-btn"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
