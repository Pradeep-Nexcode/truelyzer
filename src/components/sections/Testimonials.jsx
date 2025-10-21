"use client";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle, TrendingUp, Clock } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Aarav Patel",
    role: "Founder & CEO",
    company: "KPN Fresh Market",
    quote:
      "Working with Truelyzer was a game-changer. They delivered our e-commerce platform 2 weeks ahead of schedule, and sales increased 45% in the first month. The attention to performance optimization was exceptional.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    results: ["45% sales increase", "2 weeks early", "0.9s load time"],
    industry: "E-Commerce"
  },
  {
    id: 2,
    name: "Sneha Sharma",
    role: "Owner",
    company: "Purple Haze Beauty Lounge",
    quote:
      "They didn't just build a website — they understood our brand and created an experience. Online bookings are up 120%, and clients constantly compliment our site. Worth every penny!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    results: ["120% more bookings", "Mobile-first design", "SEO optimized"],
    industry: "Beauty & Wellness"
  },
  {
    id: 3,
    name: "Vikram Rao",
    role: "Marketing Director",
    company: "GoDecor Interiors",
    quote:
      "From discovery to launch, Truelyzer was professional and transparent. The CMS they built makes updating our portfolio effortless. Lead generation jumped 87%, and our bounce rate dropped by 40%.",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    rating: 5,
    results: ["87% lead increase", "-40% bounce rate", "Easy CMS"],
    industry: "Interior Design"
  },
];

const stats = [
  { icon: CheckCircle, value: "98%", label: "Client Satisfaction", color: "text-emerald-400" },
  { icon: TrendingUp, value: "67%", label: "Avg. Conversion Boost", color: "text-blue-400" },
  { icon: Clock, value: "2.1s", label: "Avg. Load Time", color: "text-purple-400" }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-emerald-500 via-emerald-600 to-neutral-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-emerald-300/10 rounded-full blur-3xl -top-40 -left-40"></div>
        <div className="absolute w-[500px] h-[500px] bg-emerald-300/10 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-emerald-200 text-sm font-semibold tracking-wider uppercase">
              Client Success Stories
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Trusted by Growing <span className="text-emerald-200">Businesses</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-emerald-100 text-lg max-w-2xl mx-auto"
          >
            Don't just take our word for it. See how we've helped businesses like yours achieve measurable growth.
          </motion.p>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-emerald-100 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 h-full flex flex-col">
                
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-emerald-500" />
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={64}
                      height={64}
                      className="rounded-full object-cover border-4 border-emerald-100"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                    <p className="text-sm text-gray-600">{t.role}</p>
                    <p className="text-xs text-emerald-600 font-semibold">{t.company}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow italic">
                  "{t.quote}"
                </p>

                {/* Results Tags */}
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Key Results
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {t.results.map((result, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-medium text-emerald-700"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Industry Tag */}
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                    {t.industry}
                  </span>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-emerald-100 mb-6">
              Schedule a free consultation and let's discuss how we can grow your business online.
            </p>
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-600 font-semibold text-lg rounded-full hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-xl">
              <span>Start Your Project</span>
              <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;