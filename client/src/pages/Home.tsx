import { Link } from "wouter";
import { ArrowRight, TrendingUp, BarChart3, DollarSign, Shield, Zap, Globe, ChevronRight, CheckCircle2, HeadphonesIcon, PieChart, BookOpen, Brain, Activity, Target, Clock, LineChart } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { MentorSection } from "@/components/MentorSection";
import { ResultsSection } from "@/components/ResultsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { LearningMap } from "@/components/LearningMap";
import { MasterMarkets } from "@/components/MasterMarkets";
import { MentorshipProgram } from "@/components/MentorshipProgram";
import { motion, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) => {
  const countRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const node = countRef.current;
    if (!node) return;
    const controls = animate(0, value, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate(v) { node.textContent = Math.floor(v).toLocaleString(); },
    });
    return () => controls.stop();
  }, [value]);
  return (
    <div className="text-center group">
      <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight">
        <span ref={countRef}>0</span>{suffix}
      </div>
      <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
};

const features = [
  {
    icon: TrendingUp,
    title: "Forex Trading",
    description: "Trade <strong class='text-white'>60+ currency pairs</strong> with spreads from <strong class='text-white'>0.0 pips</strong>. Access institutional liquidity with ultra-fast execution.",
    image: "/assets/forex.jpg",
    badge: "Most Popular",
  },
  {
    icon: BarChart3,
    title: "Stock Markets",
    description: "Invest in <strong class='text-white'>5,000+ global stocks</strong> with <strong class='text-white'>zero commission</strong>. Professional charting tools for precise market analysis.",
    image: "/assets/stocks.jpg",
    badge: "Zero Commission",
  },
  {
    icon: PieChart,
    title: "Indices & Commodities",
    description: "Trade <strong class='text-white'>global indices</strong> and hard commodities like <strong class='text-white'>Gold & Crude Oil</strong>. Diversify your portfolio on one platform.",
    image: "/assets/indices.jpg",
    badge: "24/5 Trading",
  },
];

const masterTopics = [
  {
    icon: TrendingUp,
    title: "Price Action Trading",
    outcome: "Read raw price movement like institutions. No indicators needed.",
    tag: "Core Skill",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/40",
  },
  {
    icon: Activity,
    title: "Options Flow Analysis",
    outcome: "Track smart money with live options data and unusual activity.",
    tag: "Advanced",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/40",
  },
  {
    icon: Shield,
    title: "Risk Management",
    outcome: "Protect your capital with proven position sizing and stop-loss rules.",
    tag: "Essential",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/40",
  },
  {
    icon: Brain,
    title: "Trading Psychology",
    outcome: "Master emotions, eliminate FOMO, and trade with unshakeable discipline.",
    tag: "Mindset",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "group-hover:border-yellow-500/40",
  },
  {
    icon: BookOpen,
    title: "Candlestick Patterns",
    outcome: "25+ high-probability patterns for precise entries and exits.",
    tag: "Foundation",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "group-hover:border-cyan-500/40",
  },
  {
    icon: Globe,
    title: "Forex Fundamentals",
    outcome: "Trade news events and economic calendar releases profitably.",
    tag: "Macro",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "group-hover:border-pink-500/40",
  },
  {
    icon: Clock,
    title: "Scalping Strategies",
    outcome: "Fast, consistent profits with proven short-term trading setups.",
    tag: "Strategy",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "group-hover:border-orange-500/40",
  },
  {
    icon: LineChart,
    title: "Live Market Analysis",
    outcome: "Real-time trade calls, live coaching sessions every week.",
    tag: "Live",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "group-hover:border-red-500/40",
  },
];

