'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [activeNav, setActiveNav] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when clicking outside or on a link
    if (mobileMenuOpen || showComingSoon) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen, showComingSoon])

  const handleNavClick = (navId: string) => {
    setActiveNav(navId)
    setTimeout(() => setActiveNav(null), 500)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen || activeNav
          ? 'bg-[#1A1A2E]/98 backdrop-blur-md shadow-lg'
          : 'bg-[#1A1A2E]/80 backdrop-blur-sm'
      }`}
    >
      {/* Background Theme Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/10 via-[#9333EA]/10 to-[#FFA500]/10 pointer-events-none"></div>
      
      {/* Enhanced Background Theme Effect on Nav Click */}
      <AnimatePresence>
        {activeNav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/30 via-[#9333EA]/30 to-[#FFA500]/30 pointer-events-none"
          />
        )}
      </AnimatePresence>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="flex items-center flex-shrink-0">
            {/* Full logo with text - visible on all screens */}
            <Image
              src="/images/logo.svg"
              alt="Splito Logo"
              width={170}
              height={48}
              className="w-24 sm:w-32 md:w-[170px] h-auto"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative">
            {pathname === '/' ? (
              <>
                <a 
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('features')
                    const featuresSection = document.getElementById('features')
                    if (featuresSection) {
                      featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="text-gray-300 hover:text-white transition-all relative group px-4 py-2 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm"
                >
                  Features
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#9333EA] group-hover:w-full transition-all duration-300"></span>
                </a>
                <a 
                  href="#how-it-works"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('how-it-works')
                    const howItWorksSection = document.getElementById('how-it-works')
                    if (howItWorksSection) {
                      howItWorksSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="text-gray-300 hover:text-white transition-all relative group px-4 py-2 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm"
                >
                  How It Works
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#9333EA] group-hover:w-full transition-all duration-300"></span>
                </a>
              </>
            ) : null}
            <Link
              href="/privacy"
              onClick={() => handleNavClick('privacy')}
              className={`text-gray-300 hover:text-white transition-all relative group px-4 py-2 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm ${
                pathname === '/privacy' ? 'text-white bg-white/10 backdrop-blur-sm' : ''
              }`}
            >
              Privacy Policy
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#9333EA] transition-all duration-300 ${
                pathname === '/privacy' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <button 
              onClick={() => {
                handleNavClick('get-started')
                setShowComingSoon(true)
              }}
              className="px-6 py-2 bg-gradient-to-r from-[#2563EB] to-[#9333EA] rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 text-gray-300 hover:text-white transition-all active:scale-95 relative z-[70] rounded-lg ${
              mobileMenuOpen 
                ? 'bg-gradient-to-r from-[#2563EB]/20 to-[#9333EA]/20 backdrop-blur-sm text-white' 
                : 'hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-14 sm:top-16 bg-gradient-to-br from-[#1A1A2E] via-[#2D1B4E] to-[#1A1A2E] backdrop-blur-md z-[60]"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Theme Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/20 via-[#9333EA]/20 to-[#FFA500]/20 pointer-events-none"></div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col px-4 pt-6 pb-8 space-y-4 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {pathname === '/' && (
                <>
                  <a
                    href="#features"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick('features')
                      setMobileMenuOpen(false)
                      const featuresSection = document.getElementById('features')
                      if (featuresSection) {
                        setTimeout(() => {
                          featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }, 100)
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-all py-3 px-4 text-lg rounded-lg border-b border-white/10 hover:bg-gradient-to-r hover:from-[#2563EB]/20 hover:to-[#9333EA]/20 active:bg-gradient-to-r active:from-[#2563EB]/30 active:to-[#9333EA]/30 backdrop-blur-sm"
                  >
                    Features
                  </a>
                  <a
                    href="#how-it-works"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick('how-it-works')
                      setMobileMenuOpen(false)
                      const howItWorksSection = document.getElementById('how-it-works')
                      if (howItWorksSection) {
                        setTimeout(() => {
                          howItWorksSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }, 100)
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-all py-3 px-4 text-lg rounded-lg border-b border-white/10 hover:bg-gradient-to-r hover:from-[#2563EB]/20 hover:to-[#9333EA]/20 active:bg-gradient-to-r active:from-[#2563EB]/30 active:to-[#9333EA]/30 backdrop-blur-sm"
                  >
                    How It Works
                  </a>
                </>
              )}
              <Link
                href="/privacy"
                onClick={() => {
                  handleNavClick('privacy')
                  setMobileMenuOpen(false)
                }}
                className={`text-gray-300 hover:text-white transition-all py-3 px-4 text-lg rounded-lg border-b border-white/10 hover:bg-gradient-to-r hover:from-[#2563EB]/20 hover:to-[#9333EA]/20 active:bg-gradient-to-r active:from-[#2563EB]/30 active:to-[#9333EA]/30 backdrop-blur-sm ${
                  pathname === '/privacy' ? 'text-white font-semibold bg-gradient-to-r from-[#2563EB]/20 to-[#9333EA]/20' : ''
                }`}
              >
                Privacy Policy
              </Link>
              <button
                onClick={() => {
                  handleNavClick('get-started')
                  setMobileMenuOpen(false)
                  setTimeout(() => {
                    setShowComingSoon(true)
                  }, 200)
                }}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-[#2563EB] to-[#9333EA] rounded-lg text-white font-semibold text-lg w-full active:scale-95 transition-all shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105"
              >
                Get Started
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowComingSoon(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#1A1A2E] border border-white/20 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowComingSoon(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#2563EB] to-[#9333EA] rounded-full flex items-center justify-center"
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
                
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-[#2563EB] to-[#9333EA] bg-clip-text text-transparent">
                  Coming Soon!
                </h2>
                
                <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                  We&apos;re working hard to bring you the best expense splitting experience. 
                  The Splito app will be available on the Play Store very soon!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <motion.button
                    onClick={() => setShowComingSoon(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-[#2563EB] to-[#9333EA] rounded-lg text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-purple-500/50 transition-all"
                  >
                    Got it!
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

