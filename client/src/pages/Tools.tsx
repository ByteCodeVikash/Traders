import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calculator, BarChart2, Zap, LineChart, Activity, PieChart, Shield, TrendingUp, ArrowRight, Wrench } from "lucide-react";

const tools = [
  {
    icon: Calculator,
    title: "Position Size Calculator",
    description: "Calculate exact lot sizes based on your account balance, risk percentage, and stop-loss distance. Never over-leverage again.",
    category: "Risk Management",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    badge: "Free",
  },
  {
    icon: BarChart2,
    title: "Currency Correlation Matrix",
    description: "Real-time correlation table for 20+ currency pairs. Avoid over-exposure by understanding how pairs move together.",
    category: "Analysis",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    badge: "Pro",
  },
  {
    icon: Zap,
    title: "Volatility Analyzer",
    description: "Identify the most volatile pairs for the current trading session. Find optimal entry windows with ATR-based volatility scoring.",
    category: "Market Analysis",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    badge: "Pro",
  },
  {
    icon: LineChart,
    title: "Price Action Scanner",
    description: "Auto-detect key price action patterns including pin bars, engulfing candles, inside bars, and liquidity zones across timeframes.",
    category: "Pattern Recognition",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    badge: "Elite",
  },
  {
    icon: Activity,
    title: "Risk/Reward Optimizer",
    description: "Visualize your trade's risk-to-reward ratio before entry. Automatically calculate profit targets based on your stop-loss.",
    category: "Trade Planning",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    badge: "Free",
  },
  {
    icon: PieChart,
    title: "Portfolio Performance Tracker",
    description: "Track your monthly P&L, win rate, average RR ratio, and drawdown across all your trades in one clean dashboard.",
    category: "Analytics",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    badge: "Pro",
  },
  {
    icon: Shield,
    title: "Drawdown Monitor",
    description: "Set maximum drawdown limits and get alerted when your account approaches dangerous loss thresholds.",
    category: "Risk Management",
    color: "text-red-400",
    bg: "bg-red-500/10",
    badge: "Pro",
  },
  {
    icon: TrendingUp,
    title: "Options Flow Tracker",
    description: "Track unusual options activity in Nifty, Bank Nifty, and key stocks. Follow smart money with real-time OI analysis.",
    category: "Options",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    badge: "Elite",
  },
];

const badgeColor: Record<string, string> = {
  Free: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Pro: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Elite: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

export default function Tools() {
  return (
    <div className="min-h-screen bg-[#07101e]">

      {/* Header */}
      <div className="relative bg-[#0b1627] border-b border-white/[0.05] py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-blue-600/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">
            <div className="w-5 h-0.5 bg-blue-400" />
            Trading Tools
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">Professional Trading Toolkit</h1>
          <p className="text-slate-400 max-w-2xl text-lg">
            Calculators, scanners, and analyzers built specifically for forex and Indian equity traders. Sharpen your edge with data-driven tools.
          </p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.06] transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-12 h-12 ${tool.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <tool.icon className={`w-6 h-6 ${tool.color}`} />
                </div>
                <span className={`text-[10px] font-black px-2.5 py-1 rounded-full border ${badgeColor[tool.badge]} uppercase tracking-wider`}>
                  {tool.badge}
                </span>
              </div>

              <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-2">{tool.category}</div>
              <h3 className={`font-black text-white text-sm mb-3 group-hover:${tool.color} transition-colors`}>{tool.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-5">{tool.description}</p>

              <button className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${tool.badge === 'Free' ? 'bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-600/20' : 'bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:border-white/20'}`}>
                {tool.badge === 'Free' ? 'Launch Free' : `Unlock with ${tool.badge}`}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Indicator CTA */}
      <div className="border-t border-white/[0.05] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
              <Wrench className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-black text-white mb-4">Need a Custom Indicator?</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Our team of MQL4/5 developers and Pine Script experts can build custom solutions tailored to your exact trading strategy.
            </p>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-black rounded-2xl shadow-lg shadow-blue-900/40 hover:scale-[1.02] transition-all">
                Request Custom Build
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
