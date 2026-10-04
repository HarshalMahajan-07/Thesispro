import { useState, useEffect } from 'react'
import { whatsappUrl } from '../data/contentData'
import { IconArrowUp, IconCalendar, IconWhatsApp } from './Icons'

export function FloatingActions({ onOpenBooking }) {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setShowBackToTop(window.scrollY > 350)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="floating-actions-container">
      {showBackToTop && (
        <button
          type="button"
          className="float-btn back-to-top-btn"
          onClick={scrollToTop}
          title="Back to Top"
          aria-label="Back to Top"
        >
          <IconArrowUp size={20} />
        </button>
      )}

      <button
        type="button"
        className="float-btn consult-quick-btn"
        onClick={onOpenBooking}
        title="Book Free Consultation"
      >
        <IconCalendar size={22} />
        <span className="tooltip-text">Book Consultation</span>
      </button>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="float-btn whatsapp-float-btn"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <IconWhatsApp size={24} />
        <span className="wa-badge">Online</span>
        <span className="tooltip-text">WhatsApp Us</span>
      </a>
    </div>
  )
}
