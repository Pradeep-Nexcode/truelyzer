"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const Portfolio = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Map scroll progress to horizontal movement (0 → -100%)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-110%"])

  return (
    <section ref={sectionRef} className="relative h-[450vh] bg-gray-100/90">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div
          style={{ x }}
          className="flex gap-6 px-20"
        >

          <div
            className="w-[400px] h-[300px] relative shrink-0 rounded-xl overflow-hidden"
          >
          </div>

          <div
            className="w-[400px] h-[300px] relative shrink-0 rounded-xl overflow-hidden"
          >
          </div>
          <div
            className="w-[400px] h-[300px] relative shrink-0 rounded-xl overflow-hidden"
          >
          </div>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((project) => (
            <div
              key={project}
              className="w-[400px] h-[300px] relative shrink-0 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src="/bg1.jpg"
                alt={`Project ${project}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio

// "use client"
// import PortfolioEffect from "../effects/PortfolioEffect"

// export default function Portfolio() {
//   return (
//     <div id="portfolio" className="portfolio-section">
//       <PortfolioEffect />
//     </div>
//   )
// }

