"use client";
import React, { useState } from "react";
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');

  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Portfolio", link: "#portfolio" }
  ];

  const services = [
    { name: "Web Development", link: "#web-dev" },
    { name: "E-Commerce", link: "#ecommerce" },
    { name: "Mobile Apps", link: "#mobile" },
    { name: "UI/UX Design", link: "#design" }
  ];

  const socialLinks = [
    { icon: Instagram, link: "https://www.instagram.com/truelyzer", label: "Instagram", color: "hover:bg-pink-500" },
    { icon: Linkedin, link: "https://www.linkedin.com/company/truelyzer", label: "LinkedIn", color: "hover:bg-blue-500" },
    { icon: Facebook, link: "https://www.facebook.com/truelyzer", label: "Facebook", color: "hover:bg-blue-600" }
  ];

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribing:', email);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-neutral-950 text-gray-300 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl"></div>

      {/* Floating Particles - Reduced */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -25, 0], opacity: [0.1, 0.25, 0.1] }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-3xl font-bold text-white">
                True<span className="text-emerald-500">lyzer</span>
              </h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              We build fast, beautiful websites that drive real results for your business.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-11 h-11 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center ${social.color} hover:border-transparent transition-all duration-300 group`}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.link} 
                    className="text-gray-400 hover:text-emerald-500 transition-colors duration-300 text-sm inline-flex items-center gap-2 group"
                  >
                    <span>{item.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.link} 
                    className="text-gray-400 hover:text-emerald-500 transition-colors duration-300 text-sm inline-flex items-center gap-2 group"
                  >
                    <span>{service.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Get tips on web development and design trends.
            </p>
            <div className="relative mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button 
                onClick={handleSubscribe}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-emerald-500 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
            <p className="text-xs text-gray-500">
              No spam ever. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800"></div>

        {/* Contact Bar */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a 
            href="tel:+918610737186"
            className="flex items-center gap-4 p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-emerald-500/50 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
              <Phone className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-gray-500 mb-1">Phone</div>
              <div className="text-white text-sm font-medium">+91 86107 37186</div>
            </div>
          </a>

          <a 
            href="mailto:contact@truelyzer.com"
            className="flex items-center gap-4 p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-emerald-500/50 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
              <Mail className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-gray-500 mb-1">Email</div>
              <div className="text-white text-sm font-medium truncate">contact@truelyzer.com</div>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-gray-500 mb-1">Location</div>
              <div className="text-white text-sm font-medium">Coimbatore, TN</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800"></div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} <span className="text-white font-semibold">Truelyzer</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-8 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-emerald-500 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-emerald-500 transition-colors">
              Terms
            </Link>
          </div>

          <div className="text-sm text-gray-500 flex items-center gap-2">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="text-red-500"
            >
              ❤️
            </motion.span>
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;