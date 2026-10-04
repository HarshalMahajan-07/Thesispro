import { useState } from 'react'
import thesisDesk from './assets/thesis-consultation.jpg'
import './App.css'

const whatsappMessage =
  "Hello, I would like to know more about your MBA/Master's thesis support services."
const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`

const navItems = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['How It Works', '#how-it-works'],
  ['About', '#about'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
]

const services = [
  {
    icon: '01',
    title: 'Topic & Proposal Guidance',
    text: 'Shape a focused research question, proposal structure, and practical thesis direction.',
  },
  {
    icon: '02',
    title: 'Research Method Support',
    text: 'Understand qualitative, quantitative, or mixed methods before you move into writing.',
  },
  {
    icon: '03',
    title: 'Structure & Chapter Planning',
    text: 'Turn a complex thesis into a clear chapter plan with manageable milestones.',
  },
  {
    icon: '04',
    title: 'Editing & Feedback',
    text: 'Improve clarity, flow, argumentation, formatting, and academic presentation.',
  },
]

const steps = [
  'Tell Us About Your Thesis',
  'Free Consultation',
  'Choose Your Support',
  'Work With Guidance',
]

const faqs = [
  {
    question: 'Do you write the thesis for students?',
    answer:
      'No. We provide ethical guidance, feedback, structure, and academic support so your final thesis remains your own work.',
  },
  {
    question: 'Is the first consultation free?',
    answer:
      'Yes. The first consultation is free, confidential, and focused on understanding your topic, deadline, and support needs.',
  },
  {
    question: 'Can you help MBA and Master’s students in Germany?',
    answer:
      'Yes. The service is designed for MBA and Master’s students who need professional thesis guidance in Germany.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    event.currentTarget.reset()
    setSubmitted(true)
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">TP</span>
          <span>ThesisPro Germany</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="site-navigation"
          className={menuOpen ? 'site-nav is-open' : 'site-nav'}
          aria-label="Main navigation"
        >
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="button button-primary nav-cta" href="#contact" onClick={closeMenu}>
            Book Free Consultation
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Trusted thesis support in Germany</p>
            <h1>Professional guidance for your MBA or Master’s thesis.</h1>
            <p className="hero-text">
              Tell us about your thesis and the type of support you need. We’ll discuss
              your requirements during a free consultation and help you plan clear next
              steps.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="#contact">
                Book Free Consultation
              </a>
              <a className="button button-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp Us
              </a>
            </div>
            <div className="trust-row" aria-label="Service qualities">
              <span>Confidential</span>
              <span>Ethical guidance</span>
              <span>Clear milestones</span>
            </div>
          </div>

          <div className="hero-panel" aria-label="Thesis consultation preview">
            <img src={thesisDesk} alt="Academic desk prepared for thesis consultation" />
            <div className="hero-note">
              <strong>Your thesis stays yours.</strong>
              <span>We help with structure, clarity, research planning, and feedback.</span>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Focused support for every thesis stage.</h2>
            <p>
              Choose the guidance that matches where you are now, from early topic
              planning to final review.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>

          <div className="section-action">
            <a className="button button-primary" href="#contact">
              Discuss Your Requirements
            </a>
          </div>
        </section>

        <section className="section" id="how-it-works">
          <div className="section-heading">
            <p className="eyebrow">How It Works</p>
            <h2>A simple process that keeps you in control.</h2>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <article className="step-card" key={step}>
                <span>{index + 1}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>

          <div className="section-action">
            <a className="button button-primary" href="#contact">
              Book Free Consultation
            </a>
          </div>
        </section>

        <section className="section integrity" id="about">
          <div>
            <p className="eyebrow">Academic Integrity</p>
            <h2>Responsible support with clear academic boundaries.</h2>
          </div>
          <div>
            <p>
              ThesisPro Germany focuses on guidance, planning, feedback, editing, and
              research clarity. We do not promise grades or write academic work for
              students. Our role is to help you understand your thesis better and work
              with more confidence.
            </p>
            <a className="text-link" href="#contact">
              Discuss Your Requirements
            </a>
          </div>
        </section>

        <section className="section section-muted" id="faq">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Questions students usually ask.</h2>
          </div>

          <div className="faq-list">
            {faqs.map((item) => (
              <article className="faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>

          <div className="section-action">
            <p>Still have questions?</p>
            <a className="button button-secondary" href="#contact">
              Contact Us
            </a>
          </div>
        </section>

        <section className="final-cta section">
          <div>
            <p className="eyebrow">Free consultation</p>
            <h2>Need Help With Your Thesis?</h2>
            <p>
              Tell us about your thesis and the type of support you need. We’ll discuss
              your requirements during a free consultation.
            </p>
          </div>
          <div className="button-row">
            <a className="button button-primary" href="#contact">
              Book Free Consultation
            </a>
            <a className="button button-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp Us
            </a>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>Book your free thesis consultation.</h2>
            <p>
              Send a short enquiry and we’ll contact you shortly. You can also reach us
              directly through WhatsApp or email.
            </p>
            <div className="contact-buttons">
              <a className="button button-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp Us
              </a>
              <a className="button button-secondary" href="mailto:hello@thesispro.de">
                Email Us
              </a>
            </div>
          </div>

          <div className="contact-card">
            {submitted ? (
              <div className="success-message" role="status">
                <h3>Thank you!</h3>
                <p>Your enquiry has been received. We’ll contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label>
                  Name
                  <input name="name" type="text" minLength="2" required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" required />
                </label>
                <label>
                  Programme
                  <select name="programme" defaultValue="MBA">
                    <option>MBA</option>
                    <option>Master’s</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  Tell us about your thesis
                  <textarea
                    name="message"
                    rows="5"
                    minLength="20"
                    placeholder="Your topic, deadline, and the support you need"
                    required
                  ></textarea>
                </label>
                <button className="button button-primary" type="submit">
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>ThesisPro Germany</p>
        <p>Professional MBA and Master’s thesis guidance.</p>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Us">
        WA
      </a>
    </div>
  )
}

export default App
