'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </motion.button>
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#2563EB] to-[#9333EA] bg-clip-text text-transparent">
              Privacy Policy for Splito
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              Effective Date: November 25, 2025
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <div className="bg-[#1A1A2E]/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 md:p-10 space-y-8">
              
              <section>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Splito (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the Splito mobile application (&quot;App&quot;). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our App.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">1. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-white mt-6 mb-3">1.1 Account Information</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When you create an account, we collect:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Email address (required for account creation)</li>
                  <li>Display name (required)</li>
                  <li>Username (required)</li>
                  <li>Password (encrypted and stored securely by Firebase Authentication)</li>
                  <li>Country code and currency code (for expense calculations)</li>
                  <li>Account creation timestamp</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">1.2 Authentication Data</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>If you sign in with Google, we collect your Google account email and display name</li>
                  <li>If you sign in with phone number, we collect your phone number for verification</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">1.3 User-Generated Content</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We store the following data that you create while using the App:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Groups: Group names, descriptions, and member lists</li>
                  <li>Expenses: Expense amounts, descriptions, who paid, and how expenses are split</li>
                  <li>Payments: Payment status, payment screenshots (if uploaded)</li>
                  <li>Messages: Group chat messages and private chat messages</li>
                  <li>Polls: Poll questions, options, and your votes</li>
                  <li>Friend requests: Friend request status and relationships</li>
                  <li>Notifications: App notifications related to your activities</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">1.4 Device and Usage Information</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Device information (for push notifications)</li>
                  <li>App usage data (for functionality and error tracking)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use the collected information to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Provide core services: Enable expense splitting, group management, and messaging features</li>
                  <li>Authenticate users: Verify your identity and manage account access</li>
                  <li>Facilitate communication: Enable group chats and private messaging between users</li>
                  <li>Send notifications: Notify you about friend requests, expense updates, payment reminders, and messages</li>
                  <li>Improve the App: Analyze usage patterns to enhance user experience</li>
                  <li>Maintain security: Protect against fraud and unauthorized access</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">3. Data Storage and Security</h2>
                
                <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.1 Data Storage</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                  <li>All data is stored securely on Google Firebase servers (Firestore database)</li>
                  <li>User authentication is handled by Firebase Authentication</li>
                  <li>Profile pictures and payment screenshots are stored in Firebase Storage</li>
                  <li>Data is encrypted in transit and at rest</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.2 Security Measures</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Passwords are encrypted and never stored in plain text</li>
                  <li>Access to your data is controlled through Firebase security rules</li>
                  <li>Only authenticated users can access their own data and data shared with them</li>
                  <li>We implement industry-standard security practices to protect your information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">4. Data Sharing</h2>
                
                <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.1 With Other Users</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                  <li>Your display name, username, and profile picture are visible to other users who search for you or are in your groups</li>
                  <li>Group data (expenses, payments, messages) is visible to all members of that group</li>
                  <li>Private messages are only visible to you and the recipient</li>
                  <li>Friend relationships are visible to both parties</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.2 With Third-Party Services</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use the following third-party services that may process your data:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                  <li>
                    <strong>Google Firebase</strong> (Authentication, Firestore, Storage, Cloud Messaging)
                    <br />
                    <span className="text-gray-400 text-sm">Used for: User authentication, data storage, push notifications</span>
                    <br />
                    <span className="text-gray-400 text-sm">Privacy Policy: </span>
                    <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm underline">
                      https://firebase.google.com/support/privacy
                    </a>
                  </li>
                  <li>
                    <strong>Google Sign-In</strong>
                    <br />
                    <span className="text-gray-400 text-sm">Used for: Social authentication</span>
                    <br />
                    <span className="text-gray-400 text-sm">Privacy Policy: </span>
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm underline">
                      https://policies.google.com/privacy
                    </a>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.3 We Do NOT:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Sell your personal data to third parties</li>
                  <li>Share your data with advertisers without your consent</li>
                  <li>Use your data for purposes other than providing the App&apos;s services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">5. Your Rights and Choices</h2>
                
                <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.1 Access and Update</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                  <li>You can view and update your profile information (display name, username, country, currency) in the App settings</li>
                  <li>You can delete your account, which will remove your personal data (subject to data retention policies)</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.2 Data Deletion</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                  <li>You can delete groups you created (which will delete associated expenses and messages)</li>
                  <li>You can delete individual messages you sent</li>
                  <li>You can remove friends and withdraw friend requests</li>
                  <li>To delete your account, contact us at the email address below</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.3 Push Notifications</h3>
                <p className="text-gray-300 leading-relaxed ml-4">
                  You can control push notification settings through your device settings
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">6. Data Retention</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>We retain your data as long as your account is active</li>
                  <li>If you delete your account, we will delete your personal data within 30 days</li>
                  <li>Some data may be retained longer if required by law or for legitimate business purposes</li>
                  <li>Group data may persist even after you leave a group (as it belongs to the group, not individual members)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">7. Children&apos;s Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">8. International Data Transfers</h2>
                <p className="text-gray-300 leading-relaxed">
                  Your data may be transferred to and stored on servers located outside your country of residence. By using our App, you consent to the transfer of your data to these servers, which may be located in different countries.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">9. Changes to This Privacy Policy</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Posting the new Privacy Policy on this page</li>
                  <li>Updating the &quot;Effective Date&quot; at the top of this Privacy Policy</li>
                  <li>Sending you a notification through the App (for significant changes)</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  You are advised to review this Privacy Policy periodically for any changes. Changes are effective when posted on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">10. Contact Us</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                </p>
                <p className="text-gray-300 leading-relaxed ml-4">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info.appsetz@gmail.com" className="text-blue-400 hover:text-blue-300 underline">
                    info.appsetz@gmail.com
                  </a>
                </p>
                <p className="text-gray-300 leading-relaxed mt-4 ml-4">
                  We will respond to your inquiry within 30 days.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">11. Consent</h2>
                <p className="text-gray-300 leading-relaxed">
                  By using our App, you consent to our Privacy Policy and agree to its terms. If you do not agree with this policy, please do not use our App.
                </p>
              </section>

              <div className="pt-6 border-t border-white/10 mt-8">
                <p className="text-gray-400 text-sm">
                  Last Updated: November 25, 2025
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

