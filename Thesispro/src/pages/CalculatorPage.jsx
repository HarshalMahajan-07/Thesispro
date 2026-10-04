import { ThesisCalculator } from '../components/ThesisCalculator'

export function CalculatorPage({ onOpenBookingWithData }) {
  return (
    <div className="page-content calculator-page">
      <div className="page-header center">
        <span className="eyebrow">Interactive Planning Tool</span>
        <h1>Thesis Timeline & Support Estimator</h1>
        <p>Estimate your required advisory hours, milestone roadmap, and recommended mentorship strategy based on German university standards.</p>
      </div>

      <ThesisCalculator onOpenBookingWithData={onOpenBookingWithData} />

      {/* GERMAN ACADEMIC STANDARDS EXPLANATION */}
      <section className="section standard-info-section">
        <div className="section-header">
          <span className="eyebrow">German Higher Education Framework</span>
          <h2>Understanding Thesis Requirements in Germany</h2>
          <p>Key standards set by the German Rectors' Conference (HRK) and major faculty regulations.</p>
        </div>

        <div className="info-cards-grid">
          <div className="info-card glass-panel">
            <h4>📌 Credit Points & Scope (ECTS)</h4>
            <p>
              Master theses in Germany typically range between <strong>15 to 30 ECTS credits</strong>, translating to roughly 450 to 900 total working hours. Recommended length is usually 50–80 pages for MBA/M.Sc. theses.
            </p>
          </div>

          <div className="info-card glass-panel">
            <h4>📌 The "Roter Faden" Standard</h4>
            <p>
              German professors prioritize structural cohesion (<em>Roter Faden</em>). Every research question must directly connect to your theoretical framework, empirical findings, and final recommendation.
            </p>
          </div>

          <div className="info-card glass-panel">
            <h4>📌 Empirical Rigor</h4>
            <p>
              Whether at TUM, LMU, or Frankfurt School, empirical theses require explicit methodology documentation: clear sampling logic, interview coding schemes, or reproducible statistical scripts (R/SPSS).
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
