'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F0F1E] via-[#1A1A2E] to-[#2D1B4E]">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

