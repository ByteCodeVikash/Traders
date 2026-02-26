import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Clock, Shield, RefreshCw, CheckCircle2, Zap } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#07101e]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-[#07101e] to-cyan-900/20 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500/10 border border-orange-500/25 rounded-full text-orange-300 text-sm font-bold mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <Clock className="w-4 h-4" />
            Limited Time Offer — Batch Filling Fast!
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6"
          >
            Start Your Trading<br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Journey Today</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-300 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Join 5,000+ students who have transformed their financial future with TechForex. Get 60% OFF on your enrollment today — limited seats available.
          </motion.p>

          {/* Seats Counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-3 bg-white/[0.04] border border-white/10 rounded-2xl mb-10"
          >
            <div className="flex gap-0.5">
              {[...Array(10)].map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-sm ${i < 5 ? 'bg-blue-500' : 'bg-white/10'}`} />
              ))}
            </div>
            <span className="text-white font-bold text-sm">47 / 100 seats taken this batch</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Link href="/education">
              <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-black rounded-2xl shadow-2xl shadow-blue-900/50 hover:shadow-blue-700/50 hover:scale-[1.03] transition-all flex items-center justify-center gap-3 text-lg">
                <Zap className="w-5 h-5" />
                Enroll Now — 60% OFF
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <button className="px-10 py-5 bg-emerald-600/10 border-2 border-emerald-500/30 hover:bg-emerald-600/20 hover:border-emerald-500/50 text-emerald-400 font-black rounded-2xl transition-all flex items-center justify-center gap-2 text-lg">
                💬 Talk to Counsellor
              </button>
            </a>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { icon: RefreshCw, text: "7-Day Money-Back Guarantee" },
              { icon: Shield, text: "No Hidden Charges" },
              { icon: CheckCircle2, text: "Lifetime Content Access" },
            ].map((g) => (
              <div key={g.text} className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                <g.icon className="w-4 h-4 text-emerald-400" />
                {g.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
