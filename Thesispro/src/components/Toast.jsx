import { useEffect } from 'react'

export function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return
    const timer = setTimeout(() => {
      onClose()
    }, 4500)
    return () => clearTimeout(timer)
  }, [message, onClose])

  if (!message) return null

  return (
    <div className="toast-notification">
      <span className="toast-icon">✨</span>
      <span className="toast-msg">{message}</span>
      <button type="button" className="toast-close" onClick={onClose}>
        ✕
      </button>
    </div>
  )
}
