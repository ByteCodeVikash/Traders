import { Link } from "wouter";
import { Lock, Shield, CheckCircle2, Youtube, Instagram, Twitter, Linkedin } from "lucide-react";

const footerLinks = [
  {
    title: "Programs",
    links: [
      { label: "Starter Pack", href: "/education" },
      { label: "Pro Trader Course", href: "/education" },
      { label: "Elite Mentorship", href: "/education" },
      { label: "Live Sessions", href: "/education" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Trading Books", href: "/books" },
      { label: "Trading Tools", href: "/tools" },
      { label: "Market Analysis", href: "/markets" },
      { label: "Free Webinars", href: "/education" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Shivam", href: "/contact" },
      { label: "Student Results", href: "/" },
      { label: "Contact Us", href: "/contact" },
      { label: "WhatsApp Support", href: "https://wa.me/919876543210" },
    ],
  },
];

const socials = [
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-400" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-400" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
];

export function Footer() {
  return (
    <footer className="bg-[#050d18] border-t border-white/[0.05]">
      <div className="container mx-auto px-4 py-16">

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/techforex_logo.webp"
                alt="TechForex"
                className="h-10 w-auto"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span className="text-xl font-black text-white tracking-tight">Tech<span className="text-blue-400">Forex</span></span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-7">
              India's premier forex & stock trading education platform. Learn from a NISM-certified professional with 8+ years of proven market experience.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={`w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-500 ${s.color} hover:border-white/20 transition-all`}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 text-sm hover:text-blue-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href}>
                        <span className="text-slate-500 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                          {link.label}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.05]">
          <div className="flex flex-wrap gap-y-4 justify-between items-center mb-5">
            <div className="flex items-center gap-6 flex-wrap">
              {[
                { icon: Lock, text: "SSL Secured" },
                { icon: Shield, text: "NISM Certified" },
                { icon: CheckCircle2, text: "7-Day Refund" },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-slate-600 text-xs font-medium">
                  <badge.icon className="w-3.5 h-3.5 text-emerald-500" />
                  {badge.text}
                </div>
              ))}
            </div>
            <p className="text-slate-700 text-xs">© {new Date().getFullYear()} TechForex. All rights reserved.</p>
          </div>

          <p className="text-slate-700 text-xs leading-relaxed max-w-4xl">
            <strong className="text-slate-600">Risk Disclaimer:</strong> Trading financial instruments involves substantial risk of loss and is not suitable for all investors. Past performance of any trading strategy is not necessarily indicative of future results. Educational content is for informational purposes only and does not constitute financial advice. Please trade responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
