'use client'

import { motion } from 'framer-motion'
import { UserPlus, Receipt, DollarSign, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Create a Group',
    description: 'Start by creating a group and adding your friends. You can create multiple groups for different occasions.',
    step: '01',
  },
  {
    icon: Receipt,
    title: 'Add Expenses',
    description: 'Add expenses to your group. Split them equally or customize how much each person should pay.',
    step: '02',
  },
  {
    icon: DollarSign,
    title: 'Track Payments',
    description: 'See who paid and who owes. Upload payment screenshots as proof and mark payments as cleared.',
    step: '03',
  },
  {
    icon: CheckCircle,
    title: 'Settle Up',
    description: 'Get reminders for pending payments. View your dashboard to see all your balances and payment status.',
    step: '04',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 px-4 bg-gradient-to-r from-[#2563EB] to-[#9333EA] bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Get started in just a few simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#2563EB] to-[#9333EA] rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg z-10">
                  {step.step}
                </div>

                {/* Card */}
                <div className="p-5 sm:p-6 bg-[#1A1A2E]/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all h-full pt-7 sm:pt-8">
                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-[#9333EA] to-[#A855F7] flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (not for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#9333EA] to-transparent" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

