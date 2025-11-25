'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Twitter, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0F0F1E]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-3 sm:mb-4">
              <Image
                src="/images/logo.svg"
                alt="Splito Logo"
                width={170}
                height={48}
                className="w-32 sm:w-40 md:w-[170px] h-auto"
                priority
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The smart way to split expenses and manage payments with friends.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Download & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Get the App</h3>
            <div className="space-y-3">
              {/* Play Store Button - Disabled for now */}
              <button
                disabled
                className="w-full px-4 py-2.5 sm:py-3 bg-gradient-to-r from-[#2563EB] to-[#9333EA] rounded-lg text-white font-semibold opacity-50 cursor-not-allowed flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span className="truncate">Coming Soon to Play Store</span>
              </button>

              {/* Social Links */}
              <div className="flex space-x-3 sm:space-x-4 pt-2">
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} Splito. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 md:mt-0">
            Made with ❤️ for easy expense splitting
          </p>
        </div>
      </div>
    </footer>
  )
}

