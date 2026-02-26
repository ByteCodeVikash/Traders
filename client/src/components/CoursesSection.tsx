import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, Crown, BookOpen, Video, Users, MessageCircle, Headphones, Zap, ArrowRight, Star } from "lucide-react";

const courses = [
  {
    id: 1,
    badge: null,
    popular: false,
    title: "Starter Pack",
    tagline: "Perfect for beginners",
    originalPrice: "₹4,999",
    price: "₹1,999",
    duration: "6 Weeks",
    color: "from-slate-700 to-slate-600",
    accentColor: "text-blue-400",
    borderColor: "border-white/[0.08]",
    features: [
      { icon: BookOpen, text: "30+ Video Lessons (Recorded)" },
      { icon: Video, text: "2 Live Q&A Sessions/month" },
      { icon: Users, text: "Community Discord Access" },
      { icon: CheckCircle2, text: "Forex & Stock Basics" },
      { icon: CheckCircle2, text: "Risk Management Module" },
    ],
    cta: "Enroll in Starter Pack",
  },
  {
    id: 2,
    badge: "Most Popular",
    popular: true,
    title: "Pro Trader",
    tagline: "For serious traders",
    originalPrice: "₹14,999",
    price: "₹7,999",
    duration: "12 Weeks",
    color: "from-blue-700 to-blue-600",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/40",
    features: [
      { icon: Video, text: "80+ Advanced Video Lessons" },
      { icon: Zap, text: "Weekly Live Trading Sessions" },
      { icon: MessageCircle, text: "WhatsApp Group Access" },
      { icon: Users, text: "Batch Community Access" },
      { icon: CheckCircle2, text: "Price Action Mastery" },
      { icon: CheckCircle2, text: "Options Flow Strategies" },
      { icon: Headphones, text: "3-Month Post-Course Support" },
    ],
    cta: "Enroll in Pro Trader",
  },
  {
    id: 3,
    badge: "Elite",
    popular: false,
    title: "Elite Mentorship",
    tagline: "One-on-one with Shivam",
    originalPrice: "₹34,999",
    price: "₹19,999",
    duration: "6 Months",
    color: "from-yellow-700 to-amber-600",
    accentColor: "text-yellow-400",
    borderColor: "border-yellow-500/20",
    features: [
      { icon: Crown, text: "All Pro Trader Content" },
      { icon: Headphones, text: "Weekly 1-on-1 Calls" },
      { icon: Zap, text: "Personalized Trade Reviews" },
      { icon: MessageCircle, text: "Direct WhatsApp with Shivam" },
      { icon: CheckCircle2, text: "Custom Strategy Development" },
      { icon: CheckCircle2, text: "Live Portfolio Review" },
      { icon: CheckCircle2, text: "Lifetime Community Access" },
    ],
    cta: "Apply for Elite Mentorship",
  },
];

export function CoursesSection() {
  return (
    <section className="py-28 bg-[#07101e] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

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
            Our Programs
            <div className="w-5 h-0.5 bg-blue-400" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-white mb-4"
          >
            Choose Your Trading Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            From complete beginner to elite trader — we have a program designed for every level.
          </motion.p>

          {/* Special Offer Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 mt-6 px-5 py-2.5 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-full"
          >
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 font-bold text-sm">Launch Offer: Flat 60% OFF — Ends Soon!</span>
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          </motion.div>
        </div>

        {/* Course Cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`relative rounded-3xl border ${course.borderColor} transition-all duration-300 group ${
                course.popular
                  ? "bg-gradient-to-b from-blue-600/10 to-transparent shadow-2xl shadow-blue-900/30 hover:shadow-blue-800/40"
                  : "bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20"
              }`}
            >
              {/* Popular Badge */}
              {course.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap ${
                  course.popular
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-900/40"
                    : "bg-gradient-to-r from-yellow-500 to-amber-500 text-black"
                }`}>
                  {course.badge}
                </div>
              )}

              <div className="p-7 pt-9">
                {/* Course Header */}
                <div className="mb-6">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{course.tagline}</div>
                  <h3 className="text-2xl font-black text-white mb-4">{course.title}</h3>

                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-black text-white">{course.price}</span>
                    <div>
                      <span className="text-slate-500 text-sm line-through">{course.originalPrice}</span>
                      <div className="text-emerald-400 text-xs font-bold">Save {Math.round((1 - parseInt(course.price.replace(/[^0-9]/g, '')) / parseInt(course.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%</div>
                    </div>
                  </div>
                  <div className="text-slate-500 text-sm mt-1">{course.duration} program</div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <span className="text-slate-400 text-xs">4.9 · 1,200+ ratings</span>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/[0.06] mb-6" />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${course.popular ? 'text-blue-400' : course.badge === 'Elite' ? 'text-yellow-400' : 'text-emerald-400'}`} />
                      {feature.text}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/contact">
                  <button className={`w-full py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 group/btn ${
                    course.popular
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-900/40 hover:shadow-blue-700/50 hover:scale-[1.02]"
                      : course.badge === 'Elite'
                      ? "bg-gradient-to-r from-yellow-600 to-amber-500 hover:from-yellow-500 hover:to-amber-400 text-black hover:scale-[1.02]"
                      : "bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/10 hover:border-white/20"
                  }`}>
                    {course.cta}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap gap-6 justify-center"
        >
          {[
            "✓ 7-Day Money-Back Guarantee",
            "✓ No Hidden Charges",
            "✓ Lifetime Content Access",
            "✓ Hindi & English Support",
          ].map((g) => (
            <span key={g} className="text-slate-400 text-sm font-medium">{g}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
