import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, BarChart2, BookOpen, GraduationCap, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/markets", label: "Markets" },
    { href: "/tools", label: "Tools" },
    // Education is handled separately
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-slate-50/95 backdrop-blur supports-[backdrop-filter]:bg-slate-50/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <img src="/techforex_logo.webp" alt="TechForex" className="h-10 w-auto object-contain" />
              <span className="text-xl font-bold tracking-tight text-primary font-display">
                TechForex
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={cn("nav-link", location === "/" && "text-primary font-semibold")}>Home</Link>
            <Link href="/markets" className={cn("nav-link", location === "/markets" && "text-primary font-semibold")}>Markets</Link>
            <Link href="/tools" className={cn("nav-link", location === "/tools" && "text-primary font-semibold")}>Tools</Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 nav-link outline-none">
                Education <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/education">
                  <DropdownMenuItem className="cursor-pointer">
                    <GraduationCap className="w-4 h-4 mr-2" /> Center Home
                  </DropdownMenuItem>
                </Link>
                <Link href="/books">
                  <DropdownMenuItem className="cursor-pointer">
                    <BookOpen className="w-4 h-4 mr-2" /> Books & Guides
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contact" className={cn("nav-link", location === "/contact" && "text-primary font-semibold")}>Contact</Link>

            <Link href="/education">
              <button className="btn-primary py-2 px-5 text-sm shadow-md">
                Get Started
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="space-y-1 px-4 py-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-md">Home</Link>
            <Link href="/markets" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-md">Markets</Link>
            <Link href="/tools" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-md">Tools</Link>

            <div className="px-3 py-2">
              <div className="text-sm font-semibold text-slate-900 mb-2">Education</div>
              <div className="pl-4 space-y-2 border-l-2 border-slate-100">
                <Link href="/education" onClick={() => setIsOpen(false)} className="block text-sm text-slate-600">Center Home</Link>
                <Link href="/books" onClick={() => setIsOpen(false)} className="block text-sm text-slate-600">Books & Guides</Link>
              </div>
            </div>

            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-md">Contact</Link>

            <div className="pt-4">
              <Link href="/education" onClick={() => setIsOpen(false)}>
                <button className="w-full btn-primary text-base">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
