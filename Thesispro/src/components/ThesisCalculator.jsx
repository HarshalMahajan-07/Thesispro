import { useState } from 'react'

export function ThesisCalculator({ onOpenBookingWithData }) {
  const [degree, setDegree] = useState('MBA')
  const [uniType, setUniType] = useState('business-school')
  const [stage, setStage] = useState('topic')
  const [timeline, setTimeline] = useState('3-4')

  // Calculate recommendation logic
  function calculateRecommendation() {
    let hours = 4
    let recommendedPackage = 'Starter Guidance'
    let price = '€290'
    let intensity = 'Moderate'

    if (stage === 'methodology' || stage === 'writing') {
      hours += 4
      recommendedPackage = 'Comprehensive Mentorship'
      price = '€790'
    }

    if (degree === 'MBA' || degree === 'EMBA') {
      hours += 2
    }

    if (timeline === 'urgent') {
      recommendedPackage = 'Express Review & Polish'
      price = '€450'
      intensity = 'High Priority Express'
    } else if (stage === 'final') {
      recommendedPackage = 'Express Review & Polish'
      price = '€450'
    } else if (stage !== 'topic') {
      recommendedPackage = 'Comprehensive Mentorship'
      price = '€790'
    }

    const milestones = [
      { step: '1. Diagnostic & Strategy', detail: 'Topic validation, research gap framing & Red Line blueprint.' },
      { step: '2. Research Execution', detail: stage === 'methodology' ? 'Methodology design, SPSS/R coding & data visualization.' : 'Literature synthesis & conceptual model alignment.' },
      { step: '3. Draft Feedback & Polish', detail: 'Detailed academic editing, style enhancement & citation check.' },
      { step: '4. Defense Readiness', detail: 'Colloquium slide deck review & mock viva questioning.' },
    ]

    return { hours, recommendedPackage, price, intensity, milestones }
  }

  const result = calculateRecommendation()

  function handleProceedToBooking() {
    onOpenBookingWithData({
      degree,
      uniType,
      stage,
      timeline,
      recommendedPackage: result.recommendedPackage,
    })
  }

  return (
    <div className="calculator-card glass-panel">
      <div className="calculator-header">
        <span className="calc-badge">⚡ Interactive Thesis Roadmap Estimator</span>
        <h3>Tailor Your Thesis Support Plan</h3>
        <p>Select your thesis details to receive an instant estimated timeline & mentorship recommendation.</p>
      </div>

      <div className="calculator-grid">
        <div className="calc-inputs">
          <div className="input-group">
            <label htmlFor="calc-degree">Degree Program</label>
            <select
              id="calc-degree"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="calc-select"
            >
              <option value="MBA">MBA (Master of Business Administration)</option>
              <option value="EMBA">Executive MBA</option>
              <option value="M.Sc.">M.Sc. (Master of Science)</option>
              <option value="M.A.">M.A. (Master of Arts)</option>
              <option value="B.Sc.">B.Sc. / Bachelor Thesis</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="calc-uni">University Type in Germany</label>
            <select
              id="calc-uni"
              value={uniType}
              onChange={(e) => setUniType(e.target.value)}
              className="calc-select"
            >
              <option value="business-school">Private Business School (Frankfurt School, ESMT, WHU, HHL)</option>
              <option value="tu">Technical University (TUM, RWTH Aachen, TU Berlin, KIT)</option>
              <option value="state-uni">State University (LMU, Mannheim, Heidelberg, Cologne)</option>
              <option value="fh">Fachhochschule (FH / University of Applied Sciences)</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="calc-stage">Current Thesis Stage</label>
            <select
              id="calc-stage"
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              className="calc-select"
            >
              <option value="topic">Topic Selection & Exposé Drafting</option>
              <option value="literature">Literature Review & Theoretical Framework</option>
              <option value="methodology">Empirical Data Collection & Methodology (SPSS/R/Interviews)</option>
              <option value="writing">Drafting Main Chapters & Results Discussion</option>
              <option value="final">Final Draft Polish, Proofreading & Defense Prep</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="calc-timeline">Time Left Until Deadline</label>
            <select
              id="calc-timeline"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="calc-select"
            >
              <option value="5+">5+ Months (Spacious timeline)</option>
              <option value="3-4">3 - 4 Months (Standard timeline)</option>
              <option value="1-2">1 - 2 Months (Focused sprint needed)</option>
              <option value="urgent">Urgent (&lt; 4 Weeks left)</option>
            </select>
          </div>
        </div>

        <div className="calc-result-box">
          <div className="result-header">
            <h4>Your Customized Guidance Profile</h4>
            <span className="rec-badge">{result.recommendedPackage}</span>
          </div>

          <div className="metrics-row">
            <div className="metric">
              <span className="metric-val">{result.hours} hrs</span>
              <span className="metric-lbl">Est. 1:1 Mentoring Needed</span>
            </div>
            <div className="metric">
              <span className="metric-val">{result.price}</span>
              <span className="metric-lbl">Est. Package Investment</span>
            </div>
          </div>

          <div className="milestones-preview">
            <h5>Recommended Milestone Roadmap:</h5>
            <ul>
              {result.milestones.map((m) => (
                <li key={m.step}>
                  <strong>{m.step}:</strong> {m.detail}
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className="button button-primary calc-cta-btn ripple-btn"
            onClick={handleProceedToBooking}
          >
            Request This Tailored Plan (Free Call)
          </button>
        </div>
      </div>
    </div>
  )
}
