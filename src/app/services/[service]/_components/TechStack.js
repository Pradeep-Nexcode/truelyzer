'use client'

import { motion } from 'framer-motion'
import { SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs, SiGraphql, SiMongodb } from 'react-icons/si'

const TechStack = () => {
const techs = [
{ name: 'React', icon: <SiReact className="text-sky-400" /> },
{ name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
{ name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
{ name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
{ name: 'GraphQL', icon: <SiGraphql className="text-pink-500" /> },
{ name: 'MongoDB', icon: <SiMongodb className="text-emerald-500" /> },
]

return ( <section className="relative py-24 bg-[#0f0f0f] text-white px-6 sm:px-10 lg:px-20"> <div className="max-w-6xl mx-auto text-center">
<motion.h2
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-4xl sm:text-5xl font-bold mb-6"
>
Modern Tech Stack
</motion.h2>
 
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto mb-12"
    >
      At Truelyzer, we leverage cutting-edge web technologies to deliver lightning-fast, secure, and scalable digital products. 
      From frontend aesthetics to backend power, our stack ensures top-tier performance and long-term growth.
    </motion.p>

    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15 },
        },
      }}
    >
      {techs.map((tech, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
        >
          <div className="text-5xl">{tech.icon}</div>
          <span className="text-slate-300 font-medium">{tech.name}</span>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
 
)
}

export default TechStack
