import { useProducts } from "@/hooks/use-products";
import { ArrowRight, Wrench, BarChart, Calculator, Zap } from "lucide-react";

export default function Tools() {
  const { data: products, isLoading } = useProducts();

  // Filter only tools
  const tools = products?.filter(p => p.category === 'tool') || [];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold font-display text-slate-900 mb-4">Trading Tools</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional calculators, indicators, and software designed to streamline your analysis and risk management.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {isLoading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-96 bg-slate-200 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <div key={tool.id} className="card-professional flex flex-col overflow-hidden group">
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={tool.imageUrl}
                    alt={tool.title}
                    onError={(e) => { e.currentTarget.src = '/assets/stocks.jpg' }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                    Premium Tool
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{tool.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow">{tool.description}</p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                    <span className="text-2xl font-bold text-slate-900">
                      ${tool.price.toFixed(2)}
                    </span>
                    <button className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
                      Get Access <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Fallback Static Cards if API is empty during dev */}
            {tools.length === 0 && (
              <>
                <StaticToolCard
                  title="Position Size Calculator"
                  desc="Calculate exact lot sizes based on your risk percentage and stop loss pips."
                  icon={<Calculator className="h-8 w-8 text-primary" />}
                />
                <StaticToolCard
                  title="Correlation Matrix"
                  desc="Real-time currency correlation table to avoid over-exposure."
                  icon={<BarChart className="h-8 w-8 text-secondary" />}
                />
                <StaticToolCard
                  title="Volatility Analyzer"
                  desc="Identify the most volatile pairs for the current trading session."
                  icon={<Zap className="h-8 w-8 text-orange-500" />}
                />
              </>
            )}
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-slate-900 py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <Wrench className="h-12 w-12 text-slate-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">Need a custom indicator?</h2>
          <p className="text-slate-400 mb-8">
            Our team of MQL4/5 developers can build custom solutions for your strategy.
          </p>
          <a href="/contact">
            <button className="bg-white text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">
              Request Custom Build
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

function StaticToolCard({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
  return (
    <div className="card-professional p-8 flex flex-col">
      <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 mb-8 flex-grow">{desc}</p>
      <button className="w-full btn-secondary text-sm">Launch Tool</button>
    </div>
  );
}
