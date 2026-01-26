
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const MentorshipProgram = () => {
    return (
        <section className="relative min-h-screen py-24 overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    src="/assets/seminar_background.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4">

                {/* Timeline Container */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Central Vertical Line */}
                    <div className="absolute left-[50%] transform -translate-x-[50%] h-full w-0.5 bg-emerald-500/50 hidden md:block" />

                    {/* Card 1: Live Trading (Left) */}
                    <div className="flex flex-col md:flex-row justify-between items-center w-full mb-12 md:mb-24">
                        <div className="w-full md:w-5/12 order-1 md:order-1">
                            <GlassCard
                                label="Live Trading"
                                title="Real-Time Market Practice"
                                text="Step into real markets with our experts by your side. Watch, analyze, and execute trades in real time. Learn how strategies work under actual market conditions."
                                delay={0.1}
                            />
                        </div>
                        <div className="md:w-2/12 order-2 flex justify-center my-4 md:my-0 relative">
                            <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)] z-10" />
                        </div>
                        <div className="w-full md:w-5/12 order-3 md:order-3" />
                    </div>

                    {/* Card 2: Self-Paced (Right) */}
                    <div className="flex flex-col md:flex-row justify-between items-center w-full mb-12 md:mb-24">
                        <div className="w-full md:w-5/12 order-1 md:order-1" />
                        <div className="md:w-2/12 order-2 flex justify-center my-4 md:my-0 relative">
                            <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)] z-10" />
                        </div>
                        <div className="w-full md:w-5/12 order-3 md:order-3">
                            <GlassCard
                                label="Self-Paced"
                                title="Learn at Your Own Speed"
                                text="Access our complete library of recorded lessons anytime. Revisit concepts and strategies as often as you need. Perfect for traders who want flexibility without missing a thing."
                                delay={0.2}
                            />
                        </div>
                    </div>

                    {/* Card 3: Group Sessions (Left) */}
                    <div className="flex flex-col md:flex-row justify-between items-center w-full mb-12 md:mb-24">
                        <div className="w-full md:w-5/12 order-1 md:order-1">
                            <GlassCard
                                label="Group Sessions"
                                title="Collaborative Learning & Discussions"
                                text="Join interactive live classes with fellow traders. Share insights, ask questions, and solve challenges together. Learn from both our mentors and your peers' real experiences."
                                delay={0.3}
                            />
                        </div>
                        <div className="md:w-2/12 order-2 flex justify-center my-4 md:my-0 relative">
                            <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)] z-10" />
                        </div>
                        <div className="w-full md:w-5/12 order-3 md:order-3" />
                    </div>

                    {/* Card 4: 1-on-1 Mentorship (Right) */}
                    <div className="flex flex-col md:flex-row justify-between items-center w-full mb-12 md:mb-24">
                        <div className="w-full md:w-5/12 order-1 md:order-1" />
                        <div className="md:w-2/12 order-2 flex justify-center my-4 md:my-0 relative">
                            <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)] z-10" />
                        </div>
                        <div className="w-full md:w-5/12 order-3 md:order-3">
                            <GlassCard
                                label="1-on-1 Mentorship"
                                title="Personal Guidance from Experts"
                                text="Work directly with a mentor to refine your strategy. Get personalized feedback tailored to your trading style. Accelerate progress with focused, private coaching."
                                delay={0.4}
                            />
                        </div>
                    </div>

                    {/* Bottom Assurance Section */}
                    <div className="text-center mt-20 relative z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-2xl"
                        >
                            <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-2">We Assure You</h3>
                            <h2 className="text-3xl font-bold text-emerald-400 mb-8">What to expect when you join</h2>

                            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm font-medium text-slate-300">
                                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Global Excellence
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Consistent Success
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-4 text-sm font-medium text-slate-300">
                                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Elite Mentorship
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Independent Network
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-10 px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-lg shadow-lg shadow-emerald-900/40 uppercase tracking-widest text-sm transition-all"
                            >
                                Enroll Now
                            </motion.button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const GlassCard = ({ label, title, text, delay }: { label: string, title: string, text: string, delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-black/50 transition-colors group"
        >
            <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-2">{label}</div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">{title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
                {text}
            </p>
        </motion.div>
    );
};
