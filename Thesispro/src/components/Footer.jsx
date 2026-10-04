import { navItems, whatsappUrl } from '../data/contentData'

const currentYear = 2026

export function Footer({ navigateTo, onOpenBooking }) {
  return (
    <footer className="site-footer-wrapper">
      <div className="footer-content">
        <div className="footer-col brand-col">
          <div className="brand-logo footer-logo">
            <span className="brand-badge">TP</span>
            <span className="brand-text">ThesisPro Germany</span>
          </div>
          <p className="footer-tagline">
            Ethical academic mentoring, empirical research support, and thesis structure advisory for MBA and Master’s students across Germany.
          </p>
          <div className="footer-badges">
            <span className="f-badge">🛡️ Ethical Guidance</span>
            <span className="f-badge">🇩🇪 German Uni Standards</span>
            <span className="f-badge">🔒 100% Confidential</span>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Navigation</h4>
          <ul className="footer-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => navigateTo(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li>
              <button type="button" className="footer-link-btn" onClick={() => navigateTo('services')}>
                Topic & Exposé Guidance
              </button>
            </li>
            <li>
              <button type="button" className="footer-link-btn" onClick={() => navigateTo('services')}>
                Empirical Methodology (SPSS/R)
              </button>
            </li>
            <li>
              <button type="button" className="footer-link-btn" onClick={() => navigateTo('services')}>
                Thesis Structure & Roter Faden
              </button>
            </li>
            <li>
              <button type="button" className="footer-link-btn" onClick={() => navigateTo('services')}>
                Academic Editing & Proofreading
              </button>
            </li>
            <li>
              <button type="button" className="footer-link-btn" onClick={() => navigateTo('services')}>
                Defense & Viva Masterclass
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h4 className="footer-heading">Advisory Hubs</h4>
          <p className="contact-item">📍 Munich: Leopoldstraße 180, 80804 München</p>
          <p className="contact-item">📍 Frankfurt: Mainzer Landstraße 50, 60329 Frankfurt</p>
          <p className="contact-item">✉️ Email: hello@thesispro-germany.de</p>
          <div className="footer-cta-box">
            <button
              type="button"
              className="button button-primary footer-btn ripple-btn"
              onClick={onOpenBooking}
            >
              Book Free Consultation
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary footer-btn ripple-btn"
            >
              WhatsApp Advisory
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© {currentYear} ThesisPro Germany. All rights reserved.</p>
          <p className="disclaimer">
            Academic Integrity Note: ThesisPro Germany provides advisory, proofreading, statistical consulting, and coaching only. We strictly adhere to academic regulations and do NOT offer ghostwriting or pre-written academic work.
          </p>
        </div>
      </div>
    </footer>
  )
}
