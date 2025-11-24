'use client'

import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'

function AnimatedSphere() {
  return (
    <Sphere args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#9333EA"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.5}
        transparent
        opacity={0.6}
      />
    </Sphere>
  )
}

export default function Hero() {
  const [showComingSoon, setShowComingSoon] = useState(false)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showComingSoon) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showComingSoon])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-20 md:pb-16">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#9333EA]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#2563EB]/20 rounded-full blur-3xl"></div>
      </div>

      {/* Three.js Canvas - Hidden on mobile for performance */}
      <div className="hidden md:block absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Logo */}
            <div className="flex justify-start mb-6 md:mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-16 h-16 md:w-20 md:h-20 drop-shadow-2xl"
              >
                <Image
                  src="/images/logo-icon.svg"
                  alt="Splito Logo"
                  width={80}
                  height={80}
                  className="w-full h-full"
                  priority
                />
              </motion.div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#2563EB] via-[#9333EA] to-[#FFA500] bg-clip-text text-transparent leading-tight">
              Split Expenses
              <br />
              With Friends
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-10 leading-relaxed">
              Split expenses, chat in real-time, manage friends, track payments, and settle up effortlessly.
              <br className="hidden sm:block" />
              <span className="block sm:inline sm:ml-1 text-sm sm:text-base md:text-lg text-gray-400 mt-2">
                The all-in-one app for expense splitting with friends and groups.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
              <motion.button
                onClick={() => setShowComingSoon(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#2563EB] to-[#9333EA] rounded-xl text-white font-semibold text-base sm:text-lg shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all flex items-center justify-center gap-2 sm:gap-3"
              >
                {/* Play Store Icon */}
                <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span>Download App</span>
              </motion.button>
              <motion.button
                onClick={() => {
                  const featuresSection = document.getElementById('features')
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md rounded-xl text-white font-semibold text-base sm:text-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                Learn More
              </motion.button>
            </div>

            {/* Coming Soon Badge */}
            <div className="mt-6 md:mt-8">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FFA500]/20 text-[#FFA500] rounded-full text-xs sm:text-sm font-medium border border-[#FFA500]/30">
                🚀 Coming Soon to Play Store
              </span>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center lg:justify-end order-first lg:order-last"
          >
            <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
              <Image
                src="/images/hero-mockup.png"
                alt="Splito App Mockup"
                width={1200}
                height={800}
                className="w-full h-auto drop-shadow-2xl rounded-2xl"
                priority
                unoptimized
              />
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#9333EA]/20 to-[#2563EB]/20 blur-3xl -z-10 rounded-2xl transform scale-110"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-1.5 sm:mt-2"
          />
        </div>
      </motion.div>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
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
                  We're working hard to bring you the best expense splitting experience. 
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
    </section>
  )
}

