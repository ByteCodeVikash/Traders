
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDownRight, Menu, Search, Home, BarChart2, MessageCircle, User } from "lucide-react";

// Mock data for the phone screen
const marketData = [
    { symbol: "USD/CHF", name: "U.S. Dollar / Swiss Franc", price: "0.8924", change: "-0.12%", up: false },
    { symbol: "DXY", name: "U.S. Dollar Currency Index", price: "104.25", change: "-0.16%", up: false },
    { symbol: "EUR/USD", name: "Euro / U.S. Dollar", price: "1.0845", change: "+0.13%", up: true },
    { symbol: "CAD/JPY", name: "Canadian Dollar / Japanese Yen", price: "109.82", change: "-0.34%", up: false },
    { symbol: "USOIL", name: "CFDs on WTI Crude Oil", price: "78.45", change: "+0.03%", up: true },
    { symbol: "GBP/CHF", name: "British Pound / Swiss Franc", price: "1.1240", change: "+0.17%", up: true },
    { symbol: "EUR/JPY", name: "Euro / Japanese Yen", price: "163.20", change: "-0.26%", up: false },
    { symbol: "GBP/JPY", name: "British Pound / Japanese Yen", price: "191.50", change: "-0.12%", up: false },
    { symbol: "GBP/AUD", name: "British Pound / Australian Dollar", price: "1.9215", change: "-0.10%", up: false },
    { symbol: "GBP/USD", name: "British Pound / U.S. Dollar", price: "1.2640", change: "+0.27%", up: true },
    { symbol: "NZD/USD", name: "New Zealand Dollar / U.S. Dollar", price: "0.6120", change: "+0.07%", up: true },
    { symbol: "AUD/CAD", name: "Australian Dollar / Canadian Dollar", price: "0.8910", change: "+0.37%", up: true },
    { symbol: "AUD/USD", name: "Australian Dollar / U.S. Dollar", price: "0.6580", change: "-0.15%", up: false },
];

export const MasterMarkets = () => {
    // We duplicate the data to create a seamless loop
    const scrollingData = [...marketData, ...marketData];

    return (
        <section className="py-24 bg-black text-white overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

                    {/* Left Content */}
                    <div className="lg:w-1/2 relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-8 leading-[1.1]"
                        >
                            Master the Global <br />
                            Markets Live
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-gray-400 leading-relaxed max-w-xl"
                        >
                            Experience trading education like never before — real charts, real
                            strategies, and real results. Gain the confidence to trade any market, any
                            time. At TechForex, we bridge the gap between theory and execution through
                            guided mentorship, hands-on sessions, and live market analysis. Learn
                            how professionals read, react, and profit from every move in the global
                            markets.
                        </motion.p>
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 flex justify-center lg:justify-end relative"
                    >
                        {/* Phone Frame */}
                        <div className="relative w-[320px] h-[650px] bg-[#1c1c1e] rounded-[3rem] border-8 border-[#2c2c2e] shadow-2xl overflow-hidden ring-1 ring-white/10">
                            {/* Notch */}
                            <div className="absolute top-0 inset-x-0 h-7 bg-[#2c2c2e] z-20 rounded-b-2xl mx-16" />

                            {/* Status Bar */}
                            <div className="absolute top-2 left-6 right-6 flex justify-between text-[10px] text-white/80 z-20 font-medium">
                                <span>11:25</span>
                                <div className="flex gap-1">
                                    <span>LTE</span>
                                    <span>🔋</span>
                                </div>
                            </div>

                            {/* App Header */}
                            <div className="absolute top-8 inset-x-0 h-16 bg-[#000000] z-10 flex items-center justify-between px-5 border-b border-white/5">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">...</div>
                                <span className="font-semibold tracking-wide text-white/90">WATCHLIST</span>
                                <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center">+</div>
                            </div>

                            {/* Scrolling Content */}
                            <div className="absolute top-24 bottom-20 inset-x-0 bg-black overflow-hidden mask-scroll">
                                <motion.div
                                    animate={{ y: [0, -1000] }} // Adjust based on height of half the list
                                    transition={{
                                        repeat: Infinity,
                                        ease: "linear",
                                        duration: 40
                                    }}
                                    className="w-full"
                                >
                                    {/* First Copy */}
                                    {scrollingData.map((item, index) => (
                                        <MarketItem key={`first-${index}`} item={item} />
                                    ))}
                                    {/* Second Copy for seamless loop */}
                                    {scrollingData.map((item, index) => (
                                        <MarketItem key={`second-${index}`} item={item} />
                                    ))}
                                </motion.div>

                                {/* Gradient overlays for smooth fade */}
                                <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
                                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
                            </div>

                            {/* Bottom Tab Bar */}
                            <div className="absolute bottom-0 inset-x-0 h-20 bg-[#1c1c1e] z-20 flex justify-around items-center pb-4 text-[10px] font-medium text-gray-500 border-t border-white/5">
                                <div className="flex flex-col items-center gap-1 text-white">
                                    <BarChart2 className="w-5 h-5" />
                                    <span>Watchlist</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 hover:text-white transition-colors cursor-pointer">
                                    <Search className="w-5 h-5" />
                                    <span>Explore</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 cursor-pointer group">
                                    <div className="w-10 h-10 -mt-8 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/50 text-white group-hover:scale-110 transition-transform">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </div>
                                    <span className="mt-1 group-hover:text-white transition-colors">Trade</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 hover:text-white transition-colors cursor-pointer">
                                    <MessageCircle className="w-5 h-5" />
                                    <span>Community</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 hover:text-white transition-colors cursor-pointer">
                                    <User className="w-5 h-5" />
                                    <span>Profile</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Helper component for list items
const MarketItem = ({ item }: { item: any }) => (
    <div className="flex justify-between items-center py-4 px-5 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer group">
        <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${item.up ? 'bg-emerald-500/20 text-emerald-500' : 'bg-rose-500/20 text-rose-500'}`}>
                {item.symbol.substring(0, 1)}
            </div>
            <div>
                <div className="font-bold text-sm text-white group-hover:text-blue-400 transition-colors">{item.symbol}</div>
                <div className="text-[10px] text-gray-500 max-w-[120px] truncate">{item.name}</div>
            </div>
        </div>
        <div className="text-right">
            <div className={`font-mono text-sm font-medium ${item.up ? 'text-emerald-500' : 'text-rose-500'}`}>
                {item.price}
            </div>
            <div className={`text-[10px] font-bold ${item.up ? 'text-emerald-500' : 'text-rose-500'}`}>
                {item.change}
            </div>
        </div>
    </div>
);
