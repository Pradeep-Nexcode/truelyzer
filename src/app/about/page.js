'use client';


const motion = dynamic(() => import("framer-motion"), { ssr: false });


export default function Page() {
  return (
    <main className="bg-[#0f0f0f] text-white min-h-screen">
      {/* 🌟 Hero Section */}
      <section className="relative py-24 px-6 sm:px-10 lg:px-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_70%)]" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-extrabold mb-6"
        >
          About <span className="text-emerald-400">Trulyzer</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          We are a team of developers, designers, and thinkers crafting next-generation digital
          experiences. At Trulyzer, technology meets creativity to deliver powerful, user-centric
          solutions.
        </motion.p>
      </section>

      {/* 🧠 Section 1: Our Mission */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white/5 border-t border-white/10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-emerald-400 mb-6"
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          To empower businesses and creators through clean, efficient, and scalable digital
          solutions. We believe great design and strong technology can transform how brands connect
          with their audiences.
        </motion.p>
      </section>

      {/* 🚀 Section 2: Our Approach */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 text-center bg-gradient-to-b from-[#0f0f0f] to-[#101010]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-emerald-400 mb-10"
        >
          Our Approach
        </motion.h2>
        <div className="grid sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            {
              title: 'Collaborative Strategy',
              desc: 'We work closely with clients to deeply understand their goals and design solutions that deliver measurable results.',
            },
            {
              title: 'Technology-Driven Design',
              desc: 'From React to GraphQL, our stack ensures your platform is modern, fast, and future-ready.',
            },
            {
              title: 'Continuous Improvement',
              desc: 'We believe in iteration — launching fast, learning faster, and refining continuously.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-emerald-400/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💡 Section 3: Team / Vision */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 text-center border-t border-white/10 bg-white/5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-emerald-400 mb-6"
        >
          Our Vision
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed mb-12"
        >
          We envision a digital future where every business — big or small — has access to
          high-quality technology that’s intuitive, scalable, and beautifully designed.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: 'Innovate', desc: 'We push boundaries with creativity and smart engineering.' },
            { name: 'Empower', desc: 'We build tools that help businesses grow faster and smarter.' },
            {
              name: 'Deliver',
              desc: 'We take pride in every pixel, every line of code, and every outcome.',
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.2 }}
              className="p-8 bg-[#1a1a1a] border border-white/10 rounded-2xl hover:border-emerald-400/30 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{v.name}</h3>
              <p className="text-slate-400 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
