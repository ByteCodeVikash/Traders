import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    batch: "Batch 9 · Pro Trader",
    rating: 5,
    profit: "+₹48,000",
    period: "in 2 months",
    text: "Before joining TechForex, I had lost money in every trade. Shivam sir's price action method completely changed my approach. I'm now consistently making 8–10% monthly returns. Best investment of my life!",
    avatar: "RS",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Priya Mehta",
    location: "Mumbai",
    batch: "Batch 10 · Elite Mentorship",
    rating: 5,
    profit: "+₹1.2L",
    period: "in 3 months",
    text: "The 1-on-1 mentorship is absolutely worth every rupee. My mentor reviewed my actual trades, fixed my psychology issues, and now I trade with a winning system. The community support is also amazing!",
    avatar: "PM",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Arjun Patel",
    location: "Ahmedabad",
    batch: "Batch 8 · Starter Pack",
    rating: 5,
    profit: "+₹22,000",
    period: "in first month",
    text: "I was completely new to trading. The Starter Pack gave me a solid foundation. Simple, practical lessons in Hindi. Made my first profitable trade in week 3! Very happy with the course structure.",
    avatar: "AP",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Sneha Kapoor",
    location: "Bengaluru",
    batch: "Batch 11 · Pro Trader",
    rating: 5,
    profit: "+₹67,000",
    period: "in 6 weeks",
    text: "The live trading sessions with Shivam sir are the highlight. Watching him trade in real-time and explain his reasoning is invaluable. My win rate jumped from 35% to 72% after completing the course.",
    avatar: "SK",
    color: "from-purple-500 to-violet-600",
  },
  {
    name: "Vikram Singh",
    location: "Jaipur",
    batch: "Batch 7 · Elite Mentorship",
    rating: 5,
    profit: "+₹2.8L",
    period: "in 4 months",
    text: "Honestly, the Elite Mentorship changed my life. I was a 9-to-5 employee and now I trade full-time. Shivam sir's guidance on position sizing and risk management saved me from blowing my account multiple times.",
    avatar: "VS",
    color: "from-orange-500 to-amber-600",
  },
  {
    name: "Kavita Rao",
    location: "Hyderabad",
    batch: "Batch 12 · Pro Trader",
    rating: 5,
    profit: "+₹39,500",
    period: "in 45 days",
    text: "As a housewife with no finance background, I was worried I couldn't understand trading. But the course is so well structured! Now I trade 2 hours daily and earn more than my husband. TechForex is a game changer.",
    avatar: "KR",
    color: "from-cyan-500 to-blue-600",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section className="py-28 bg-[#0b1627] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

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
            Student Testimonials
            <div className="w-5 h-0.5 bg-blue-400" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-white mb-4"
          >
            What Our Students Say
          </motion.h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
            </div>
            <span className="text-white font-bold">4.9/5</span>
            <span className="text-slate-500">based on 1,200+ reviews</span>
          </div>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 lg:p-12 relative mb-8"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-blue-400/15" />

              <div className="flex items-start gap-5 mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-black text-lg flex-shrink-0 shadow-lg`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-black text-xl mb-0.5">{t.name}</div>
                  <div className="text-slate-500 text-sm mb-2">{t.location} · {t.batch}</div>
                  <div className="flex">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                  </div>
                </div>
                <div className="ml-auto text-right hidden sm:block">
                  <div className="text-2xl font-black text-emerald-400">{t.profit}</div>
                  <div className="text-slate-500 text-sm">{t.period}</div>
                </div>
              </div>

              <p className="text-slate-200 text-lg leading-relaxed">{t.text}</p>

              {/* Mobile profit */}
              <div className="mt-6 pt-6 border-t border-white/[0.06] sm:hidden flex items-center justify-between">
                <span className="text-slate-500 text-sm">Profit</span>
                <span className="text-emerald-400 font-black text-xl">{t.profit} <span className="text-sm text-slate-500 font-medium">{t.period}</span></span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button onClick={() => go(-1)} className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.10] hover:border-white/20 transition-all flex items-center justify-center">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => go(1)} className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.10] hover:border-white/20 transition-all flex items-center justify-center">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-1.5 rounded-full transition-all ${i === current ? 'w-8 bg-blue-400' : 'w-1.5 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>

            <div className="text-slate-500 text-sm font-medium">
              {current + 1} / {testimonials.length}
            </div>
          </div>
        </div>

        {/* Thumbnail Row */}
        <div className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-4xl mx-auto">
          {testimonials.map((test, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`p-3 rounded-2xl border transition-all text-center ${i === current ? 'border-blue-500/50 bg-blue-600/10' : 'border-white/[0.06] bg-white/[0.02] hover:border-white/20'}`}
            >
              <div className={`w-9 h-9 mx-auto rounded-xl bg-gradient-to-br ${test.color} flex items-center justify-center text-white text-xs font-black mb-2`}>
                {test.avatar}
              </div>
              <div className="text-white text-[10px] font-bold truncate">{test.name.split(' ')[0]}</div>
              <div className="text-emerald-400 text-[10px] font-bold">{test.profit}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