function WhatYoullMasterSection() {
  return (
    <section className="py-24 bg-[#07101e] relative overflow-hidden">
      <div className="absolute top-0 left-[30%] w-[600px] h-[400px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">
            <div className="w-5 h-0.5 bg-blue-400" />
            The Curriculum
            <div className="w-5 h-0.5 bg-blue-400" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Skills That Make You <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">A Profitable Trader</span>
          </h2>
          <p className="text-slate-400 text-lg">From zero to consistently profitable — every skill you need, taught by a NISM-certified professional with 8+ years of live market experience.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {masterTopics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -5 }}
              className={`group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] ${topic.border} hover:bg-white/[0.05] transition-all duration-300 cursor-default`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-12 h-12 ${topic.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <topic.icon className={`w-6 h-6 ${topic.color}`} />
                </div>
                <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${topic.bg} ${topic.color}`}>
                  {topic.tag}
                </span>
              </div>
              <h3 className="text-base font-black text-white mb-2 leading-snug">{topic.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{topic.outcome}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link href="/education">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-black rounded-2xl shadow-xl shadow-blue-900/40 hover:scale-[1.03] transition-all flex items-center gap-2.5">
              Start Learning Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            7-Day money-back guarantee
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07101e]">

      {/* ── HERO ── */}
      <HeroSection />

      {/* ── TRUST STATS ── */}
      <section className="py-20 bg-[#0b1627] border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <Counter value={5000} label="Students Trained" suffix="+" />
            <Counter value={8} label="Years Experience" suffix="+" />
            <Counter value={78} label="Avg Win Rate" suffix="%" />
            <Counter value={10000000} label="Student Profits" suffix="+" />
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL MASTER ── */}
      <WhatYoullMasterSection />

      {/* ── TRADING CONDITIONS ── */}
      <section className="py-24 bg-[#0b1627] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4">
              <div className="w-5 h-0.5 bg-emerald-400" />
              Why Trade With Us
              <div className="w-5 h-0.5 bg-emerald-400" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Superior Trading Conditions</h2>
            <p className="text-slate-400">Everything you need to trade successfully in a single unified interface.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Zap, title: "Instant Execution", desc: "Orders executed in <strong class='text-white'>milliseconds</strong> with zero requotes.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
              { icon: Shield, title: "Segregated Funds", desc: "All client funds held in <strong class='text-white'>segregated accounts</strong> at Tier-1 banks.", color: "text-blue-400", bg: "bg-blue-500/10" },
              { icon: DollarSign, title: "Raw Spreads", desc: "Institutional liquidity with spreads from <strong class='text-white'>0.0 pips</strong> on majors.", color: "text-emerald-400", bg: "bg-emerald-500/10" },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group"
              >
                <div className={`w-14 h-14 ${f.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <f.icon className={`w-7 h-7 ${f.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: f.desc }} />
              </motion.div>
            ))}
          </div>

          {/* Market Features */}
          <div className="space-y-20">
            {features.map((feature, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 group relative"
                >
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      onError={(e) => { e.currentTarget.src = '/assets/stocks.jpg'; }}
                      className="w-full h-[280px] lg:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {feature.badge}
                  </div>
                </motion.div>
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">
                    <div className="w-5 h-0.5 bg-blue-400" />
                    Market Focus
                  </div>
                  <h3 className="text-3xl font-black text-white mb-5">{feature.title}</h3>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: feature.description }} />
                  <Link href="/markets">
                    <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] transition-all">
                      Explore Markets
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEARNING MAP ── */}
      <LearningMap />

      {/* ── MENTOR ── */}
      <MentorSection />

      {/* ── RESULTS ── */}
      <ResultsSection />

      {/* ── MASTER MARKETS (PHONE MOCKUP) ── */}
      <MasterMarkets />

      {/* ── MENTORSHIP PROGRAM ── */}
      <MentorshipProgram />

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSection />

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-[#07101e]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">
              <div className="w-5 h-0.5 bg-blue-400" />
              Our Advantage
              <div className="w-5 h-0.5 bg-blue-400" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Why Choose TechForex?</h2>
            <p className="text-slate-400">We set the standard for reliability, transparency, and education in the trading industry.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "NISM Certified", desc: "Mentor is NISM certified market professional with regulatory compliance.", icon: Shield, color: "text-blue-400", bg: "bg-blue-500/10" },
              { title: "Proven Results", desc: "₹1 Cr+ in documented student profits with verified trade records.", icon: BarChart3, color: "text-emerald-400", bg: "bg-emerald-500/10" },
              { title: "Hindi & English", desc: "All courses available in both Hindi and English for maximum accessibility.", icon: Globe, color: "text-purple-400", bg: "bg-purple-500/10" },
              { title: "Lifetime Support", desc: "Post-course lifetime community access with dedicated support team.", icon: HeadphonesIcon, color: "text-yellow-400", bg: "bg-yellow-500/10" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/20 transition-all text-center group"
              >
                <div className={`w-14 h-14 mx-auto ${item.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKET INTELLIGENCE ── */}
      <section className="py-24 bg-[#0b1627] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-end mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs mb-3">
                <div className="w-5 h-0.5 bg-blue-400" />
                Analysis & Research
              </div>
              <h2 className="text-3xl font-black text-white">Market Intelligence</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { cat: "Forex", title: "US Dollar Index Analysis: Pre-CPI Outlook", desc: "In-depth analysis of DXY trends ahead of key economic data releases.", img: "/assets/news1.jpg" },
              { cat: "Commodities", title: "Gold Trends: Sustaining All-Time Highs", desc: "Technical and fundamental overview of XAU/USD price action.", img: "/assets/news2.jpg" },
              { cat: "Education", title: "Price Action Mastery: Key Chart Patterns", desc: "Learn the most reliable price action setups used by professional traders.", img: "/assets/news3.jpg" },
            ].map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-blue-500/30 hover:bg-white/[0.05] transition-all group cursor-pointer"
              >
                <div className="h-44 overflow-hidden">
                  <img src={n.img} alt={n.title} onError={(e) => { e.currentTarget.style.display = 'none'; }} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">{n.cat}</div>
                  <h3 className="text-base font-bold text-white mb-3 leading-snug group-hover:text-blue-300 transition-colors">{n.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-grow">{n.desc}</p>
                  <div className="mt-5 pt-5 border-t border-white/[0.07] flex items-center gap-2 text-blue-400 font-bold text-xs">
                    Read Analysis <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQSection />

      {/* ── CTA ── */}
      <CTASection />

    </div>
  );
}
