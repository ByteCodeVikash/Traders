
import { motion } from "framer-motion";
import { CheckCircle2, Play, BookOpen, Users, UserCheck } from "lucide-react";
import { Link } from "wouter";

const cards = [
  {
    label: "Live Trading",
    title: "Real-Time Market Practice",
    text: "Step into real markets with our experts by your side. Watch, analyze, and execute trades in real time. Learn how strategies work under actual market conditions.",
    icon: Play,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "group-hover:shadow-blue-500/10",
    side: "left",
    delay: 0.1,
  },
  {
    label: "Self-Paced",
    title: "Learn at Your Own Speed",
    text: "Access our complete library of recorded lessons anytime. Revisit concepts and strategies as often as you need. Perfect for traders who want flexibility without missing a thing.",
    icon: BookOpen,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "group-hover:shadow-emerald-500/10",
    side: "right",
    delay: 0.2,
  },
  {
    label: "Group Sessions",
    title: "Collaborative Learning & Discussions",
    text: "Join interactive live classes with fellow traders. Share insights, ask questions, and solve challenges together. Learn from both our mentors and your peers' real experiences.",
    icon: Users,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    glow: "group-hover:shadow-purple-500/10",
    side: "left",
    delay: 0.3,
  },
  {
    label: "1-on-1 Mentorship",
    title: "Personal Guidance from Experts",
    text: "Work directly with a mentor to refine your strategy. Get personalized feedback tailored to your trading style. Accelerate progress with focused, private coaching.",
    icon: UserCheck,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    glow: "group-hover:shadow-yellow-500/10",
    side: "right",
    delay: 0.4,
  },
];

export const MentorshipProgram = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-[#07101e]">
      {/* Background layers */}
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-[20%] left-[-5%] w-[500px] h-[500px] bg-blue-600/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-emerald-600/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">
            <div className="w-5 h-0.5 bg-blue-400" />
            How We Teach
            <div className="w-5 h-0.5 bg-blue-400" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Four Ways to Learn &amp; <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Grow as a Trader</span>
          </h2>
          <p className="text-slate-400 text-lg">Every learning style is covered — from live market sessions to one-on-one mentorship that fast-tracks your progress.</p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-emerald-500/30 to-transparent hidden md:block" />

          {cards.map((card, i) => {
            const Icon = card.icon;
            const isLeft = card.side === "left";
            return (
              <div
                key={i}
                className={`flex flex-col md:flex-row justify-between items-center w-full mb-10 md:mb-16 ${!isLeft ? "md:flex-row-reverse" : ""}`}
              >
                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: card.delay, duration: 0.5 }}
                  className={`w-full md:w-5/12 group p-7 rounded-2xl bg-white/[0.03] border ${card.border} hover:bg-white/[0.06] hover:shadow-2xl ${card.glow} transition-all duration-300`}
                >
                  <div className={`w-11 h-11 ${card.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                  <div className={`text-[10px] font-black uppercase tracking-widest ${card.color} mb-2`}>{card.label}</div>
                  <h3 className="text-lg font-black text-white mb-3 leading-snug group-hover:text-white transition-colors">{card.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{card.text}</p>
                </motion.div>

                {/* Center dot */}
                <div className="md:w-2/12 flex justify-center my-5 md:my-0 relative z-10">
                  <div className={`w-5 h-5 rounded-full border-2 ${card.border} ${card.bg} flex items-center justify-center`}>
                    <div className={`w-2 h-2 rounded-full ${card.color.replace('text-', 'bg-')}`} />
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-5/12" />
              </div>
            );
          })}
        </div>

        {/* Bottom assurance card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 max-w-2xl mx-auto text-center bg-white/[0.03] border border-white/[0.08] rounded-3xl p-10"
        >
          <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">We Assure You</div>
          <h3 className="text-2xl font-black text-white mb-7">What to expect when you join</h3>

          <div className="grid grid-cols-2 gap-3 mb-8 text-sm font-medium text-slate-300">
            {["Global Excellence", "Consistent Success", "Elite Mentorship", "Independent Network"].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-white/[0.04] px-4 py-2.5 rounded-xl border border-white/[0.06]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>

          <Link href="/education">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-black rounded-2xl shadow-xl shadow-blue-900/40 hover:scale-[1.03] transition-all uppercase tracking-widest text-sm">
              Enroll Now
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
