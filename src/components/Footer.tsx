import Link from 'next/link';
import { SOCIAL_LINKS } from '../lib/data';

interface FooterProps {
    selectedLanguage: string;
}

export function Footer({ selectedLanguage }: FooterProps) {
    return (
        <footer className="mt-auto bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 text-white">
                            {selectedLanguage === 'en' ? 'UAE Indonesia Visa' : 'تأشيرة إندونيسيا في الإمارات'}
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg mb-4 md:mb-6">
                            {selectedLanguage === 'en'
                                ? 'Professional UAE to Indonesia visa services with 16+ years experience. Fast, reliable, and trusted by thousands from UAE and worldwide.'
                                : 'خدمات تأشيرة إندونيسيا احترافية من الإمارات بخبرة 16+ عاماً. سريعة وموثوقة ومحترمة، موثوقة من الآلاف في جميع أنحاء العالم.'}
                        </p>
                        <div className="mb-4">
                            <Link href="/site-map" className="text-amber-500 hover:text-amber-400 font-bold flex items-center gap-2 transition-colors">
                                {selectedLanguage === 'en' ? 'Sitemap / New Cluster' : 'خريطة الموقع / مجموعة جديدة'}
                                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4 md:mb-6 text-white">
                            {selectedLanguage === 'en' ? 'Quick Links' : 'روابط سريعة'}
                        </h3>
                        <ul className="space-y-2 md:space-y-3">
                            <li><a href="https://indonesianvisas.com/apply" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">{selectedLanguage === 'en' ? 'Apply Now' : 'قدم بطلب الآن'}</a></li>
                            <li><a href="https://indonesianvisas.com/extend" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">{selectedLanguage === 'en' ? 'Extend Visa' : 'مدد تأشيرتك'}</a></li>
                            <li><a href="https://indonesianvisas.com/services" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">{selectedLanguage === 'en' ? 'Services' : 'الخدمات'}</a></li>
                            <li><a href="https://indonesianvisas.com/faq" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">{selectedLanguage === 'en' ? 'FAQ' : 'الأسئلة الشائعة'}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4 md:mb-6 text-white">
                            {selectedLanguage === 'en' ? 'Policies' : 'السياسات'}
                        </h3>
                        <ul className="space-y-2 md:space-y-3">
                            <li><a href="https://indonesianvisas.com/privacy" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">{selectedLanguage === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}</a></li>
                            <li><a href="https://indonesianvisas.com/terms" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">{selectedLanguage === 'en' ? 'Terms of Service' : 'شروط الخدمة'}</a></li>
                            <li><a href="https://indonesianvisas.com/refund" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">{selectedLanguage === 'en' ? 'Refund Policy' : 'سياسة الاسترداد'}</a></li>
                            <li><a href="https://indonesianvisas.com/disclaimer" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">{selectedLanguage === 'en' ? 'Disclaimer' : 'إخلاء مسؤولية'}</a></li>
                        </ul>
                    </div>
                </div>

                {/* Social Links */}
                <div className="border-t border-slate-700 pt-6 md:pt-8 mb-6 md:mb-8">
                    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
                        {SOCIAL_LINKS.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${(social as any).bgClass} w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm hover:scale-110 transition-transform`}
                                aria-label={social.name}
                            >
                                {social.name.charAt(0)}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-slate-600 pt-6 pb-4 text-center">
                    <p className="text-slate-300 text-sm md:text-base mb-4 font-semibold">
                        {selectedLanguage === 'en' ? '© 2026 UAE Indonesia Visa™' : '© 2026 تأشيرة إندونيسيا في الإمارات™'}
                    </p>
                    <p className="text-slate-300 text-xs md:text-sm mb-4">
                        {selectedLanguage === 'en' ? 'Operated by PT Indonesian Visas Agency (Indonesia).' : 'تدارها شركة عودة تأشيرة إندونيسيا (إندونيسيا)'}
                    </p>
                    <p className="text-slate-300 text-xs md:text-sm mb-4">
                        {selectedLanguage === 'en' ? 'All Rights Reserved.' : 'جميع الحقوق محفوظة.'}
                    </p>
                    <div className="mb-4">
                        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 text-xs md:text-sm">
                            <a href="https://bali.enterprises" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">bali.enterprises</a>
                            <span className="text-slate-500">•</span>
                            <a href="https://indonesianvisas.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">indonesianvisas.com</a>
                            <span className="text-slate-500">•</span>
                            <a href="https://balihelp.id" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">balihelp.id</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
