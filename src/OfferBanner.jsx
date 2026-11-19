import { useEffect } from 'react'

export default function OfferBanner({ count, onClose }) {
  useEffect(() => {
    if (!count) return
    const old = document.title
    document.title = '🔔 New food offered!'
    return () => { document.title = old }
  }, [count])

  if (!count) return null
  return (
    <div
      onClick={onClose}
      style={{ background: '#d62828', color: '#fff', padding: 12,
               fontWeight: 'bold', textAlign: 'center', cursor: 'pointer' }}
    >
      🔔 New food offered! Tap to dismiss
    </div>
  )
}