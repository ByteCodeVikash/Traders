import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMarketData } from "@/hooks/use-market-data";

export function MarketTicker() {
  const { data: prices } = useMarketData({ refreshInterval: 5000 });

  // Use prices if available, otherwise show nothing or loading
  const tickerData = prices.length > 0 ? [...prices, ...prices] : [];

  if (prices.length === 0) return null; // Hide if no data

  return (
    <div className="w-full bg-slate-900 py-2 border-b border-slate-800 overflow-hidden relative z-40">
      <div className="flex animate-ticker whitespace-nowrap">
        {tickerData.map((item, i) => (
          <div key={`${item.symbol}-${i}`} className="flex items-center gap-2 mx-6 text-sm font-mono">
            <span className="font-bold text-slate-200">{item.symbol}</span>
            <span className="text-slate-400">
              {item.price < 50
                ? item.price.toFixed(4)
                : item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span
              className={cn(
                "flex items-center gap-0.5 text-xs font-medium",
                item.change >= 0 ? "text-green-400" : "text-red-400"
              )}
            >
              {item.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {Math.abs(item.change).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

