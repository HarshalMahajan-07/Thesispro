import { useState } from 'react'
import { whatsappUrl } from '../data/contentData'

export function ContactPage({ onShowToast }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    programme: 'MBA',
    university: '',
    stage: 'topic',
    message: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    onShowToast(`Thank you, ${formData.name}! Your enquiry has been received. We will contact you shortly via email/WhatsApp.`)
  }

  return (
    <div className="page-content contact-page">
      <div className="page-header center">
        <span className="eyebrow">Contact & Advisory Hubs</span>
        <h1>Get In Touch With ThesisPro Germany</h1>
        <p>Book your free 30-minute consultation or reach out to our advisory team directly.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info-column glass-panel">
          <h3>Advisory Locations & Channels</h3>
          <p className="contact-intro">
            We provide 1:1 online advisory sessions nationwide across Germany, as well as in-person consultation appointments at our advisory hubs.
          </p>

          <div className="info-block">
            <span className="info-icon">📍</span>
            <div>
              <strong>Munich Advisory Hub</strong>
              <p>Leopoldstraße 180, 80804 München, Germany</p>
            </div>
          </div>

          <div className="info-block">
            <span className="info-icon">📍</span>
            <div>
              <strong>Frankfurt Advisory Hub</strong>
              <p>Mainzer Landstraße 50, 60329 Frankfurt am Main, Germany</p>
            </div>
          </div>

          <div className="info-block">
            <span className="info-icon">💬</span>
            <div>
              <strong>Instant WhatsApp Advisory</strong>
              <p>Direct chat available Mon-Sat (9:00 - 19:00 CET)</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary text-wa-btn ripple-btn"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>

          <div className="info-block">
            <span className="info-icon">✉️</span>
            <div>
              <strong>Email Inquiries</strong>
              <p>hello@thesispro-germany.de</p>
            </div>
          </div>
        </div>

        <div className="contact-form-column glass-panel">
          {submitted ? (
            <div className="success-banner">
              <span className="success-icon">🎉</span>
              <h3>Enquiry Submitted Successfully!</h3>
              <p>
                Thank you, <strong>{formData.name}</strong>. We have received your thesis details. A senior academic advisor will review your request and get back to you within 12 hours.
              </p>
              <button
                type="button"
                className="button button-secondary ripple-btn"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Send A Direct Message</h3>
              <div className="form-row">
                <label>
                  Full Name *
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Lukas Weber"
                  />
                </label>

                <label>
                  Email Address *
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="lukas@student.de"
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  WhatsApp / Phone (Optional)
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+49 151 2345678"
                  />
                </label>

                <label>
                  University / Business School
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    placeholder="TUM / Frankfurt School / LMU"
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Degree Program
                  <select name="programme" value={formData.programme} onChange={handleChange}>
                    <option value="MBA">MBA</option>
                    <option value="EMBA">Executive MBA</option>
                    <option value="M.Sc.">M.Sc. Master of Science</option>
                    <option value="M.A.">M.A. Master of Arts</option>
                    <option value="B.Sc.">B.Sc. / Bachelor</option>
                  </select>
                </label>

                <label>
                  Current Thesis Stage
                  <select name="stage" value={formData.stage} onChange={handleChange}>
                    <option value="topic">Topic Selection & Exposé</option>
                    <option value="literature">Literature Review</option>
                    <option value="methodology">Empirical Methodology (SPSS/R)</option>
                    <option value="writing">Drafting Chapters</option>
                    <option value="final">Final Polish & Defense</option>
                  </select>
                </label>
              </div>

              <label>
                Tell us about your thesis & required support *
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your topic, current challenges, deadline, and desired outcomes..."
                ></textarea>
              </label>

              <button type="submit" className="button button-primary ripple-btn">
                Send Free Consultation Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
