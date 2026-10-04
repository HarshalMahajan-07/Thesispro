import { useState } from 'react'
import { successStories } from '../data/contentData'
import { IconStar, IconCheck } from '../components/Icons'

export function ReviewsPage({ onOpenBooking }) {
  const [activeTag, setActiveTag] = useState('All')

  const tags = ['All', 'Topic & Methodology', 'Empirical & Data Analysis', 'Editing & Structure', 'Defense & Mentorship']

  const filteredStories = activeTag === 'All'
    ? successStories
    : successStories.filter((s) => s.tag === activeTag)

  return (
    <div className="page-content reviews-page">
      <div className="page-header center">
        <span className="eyebrow">Student Testimonials</span>
        <h1>Proven Student Results Across Germany</h1>
        <p>Read genuine success stories from MBA and Master’s students who achieved academic excellence with ThesisPro Germany.</p>
      </div>

      <div className="reviews-summary-bar glass-panel">
        <div className="summary-stat">
          <span className="stat-big">4.9 / 5.0</span>
          <span className="stat-lbl">Average Student Satisfaction</span>
        </div>
        <div className="summary-stat">
          <span className="stat-big">450+</span>
          <span className="stat-lbl">Theses Successfully Defended</span>
        </div>
        <div className="summary-stat">
          <span className="stat-big">100%</span>
          <span className="stat-lbl">Ethical & Confidential Guarantee</span>
        </div>
      </div>

      <div className="filter-tab-bar">
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            className={`tab-btn ${activeTag === t ? 'active' : ''}`}
            onClick={() => setActiveTag(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="reviews-full-grid">
        {filteredStories.map((story) => (
          <div key={story.id} className="review-full-card glass-panel hover-card">
            <div className="review-card-header">
              <div className="student-info">
                <div className="student-avatar-lg">{story.name.charAt(0)}</div>
                <div>
                  <h3>{story.name}</h3>
                  <span className="student-degree">{story.degree}</span>
                  <span className="student-uni">{story.university}</span>
                </div>
              </div>
              <div className="rating-stars">
                {[...Array(story.rating || 5)].map((_, i) => (
                  <IconStar key={i} size={16} />
                ))}
              </div>
            </div>

            <div className="topic-badge-row">
              <span className="thesis-topic-label">Thesis Topic:</span>
              <p className="thesis-topic">{story.topic}</p>
            </div>

            <blockquote className="quote-body">"{story.quote}"</blockquote>

            <div className="review-card-footer">
              <span className="tag-pill">{story.tag}</span>
              <span className="verified-badge"><IconCheck size={14} /> Verified Graduate</span>
            </div>
          </div>
        ))}
      </div>

      <div className="reviews-cta-box glass-panel center">
        <h2>Want To Be Our Next Success Story?</h2>
        <p>Schedule your free 30-minute consultation today to discuss your thesis requirements with a senior advisor.</p>
        <button type="button" className="button button-primary ripple-btn" onClick={onOpenBooking}>
          Book Free Consultation
        </button>
      </div>
    </div>
  )
}
