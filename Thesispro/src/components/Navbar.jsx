import { useState, useRef, useEffect } from 'react'

const primaryNavItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'packages', label: 'Pricing' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
]

const moreNavItems = [
  { id: 'calculator', label: 'Thesis Estimator' },
  { id: 'guides', label: 'Academic Guides' },
  { id: 'about', label: 'About & Integrity' },
]

export function Navbar({ currentPage, navigateTo, onOpenBooking }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const moreRef = useRef(null)

  // Close "More" dropdown on outside click
  useEffect(() => {
    function handleOutside(e) {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  function handleNavClick(pageId) {
    navigateTo(pageId)
    setMobileOpen(false)
    setMoreOpen(false)
  }

  const isMoreActive = moreNavItems.some((item) => item.id === currentPage)

  return (
    <header className="site-header">
      <div className="header-container">
        <a
          href="#home"
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('home')
          }}
        >
          <span className="brand-badge">TP</span>
          <span className="brand-text">
            ThesisPro <span className="brand-sub">Germany</span>
          </span>
        </a>

        <button
          className={`mobile-menu-btn ${mobileOpen ? 'is-active' : ''}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`desktop-nav ${mobileOpen ? 'mobile-show' : ''}`}>
          <div className="nav-links">
            {primaryNavItems.map((item) => {
              const isActive = currentPage === item.id
              return (
                <button
                  key={item.id}
                  className={`nav-item-btn ${isActive ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                  type="button"
                >
                  {item.label}
                </button>
              )
            })}

            {/* "More" dropdown for desktop */}
            <div className="nav-more-wrapper" ref={moreRef}>
              <button
                type="button"
                className={`nav-item-btn nav-more-btn ${isMoreActive ? 'active' : ''}`}
                onClick={() => setMoreOpen(!moreOpen)}
                aria-expanded={moreOpen}
              >
                More
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`more-chevron ${moreOpen ? 'rotated' : ''}`}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {moreOpen && (
                <div className="nav-dropdown">
                  {moreNavItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`dropdown-item ${currentPage === item.id ? 'active' : ''}`}
                      onClick={() => handleNavClick(item.id)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Show all items flat on mobile */}
            <div className="mobile-extra-links">
              {moreNavItems.map((item) => (
                <button
                  key={item.id}
                  className={`nav-item-btn ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="nav-actions">
            <button
              className="button button-primary header-cta ripple-btn"
              onClick={() => {
                setMobileOpen(false)
                onOpenBooking()
              }}
              type="button"
            >
              Free Consultation
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
