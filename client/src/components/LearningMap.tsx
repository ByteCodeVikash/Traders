
import { motion } from "framer-motion";
import {
    Brain,
    PieChart,
    TrendingUp,
    Target,
    BarChart3,
    Crosshair,
    Zap,
    ShieldAlert
} from "lucide-react";

export const LearningMap = () => {
    const features = [
        {
            title: "Risk Management",
            icon: ShieldAlert,
            position: "left-top", // logical position for connecting lines
            gridArea: "row1-left",
            delay: 0.1
        },
        {
            title: "Psychology And Mindset",
            icon: Brain,
            position: "top-left",
            gridArea: "row1-center-left",
            delay: 0.2
        },
        {
            title: "Money Management",
            icon: PieChart,
            position: "top-right",
            gridArea: "row1-center-right",
            delay: 0.3
        },
        {
            title: "Momentum Trading",
            icon: TrendingUp,
            position: "right-top",
            gridArea: "row1-right",
            delay: 0.4
        },
        {
            title: "Scalping Techniques",
            icon: Zap,
            position: "left-bottom",
            gridArea: "row2-left",
            delay: 0.8
        },
        {
            title: "Scalping Strategies",
            icon: Crosshair,
            position: "bottom-left",
            gridArea: "row2-center-left",
            delay: 0.7
        },
        {
            title: "Liquidity Zones",
            icon: BarChart3,
            position: "bottom-right",
            gridArea: "row2-center-right",
            delay: 0.6
        },
        {
            title: "Trapping Concepts",
            icon: Target,
            position: "right-bottom",
            gridArea: "row2-right",
            delay: 0.5
        }
    ];

    return (
        <section className="py-24 bg-[#080c14] relative overflow-hidden flex justify-center items-center">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] to-[#05080f] pointer-events-none" />
            <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container relative z-10 px-4">
                {/* Desktop Layout (Spider Map) */}
                <div className="hidden lg:block relative min-h-[600px]">
                    {/* Center Text */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 leading-tight"
                        >
                            What Will<br />You Learn?
                        </motion.h2>
                    </div>

                    {/* Connecting Lines (SVG) - Responsive ViewBox */}
                    <svg
                        className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-50"
                        viewBox="0 0 1000 600"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                                <stop offset="50%" stopColor="#2563EB" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Center Point: 500, 300 */}

                        {/* Left Top - approx card center 200,150 */}
                        <path d="M200 150 L500 300" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
                        {/* Top Left - approx card center 350,80 */}
                        <path d="M350 80 L500 300" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
                        {/* Top Right - approx card center 650,80 */}
                        <path d="M650 80 L500 300" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
                        {/* Right Top - approx card center 800,150 */}
                        <path d="M800 150 L500 300" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />

                        {/* Left Bottom - approx card center 200,450 */}
                        <path d="M200 450 L500 300" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
                        {/* Bottom Left - approx card center 350,520 */}
                        <path d="M350 520 L500 300" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
                        {/* Bottom Right - approx card center 650,520 */}
                        <path d="M650 520 L500 300" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
                        {/* Right Bottom - approx card center 800,450 */}
                        <path d="M800 450 L500 300" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
                    </svg>

                    {/* Cards Positioning - Hardcoded for perfect radial look as per image */}
                    {/* Row 1 - Upper Half */}
                    <FeatureCard item={features[0]} className="absolute left-[5%] top-[20%]" />
                    <FeatureCard item={features[1]} className="absolute left-[25%] top-[5%]" />
                    <FeatureCard item={features[2]} className="absolute right-[25%] top-[5%]" />
                    <FeatureCard item={features[3]} className="absolute right-[5%] top-[20%]" />

                    {/* Row 2 - Lower Half */}
                    <FeatureCard item={features[4]} className="absolute left-[5%] bottom-[20%]" />
                    <FeatureCard item={features[5]} className="absolute left-[25%] bottom-[5%]" />
                    <FeatureCard item={features[6]} className="absolute right-[25%] bottom-[5%]" />
                    <FeatureCard item={features[7]} className="absolute right-[5%] bottom-[20%]" />
                </div>

                {/* Mobile Layout (Grid/Stack) */}
                <div className="lg:hidden">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-white mb-4">What Will You Learn?</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {features.map((f, i) => (
                            <FeatureCard key={i} item={f} className="w-full relative" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ item, className }: { item: any, className: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: item.delay, duration: 0.5 }}
            viewport={{ once: true }}
            className={`
        p-6 rounded-2xl bg-[#0F1E32] border border-blue-500/30 shadow-lg shadow-blue-900/10 
        backdrop-blur-md flex flex-row items-center gap-4 w-[280px] lg:w-[260px] xl:w-[300px]
        hover:border-blue-500/60 hover:shadow-blue-500/20 transition-all group
        ${className}
      `}
        >
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:text-blue-200 group-hover:scale-110 transition-all shrink-0">
                <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-white font-bold text-lg leading-tight group-hover:text-blue-300 transition-colors">
                {item.title}
            </h3>
        </motion.div>
    );
};
