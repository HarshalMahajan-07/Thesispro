import { useState } from 'react'

const getTodayString = () => new Date().toISOString().split('T')[0]

export function BookingModal({ isOpen, onClose, initialData, onShowToast }) {
  const [formData, setFormData] = useState(() => ({
    name: '',
    email: '',
    phone: '',
    degree: initialData?.degree || 'MBA',
    university: '',
    stage: initialData?.stage || 'topic',
    message: initialData?.recommendedPackage
      ? `Interested in the ${initialData.recommendedPackage} plan.`
      : '',
    preferredDate: '',
    preferredTime: '14:00',
  }))

  const todayStr = getTodayString()

  if (!isOpen) return null

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    onClose()
    onShowToast(`Thank you, ${formData.name}! Your free consultation request has been logged. We'll reach out within 12 hours via email/WhatsApp.`)
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card glass-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-header">
          <span className="eyebrow">Free 30-Minute Consultation</span>
          <h2>Book Your Thesis Advisory Session</h2>
          <p>Confidential, tailored advice on your topic, methodology, red line, or deadline.</p>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-row">
            <label>
              Full Name *
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Lukas Weber"
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
                placeholder="e.g. lukas@student.tum.de"
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
              University / School
              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleChange}
                placeholder="e.g. TUM, Frankfurt School, LMU"
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Degree Level
              <select name="degree" value={formData.degree} onChange={handleChange}>
                <option value="MBA">MBA (Master of Business Administration)</option>
                <option value="EMBA">Executive MBA</option>
                <option value="M.Sc.">M.Sc. Master of Science</option>
                <option value="M.A.">M.A. Master of Arts</option>
                <option value="B.Sc.">B.Sc. / Bachelor Thesis</option>
              </select>
            </label>

            <label>
              Current Thesis Stage
              <select name="stage" value={formData.stage} onChange={handleChange}>
                <option value="topic">Topic Selection & Exposé</option>
                <option value="literature">Literature Review & Theoretical Framework</option>
                <option value="methodology">Empirical Methodology (SPSS/R/Interviews)</option>
                <option value="writing">Drafting Chapters & Results</option>
                <option value="final">Final Polish & Defense Prep</option>
              </select>
            </label>
          </div>

          <div className="form-row">
            <label>
              Preferred Date
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                min={todayStr}
              />
            </label>

            <label>
              Preferred Time Window
              <select name="preferredTime" value={formData.preferredTime} onChange={handleChange}>
                <option value="10:00">Morning (10:00 - 12:00 CET)</option>
                <option value="14:00">Afternoon (14:00 - 17:00 CET)</option>
                <option value="18:00">Evening (18:00 - 20:00 CET)</option>
              </select>
            </label>
          </div>

          <label>
            Tell Us About Your Thesis & Main Challenges *
            <textarea
              name="message"
              required
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mention your thesis topic, deadline, and specific support needed..."
            ></textarea>
          </label>

          <div className="modal-footer">
            <button type="button" className="button button-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="button button-primary ripple-btn">
              Confirm & Book Free Session
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
