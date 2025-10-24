"use client";

const NewsletterCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-neutral-900 to-black text-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Ahead in the Digital World
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Join our newsletter to get the latest insights on web development,
          design, and tech innovation — straight from Truelyzer.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all duration-300"
          >
            Subscribe
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterCTA;




// "use client";

// import { motion } from "framer-motion";
// import { Mail, Sparkles, CheckCircle2, TrendingUp, Gift, Zap } from "lucide-react";
// import { useState } from "react";

// const NewsletterCTA = () => {
//   const [email, setEmail] = useState("");
//   const [status, setStatus] = useState("idle"); // idle, loading, success, error

//   const benefits = [
//     { icon: TrendingUp, text: "Weekly insights & tutorials" },
//     { icon: Zap, text: "Exclusive tips & tricks" },
//     { icon: Gift, text: "Free resources & templates" },
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("loading");
    
//     // Simulate API call
//     setTimeout(() => {
//       setStatus("success");
//       setEmail("");
//       setTimeout(() => setStatus("idle"), 3000);
//     }, 1500);
//   };

//   return (
//     <section className="relative py-32 bg-neutral-950 overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px]"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{ duration: 8, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]"
//           animate={{
//             scale: [1, 1.3, 1],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{ duration: 10, repeat: Infinity }}
//         />
//       </div>

//       {/* Grid Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

//       {/* Floating Elements */}
//       {['✉️', '📧', '💌', '📬'].map((emoji, i) => (
//         <motion.div
//           key={i}
//           className="absolute text-4xl opacity-10"
//           style={{
//             left: `${20 + i * 20}%`,
//             top: `${20 + i * 15}%`,
//           }}
//           animate={{
//             y: [0, -20, 0],
//             rotate: [0, 10, 0],
//             opacity: [0.05, 0.15, 0.05],
//           }}
//           transition={{
//             duration: 4 + i,
//             repeat: Infinity,
//             delay: i * 0.5,
//           }}
//         >
//           {emoji}
//         </motion.div>
//       ))}

//       <div className="relative z-10 max-w-5xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="relative"
//         >
//           {/* Glow Effect */}
//           <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-blue-500/20 rounded-3xl blur-3xl opacity-50"></div>

//           {/* Main Card */}
//           <div className="relative bg-neutral-900/80 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-12 md:p-16 overflow-hidden">
//             {/* Background Pattern */}
//             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

//             {/* Sparkle Icon */}
//             <motion.div
//               className="absolute top-8 right-8 text-emerald-400/20"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             >
//               <Sparkles className="w-24 h-24" />
//             </motion.div>

//             <div className="relative z-10">
//               {/* Badge */}
//               <motion.div
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6"
//               >
//                 <Mail className="w-4 h-4 text-emerald-400" />
//                 <span className="text-sm font-medium text-emerald-400">Join 5,000+ Subscribers</span>
//               </motion.div>

//               {/* Heading */}
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight"
//               >
//                 Stay Ahead in the
//                 <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
//                   Digital World
//                 </span>
//               </motion.h2>

//               {/* Description */}
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 className="text-xl text-gray-400 mb-8 max-w-2xl"
//               >
//                 Get exclusive insights on web development, design trends, and tech innovation delivered weekly.
//               </motion.p>

//               {/* Benefits */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//                 className="flex flex-wrap gap-6 mb-10"
//               >
//                 {benefits.map((benefit, index) => {
//                   const Icon = benefit.icon;
//                   return (
//                     <div key={index} className="flex items-center gap-2">
//                       <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
//                         <Icon className="w-4 h-4 text-white" />
//                       </div>
//                       <span className="text-gray-300 text-sm">{benefit.text}</span>
//                     </div>
//                   );
//                 })}
//               </motion.div>

//               {/* Form */}
//               <motion.form
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//                 onSubmit={handleSubmit}
//                 className="max-w-2xl"
//               >
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <div className="relative flex-1">
//                     <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="Enter your email address"
//                       className="w-full pl-12 pr-4 py-4 rounded-full bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-500 transition-colors"
//                       required
//                       disabled={status === "loading" || status === "success"}
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     disabled={status === "loading" || status === "success"}
//                     className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all hover:scale-105 shadow-lg shadow-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
//                   >
//                     {status === "loading" && "Subscribing..."}
//                     {status === "success" && (
//                       <span className="flex items-center gap-2">
//                         <CheckCircle2 className="w-5 h-5" />
//                         Subscribed!
//                       </span>
//                     )}
//                     {status === "idle" && "Subscribe Free"}
//                     {status === "error" && "Try Again"}
//                   </button>
//                 </div>

//                 {/* Success Message */}
//                 {status === "success" && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl"
//                   >
//                     <p className="text-emerald-400 text-sm flex items-center gap-2">
//                       <CheckCircle2 className="w-4 h-4" />
//                       Welcome aboard! Check your inbox for a confirmation email.
//                     </p>
//                   </motion.div>
//                 )}
//               </motion.form>

//               {/* Privacy Note */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.7 }}
//                 className="flex items-center gap-2 mt-6 text-gray-500 text-sm"
//               >
//                 <CheckCircle2 className="w-4 h-4 text-emerald-400" />
//                 <span>100% free • No spam ever • Unsubscribe anytime</span>
//               </motion.div>

//               {/* Stats */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.8 }}
//                 className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-neutral-800"
//               >
//                 {[
//                   { value: "5K+", label: "Subscribers" },
//                   { value: "Weekly", label: "New Content" },
//                   { value: "4.9★", label: "Reader Rating" },
//                 ].map((stat, index) => (
//                   <div key={index}>
//                     <div className="text-2xl font-bold text-emerald-400 mb-1">
//                       {stat.value}
//                     </div>
//                     <div className="text-sm text-gray-500">{stat.label}</div>
//                   </div>
//                 ))}
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default NewsletterCTA;