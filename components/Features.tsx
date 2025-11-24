'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Wallet, 
  Bell, 
  Receipt, 
  MessageCircle,
  UserPlus,
  BarChart3,
  Camera,
  Search,
  Shield,
  Smartphone,
  Zap,
  Settings,
  TrendingUp,
  Calendar,
  FileText
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Create & Manage Groups',
    description: 'Create groups with friends, family, or colleagues. Add/remove members, edit group details, and manage multiple groups effortlessly.',
    color: 'from-[#2563EB] to-[#3B82F6]',
    category: 'Group Management'
  },
  {
    icon: Receipt,
    title: 'Split Expenses Smartly',
    description: 'Add expenses with description, category, and amount. Split equally or customize amounts per person. Track who paid and who owes.',
    color: 'from-[#9333EA] to-[#A855F7]',
    category: 'Expense Management'
  },
  {
    icon: Wallet,
    title: 'Track Payments',
    description: 'Mark payments as cleared, view payment status in real-time, track payment history, and see who has paid or still owes.',
    color: 'from-[#FFA500] to-[#FFB84D]',
    category: 'Expense Management'
  },
  {
    icon: BarChart3,
    title: 'Dashboard Overview',
    description: 'View total cleared, total to pay, total lent, and net balance. See group-wise payment status and balances at a glance.',
    color: 'from-[#2563EB] to-[#9333EA]',
    category: 'Dashboard'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Get real-time notifications for friend requests, payment reminders, new expenses, messages, and polls. Never miss important updates.',
    color: 'from-[#9333EA] to-[#C084FC]',
    category: 'Notifications'
  },
  {
    icon: UserPlus,
    title: 'Friend Management',
    description: 'Search users by username or email, send/accept/reject friend requests, manage friend list, and view friend details easily.',
    color: 'from-[#2563EB] to-[#60A5FA]',
    category: 'Social'
  },
  {
    icon: MessageCircle,
    title: 'Real-time Chat',
    description: 'Group chat and one-to-one messaging with real-time updates. Reply to messages, view history, and get unread message indicators.',
    color: 'from-[#10B981] to-[#34D399]',
    category: 'Communication'
  },
  {
    icon: FileText,
    title: 'Create Polls',
    description: 'Create expense polls in group chats. Vote on payments, change votes, and see real-time poll updates with vote counts.',
    color: 'from-[#F59E0B] to-[#FBBF24]',
    category: 'Communication'
  },
  {
    icon: Search,
    title: 'Global Search',
    description: 'Search groups, friends, and expenses instantly. Get real-time search suggestions and filter results by category or amount.',
    color: 'from-[#8B5CF6] to-[#A78BFA]',
    category: 'Search'
  },
  {
    icon: Camera,
    title: 'Payment Proof',
    description: 'Upload screenshots of payment transactions as proof. Keep a complete record of all your payments with visual evidence.',
    color: 'from-[#EC4899] to-[#F472B6]',
    category: 'Expense Management'
  },
  {
    icon: Shield,
    title: 'Secure Authentication',
    description: 'Sign up with email/password or Google. Auto-login with session persistence, secure profile management, and privacy controls.',
    color: 'from-[#06B6D4] to-[#22D3EE]',
    category: 'Security'
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform',
    description: 'Available on Android and iOS with beautiful Material Design 3 UI. Light & dark themes, smooth animations, and responsive layouts.',
    color: 'from-[#6366F1] to-[#818CF8]',
    category: 'Platform'
  },
  {
    icon: Zap,
    title: 'Real-time Updates',
    description: 'All changes sync in real-time across devices. Groups, expenses, payments, chats, and notifications update instantly.',
    color: 'from-[#F97316] to-[#FB923C]',
    category: 'Performance'
  },
  {
    icon: Settings,
    title: 'Customizable Profile',
    description: 'Edit profile details, set display name and username, choose country code and currency, and toggle between light/dark themes.',
    color: 'from-[#14B8A6] to-[#5EEAD4]',
    category: 'User Profile'
  },
  {
    icon: TrendingUp,
    title: 'Automatic Calculations',
    description: 'Smart balance calculations for all expenses. Automatic updates when payments are marked, with remaining balance tracking.',
    color: 'from-[#EF4444] to-[#F87171]',
    category: 'Expense Management'
  },
  {
    icon: Calendar,
    title: 'Expense History',
    description: 'View all expenses with dates, categories, and amounts. Search and filter expenses, and see complete payment history.',
    color: 'from-[#3B82F6] to-[#60A5FA]',
    category: 'Expense Management'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
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
            Powerful Features
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            A complete expense splitting solution with real-time chat, smart notifications, friend management, and much more
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 8) * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="h-full p-5 sm:p-6 bg-[#1A1A2E]/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover effect gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

