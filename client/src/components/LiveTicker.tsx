import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface PriceData {
    symbol: string;
    name: string;
    priceUSD: number;
    priceINR: number;
    change: number;
}

const INITIAL_DATA: PriceData[] = [
    { symbol: "ETH", name: "Ethereum", priceUSD: 3450.20, priceINR: 286366, change: 2.4 },
    { symbol: "XAU", name: "Gold (oz)", priceUSD: 2350.50, priceINR: 195091, change: 0.8 },
    { symbol: "XAG", name: "Silver (oz)", priceUSD: 28.45, priceINR: 2361, change: -0.5 },
    { symbol: "HG", name: "Copper", priceUSD: 4.25, priceINR: 352, change: 1.2 },
    { symbol: "USDT", name: "Tether", priceUSD: 1.00, priceINR: 83.50, change: 0.01 },
    { symbol: "USD", name: "US Dollar", priceUSD: 1.00, priceINR: 83.45, change: 0.05 },
];

export function LiveTicker() {
    const [prices, setPrices] = useState<PriceData[]>(INITIAL_DATA);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrices(current => current.map(item => {
                const volatility = item.priceUSD * 0.0005; // 0.05% volatility
                const changeAmount = (Math.random() - 0.5) * volatility;
                const newPriceUSD = item.priceUSD + changeAmount;
                const newPriceINR = item.priceINR + (changeAmount * 83); // Approx conversion update

                // Update change percentage slightly
                const newChange = item.change + (Math.random() - 0.5) * 0.1;

                return {
                    ...item,
                    priceUSD: newPriceUSD,
                    priceINR: newPriceINR,
                    change: newChange
                };
            }));
        }, 2000); // 2 second update rate

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full bg-[#0A1628] border-b border-white/10 overflow-hidden">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    Live Markets
                </div>

                <div className="flex-1 overflow-hidden ml-8 mask-linear-fade">
                    <div className="flex gap-8 animate-ticker hover:[animation-play-state:paused] w-max">
                        {/* Double the list for seamless loop */}
                        {[...prices, ...prices].map((item, i) => (
                            <div key={`${item.symbol}-${i}`} className="flex items-center gap-3 text-xs font-mono">
                                <span className="font-bold text-white">{item.symbol}</span>
                                <span className={cn(
                                    "font-medium",
                                    item.change >= 0 ? "text-emerald-400" : "text-red-400"
                                )}>
                                    ${item.priceUSD.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </span>
                                <span className="text-slate-500">
                                    ₹{item.priceINR.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                </span>
                                <span className={cn(
                                    "flex items-center text-[10px]",
                                    item.change >= 0 ? "text-emerald-500" : "text-red-500"
                                )}>
                                    {item.change >= 0 ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
                                    {Math.abs(item.change).toFixed(2)}%
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
