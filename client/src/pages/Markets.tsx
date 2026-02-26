import { useState } from "react";
import { TrendingUp, BarChart2, Coins, Globe, Layers, BookOpen, ArrowRight, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

type Category = "All" | "Forex" | "Crypto" | "Indices" | "Commodities";

const marketCategories = [
  {
    id: "Forex" as Category,
    icon: Globe,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/25",
    gradient: "from-blue-600 to-cyan-500",
    label: "Forex",
    title: "Foreign Exchange",
    description: "The world's largest financial market — $7.5 trillion traded daily. Profit from currency movements between 60+ pairs including majors, minors, and exotics.",
    highlight: "60+ Currency Pairs",
  },
  {
    id: "Crypto" as Category,
    icon: Coins,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/25",
    gradient: "from-orange-500 to-yellow-500",
    label: "Crypto",
    title: "Cryptocurrency",
    description: "Trade the most volatile and opportunity-rich asset class. From Bitcoin to altcoins — learn to read crypto markets and catch major moves.",
    highlight: "24/7 Markets",
  },
  {
    id: "Indices" as Category,
    icon: BarChart2,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/25",
    gradient: "from-purple-600 to-pink-500",
    label: "Indices",
    title: "Global Indices",
    description: "Trade top global indices like Nifty 50, Sensex, S&P 500, and NASDAQ. Get broad market exposure and diversify your trading strategy.",
    highlight: "Global Exposure",
  },
  {
    id: "Commodities" as Category,
    icon: Layers,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/25",
    gradient: "from-emerald-600 to-teal-500",
    label: "Commodities",
    title: "Commodities",
    description: "Trade hard commodities like Gold, Silver, and Crude Oil. These markets are driven by macro events — the perfect training ground for fundamental analysis.",
    highlight: "Inflation Hedge",
  },
];

const instrumentData: Record<Category, { symbol: string; name: string; type: string; note: string }[]> = {
  All: [],
  Forex: [
    { symbol: "EUR/USD", name: "Euro / US Dollar", type: "Major", note: "Most traded pair globally. Driven by ECB & Fed policy." },
    { symbol: "GBP/USD", name: "British Pound / Dollar", type: "Major", note: "High volatility pair. Reacts strongly to UK economic data." },
    { symbol: "USD/JPY", name: "Dollar / Japanese Yen", type: "Major", note: "Safe-haven pair. Key for understanding risk sentiment." },
    { symbol: "USD/INR", name: "Dollar / Indian Rupee", type: "Emerging", note: "India's benchmark forex pair — ideal for Indian traders." },
    { symbol: "AUD/USD", name: "Australian Dollar", type: "Commodity", note: "Tracks commodity prices and Chinese economic data." },
    { symbol: "USD/CHF", name: "Dollar / Swiss Franc", type: "Major", note: "Classic safe-haven currency, tracks gold inversely." },
  ],
  Crypto: [
    { symbol: "BTC/USD", name: "Bitcoin", type: "Layer 1", note: "Digital gold. Market leader driving overall crypto sentiment." },
    { symbol: "ETH/USD", name: "Ethereum", type: "Layer 1", note: "Smart contract leader. Tracks BTC with higher volatility." },
    { symbol: "BNB/USD", name: "Binance Coin", type: "Exchange", note: "Exchange utility token with consistent trading volume." },
    { symbol: "SOL/USD", name: "Solana", type: "Layer 1", note: "High-speed blockchain with strong developer adoption." },
  ],
  Indices: [
    { symbol: "NIFTY 50", name: "NSE Nifty 50", type: "Indian", note: "India's benchmark index — 50 largest NSE-listed companies." },
    { symbol: "SENSEX", name: "BSE Sensex", type: "Indian", note: "30 largest BSE stocks. Key barometer for Indian markets." },
    { symbol: "S&P 500", name: "S&P 500 Index", type: "US", note: "500 largest US companies. Global risk-on/off barometer." },
    { symbol: "NASDAQ", name: "Nasdaq Composite", type: "US", note: "Tech-heavy index. Highly sensitive to interest rate changes." },
  ],
  Commodities: [
    { symbol: "XAU/USD", name: "Gold Spot", type: "Metal", note: "Safe-haven asset. Inversely correlated with USD strength." },
    { symbol: "XAG/USD", name: "Silver Spot", type: "Metal", note: "Industrial + precious metal. More volatile than gold." },
    { symbol: "CRUDE OIL", name: "WTI Crude Oil", type: "Energy", note: "Global energy benchmark. Moves on OPEC decisions & inventory." },
    { symbol: "NATURAL GAS", name: "Natural Gas", type: "Energy", note: "Seasonal commodity driven by weather and supply data." },
  ],
};

const categoryColors: Record<Category, string> = {
  All: "from-blue-600 to-indigo-600",
  Forex: "from-blue-600 to-cyan-500",
  Crypto: "from-orange-500 to-yellow-500",
  Indices: "from-purple-600 to-pink-500",
  Commodities: "from-emerald-600 to-teal-500",
};

const typeColors: Record<string, string> = {
  Major: "text-blue-400 bg-blue-500/10",
  Minor: "text-sky-400 bg-sky-500/10",
  Emerging: "text-purple-400 bg-purple-500/10",
  Commodity: "text-orange-400 bg-orange-500/10",
  "Layer 1": "text-yellow-400 bg-yellow-500/10",
  Exchange: "text-pink-400 bg-pink-500/10",
  Indian: "text-emerald-400 bg-emerald-500/10",
  US: "text-blue-400 bg-blue-500/10",
  Metal: "text-yellow-400 bg-yellow-500/10",
  Energy: "text-orange-400 bg-orange-500/10",
};

export default function Markets() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const displayItems =
    activeCategory === "All"
      ? Object.values(instrumentData).flat()
      : instrumentData[activeCategory];

  return (
    <div className="min-h-screen bg-[#07101e]">

      {/* Page Header */}
      <div className="relative bg-[#0b1627] border-b border-white/[0.05] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-blue-600/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs mb-5">
            <div className="w-5 h-0.5 bg-blue-400" />
            Market Education
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Markets You'll Learn <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">to Trade Profitably</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg mb-6">
            A complete guide to every major asset class — forex, crypto, indices, and commodities. Understand what moves them, how to read them, and how to profit from every condition.
          </p>
          <div className="flex items-start gap-2 bg-blue-500/8 border border-blue-500/20 rounded-xl px-4 py-3 max-w-xl text-xs font-medium text-blue-300">
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
            All information below is for educational purposes only. Reference prices are indicative and not suitable for live trading decisions.
          </div>
        </div>
      </div>

      {/* Market Category Overview Cards */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {marketCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`group p-6 rounded-2xl bg-white/[0.03] border cursor-pointer transition-all duration-300 ${
                  activeCategory === cat.id
                    ? `${cat.border} bg-white/[0.07] shadow-lg`
                    : "border-white/[0.07] hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >
                <div className={`w-12 h-12 ${cat.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${cat.color}`} />
                </div>
                <div className={`text-[10px] font-black uppercase tracking-widest ${cat.color} mb-1`}>{cat.label}</div>
                <h3 className="text-base font-black text-white mb-2">{cat.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">{cat.description}</p>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${cat.bg} ${cat.color}`}>
                  {cat.highlight}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {(["All", "Forex", "Crypto", "Indices", "Commodities"] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeCategory === cat
                  ? `bg-gradient-to-r ${categoryColors[cat]} text-white shadow-lg`
                  : "bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-6 text-slate-500 text-xs">
          <BookOpen className="w-3.5 h-3.5" />
          Click any instrument to learn more in your course materials
        </div>

        {/* Instrument Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {displayItems.map((item, i) => (
              <motion.div
                key={`${item.symbol}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: i * 0.03 }}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.05] transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-black text-white text-sm tracking-wider mb-0.5">{item.symbol}</div>
                    <div className="text-xs text-slate-500">{item.name}</div>
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full flex-shrink-0 ${typeColors[item.type] ?? "text-slate-400 bg-white/5"}`}>
                    {item.type}
                  </span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed border-t border-white/[0.06] pt-3 mt-3">{item.note}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Stats Row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Currency Pairs", value: "60+", icon: Globe, color: "text-blue-400", bg: "bg-blue-500/10" },
            { label: "Crypto Assets", value: "30+", icon: Coins, color: "text-orange-400", bg: "bg-orange-500/10" },
            { label: "Global Indices", value: "15+", icon: BarChart2, color: "text-purple-400", bg: "bg-purple-500/10" },
            { label: "Commodities", value: "10+", icon: Layers, color: "text-emerald-400", bg: "bg-emerald-500/10" },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] flex items-center gap-4">
                <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-8 rounded-3xl bg-gradient-to-br from-blue-600/10 to-cyan-600/5 border border-blue-500/20 text-center"
        >
          <div className="text-xs font-black text-blue-400 uppercase tracking-widest mb-3">Ready to Trade These Markets?</div>
          <h3 className="text-2xl font-black text-white mb-3">Learn from a NISM-Certified Expert</h3>
          <p className="text-slate-400 mb-7 max-w-lg mx-auto text-sm">Master every asset class through structured courses, live sessions, and 1-on-1 mentorship — taught by Shivam Gupta with 8+ years of proven experience.</p>
          <Link href="/education">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-black rounded-2xl shadow-xl shadow-blue-900/40 hover:scale-[1.03] transition-all">
              Start Your Trading Education
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
