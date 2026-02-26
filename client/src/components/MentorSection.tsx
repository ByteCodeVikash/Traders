import { motion, animate } from "framer-motion";
import { Link } from "wouter";
import { Youtube, Instagram, CheckCircle2, TrendingUp, Award, Users, BookOpen, ArrowRight, Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Students Mentored", color: "text-blue-400" },
  { value: 1, suffix: " Cr+", label: "Student Profits (₹)", color: "text-emerald-400" },
  { value: 8, suffix: " Yrs", label: "Trading Experience", color: "text-purple-400" },
  { value: 4.9, suffix: "★", label: "Average Rating", color: "text-yellow-400" },
];

const StatCounter = ({ value, suffix, label, color }: { value: number; suffix: string; label: string; color: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const controls = animate(0, value, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate(v) {
        node.textContent = value % 1 !== 0 ? v.toFixed(1) : Math.floor(v).toLocaleString();
      },
    });
    return () => controls.stop();
  }, [value]);
  return (
    <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/20 transition-all group">
      <div className={`text-3xl font-black ${color} mb-1`}>
        <span ref={ref}>0</span>{suffix}
      </div>
      <div className="text-slate-500 text-xs font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
};

export function MentorSection() {
  return (
    <section className="py-28 bg-[#0b1627] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs mb-4"
          >
            <div className="w-5 h-0.5 bg-blue-400" />
            Your Mentor
            <div className="w-5 h-0.5 bg-blue-400" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-white"
          >
            Meet Your Mentor
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left - Mentor Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Mentor Profile */}
            <div className="relative bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 mb-6">
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-400/20" />

              <div className="flex items-start gap-5 mb-8">
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0 text-white font-black text-2xl shadow-lg">
                  SG
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-1">Shivam Gupta</h3>
                  <p className="text-blue-400 font-bold text-sm mb-3">NISM Certified Market Professional</p>
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                    <span className="text-slate-400 text-sm ml-1">4.9/5 from 1,200+ students</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-8 text-sm">
                "With over 8 years of professional trading experience across forex, equities, and options markets, I've built TechForex with one mission — to give every Indian trader the institutional-grade education they deserve. I've mentored 5,000+ students and generated over ₹1 Crore in documented student profits."
              </p>

              {/* Credentials */}
              <div className="space-y-3">
                {[
                  "NISM Certified Market Professional",
                  "Featured on CNBC Awaaz & Zee Business",
                  "Trained by institutional traders",
                  "Specialists in Price Action & Options Flow",
                  "Students across 20+ cities in India",
                ].map((cred) => (
                  <div key={cred} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {cred}
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="flex gap-3 mt-8 pt-6 border-t border-white/[0.06]">
                <a href="#" className="flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-bold hover:bg-red-600/20 transition-all">
                  <Youtube className="w-4 h-4" />
                  YouTube
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 bg-pink-600/10 border border-pink-500/20 rounded-xl text-pink-400 text-sm font-bold hover:bg-pink-600/20 transition-all">
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Stats + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <StatCounter {...stat} />
                </motion.div>
              ))}
            </div>

            {/* Media Appearances */}
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 mb-8">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">As Seen On</div>
              <div className="flex flex-wrap gap-4 items-center">
                {["CNBC Awaaz", "Zee Business", "ET Now", "NewsX"].map((media) => (
                  <div key={media} className="px-4 py-2 bg-white/[0.04] border border-white/[0.07] rounded-xl text-slate-400 text-sm font-bold">
                    {media}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <Link href="/education">
                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-black rounded-2xl shadow-lg shadow-blue-900/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                  Learn from Shivam
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <button className="w-full py-4 bg-emerald-600/10 border border-emerald-500/20 hover:bg-emerald-600/20 text-emerald-400 font-bold rounded-2xl transition-all flex items-center justify-center gap-2 text-sm">
                  💬 Chat on WhatsApp
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
