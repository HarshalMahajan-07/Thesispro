import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { FloatingActions } from './components/FloatingActions'
import { BookingModal } from './components/BookingModal'
import { ServiceDetailModal } from './components/ServiceDetailModal'
import { Toast } from './components/Toast'

import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { PricingPage } from './pages/PricingPage'
import { CalculatorPage } from './pages/CalculatorPage'
import { GuidesPage } from './pages/GuidesPage'
import { ReviewsPage } from './pages/ReviewsPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'

import './App.css'

function getPageFromHash() {
  const hash = window.location.hash.replace('#', '')
  const validPages = ['home', 'services', 'packages', 'calculator', 'guides', 'reviews', 'about', 'contact']
  if (validPages.includes(hash)) {
    return hash
  }
  return 'home'
}

function App() {
  const [currentPage, setCurrentPage] = useState(() => getPageFromHash())
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [bookingInitialData, setBookingInitialData] = useState(null)
  const [selectedService, setSelectedService] = useState(null)
  const [toastMessage, setToastMessage] = useState('')

  // Hash-based routing listener for back/forward browser button support
  useEffect(() => {
    function handleHashChange() {
      const p = getPageFromHash()
      setCurrentPage(p)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  function navigateTo(pageId) {
    setCurrentPage(pageId)
    window.location.hash = pageId
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleOpenBooking(data = null) {
    setBookingInitialData(data)
    setIsBookingOpen(true)
  }

  function handleCloseBooking() {
    setIsBookingOpen(false)
    setBookingInitialData(null)
  }

  function handleShowToast(msg) {
    setToastMessage(msg)
  }

  return (
    <div className="site-shell">
      <Navbar
        currentPage={currentPage}
        navigateTo={navigateTo}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main className="main-content-container">
        {currentPage === 'home' && (
          <HomePage
            navigateTo={navigateTo}
            onOpenBooking={() => handleOpenBooking()}
            onSelectService={(service) => setSelectedService(service)}
            onOpenBookingWithData={(data) => handleOpenBooking(data)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onSelectService={(service) => setSelectedService(service)}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPage === 'packages' && (
          <PricingPage
            onOpenBooking={() => handleOpenBooking()}
            onOpenBookingWithData={(data) => handleOpenBooking(data)}
          />
        )}

        {currentPage === 'calculator' && (
          <CalculatorPage
            onOpenBookingWithData={(data) => handleOpenBooking(data)}
          />
        )}

        {currentPage === 'guides' && (
          <GuidesPage onOpenBooking={() => handleOpenBooking()} />
        )}

        {currentPage === 'reviews' && (
          <ReviewsPage onOpenBooking={() => handleOpenBooking()} />
        )}

        {currentPage === 'about' && (
          <AboutPage onOpenBooking={() => handleOpenBooking()} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onShowToast={handleShowToast} />
        )}
      </main>

      <Footer navigateTo={navigateTo} onOpenBooking={() => handleOpenBooking()} />

      <FloatingActions onOpenBooking={() => handleOpenBooking()} />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialData={bookingInitialData}
        onShowToast={handleShowToast}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenBooking={() => handleOpenBooking()}
      />

      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  )
}

export default App
