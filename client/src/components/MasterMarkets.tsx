import { motion } from "framer-motion";
import { ArrowUpRight, BarChart2, Search, MessageCircle, User, CheckCircle2 } from "lucide-react";

const phoneMarketData = [
  { symbol: "EUR/USD", name: "Euro / U.S. Dollar", price: "1.0842", change: "+0.23%", up: true },
  { symbol: "GBP/USD", name: "British Pound / U.S. Dollar", price: "1.2634", change: "-0.15%", up: false },
  { symbol: "USD/JPY", name: "U.S. Dollar / Japanese Yen", price: "149.82", change: "+0.41%", up: true },
  { symbol: "XAU/USD", name: "Gold Spot", price: "2312.40", change: "+0.76%", up: true },
  { symbol: "BTC/USD", name: "Bitcoin", price: "67,842", change: "+2.14%", up: true },
  { symbol: "USD/CHF", name: "U.S. Dollar / Swiss Franc", price: "0.9012", change: "-0.08%", up: false },
  { symbol: "AUD/USD", name: "Australian Dollar / U.S. Dollar", price: "0.6489", change: "+0.31%", up: true },
  { symbol: "NIFTY 50", name: "Nifty 50 Index", price: "22,456", change: "+0.67%", up: true },
  { symbol: "ETH/USD", name: "Ethereum", price: "3,421", change: "+1.87%", up: true },
  { symbol: "USD/CAD", name: "U.S. Dollar / Canadian Dollar", price: "1.3621", change: "-0.22%", up: false },
  { symbol: "XAG/USD", name: "Silver Spot", price: "27.84", change: "+1.24%", up: true },
  { symbol: "CRUDE OIL", name: "WTI Crude Oil", price: "78.92", change: "-0.89%", up: false },
];

const PhoneMarketItem = ({ item }: { item: typeof phoneMarketData[0] }) => (
  <div className="flex justify-between items-center py-3.5 px-5 border-b border-white/[0.04] hover:bg-white/[0.04] transition-colors cursor-pointer group">
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black ${item.up ? 'bg-emerald-500/15 text-emerald-400' : 'bg-red-500/15 text-red-400'}`}>
        {item.symbol.slice(0, 2)}
      </div>
      <div>
        <div className="font-bold text-xs text-white group-hover:text-blue-400 transition-colors">{item.symbol}</div>
        <div className="text-[9px] text-slate-600 max-w-[110px] truncate">{item.name}</div>
      </div>
    </div>
    <div className="text-right">
      <div className={`font-mono text-xs font-black ${item.up ? 'text-emerald-400' : 'text-red-400'}`}>{item.price}</div>
      <div className={`text-[9px] font-bold ${item.up ? 'text-emerald-500' : 'text-red-500'}`}>{item.change}</div>
    </div>
  </div>
);

export const MasterMarkets = () => {
  const scrollingData = [...phoneMarketData, ...phoneMarketData];

  return (
    <section className="py-28 bg-[#050d18] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs mb-6"
            >
              <div className="w-5 h-0.5 bg-blue-400" />
              Live Trading App
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-8 leading-[1.08]"
            >
              Master the<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Global Markets</span><br />
              Live
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg"
            >
              Experience trading education like never before — real charts, real strategies, and real results. Learn how professionals read and profit from every move in the global markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {[
                "Real-time market analysis sessions",
                "Live trade setups with Shivam Gupta",
                "Interactive Q&A after every session",
                "Record access for all enrolled students",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  {point}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-[3rem] scale-90" />

              {/* Phone Frame */}
              <div className="relative w-[300px] h-[620px] bg-[#0d1117] rounded-[3rem] border-[6px] border-[#1e2631] shadow-2xl shadow-blue-900/20 overflow-hidden ring-1 ring-white/[0.08]">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-[#0a0e15] z-20 rounded-b-2xl mx-16 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#1e2631]" />
                </div>

                {/* Status Bar */}
                <div className="absolute top-1.5 left-5 right-5 flex justify-between text-[9px] text-white/60 z-20 font-medium">
                  <span>11:25</span>
                  <div className="flex gap-1 items-center">
                    <span>LTE</span>
                    <div className="flex gap-0.5">
                      {[3, 3, 3, 4].map((h, i) => (
                        <div key={i} className={`w-0.5 bg-white/60 rounded-sm`} style={{ height: `${h * 2}px` }} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* App Header */}
                <div className="absolute top-8 inset-x-0 h-14 bg-[#080d13] z-10 flex items-center justify-between px-5 border-b border-white/[0.05]">
                  <div className="w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center">
                    <div className="w-3 h-0.5 bg-white/40 rounded" />
                  </div>
                  <span className="font-black tracking-widest text-white/90 text-xs">WATCHLIST</span>
                  <div className="w-7 h-7 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-xs font-black">+</div>
                </div>

                {/* Scrolling List */}
                <div className="absolute top-[88px] bottom-16 inset-x-0 bg-[#080d13] overflow-hidden">
                  <motion.div
                    animate={{ y: [0, -800] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
                  >
                    {scrollingData.map((item, i) => (
                      <PhoneMarketItem key={`${item.symbol}-${i}`} item={item} />
                    ))}
                  </motion.div>
                  <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-[#080d13] to-transparent z-10 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#080d13] to-transparent z-10 pointer-events-none" />
                </div>

                {/* Bottom Tab Bar */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-[#0d1117] z-20 flex justify-around items-center pb-2 border-t border-white/[0.05]">
                  <div className="flex flex-col items-center gap-1 text-blue-400">
                    <BarChart2 className="w-4 h-4" />
                    <span className="text-[8px] font-bold">Watch</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-slate-600">
                    <Search className="w-4 h-4" />
                    <span className="text-[8px] font-bold">Explore</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 cursor-pointer">
                    <div className="w-9 h-9 -mt-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-900/50">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[8px] font-bold text-slate-600 mt-1">Trade</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-slate-600">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-[8px] font-bold">Community</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-slate-600">
                    <User className="w-4 h-4" />
                    <span className="text-[8px] font-bold">Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
