import { Link } from "wouter";
import { motion } from "framer-motion";
import { BookOpen, Star, CheckCircle2, ArrowRight, Play, Clock, Users, Award } from "lucide-react";

const programs = [
  {
    type: "Course",
    badge: "Most Popular",
    title: "Pro Trader Course",
    tagline: "Complete Forex & Equity Trading System",
    price: "₹7,999",
    originalPrice: "₹14,999",
    duration: "12 Weeks",
    students: "2,400+",
    rating: 4.9,
    reviews: 890,
    image: "/assets/stocks.jpg",
    features: [
      "80+ Advanced Video Lessons",
      "Weekly Live Trading Sessions",
      "Price Action & Options Flow",
      "WhatsApp Group Access",
      "3-Month Post-Course Support",
      "Certificate of Completion",
    ],
    color: "from-blue-600 to-blue-500",
    popular: true,
  },
  {
    type: "Course",
    badge: null,
    title: "Starter Pack",
    tagline: "Beginner's Complete Trading Foundation",
    price: "₹1,999",
    originalPrice: "₹4,999",
    duration: "6 Weeks",
    students: "1,800+",
    rating: 4.8,
    reviews: 420,
    image: "/assets/forex.jpg",
    features: [
      "30+ Video Lessons (Recorded)",
      "2 Live Q&A Sessions/month",
      "Forex & Stock Market Basics",
      "Risk Management Module",
      "Community Discord Access",
    ],
    color: "from-slate-700 to-slate-600",
    popular: false,
  },
  {
    type: "Mentorship",
    badge: "Premium",
    title: "Elite Mentorship",
    tagline: "1-on-1 Mentorship with Shivam Gupta",
    price: "₹19,999",
    originalPrice: "₹34,999",
    duration: "6 Months",
    students: "450+",
    rating: 5.0,
    reviews: 210,
    image: "/assets/indices.jpg",
    features: [
      "All Pro Trader Content",
      "Weekly 1-on-1 Calls with Shivam",
      "Personalized Trade Reviews",
      "Direct WhatsApp Access",
      "Custom Strategy Development",
      "Lifetime Community Access",
    ],
    color: "from-yellow-600 to-amber-500",
    popular: false,
  },
];

const books = [
  {
    title: "Price Action Mastery",
    desc: "The complete guide to reading pure price action, identifying key levels, and trading without indicators.",
    price: "₹799",
    pages: "280 pages",
    image: "/assets/news1.jpg",
  },
  {
    title: "Options Flow Secrets",
    desc: "Decode institutional options activity and follow smart money with advanced open interest analysis.",
    price: "₹999",
    pages: "210 pages",
    image: "/assets/news2.jpg",
  },
  {
    title: "Trading Psychology Bible",
    desc: "Master your emotions, build discipline, and develop the mental edge that separates winning traders from losers.",
    price: "₹699",
    pages: "195 pages",
    image: "/assets/news3.jpg",
  },
];

export default function Education() {
  return (
    <div className="min-h-screen bg-[#07101e]">

      {/* Header */}
      <div className="relative bg-[#0b1627] border-b border-white/[0.05] py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-blue-600/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl mx-auto">
          <div className="w-14 h-14 mx-auto bg-blue-500/10 rounded-2xl flex items-center justify-center mb-5">
            <BookOpen className="w-7 h-7 text-blue-400" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">Education Center</h1>
          <p className="text-slate-400 text-lg">
            Master the markets with our comprehensive programs — from beginner basics to advanced institutional strategies.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

        {/* Courses Section */}
        <div className="mb-5">
          <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs mb-3">
            <div className="w-5 h-0.5 bg-blue-400" />
            Trading Programs
          </div>
          <h2 className="text-3xl font-black text-white mb-12">Choose Your Program</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-24">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl border overflow-hidden transition-all ${
                prog.popular
                  ? "border-blue-500/40 bg-blue-600/[0.07] shadow-2xl shadow-blue-900/20"
                  : "border-white/[0.08] bg-white/[0.02] hover:border-white/20"
              }`}
            >
              {prog.badge && (
                <div className={`absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl text-xs font-black uppercase ${prog.popular ? 'bg-blue-600 text-white' : 'bg-gradient-to-r from-yellow-500 to-amber-500 text-black'}`}>
                  {prog.badge}
                </div>
              )}

              {/* Course Image */}
              <div className="h-44 overflow-hidden">
                <img src={prog.image} alt={prog.title} onError={(e) => { e.currentTarget.src = '/assets/stocks.jpg'; }} className="w-full h-full object-cover" />
              </div>

              <div className="p-6">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{prog.type}</div>
                <h3 className="text-xl font-black text-white mb-1">{prog.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{prog.tagline}</p>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 mb-5">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    {prog.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <Users className="w-3.5 h-3.5" />
                    {prog.students} students
                  </div>
                  <div className="flex items-center gap-1.5 text-yellow-400 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-yellow-400" />
                    {prog.rating} ({prog.reviews} reviews)
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-5">
                  <span className="text-2xl font-black text-white">{prog.price}</span>
                  <span className="text-slate-600 text-sm line-through">{prog.originalPrice}</span>
                </div>

                {/* Features */}
                <div className="space-y-2.5 mb-6">
                  {prog.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-slate-300 text-xs">
                      <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${prog.popular ? 'text-blue-400' : 'text-emerald-400'}`} />
                      {f}
                    </div>
                  ))}
                </div>

                <Link href="/contact">
                  <button className={`w-full py-3.5 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 ${
                    prog.popular
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-900/40"
                      : prog.badge === 'Premium'
                      ? "bg-gradient-to-r from-yellow-600 to-amber-500 text-black"
                      : "bg-white/[0.08] border border-white/10 text-white hover:bg-white/15"
                  }`}>
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Books Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-xs mb-3">
            <div className="w-5 h-0.5 bg-emerald-400" />
            Trading Books
          </div>
          <h2 className="text-3xl font-black text-white mb-12">E-Books & Guides</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {books.map((book, i) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.05] transition-all overflow-hidden"
            >
              <div className="h-40 overflow-hidden">
                <img src={book.image} alt={book.title} onError={(e) => { e.currentTarget.style.display = 'none'; }} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <h3 className="font-black text-white text-base mb-2">{book.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">{book.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <div>
                    <div className="text-xl font-black text-white">{book.price}</div>
                    <div className="text-xs text-slate-600">{book.pages}</div>
                  </div>
                  <Link href="/books">
                    <button className="px-4 py-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 font-bold text-xs rounded-xl hover:bg-blue-600/20 transition-all flex items-center gap-1.5">
                      Buy Now <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Notice */}
        <div className="flex items-start gap-4 p-6 bg-emerald-500/5 border border-emerald-500/15 rounded-2xl">
          <Award className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-white mb-1">Instant Digital Delivery</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              All digital products are delivered instantly to your email upon payment confirmation. If you don't receive your download link within 5 minutes, contact support with your payment receipt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
