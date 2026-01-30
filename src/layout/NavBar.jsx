import { Menu, X } from "lucide-react";
import { useState } from "react";
import {Button} from "@/Components/Button.jsx";// Ensure this path is correct based on your folder structure

const navLinks = [
    { href: 'hero', label: "Home" },
    { href: 'about', label: 'About' },
    { href: 'experience', label: 'Experience' },
    { href: 'skills', label: 'Skills' },
    { href: 'ventures', label: 'Ventures' },
    { href: 'media', label: 'Media' },
];

export const NavBar = ({ scrolled, scrollToSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className={`fixed top-0 left-0 right-0 py-5 z-[100] transition-all duration-500 ${
            scrolled || isMobileMenuOpen
                ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
                : "bg-transparent"
        }`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                {/* Brand Logo */}
                <a href="#" className="group relative z-[110] flex flex-col">
                    <span className="text-xl font-black text-white tracking-tighter group-hover:text-amber-400 transition-colors">
                        Mandipa.A.Hlabano
                    </span>
                    <span className="text-[9px] text-amber-400/70 font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                        Legal Scholar & Civic Leader
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1 backdrop-blur-md">
                    {navLinks.map((link, index) => (
                        <a
                            href={`#${link.href}`}
                            key={index}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(link.href);
                            }}
                            className="relative px-5 py-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all group"
                        >
                            {link.label}
                            {/* Animated Indicator */}
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-[0_0_8px_#fbbf24]" />
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button
                        onClick={() => {
                            const contactSection = document.getElementById('contact');
                            contactSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black rounded-full font-bold px-8 py-3 shadow-lg shadow-amber-500/20 transition-all active:scale-95"
                    >
                        Contact Me
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden relative z-[110] p-2 text-white bg-white/10 rounded-xl border border-white/10"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Vibrant Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black/98 backdrop-blur-2xl transition-all duration-500 md:hidden ${
                isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
            }`}>
                {/* Decorative background glow for mobile menu */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px]" />

                <div className="flex flex-col items-center justify-center h-full gap-8 relative z-10">
                    {navLinks.map((link, index) => (
                        <a
                            href={`#${link.href}`}
                            key={index}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(link.href);
                                setIsMobileMenuOpen(false);
                            }}
                            style={{ transitionDelay: `${index * 50}ms` }}
                            className={`text-4xl font-black text-white hover:text-amber-400 transition-all transform ${
                                isMobileMenuOpen ? "translate-y-0" : "translate-y-10"
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}

                    <button
                        onClick={() => {
                            scrollToSection('contact');
                            setIsMobileMenuOpen(false);
                        }}
                        className="mt-8 px-10 py-4 bg-amber-500 text-black font-black rounded-2xl uppercase tracking-widest text-sm"
                    >
                        Contact Me
                    </button>
                </div>
            </div>
        </header>
    );
};