import React from "react"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-300 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Truelyzer</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We craft modern websites and digital experiences that help your brand stand out and grow online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", link: "#" },
              { name: "About", link: "#about" },
              { name: "Services", link: "#services" },
              { name: "Portfolio", link: "#portfolio" },
              { name: "Contact", link: "#contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <HiOutlinePhone className="text-orange-400" size={18} /> <span>+91 86107 37186</span>
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineMail className="text-orange-400" size={18} /> <span>contact@truelyzer.com</span>
            </li>
            <li>
              <span>Tamil Nadu, India</span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className="p-2 bg-white/10 hover:bg-orange-500/20 rounded-full transition"
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              className="p-2 bg-white/10 hover:bg-orange-500/20 rounded-full transition"
            >
              <FaLinkedinIn size={18} />
            </Link>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              className="p-2 bg-white/10 hover:bg-orange-500/20 rounded-full transition"
            >
              <FaFacebookF size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Truelyzer</span>. All rights reserved.
      </div>

      {/* Decorative glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-3xl -z-10"></div>
    </footer>
  )
}

export default Footer
