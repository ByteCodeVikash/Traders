import { motion } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Who is this course for?",
    a: "This course is for anyone who wants to learn trading from scratch or improve their results. Whether you're a student, salaried professional, business owner, or homemaker — if you have a desire to learn, this course is for you.",
  },
  {
    q: "Do I need any prior knowledge of the stock market?",
    a: "Absolutely not. Our Starter Pack and Pro Trader courses start from the very basics — what is a candle, what is a chart. We build your knowledge layer by layer so you never feel lost.",
  },
  {
    q: "How much capital do I need to start trading?",
    a: "We recommend starting with ₹10,000–₹50,000 for Forex and ₹25,000–₹1,00,000 for Indian equities. You can practice on a free demo account before going live — which we highly encourage!",
  },
  {
    q: "Are the sessions live or recorded?",
    a: "Both! You get a full library of recorded lessons to watch at your own pace, PLUS weekly live trading sessions (Pro & Elite batches) where Shivam sir trades in real-time and you can ask questions live.",
  },
  {
    q: "What if I miss a live session?",
    a: "Every live session is recorded and uploaded to your student portal within 24 hours. You will never miss out on any content.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes! We offer a 7-day no-questions-asked refund policy. If you're not satisfied within the first 7 days, we'll issue a full refund — no hassle, no questions.",
  },
  {
    q: "Will I get 1-on-1 support if I'm stuck?",
    a: "Yes. Pro students get WhatsApp community access where moderators answer queries daily. Elite Mentorship students get personal 1-on-1 weekly calls directly with Shivam sir.",
  },
  {
    q: "Is this course available in Hindi?",
    a: "Yes! All content, live sessions, and support are available in Hindi and English. Shivam sir teaches in a mix of both for maximum clarity and accessibility.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 bg-[#0b1627] relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs mb-4"
          >
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-white"
          >
            Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
          </motion.h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? "border-blue-500/30 bg-blue-600/[0.06]"
                  : "border-white/[0.07] bg-white/[0.02] hover:border-white/15"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className={`font-bold text-sm sm:text-base transition-colors ${open === i ? 'text-white' : 'text-slate-300'}`}>
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${open === i ? 'bg-blue-600 text-white' : 'bg-white/[0.06] text-slate-400'}`}>
                  {open === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </div>
              </button>

              {open === i && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-6 pb-5"
                >
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 mb-5 text-sm">Still have questions? We're here to help.</p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-600/10 border border-emerald-500/25 hover:bg-emerald-600/20 hover:border-emerald-500/40 text-emerald-400 font-bold rounded-2xl transition-all text-sm"
          >
            💬 Chat with Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
