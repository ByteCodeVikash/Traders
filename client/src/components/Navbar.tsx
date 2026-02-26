import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, BookOpen, GraduationCap, ChevronDown, TrendingUp, Wrench, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [eduOpen, setEduOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => location === href;

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-[#07101e]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/20" : "bg-[#07101e]/80 backdrop-blur-sm border-b border-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[68px] items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <img src="/techforex_logo.webp" alt="TechForex" className="h-9 w-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <span className="text-lg font-black tracking-tight text-white group-hover:text-blue-400 transition-colors">
              Tech<span className="text-blue-400">Forex</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: "/", label: "Home", icon: null },
              { href: "/markets", label: "Markets", icon: TrendingUp },
              { href: "/tools", label: "Tools", icon: Wrench },
              { href: "/contact", label: "Contact", icon: Phone },
            ].map(({ href, label }) => (
              <Link key={href} href={href}>
                <span className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive(href)
                    ? "text-white bg-white/[0.08]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                }`}>
                  {label}
                  {isActive(href) && (
                    <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400" />
                  )}
                </span>
              </Link>
            ))}

            {/* Education Dropdown */}
            <div className="relative" onMouseEnter={() => setEduOpen(true)} onMouseLeave={() => setEduOpen(false)}>
              <button className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                location.startsWith('/education') || location === '/books'
                  ? "text-white bg-white/[0.08]"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
              }`}>
                Education
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${eduOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {eduOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-52 bg-[#0d1827] border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden"
                  >
                    <div className="p-2">
                      <Link href="/education" onClick={() => setEduOpen(false)}>
                        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.06] cursor-pointer group">
                          <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                            <GraduationCap className="w-4 h-4 text-blue-400" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">All Courses</div>
                            <div className="text-xs text-slate-500">Browse programs</div>
                          </div>
                        </div>
                      </Link>
                      <Link href="/books" onClick={() => setEduOpen(false)}>
                        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.06] cursor-pointer group">
                          <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                            <BookOpen className="w-4 h-4 text-emerald-400" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">Books & Guides</div>
                            <div className="text-xs text-slate-500">Trading literature</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/education">
              <button className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-sm font-black rounded-xl shadow-lg shadow-blue-900/30 hover:shadow-blue-800/40 hover:scale-[1.03] transition-all">
                Enroll Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/[0.06] bg-[#07101e] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {[
                { href: "/", label: "Home" },
                { href: "/markets", label: "Markets" },
                { href: "/tools", label: "Tools" },
                { href: "/education", label: "All Courses" },
                { href: "/books", label: "Books & Guides" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} onClick={() => setIsOpen(false)}>
                  <span className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    isActive(href) ? "bg-white/[0.08] text-white" : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                  }`}>
                    {label}
                  </span>
                </Link>
              ))}
              <div className="pt-3">
                <Link href="/education" onClick={() => setIsOpen(false)}>
                  <button className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-black rounded-xl">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
