'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Link2, Map as MapIcon } from 'lucide-react';

export default function SitemapPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const isAr = selectedLanguage === 'ar';

  const clusters = [
    {
      title: isAr ? 'الصفحات الرئيسية' : 'Main Pages',
      links: [
        { name: isAr ? 'الرئيسية' : 'Home', href: '/' },
        { name: isAr ? 'الخدمات' : 'All Services', href: 'https://indonesianvisas.com/services' },
        { name: isAr ? 'الأسئلة الشائعة' : 'FAQ', href: 'https://indonesianvisas.com/faq' },
      ]
    },
    {
      title: isAr ? 'مجموعة المواقع الجديدة' : 'New Location Cluster',
      links: [
        { name: isAr ? 'تأشيرة إندونيسيا' : 'Visa Indonesia', href: '/visa-indonesia' },
        { name: isAr ? 'تأشيرة بالي' : 'Visa Bali', href: '/visa-bali' },
        { name: isAr ? 'تأشيرة جاكرتا' : 'Visa Jakarta', href: '/visa-jakarta' },
        { name: isAr ? 'تأشيرة لومبوك' : 'Visa Lombok', href: '/visa-lombok' },
        { name: isAr ? 'تأشيرة سورابايا' : 'Visa Surabaya', href: '/visa-surabaya' },
        { name: isAr ? 'تأشيرة جوجا' : 'Visa Jogja', href: '/visa-jogja' },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 w-full overflow-x-hidden">
      <Navbar selectedLanguage={selectedLanguage} onLanguageChange={setSelectedLanguage} />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <MapIcon className="w-8 h-8 text-amber-500" />
            <h1 className="text-4xl font-black text-slate-800">
              {isAr ? 'خريطة الموقع' : 'Sitemap'}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {clusters.map((cluster, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold mb-6 text-slate-800 border-b pb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                  {cluster.title}
                </h2>
                <ul className="space-y-4">
                  {cluster.links.map((link, j) => (
                    <li key={j}>
                      {link.href.startsWith('/') ? (
                        <Link 
                          href={link.href} 
                          className="text-slate-600 hover:text-amber-600 transition-colors flex items-center gap-2 group"
                        >
                          <Link2 className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-colors" />
                          {link.name}
                        </Link>
                      ) : (
                        <a 
                          href={link.href} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:text-amber-600 transition-colors flex items-center gap-2 group"
                        >
                          <Link2 className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-colors" />
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer selectedLanguage={selectedLanguage} />
    </div>
  );
}
