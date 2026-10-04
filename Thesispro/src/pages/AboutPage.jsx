import { teamMembers, whatsappUrl } from '../data/contentData'

export function AboutPage({ onOpenBooking }) {
  return (
    <div className="page-content about-page">
      <div className="page-header center">
        <span className="eyebrow">About ThesisPro Germany</span>
        <h1>Empowering Academic Excellence Through Ethical Advisory</h1>
        <p>Founded by Ph.D. scholars and senior academic mentors to provide high-caliber, ethical thesis guidance to MBA and Master's students across Germany.</p>
      </div>

      {/* THREE PILLARS OF INTEGRITY */}
      <section className="section pillars-section">
        <div className="section-header center">
          <span className="eyebrow">Our Core Principles</span>
          <h2>The 3 Pillars of Our Academic Promise</h2>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card glass-panel hover-card">
            <span className="pillar-icon">🛡️</span>
            <h3>1. Strict Academic Ethics</h3>
            <p>We do not ghostwrite or generate content. Our role is to mentor, coach, clarify methodology, and edit. You maintain 100% authorship and intellectual ownership of your thesis.</p>
          </div>

          <div className="pillar-card glass-panel hover-card">
            <span className="pillar-icon">🇩🇪</span>
            <h3>2. German Faculty Standards</h3>
            <p>Our advisors hold doctorates or master’s degrees from top German universities (TUM, LMU, Frankfurt School). We intimately understand German academic norms, from the <em>Roter Faden</em> to Exposé Defense.</p>
          </div>

          <div className="pillar-card glass-panel hover-card">
            <span className="pillar-icon">🤝</span>
            <h3>3. Transparent 1:1 Advisory</h3>
            <p>No generic templates or automated bots. You work directly with a dedicated academic mentor in confidential 1:1 video calls tailored to your exact degree requirements.</p>
          </div>
        </div>
      </section>

      {/* ADVISORY TEAM */}
      <section className="section team-section">
        <div className="section-header center">
          <span className="eyebrow">Academic Advisory Team</span>
          <h2>Meet Our Senior Advisors & Mentors</h2>
          <p>Experienced Ph.D. scholars, statisticians, and academic editors dedicated to your success.</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="team-card glass-panel hover-card">
              <div className="team-avatar">{member.name.split(' ').map((n) => n[0]).join('')}</div>
              <h3>{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p className="team-bio">{member.bio}</p>
              <div className="team-specialty">
                <strong>Focus:</strong> {member.specialty}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="banner-cta-box glass-panel center">
        <h2>Have Questions About Our Ethical Mentorship?</h2>
        <p>Book a free 30-minute consultation or send us a message on WhatsApp to speak directly with an advisor.</p>
        <div className="cta-btn-row center">
          <button type="button" className="button button-primary ripple-btn" onClick={onOpenBooking}>
            Book Free Consultation
          </button>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button-secondary ripple-btn">
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  )
}
