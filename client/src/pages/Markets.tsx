import { useState } from "react";
import { TrendingUp, TrendingDown, BarChart2, Info } from "lucide-react";
import { STATIC_MARKET_DATA, type MarketData } from "@/hooks/use-market-data";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Forex" | "Crypto" | "Indices" | "Commodities";

const categoryMap: Record<string, Category> = {
  forex: "Forex",
  crypto: "Crypto",
  index: "Indices",
  commodity: "Commodities",
};

const categoryColors: Record<Category, string> = {
  All: "from-blue-600 to-indigo-600",
  Forex: "from-blue-600 to-cyan-500",
  Crypto: "from-orange-500 to-yellow-500",
  Indices: "from-purple-600 to-pink-500",
  Commodities: "from-emerald-600 to-teal-500",
};

export default function Markets() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const items = STATIC_MARKET_DATA.map((d) => ({
    ...d,
    category: categoryMap[d.type] as Category,
  }));

  const filtered = activeCategory === "All" ? items : items.filter((i) => i.category === activeCategory);

  const formatPrice = (item: MarketData) => {
    if (item.price < 10) return item.price.toFixed(4);
    if (item.price < 1000) return item.price.toFixed(2);
    return item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="min-h-screen bg-[#07101e]">

      {/* Page Header */}
      <div className="relative bg-[#0b1627] border-b border-white/[0.05] py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-blue-600/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">
            <div className="w-5 h-0.5 bg-blue-400" />
            Market Data
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Global Markets
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg">
            Indicative prices for major currency pairs, cryptocurrencies, indices, and commodities — updated daily for educational reference.
          </p>
          <div className="flex items-center gap-2 mt-5 text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-2.5 max-w-xl text-xs font-medium">
            <Info className="w-4 h-4 flex-shrink-0" />
            Prices shown are indicative and for educational purposes only. Not for trading use.
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
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

        {/* Market Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.symbol}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.2, delay: i * 0.03 }}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.06] transition-all group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-black text-white text-sm tracking-wider mb-0.5">{item.symbol}</div>
                    <div className="text-xs text-slate-500 leading-tight">{item.name}</div>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${
                    item.change >= 0 ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
                  }`}>
                    {item.change >= 0 ? "+" : ""}{item.change.toFixed(2)}%
                  </span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className={`font-mono font-black text-2xl ${item.change >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                    {formatPrice(item)}
                  </div>
                  <div className="flex items-center gap-1 mt-1 text-slate-500">
                    {item.change >= 0
                      ? <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                      : <TrendingDown className="w-3.5 h-3.5 text-red-500" />}
                    <span className="text-xs">{item.change >= 0 ? "Bullish" : "Bearish"} trend</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/[0.06] text-xs">
                  <div>
                    <div className="text-slate-600 mb-0.5 font-medium">High</div>
                    <div className="font-mono text-slate-300 font-bold">
                      {item.high && item.high < 1000 ? item.high.toFixed(2) : item.high?.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-600 mb-0.5 font-medium">Low</div>
                    <div className="font-mono text-slate-300 font-bold">
                      {item.low && item.low < 1000 ? item.low.toFixed(2) : item.low?.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-600 mb-0.5 font-medium">Volume</div>
                    <div className="font-mono text-slate-300 font-bold">{item.volume}</div>
                  </div>
                </div>

                {/* Category badge */}
                <div className="mt-3 pt-3 border-t border-white/[0.04]">
                  <span className={`text-[10px] font-black uppercase tracking-widest bg-gradient-to-r ${categoryColors[item.category]} bg-clip-text text-transparent`}>
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Stats Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Instruments", value: `${STATIC_MARKET_DATA.length}+` },
            { label: "Forex Pairs", value: `${STATIC_MARKET_DATA.filter(d => d.type === 'forex').length}` },
            { label: "Crypto Assets", value: `${STATIC_MARKET_DATA.filter(d => d.type === 'crypto').length}` },
            { label: "Indices & Commodities", value: `${STATIC_MARKET_DATA.filter(d => d.type === 'index' || d.type === 'commodity').length}` },
          ].map((stat) => (
            <div key={stat.label} className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] text-center">
              <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-slate-600 text-xs">
          <BarChart2 className="w-4 h-4" />
          <span>All prices are indicative and updated for educational reference only. Not real-time data.</span>
        </div>
      </div>
    </div>
  );
}
