import { MarketTicker } from "@/components/MarketTicker";
import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, RefreshCw } from "lucide-react";

interface MarketItem {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  high: number;
  low: number;
  volume: string;
  category: "Forex" | "Crypto" | "Indices" | "Commodities";
}

export default function Markets() {
  const [items, setItems] = useState<MarketItem[]>([
    { id: "1", symbol: "EUR/USD", name: "Euro / US Dollar", price: 1.0845, change: 0.12, high: 1.0890, low: 1.0810, volume: "125K", category: "Forex" },
    { id: "2", symbol: "GBP/USD", name: "British Pound / US Dollar", price: 1.2630, change: -0.05, high: 1.2680, low: 1.2590, volume: "98K", category: "Forex" },
    { id: "3", symbol: "USD/JPY", name: "US Dollar / Japanese Yen", price: 151.20, change: 0.34, high: 151.80, low: 150.90, volume: "110K", category: "Forex" },
    { id: "4", symbol: "BTC/USD", name: "Bitcoin", price: 65430.00, change: 1.25, high: 66000, low: 64200, volume: "45K", category: "Crypto" },
    { id: "5", symbol: "ETH/USD", name: "Ethereum", price: 3450.50, change: 0.85, high: 3520, low: 3380, volume: "32K", category: "Crypto" },
    { id: "6", symbol: "XAU/USD", name: "Gold", price: 2165.40, change: -0.15, high: 2175.50, low: 2155.20, volume: "22K", category: "Commodities" },
    { id: "7", symbol: "US30", name: "Dow Jones", price: 39100.00, change: 0.22, high: 39250, low: 38950, volume: "85K", category: "Indices" },
    { id: "8", symbol: "SPX500", name: "S&P 500", price: 5180.25, change: 0.45, high: 5200, low: 5150, volume: "150K", category: "Indices" },
    { id: "9", symbol: "USD/INR", name: "US Dollar / Indian Rupee", price: 83.45, change: 0.02, high: 83.55, low: 83.30, volume: "40K", category: "Forex" },
  ]);

  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Simulate price ticks
  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => prev.map(item => ({
        ...item,
        price: item.price * (1 + (Math.random() - 0.5) * 0.001),
        change: item.change + (Math.random() - 0.5) * 0.02
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filteredItems = activeCategory === "All"
    ? items
    : items.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      <MarketTicker />

      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold font-display text-slate-900 mb-4">Live Market Data</h1>
          <p className="text-slate-600 max-w-2xl">
            Real-time quotes for major currency pairs, cryptocurrencies, indices, and commodities.
            Prices are indicative and for educational purposes only.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["All", "Forex", "Crypto", "Indices", "Commodities"].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Market Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div key={item.id} className="card-professional p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{item.symbol}</h3>
                  <p className="text-xs text-slate-500 font-medium">{item.name}</p>
                </div>
                <div className={`flex items-center gap-1 text-sm font-semibold ${item.change >= 0 ? 'text-secondary' : 'text-red-500'}`}>
                  {item.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  {Math.abs(item.change).toFixed(2)}%
                </div>
              </div>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold font-mono text-slate-900">
                  {item.price.toFixed(item.category === 'Forex' && !item.symbol.includes('JPY') ? 4 : 2)}
                </span>
                <span className="text-xs text-slate-400 font-mono">USD</span>
              </div>

              <div className="grid grid-cols-3 gap-4 text-xs border-t border-slate-100 pt-4">
                <div>
                  <span className="block text-slate-400 mb-1">High</span>
                  <span className="font-mono font-medium">{item.high.toFixed(2)}</span>
                </div>
                <div>
                  <span className="block text-slate-400 mb-1">Low</span>
                  <span className="font-mono font-medium">{item.low.toFixed(2)}</span>
                </div>
                <div className="text-right">
                  <span className="block text-slate-400 mb-1">Vol</span>
                  <span className="font-mono font-medium">{item.volume}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4 animate-spin" />
            <span>Prices update automatically every 3 seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}
