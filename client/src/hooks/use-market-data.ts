// Static market data - no external API required
export interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  type: 'forex' | 'crypto' | 'index' | 'commodity';
  high?: number;
  low?: number;
  volume?: string;
}

export const STATIC_MARKET_DATA: MarketData[] = [
  { symbol: 'EUR/USD', name: 'Euro / US Dollar', price: 1.0842, change: 0.23, type: 'forex', high: 1.0891, low: 1.0798, volume: '98.2B' },
  { symbol: 'GBP/USD', name: 'British Pound / US Dollar', price: 1.2634, change: -0.15, type: 'forex', high: 1.2701, low: 1.2589, volume: '62.1B' },
  { symbol: 'USD/JPY', name: 'US Dollar / Japanese Yen', price: 149.82, change: 0.41, type: 'forex', high: 150.21, low: 149.34, volume: '75.4B' },
  { symbol: 'USD/CHF', name: 'US Dollar / Swiss Franc', price: 0.9012, change: -0.08, type: 'forex', high: 0.9054, low: 0.8976, volume: '28.7B' },
  { symbol: 'AUD/USD', name: 'Australian Dollar / US Dollar', price: 0.6489, change: 0.31, type: 'forex', high: 0.6521, low: 0.6452, volume: '31.2B' },
  { symbol: 'USD/CAD', name: 'US Dollar / Canadian Dollar', price: 1.3621, change: -0.22, type: 'forex', high: 1.3689, low: 1.3578, volume: '24.8B' },
  { symbol: 'NZD/USD', name: 'New Zealand Dollar / US Dollar', price: 0.5978, change: 0.18, type: 'forex', high: 0.6012, low: 0.5941, volume: '12.3B' },
  { symbol: 'EUR/GBP', name: 'Euro / British Pound', price: 0.8582, change: 0.09, type: 'forex', high: 0.8614, low: 0.8551, volume: '41.5B' },
  { symbol: 'BTC/USD', name: 'Bitcoin', price: 67842.50, change: 2.14, type: 'crypto', high: 68900.00, low: 65210.00, volume: '42.1B' },
  { symbol: 'ETH/USD', name: 'Ethereum', price: 3421.80, change: 1.87, type: 'crypto', high: 3589.00, low: 3298.00, volume: '18.6B' },
  { symbol: 'SOL/USD', name: 'Solana', price: 178.42, change: 3.21, type: 'crypto', high: 184.00, low: 169.50, volume: '4.2B' },
  { symbol: 'BNB/USD', name: 'BNB', price: 412.65, change: 0.98, type: 'crypto', high: 421.00, low: 405.00, volume: '1.9B' },
  { symbol: 'XRP/USD', name: 'Ripple', price: 0.6234, change: -1.12, type: 'crypto', high: 0.6541, low: 0.6089, volume: '2.8B' },
  { symbol: 'NIFTY 50', name: 'Nifty 50 Index', price: 22456.80, change: 0.67, type: 'index', high: 22621.00, low: 22298.00, volume: '18.4B' },
  { symbol: 'SENSEX', name: 'BSE Sensex', price: 73892.45, change: 0.54, type: 'index', high: 74201.00, low: 73512.00, volume: '12.1B' },
  { symbol: 'S&P 500', name: 'S&P 500 Index', price: 5218.40, change: 0.32, type: 'index', high: 5241.00, low: 5189.00, volume: '89.3B' },
  { symbol: 'NASDAQ', name: 'Nasdaq Composite', price: 16742.30, change: 0.48, type: 'index', high: 16891.00, low: 16598.00, volume: '124.7B' },
  { symbol: 'XAU/USD', name: 'Gold', price: 2312.40, change: 0.76, type: 'commodity', high: 2341.00, low: 2289.00, volume: '41.2B' },
  { symbol: 'XAG/USD', name: 'Silver', price: 27.84, change: 1.24, type: 'commodity', high: 28.41, low: 27.12, volume: '8.9B' },
  { symbol: 'CRUDE OIL', name: 'Crude Oil WTI', price: 78.92, change: -0.89, type: 'commodity', high: 80.12, low: 78.21, volume: '31.4B' },
];

export function useMarketData() {
  return {
    data: STATIC_MARKET_DATA,
    loading: false,
    error: null,
  };
}
