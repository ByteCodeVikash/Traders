import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star, Users, TrendingUp, Award, Play, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#07101e]">

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          src="/assets/hero_background.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07101e]/70 via-[#07101e]/50 to-[#07101e]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07101e]/80 to-transparent" />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.025] z-0" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Glow Orbs */}
      <div className="absolute top-[20%] right-[15%] w-[500px] h-[500px] bg-blue-600/15 blur-[120px] rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-cyan-600/8 blur-[100px] rounded-full z-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="max-w-2xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-xs font-black uppercase tracking-wider"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              New Batch Starting Soon — Limited Seats
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.04] tracking-tight mb-6"
            >
              Learn to Trade
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Forex & Stocks
              </span>
              <br />
              Profitably
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
            >
              Join India's most trusted trading education platform. Learn price action, options flow, and live trading from a NISM-certified professional with 8+ years of market experience.
            </motion.p>

            {/* Checkmarks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap gap-x-6 gap-y-2 mb-10"
            >
              {["No Prior Experience Needed", "Hindi & English", "Lifetime Access"].map((point) => (
                <div key={point} className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  {point}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link href="/education">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-black rounded-2xl shadow-2xl shadow-blue-900/50 hover:shadow-blue-700/50 hover:scale-[1.03] transition-all flex items-center gap-2.5 text-base">
                  Enroll Now — 60% OFF
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button className="group px-8 py-4 bg-white/[0.06] hover:bg-white/[0.10] border border-white/15 hover:border-white/30 text-white font-bold rounded-2xl transition-all flex items-center gap-2.5 text-base backdrop-blur-sm">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                </div>
                Watch Free Demo
              </button>
            </motion.div>

            {/* Trust Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-6 flex-wrap"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-bold text-sm">4.9/5</span>
                <span className="text-slate-500 text-sm">(1,200+ reviews)</span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Users className="w-4 h-4" />
                5,000+ students trained
              </div>
            </motion.div>
          </div>

          {/* Right - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {/* Main Card */}
            <div className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.10] rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-black text-sm">Portfolio Growth</div>
                  <div className="text-emerald-400 text-xs font-bold">+₹1,18,000 this month</div>
                </div>
                <div className="ml-auto">
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-black rounded-full">LIVE</span>
                </div>
              </div>

              {/* Mini Chart Bars */}
              <div className="flex items-end gap-1.5 h-24 mb-4">
                {[35, 45, 32, 60, 48, 72, 55, 80, 65, 90, 75, 100].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: h > 70 ? 'linear-gradient(to top, #3b82f6, #06b6d4)' : 'linear-gradient(to top, #1d4ed880, #0e7490a0)' }} />
                ))}
              </div>

              <div className="flex justify-between text-xs text-slate-600 font-medium mb-6">
                <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Win Rate", value: "78%", color: "text-emerald-400" },
                  { label: "Avg Return", value: "+12.4%", color: "text-blue-400" },
                  { label: "Students", value: "5,000+", color: "text-purple-400" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/[0.04] rounded-xl p-3 text-center">
                    <div className={`text-lg font-black ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Achievement */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -top-5 -right-5 bg-[#0d1827] border border-white/10 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3"
            >
              <div className="w-9 h-9 bg-yellow-500/15 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <div className="text-white font-black text-xs">NISM Certified</div>
                <div className="text-slate-500 text-[10px]">Market Professional</div>
              </div>
            </motion.div>

            {/* Floating Testimonial */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -left-5 bg-[#0d1827] border border-white/10 rounded-2xl px-4 py-3 shadow-xl max-w-[200px]"
            >
              <div className="flex gap-0.5 mb-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
              </div>
              <div className="text-white text-xs font-bold leading-snug">"Made ₹48,000 in just 2 months!"</div>
              <div className="text-slate-500 text-[10px] mt-1">— Rahul S., Delhi</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07101e] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
