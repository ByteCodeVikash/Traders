import { Link } from "wouter";
import { ArrowRight, TrendingUp, BarChart3, DollarSign, Calculator, PieChart, LineChart, Shield, Zap, Globe, Smartphone, ChevronRight, Clock, Award, CheckCircle2, Users, Building2, Lock, HeadphonesIcon, TrendingDown, Activity, CreditCard, HelpCircle } from "lucide-react";
import { MarketTicker } from "@/components/MarketTicker";
import { LiveTicker } from "@/components/LiveTicker";
import { useProducts } from "@/hooks/use-products";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Counter component for trust stats
const Counter = ({ value, label }: { value: string, label: string }) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');

  useEffect(() => {
    const node = countRef.current;
    if (node) {
      const controls = animate(0, numericValue, {
        duration: 2,
        onUpdate(value) {
          node.textContent = Math.floor(value).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [numericValue]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-slate-900 mb-1">
        <span ref={countRef}>0</span>{suffix}
      </div>
      <div className="text-sm text-slate-500 font-medium">{label}</div>
    </div>
  );
};

export default function Home() {
  const { data: products } = useProducts();
  const tools = products?.filter(p => p.category === 'tool').slice(0, 3);
  const [marketUpdate, setMarketUpdate] = useState(0);

  // Simulate market updates for "blink" effect
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketUpdate(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: TrendingUp,
      title: "Forex Trading",
      keywords: ["60+ currency pairs", "0.0 pips"],
      description: "Trade **60+ currency pairs** with spreads starting from **0.0 pips**. Access institutional liquidity with ultra-fast execution.",
      image: "/assets/forex.jpg",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: BarChart3,
      title: "Stock Markets",
      keywords: ["5,000+ stocks", "zero commission"],
      description: "Invest in over **5,000+ global stocks** with **zero commission**. Professional charting tools for precise market analysis.",
      image: "/assets/stocks.jpg",
      color: "from-emerald-600 to-emerald-400"
    },
    {
      icon: PieChart,
      title: "Indices & Commodities",
      keywords: ["global indices", "gold and oil"],
      description: "Trade **global indices** and hard commodities like **gold and oil**. Diversify your portfolio on a single platform.",
      image: "/assets/indices.jpg",
      color: "from-purple-600 to-purple-400"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <LiveTicker />
      <MarketTicker />

      {/* Hero Section - Refined Broker Layout */}
      <section className="relative overflow-hidden bg-[#0A1628] py-12 lg:py-20">
        {/* Subtle Animated Grid Background */}
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            src="/assets/hero_background.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          />
          {/* Dark Overlay for contrast */}
          <div className="absolute inset-0 bg-[#0A1628]/80 mix-blend-multiply" />
        </div>

        {/* Animated Accent Blobs - Kept for style but reduced opacity */}
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-blue-600/20 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[50%] bg-emerald-600/10 blur-[100px] rounded-full z-0 pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Hero Left Content */}
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-xs font-bold uppercase tracking-wider"
              >
                <Activity className="w-3 h-3 text-blue-400" />
                Regulated Global Forex Broker
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
              >
                Trade the World’s <br />
                Most <span className="text-blue-500">Powerful</span> Markets
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-400 mb-8 leading-relaxed"
              >
                Access Forex, Stocks, and Commodities with lightning-fast execution and institutional spreads from 0.0 pips. Start trading today.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:scale-[1.02] text-white font-bold rounded-lg shadow-xl shadow-blue-900/40 transition-all flex items-center gap-2">
                    Create Free Account
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </Link>
                <Link href="/tools">
                  <button className="px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-bold rounded-lg transition-all">
                    Try Demo Account
                  </button>
                </Link>
              </motion.div>

              <div className="flex gap-8 text-slate-500 text-xs font-semibold uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  No Hidden Fees
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  99.9% Uptime
                </div>
              </div>
            </div>

            {/* Hero Right - Enhanced Live Widget */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-[#111C2B] rounded-2xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-md">
                <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-white font-bold text-sm tracking-wide">LIVE MARKET RATES</span>
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 tracking-tighter">REFRESHED: 0.2s</div>
                </div>

                <div className="grid grid-cols-4 gap-2 p-3 text-[10px] font-bold text-slate-500 border-b border-white/5 uppercase tracking-widest">
                  <div>Instrument</div>
                  <div>Live Price</div>
                  <div className="text-right">Change</div>
                  <div className="text-right">Spread</div>
                </div>

                <div className="divide-y divide-white/5">
                  {[
                    { sym: "EUR/USD", val: "1.08451", ch: 0.12, sp: "0.1" },
                    { sym: "GBP/USD", val: "1.26304", ch: -0.05, sp: "0.2" },
                    { sym: "XAU/USD", val: "2,350.50", ch: 1.20, sp: "0.3" },
                    { sym: "BTC/USD", val: "68,450.2", ch: -1.15, sp: "12.0" },
                    { sym: "NASDAQ", val: "18,240.5", ch: 0.85, sp: "1.5" }
                  ].map((row, i) => (
                    <div key={i} className={`grid grid-cols-4 gap-2 p-3 items-center transition-all duration-300 ${marketUpdate % 5 === i ? 'bg-emerald-500/5' : ''}`}>
                      <div className="text-white font-bold text-xs">{row.sym}</div>
                      <div className={`font-mono text-xs ${row.ch > 0 ? 'text-emerald-400' : 'text-red-400'}`}>{row.val}</div>
                      <div className={`text-[10px] font-bold text-right flex items-center justify-end gap-1 ${row.ch > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                        {row.ch > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {row.ch}%
                      </div>
                      <div className="text-slate-500 text-[10px] font-mono text-right">{row.sp}</div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-white/5 border-t border-white/10">
                  <div className="flex items-center gap-2 text-blue-400 text-[10px] font-bold tracking-widest uppercase">
                    <Activity className="w-3 h-3" />
                    Market Status: Open & Liquid
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Stats - Animated */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <Counter value="2M+" label="Active Traders" />
            <Counter value="15+" label="Years Experience" />
            <Counter value="$50B+" label="Total Volume" />
            <Counter value="100+" label="Supported Assets" />
          </div>
          <p className="text-center text-slate-400 text-xs font-medium italic">
            "Trusted by retail and professional traders worldwide"
          </p>
        </div>
      </section>

      {/* Features Grid - Scannable */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Superior Trading Conditions</h2>
            <p className="text-slate-500">Everything you need to trade successfully in a single unified interface.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Instant Execution", highlight: "milliseconds", desc: "Your orders are executed in **milliseconds** with zero requotes or latency issues." },
              { icon: Shield, title: "Full Security", highlight: "segregated accounts", desc: "All client funds are held in **segregated accounts** with Tier-1 global banks." },
              { icon: DollarSign, title: "Raw Spreads", highlight: "start from 0.0", desc: "Enjoy institutional liquidity with spreads that **start from 0.0** pips on majors." }
            ].map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 card-professional bg-[#F8FAFC] hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: f.desc.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900">$1</strong>') }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets - Alternating Direction & Interaction */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {features.map((feature, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 group relative cursor-pointer"
                >
                  <div className="overflow-hidden card-professional p-3 shadow-xl transition-all duration-500 group-hover:shadow-2xl bg-white">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        onError={(e) => { e.currentTarget.src = '/assets/stocks.jpg' }}
                        className="w-full h-[350px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                    </div>
                  </div>
                </motion.div>

                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4 text-blue-600 font-bold uppercase tracking-widest text-xs">
                    <div className="w-6 h-0.5 bg-blue-600" />
                    Market Focus
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">{feature.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: feature.description.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900">$1</strong>') }} />
                  <Link href="/markets">
                    <button className="btn-primary">
                      Trade Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Tools - Pricing Clarity */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Professional Ecosystem</h2>
            <p className="text-slate-500">Advanced proprietary tools to give you a market edge.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tools?.map((tool) => (
              <div key={tool.id} className="group card-professional p-6 hover:shadow-2xl transition-all flex flex-col">
                <div className="rounded-xl overflow-hidden h-40 mb-6 bg-slate-50">
                  <img src={tool.imageUrl} alt={tool.title} onError={(e) => { e.currentTarget.src = '/assets/stocks.jpg' }} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tool.title}</h3>
                <p className="text-sm text-slate-500 mb-6 flex-grow leading-relaxed">{tool.description}</p>

                <div className="pt-6 border-t border-slate-50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-blue-600 font-bold text-xs uppercase tracking-tighter">Access Tier</div>
                    <div className="text-slate-900 font-bold text-sm">Included with Pro Account</div>
                  </div>
                  <Link href="/tools">
                    <button className="w-full py-3 bg-slate-900 hover:bg-blue-600 text-white font-bold rounded-lg transition-all text-sm">
                      Launch Tool Interface
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Extra Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Why Choose TechForex?</h2>
            <p className="text-slate-500">We set the standard for reliability, speed, and transparency in the trading industry.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Global Regulation", desc: "Licensed in multiple tier-1 jurisdictions for your safety.", icon: Shield },
              { title: "Deep Liquidity", desc: "Access bank-grade pricing with no partial fills.", icon: BarChart3 },
              { title: "Ultra-Fast Execution", desc: "Average execution speed of less than 30ms.", icon: Zap },
              { title: "24/7 Support", desc: "Multilingual support team available round the clock.", icon: HeadphonesIcon }
            ].map((item, i) => (
              <div key={i} className="card-professional p-6 text-center">
                <div className="w-12 h-12 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Insights - Polished Grid */}
      <section className="py-24 bg-[#0A1628] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-extrabold mb-2">Market Intelligence</h2>
              <p className="text-slate-400">Analysis from our chief market strategists</p>
            </div>
            <button className="hidden sm:flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-all font-mono text-xs tracking-tighter">
              ALL REPORTS <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { cat: "Forex", title: "US Dollar Index Analysis: Pre-CPI Outlook", img: "/assets/news1.jpg" },
              { cat: "Commodities", title: "Gold Trends: Sustaining All-Time Highs", img: "/assets/news2.jpg" },
              { cat: "Economics", title: "Global Central Bank Interest Rate Update", img: "/assets/news3.jpg" }
            ].map((n, i) => (
              <div key={i} className="flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.08] transition-all group cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img src={n.img} alt={n.title} onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="100%" height="100%" fill="%232d3748"/></svg>' }} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-4">{n.cat}</div>
                  <h3 className="text-xl font-bold mb-8 leading-snug group-hover:text-blue-400 transition-colors">{n.title}</h3>
                  <div className="mt-auto">
                    <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded text-xs transition-all uppercase tracking-widest">
                      Full Analysis
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Enhanced Value Statement */}
      <section className="py-24 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="black" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Experience the Next Generation of Trading</h2>
          <p className="text-slate-500 text-lg mb-10 leading-relaxed">Join 2 million global traders and enjoy ultra-tight spreads, raw execution, and an award-winning support team by your side.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <button className="px-12 py-5 bg-slate-900 hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-blue-500/20 active:scale-95">
                Open Your Live Account
              </button>
            </Link>
            <Link href="/education">
              <button className="px-12 py-5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 font-bold rounded-xl transition-all">
                Education Center
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Refined Footer - Polished Trust */}
      <footer className="bg-[#F8FAFC] py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img src="/techforex_logo.webp" alt="TechForex" className="h-12 w-auto object-contain" />
                <span className="text-2xl font-black text-slate-900 tracking-tight">TECHFOREX</span>
              </div>
              <p className="text-slate-500 text-sm max-w-md leading-relaxed mb-8">
                TechForex is a leading global multi-asset broker providing traders across the world with access to high-tier technology and raw market liquidity.
              </p>

              <div className="flex flex-wrap gap-8 py-6 border-y border-slate-200">
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-emerald-600" />
                  <div className="text-[10px] font-bold text-slate-900 uppercase tracking-tighter leading-none">
                    SSL Secured<br /><span className="text-slate-400">Encryption</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <div className="text-[10px] font-bold text-slate-900 uppercase tracking-tighter leading-none">
                    Segregated<br /><span className="text-slate-400">Client Funds</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <HeadphonesIcon className="w-5 h-5 text-purple-600" />
                  <div className="text-[10px] font-bold text-slate-900 uppercase tracking-tighter leading-none">
                    Expert 24/7<br /><span className="text-slate-400">Live Support</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-[10px]">Platforms</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><Link href="/tools" className="hover:text-blue-600 transition-all">MetaTrader 5</Link></li>
                <li><Link href="/tools" className="hover:text-blue-600 transition-all">Web Trader Pro</Link></li>
                <li><Link href="/tools" className="hover:text-blue-600 transition-all">Mobile Application</Link></li>
                <li><Link href="/tools" className="hover:text-blue-600 transition-all">API Trading</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-[10px]">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><Link href="/contact" className="hover:text-blue-600 transition-all">Risk Warning</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600 transition-all">Privacy Policy</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600 transition-all">Client Agreement</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600 transition-all">Cookies Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-200">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 mb-8">
              <h5 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-4">Risk Disclosure Notice</h5>
              <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                <strong className="text-slate-700">Financial Risk:</strong> Derivatives and leveraged trading involves significant risk and is not suitable for all investors. You could lose more than your initial deposit and our products should only be traded with money you can afford to lose. Past performance of any instrument is not a reliable indicator of future results. TechForex does not provide investment advice or recommendations. Before trading, please ensure you fully understand the risks involved and read our Risk Disclosure Statement.
              </p>
            </div>
            <div className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
              © 2026 TechForex Global Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
