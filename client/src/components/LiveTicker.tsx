import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMarketData } from "@/hooks/use-market-data";

export function LiveTicker() {
    const { data: prices, loading } = useMarketData({ refreshInterval: 5000 });

    const displayPrices = loading || prices.length === 0 ? [
        // Fallback skeleton or initial loading state if needed, or just empty
        { symbol: "Loading...", price: 0, change: 0, name: "" }
    ] : prices;

    // Helper to format price based on type/value
    const formatPrice = (symbol: string, price: number) => {
        if (price === 0) return "--";
        // Crypto/Forex logic
        if (symbol.includes("BTC") || symbol.includes("ETH")) {
            return "$" + price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
        if (price < 10) {
            return "$" + price.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 });
        }
        return "$" + price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    return (
        <div className="w-full bg-[#0A1628] border-b border-white/10 overflow-hidden">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    Live Markets
                </div>

                <div className="flex-1 overflow-hidden ml-8 mask-linear-fade">
                    <div className="flex gap-8 animate-ticker hover:[animation-play-state:paused] w-max">
                        {/* Double the list for seamless loop - only if we have data */}
                        {(prices.length > 0 ? [...prices, ...prices] : []).map((item, i) => (
                            <div key={`${item.symbol}-${i}`} className="flex items-center gap-3 text-xs font-mono">
                                <span className="font-bold text-white">{item.symbol}</span>
                                <span className={cn(
                                    "font-medium",
                                    item.change >= 0 ? "text-emerald-400" : "text-red-400"
                                )}>
                                    {formatPrice(item.symbol, item.price)}
                                </span>
                                {/* Removed INR for now as hook only fetches USD, can re-add if needed with conversion */}

                                <span className={cn(
                                    "flex items-center text-[10px]",
                                    item.change >= 0 ? "text-emerald-500" : "text-red-500"
                                )}>
                                    {item.change >= 0 ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
                                    {Math.abs(item.change).toFixed(2)}%
                                </span>
                            </div>
                        ))}
                        {loading && <div className="text-slate-500 text-xs">Loading market data...</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

