export function ServiceDetailModal({ service, onClose, onOpenBooking }) {
  if (!service) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card glass-modal service-detail-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="service-modal-header">
          <span className="service-big-icon">{service.icon}</span>
          <div>
            <span className="rec-badge">{service.badge}</span>
            <h2>{service.title}</h2>
            <p className="service-duration">⏱️ Estimated Duration: {service.duration}</p>
          </div>
        </div>

        <div className="service-modal-body">
          <p className="service-full-text">{service.fullDesc}</p>

          <div className="deliverables-box">
            <h4>Key Deliverables & Included Support:</h4>
            <ul>
              {service.deliverables.map((item, idx) => (
                <li key={idx}>
                  <span className="check-icon">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="suitable-box">
            <strong>Who this is best for:</strong>
            <p>{service.suitableFor}</p>
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="button button-secondary" onClick={onClose}>
            Back to Services
          </button>
          <button
            type="button"
            className="button button-primary ripple-btn"
            onClick={() => {
              onClose()
              onOpenBooking()
            }}
          >
            Book This Service
          </button>
        </div>
      </div>
    </div>
  )
}
