import { motion, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { TrendingUp, ArrowUpRight } from "lucide-react";

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const controls = animate(0, target, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate(v) {
        node.textContent = prefix + (Number.isInteger(target) ? Math.floor(v).toLocaleString("en-IN") : v.toFixed(1)) + suffix;
      },
    });
    return () => controls.stop();
  }, [target, suffix, prefix]);
  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const profitCards = [
  { pair: "EUR/USD", profit: "₹32,400", pct: "+8.4%", student: "Rahul S.", city: "Delhi", up: true },
  { pair: "NIFTY CE", profit: "₹1,18,000", pct: "+62%", student: "Priya M.", city: "Mumbai", up: true },
  { pair: "GOLD", profit: "₹45,600", pct: "+11.2%", student: "Arjun P.", city: "Ahmedabad", up: true },
  { pair: "BTC/USD", profit: "₹2,34,000", pct: "+140%", student: "Vikram S.", city: "Jaipur", up: true },
  { pair: "USD/JPY", profit: "₹19,800", pct: "+5.3%", student: "Sneha K.", city: "Bengaluru", up: true },
  { pair: "BANK NIFTY", profit: "₹88,500", pct: "+44%", student: "Kavita R.", city: "Hyderabad", up: true },
];

export function ResultsSection() {
  return (
    <section className="py-28 bg-[#07101e] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-600/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4"
          >
            <div className="w-5 h-0.5 bg-emerald-400" />
            Student Results
            <div className="w-5 h-0.5 bg-emerald-400" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-white mb-4"
          >
            Real Profits. Real Students.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            These are verified results from our students — not promises, real P&L screenshots.
          </motion.p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { value: 5000, suffix: "+", prefix: "", label: "Total Students", color: "text-blue-400" },
            { value: 1, suffix: " Cr+", prefix: "₹", label: "Student Profits", color: "text-emerald-400" },
            { value: 78, suffix: "%", prefix: "", label: "Avg Win Rate", color: "text-purple-400" },
            { value: 4.9, suffix: "★", prefix: "", label: "Course Rating", color: "text-yellow-400" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] text-center hover:border-white/20 transition-all"
            >
              <div className={`text-3xl lg:text-4xl font-black ${stat.color} mb-2`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="text-slate-500 text-xs font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Profit Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {profitCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-emerald-500/30 hover:bg-white/[0.06] transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-black text-white text-sm tracking-wider">{card.pair}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{card.student} · {card.city}</div>
                </div>
                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <div className="text-2xl font-black text-emerald-400">{card.profit}</div>
                  <div className="text-xs text-slate-500 mt-0.5">Profit Generated</div>
                </div>
                <div className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-black text-sm">{card.pct}</span>
                </div>
              </div>

              {/* Mini bar visual */}
              <div className="mt-4 h-1 bg-white/[0.05] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-600 to-cyan-500 rounded-full" style={{ width: card.pct.replace('+', '').replace('%', '') + '%', maxWidth: '100%' }} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 text-xs mt-8"
        >
          * Past results are not a guarantee of future performance. Trading involves risk.
        </motion.p>
      </div>
    </section>
  );
}
