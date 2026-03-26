import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { VisaGrid } from '@/components/VisaGrid';
import { ArrowRight, Plane } from 'lucide-react';

interface LocationContentProps {
  location: string;
  selectedLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export function LocationContent({ location, selectedLanguage, onLanguageChange }: LocationContentProps) {
  const isAr = selectedLanguage === 'ar';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 w-full overflow-x-hidden">
      <Navbar selectedLanguage={selectedLanguage} onLanguageChange={onLanguageChange} />

      <main className="pt-32">
        {/* Location Hero */}
        <section className="pb-16 px-4 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-slate-800">
              {isAr ? `تأشيرة إندونيسيا - ${location}` : `Indonesia Visa for ${location}`}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              {isAr 
                ? `خطتك للسفر من دبي إلى ${location} تبدأ هنا. خدمات تأشيرة احترافية وسريعة لجميع احتياجاتك.`
                : `Your gateway to ${location} from Dubai starts here. Fast, reliable, and professional visa services for UAE residents.`}
            </p>
            
            <div className="flex justify-center">
              <a
                href="https://indonesianvisas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg hover:bg-slate-800 transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                Indonesian Visas <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Popular Visas Grid */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-800">
                {isAr ? 'أشهر 8 أنواع من التأشيرات' : '8 Most Popular Visas'}
              </h2>
              <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
              <p className="text-slate-600 text-lg">
                {isAr 
                  ? 'اختر النوع المناسب لاحتياجاتك من بين خدماتنا الأكثر طلباً.'
                  : `Select the best visa type for your visit to ${location}.`}
              </p>
            </div>
            
            <VisaGrid />
            
            <div className="text-center mt-8">
              <p className="text-slate-500 mb-6 italic">
                {isAr 
                  ? 'جميع الخدمات تتم معالجتها من قبل PT Indonesian Visas Agency.'
                  : 'All visa services are processed directly by PT Indonesian Visas Agency.'}
              </p>
              <a
                href="https://indonesianvisas.com/services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-slate-800 transition-colors"
              >
                {isAr ? 'عرض كافة الخدمات' : 'View All Available Services'} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Local Support Section */}
        <section className="py-16 bg-slate-100 italic">
          <div className="max-w-4xl mx-auto px-4 text-center">
             <Plane className="w-12 h-12 text-amber-500 mx-auto mb-6 opacity-30" />
             <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
               {isAr 
                 ? `سواء كنت متجهاً إلى ${location} للسياحة أو العمل، نحن نضمن لك عملية سلسة من الإمارات.`
                 : `Whether you're heading to ${location} for tourism, business, or investment, we ensure a seamless process from the UAE.`}
             </p>
          </div>
        </section>
      </main>

      <Footer selectedLanguage={selectedLanguage} />
    </div>
  );
}
