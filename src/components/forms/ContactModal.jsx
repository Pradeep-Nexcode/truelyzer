
"use client"
import { motion, AnimatePresence } from "framer-motion"
import { createContext, useContext, useState } from "react"
import { X, Send, User, Mail, Phone, MessageSquare, Sparkles, CheckCircle } from "lucide-react"

// Create Context for Modal
const ContactModalContext = createContext()

// Hook to use the modal
export const useContactModal = () => {
  const context = useContext(ContactModalContext)
  if (!context) {
    throw new Error('useContactModal must be used within ContactModalProvider')
  }
  return context
}

// Provider Component - Wrap your app with this
export const ContactModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <ContactModalContent isOpen={isOpen} closeModal={closeModal} />
    </ContactModalContext.Provider>
  )
}

// Modal Content Component
const ContactModalContent = ({ isOpen, closeModal }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })

  const services = [
    "Web Development",
    "E-Commerce Solution",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Consulting",
    "Other"
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    
    setTimeout(() => {
      setIsSubmitted(false)
      closeModal()
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-2xl bg-neutral-900 rounded-2xl border border-emerald-500/20 shadow-2xl overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_60%)]"></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10"></div>

              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-20"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{ 
                    y: [0, -30, 0], 
                    opacity: [0, 0.4, 0] 
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-800/80 hover:bg-neutral-700 border border-emerald-500/20 transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>

              {/* Success State */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-900/95 backdrop-blur-md z-20"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                    >
                      <CheckCircle className="w-20 h-20 text-emerald-400 mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Content */}
              <div className="relative p-8 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="mb-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 mb-4"
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-emerald-400"
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(16,185,129,0.5)',
                          '0 0 0 8px rgba(16,185,129,0)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-sm font-medium text-emerald-300">
                      Let's Start Something Great
                    </span>
                  </motion.div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Get in <span className="text-emerald-400">Touch</span>
                  </h2>
                  <p className="text-gray-400">
                    Tell us about your project and we'll bring your vision to life
                  </p>
                </div>

                {/* Form Fields */}
                <div className="space-y-5">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 bg-neutral-800/50 border border-emerald-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:bg-neutral-800/80 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 bg-neutral-800/50 border border-emerald-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:bg-neutral-800/80 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Service Row */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 bg-neutral-800/50 border border-emerald-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:bg-neutral-800/80 transition-all"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-neutral-800/50 border border-emerald-500/20 rounded-xl text-white focus:outline-none focus:border-emerald-500/50 focus:bg-neutral-800/80 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-neutral-900">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 bg-neutral-800/50 border border-emerald-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:bg-neutral-800/80 transition-all resize-none"
                        placeholder="Tell us about your project requirements, timeline, and budget..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center">
                    We respect your privacy. Your information is safe with us.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// Example Components showing how to use the modal
