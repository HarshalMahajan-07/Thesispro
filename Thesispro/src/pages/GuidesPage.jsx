import { useState } from 'react'
import { universityGuides } from '../data/contentData'

export function GuidesPage({ onOpenBooking }) {
  const [selectedGuide, setSelectedGuide] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredGuides = universityGuides.filter(
    (g) =>
      g.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.summary.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="page-content guides-page">
      <div className="page-header center">
        <span className="eyebrow">Academic Knowledge Base</span>
        <h1>German University Thesis Guides & Articles</h1>
        <p>Free, practical insights written by senior academic mentors to help you navigate German faculty expectations.</p>
      </div>

      <div className="search-bar-wrapper">
        <input
          type="text"
          className="guide-search-input"
          placeholder="Search guides by topic (e.g. Exposé, Roter Faden, SPSS, Citation)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button type="button" className="clear-search-btn" onClick={() => setSearchTerm('')}>
            ✕ Clear
          </button>
        )}
      </div>

      <div className="guides-grid">
        {filteredGuides.map((guide) => (
          <article key={guide.id} className="guide-card glass-panel hover-card">
            <div className="guide-meta">
              <span className="guide-category">{guide.category}</span>
              <span className="guide-time">⏱️ {guide.readTime}</span>
            </div>
            <h3>{guide.title}</h3>
            <p className="guide-summary">{guide.summary}</p>

            <div className="guide-highlights">
              <strong>Key Takeaways:</strong>
              <ul>
                {guide.highlights.slice(0, 3).map((h, idx) => (
                  <li key={idx}>• {h}</li>
                ))}
              </ul>
            </div>

            <div className="guide-card-footer">
              <span className="target-uni-tag">Target: {guide.targetUni}</span>
              <button
                type="button"
                className="button button-secondary read-btn ripple-btn"
                onClick={() => setSelectedGuide(guide)}
              >
                Read Guide →
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* GUIDE READER MODAL */}
      {selectedGuide && (
        <div className="modal-backdrop" onClick={() => setSelectedGuide(null)}>
          <div className="modal-card glass-modal guide-reader-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close-btn" onClick={() => setSelectedGuide(null)}>
              ✕
            </button>
            <div className="guide-reader-header">
              <span className="guide-category">{selectedGuide.category}</span>
              <h2>{selectedGuide.title}</h2>
              <p className="guide-time">⏱️ {selectedGuide.readTime} • Relevant for: {selectedGuide.targetUni}</p>
            </div>
            <div className="guide-reader-body">
              <p className="lead-paragraph">{selectedGuide.summary}</p>
              <h4>Detailed Breakdown:</h4>
              <ul className="full-highlights-list">
                {selectedGuide.highlights.map((point, idx) => (
                  <li key={idx}>
                    <strong>Step {idx + 1}:</strong> {point}
                  </li>
                ))}
              </ul>
              <div className="reader-callout glass-panel">
                <h4>💡 Need Personalized Assistance With This Step?</h4>
                <p>Our academic advisors can review your draft or outline in a 1:1 advisory session.</p>
                <button
                  type="button"
                  className="button button-primary ripple-btn"
                  onClick={() => {
                    setSelectedGuide(null)
                    onOpenBooking()
                  }}
                >
                  Book 1:1 Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
