'use client'

import { motion } from 'framer-motion'

const OurServices = () => {
    return (
        <section
            id="services"
            className="bg-neutral-950 py-24 px-6"
        >
            <div className="max-w-5xl mx-auto text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-bold text-white mb-4"
                >
                    Services I Offer
                </motion.h2>

                <p className="text-gray-400 mb-12">
                    Simple, affordable solutions for small businesses
                </p>

                <div className="grid md:grid-cols-3 gap-6">

                    {/* Service 1 */}
                    <div className="border border-neutral-800 rounded-2xl p-6 bg-neutral-900">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            One-Page Business Website
                        </h3>
                        <p className="text-gray-400 mb-4 text-sm">
                            Mobile-friendly website with WhatsApp button & contact details.
                        </p>
                        <p className="text-emerald-400 font-bold">
                            ₹2,000
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="border border-neutral-800 rounded-2xl p-6 bg-neutral-900">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Website Fix / Update
                        </h3>
                        <p className="text-gray-400 mb-4 text-sm">
                            Text change, image update, mobile issues, bug fixes.
                        </p>
                        <p className="text-emerald-400 font-bold">
                            ₹500 – ₹1,000
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="border border-neutral-800 rounded-2xl p-6 bg-neutral-900">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Google Business Setup
                        </h3>
                        <p className="text-gray-400 mb-4 text-sm">
                            Get your business visible on Google Maps.
                        </p>
                        <p className="text-emerald-400 font-bold">
                            ₹1,000
                        </p>
                    </div>

                </div>

                {/* CTA */}
                <div className="mt-12">
                    <a
                        href="https://wa.me/91XXXXXXXXXX"
                        className="inline-block px-8 py-4 rounded-full bg-emerald-500 text-black font-semibold"
                    >
                        Contact on WhatsApp
                    </a>
                </div>

            </div>
        </section>
    )
};

export default OurServices;
