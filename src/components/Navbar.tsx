'use client';

import { useState, useEffect } from 'react';
import { Globe, MessageCircle, Languages } from 'lucide-react';

interface NavbarProps {
    selectedLanguage: string;
    onLanguageChange: (lang: string) => void;
}

export function Navbar({ selectedLanguage, onLanguageChange }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 50);
                    ticking = true;
                });
                ticking = false;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${scrolled ? 'bg-white/98 shadow-lg' : 'bg-white'
            }`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
                <a href="https://uaeindonesiavisa.online" className="text-2xl md:text-4xl font-black tracking-tight text-slate-800 hover:text-slate-700 transition-colors">
                    UAE Indonesia Visa
                </a>
                <div className="flex items-center gap-4 md:gap-8">
                    <div className="relative">
                        <button
                            onClick={() => onLanguageChange(selectedLanguage === 'en' ? 'ar' : 'en')}
                            className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors font-medium text-sm md:text-base"
                            aria-label="Change Language"
                        >
                            <Globe className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                            <span className="hidden md:inline">{selectedLanguage === 'en' ? 'عربي' : 'English'}</span>
                            <Languages className="w-4 h-4 md:w-5 md:h-5 ml-1" aria-hidden="true" />
                        </button>
                    </div>
                    <a
                        href="https://wa.me/61423854701"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-amber-500 text-white px-4 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-slate-800 hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center gap-2"
                    >
                        <MessageCircle className="w-5 h-5" aria-hidden="true" />
                        Contact Us
                    </a>
                </div>
            </div>
        </nav>
    );
}
