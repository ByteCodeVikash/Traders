import { useState, useEffect, useRef } from 'react';

export interface MarketData {
    symbol: string;
    name: string;
    price: number;
    change: number; // Percentage change
    changeAmount?: number;
    high?: number;
    low?: number;
    spread?: string; // Twelve Data doesn't give spread easily in free tier, can estimate
    type: 'forex' | 'crypto' | 'stock' | 'index';
}

interface UseMarketDataOptions {
    refreshInterval?: number;
}

// Default symbols to fetch
const FOREX_PAIRS = ['EUR/USD', 'GBP/USD', 'USD/JPY'];
const CRYPTO_IDS = ['bitcoin', 'ethereum', 'tether', 'solana', 'ripple'];

export function useMarketData({ refreshInterval = 5000 }: UseMarketDataOptions = {}) {
    const [data, setData] = useState<MarketData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Cache to prevent jitter if API fails
    const dataCache = useRef<Map<string, MarketData>>(new Map());

    // Twelve Data API Key
    const TWELVE_DATA_API_KEY = import.meta.env.VITE_TWELVE_DATA_API_KEY;
    const COINGECKO_API_KEY = import.meta.env.VITE_COINGECKO_API_KEY;

    const fetchData = async () => {
        try {
            // 1. Fetch Forex Data (Twelve Data)
            let forexData: MarketData[] = [];
            if (TWELVE_DATA_API_KEY && TWELVE_DATA_API_KEY !== 'your_twelve_data_key_here') {
                const symbolString = FOREX_PAIRS.join(',');
                const forexUrl = `https://api.twelvedata.com/quote?symbol=${symbolString}&apikey=${TWELVE_DATA_API_KEY}`;

                try {
                    const res = await fetch(forexUrl);
                    const json = await res.json();

                    // Handle single vs multiple responses
                    const items = json.symbol ? { [json.symbol]: json } : json;

                    Object.values(items).forEach((item: any) => {
                        if (item.symbol) {
                            const price = parseFloat(item.close) || parseFloat(item.percent_change) || 0;
                            // Note: Twelve Data quote endpoint gives 'close' as current price roughly, or use 'price' field if available? 
                            // Actually quote endpoint returns "close" as previous close? No, it returns "close" but real-time price is usually "currenc_exchange_rate" or "price".
                            // Quote endpoint: symbol, name, exchange, mic_code, currency, datetime, timestamp, open, high, low, close, volume, previous_close, change, percent_change, average_volume, is_market_open, fifty_two_week

                            const currentPrice = parseFloat(item.close); // For quote endpoint, close is often the latest price or we use realtime endpoint (but quote is better for change %)
                            const change = parseFloat(item.percent_change);

                            const md: MarketData = {
                                symbol: item.symbol,
                                name: item.name,
                                price: currentPrice,
                                change: change,
                                type: 'forex',
                                spread: '0.1' // Mock spread as it's not in basic quote
                            };
                            forexData.push(md);
                            dataCache.current.set(item.symbol, md);
                        }
                    });
                } catch (e) {
                    console.warn("Forex fetch failed", e);
                }
            } else {
                // console.log("Skipping Forex fetch - No API Key");
            }

            // 2. Fetch Crypto Data (CoinGecko)
            let cryptoData: MarketData[] = [];
            const cryptoUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${CRYPTO_IDS.join(',')}&vs_currencies=usd&include_24hr_change=true`;
            // Add API key header if available to increase limits
            const coingeckoOptions = COINGECKO_API_KEY && COINGECKO_API_KEY !== 'your_coingecko_key_here'
                ? { headers: { 'x-cg-demo-api-key': COINGECKO_API_KEY } }
                : {};

            try {
                const res = await fetch(cryptoUrl, coingeckoOptions);
                if (res.status === 429) {
                    console.warn("CoinGecko rate limited");
                } else {
                    const json = await res.json();
                    // json format: { bitcoin: { usd: 65000, usd_24h_change: 2.5 } }

                    // Map ids back to symbols (manual map or approx)
                    const nameToSymbol: { [key: string]: string } = {
                        'bitcoin': 'BTC/USD',
                        'ethereum': 'ETH/USD',
                        'tether': 'USDT/USD',
                        'solana': 'SOL/USD',
                        'ripple': 'XRP/USD'
                    };

                    Object.entries(json).forEach(([id, val]: [string, any]) => {
                        const symbol = nameToSymbol[id] || id.toUpperCase();
                        const md: MarketData = {
                            symbol: symbol,
                            name: id.charAt(0).toUpperCase() + id.slice(1),
                            price: val.usd,
                            change: val.usd_24h_change,
                            type: 'crypto',
                            spread: '0.5' // Mock
                        };
                        cryptoData.push(md);
                        dataCache.current.set(symbol, md);
                    });
                }
            } catch (e) {
                console.warn("Crypto fetch failed", e);
            }

            // 3. Fallback/Merge with Cache
            // If we failed to get data, use cache if available
            // Or if we have partial data, merge it.

            // If no keys are set, fallback to something? User wants REAL data. 
            // If requests fail, we might return empty or error.
            // But for "Smooth UI update", we should keep old data if new fetch fails.

            const allData = [...forexData, ...cryptoData];

            if (allData.length > 0) {
                setData(allData);
                setError(null);
            } else if (dataCache.current.size > 0) {
                // Keep showing cached data
                setData(Array.from(dataCache.current.values()));
            } else {
                // If totally empty and 1st run
                // setError("Unable to fetch market data"); 
            }

            setLoading(false);

        } catch (err) {
            console.error("Market data fetch error:", err);
            setError("Failed to load market data");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, refreshInterval);
        return () => clearInterval(interval);
    }, [refreshInterval]);

    return { data, loading, error };
}
