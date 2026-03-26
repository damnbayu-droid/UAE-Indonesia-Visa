'use client';

import { useState } from 'react';
import {
  RefreshCw,
  Send,
  Plane,
  Heart,
  ArrowRight,
  Globe,
  MessageCircle,
  Mail,
  MapPin,
  Briefcase,
  Star,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { VISA_SERVICES, BENEFITS, ICON_MAP } from '@/lib/data';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "UAE Indonesia Visa",
    "description": "Professional UAE Indonesia visa services. Fast, reliable visa processing for your Indonesian adventure from UAE.",
    "url": "https://uaeindonesiavisa.agency",
    "provider": {
      "@type": "Organization",
      "name": "UAE Indonesia Visa",
      "url": "https://uaeindonesiavisa.agency"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
      />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight text-slate-800">
                {selectedLanguage === 'en' ? 'UAE Indonesia Visa' : 'تأذن إندونيسيا تأشيرة'}
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-slate-600 mb-8 md:mb-10 leading-relaxed uppercase tracking-widest font-bold">
                {selectedLanguage === 'en' ? 'Gateway to Indonesian Visas' : 'بوابة تأشيرات إندونيسيا'}
              </p>
              <p className="text-base md:text-xl lg:text-2xl mb-8 md:mb-10 leading-relaxed text-slate-700">
                {selectedLanguage === 'en'
                  ? 'Fast, reliable, and professional visa services for your Indonesian adventure from UAE. We serve 97 countries with expert support and dedicated customer service available 24/7.'
                  : 'خدمات تأشيرة سريعة وموثوقة ومهنية لمغامرتك إلى إندونيسيا من الإمارات العربية. نخدم 97 دولة مع دعم خبراء متاح على مدار الساعة.'}
              </p>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
                <a
                  href="https://indonesianvisas.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 text-white px-6 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-slate-800 hover:text-white transition-all duration-300 shadow-lg"
                >
                  {selectedLanguage === 'en' ? 'Select Your Country' : 'اختر دولة'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 md:py-16 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Send className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6 text-amber-500" aria-hidden="true" />
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-slate-800">
                  {selectedLanguage === 'en' ? 'Apply for a Visa' : 'قدم بطلب للحصول على تأشيرة'}
                </h3>
                <p className="text-base md:text-lg mb-5 md:mb-6 text-slate-600">
                  {selectedLanguage === 'en'
                    ? 'Get your Indonesian visa quickly and hassle-free. Professional support from start to finish. Start your application today and receive approval within 24-48 hours.'
                    : 'احصل على تأشيرة إندونيسيا بسرعة وسهولة. دعم احترافي من البداية حتى النهاية. ابدأ طلبك اليوم واحصل على الموافقة في غضون 24-48 ساعة.'}
                </p>
                <a
                  href="https://indonesianvisas.com/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-slate-800 hover:text-white transition-all duration-300 inline-flex items-center gap-2"
                >
                  {selectedLanguage === 'en' ? 'Apply Now' : 'قدم الآن'} <ArrowRight className="w-4 h-4" />
                </a>
              </article>
              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <RefreshCw className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6 text-amber-500" aria-hidden="true" />
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-slate-800">
                  {selectedLanguage === 'en' ? 'Extend Your Visa' : 'تمديد تأشيرتك'}
                </h3>
                <p className="text-base md:text-lg mb-5 md:mb-6 text-slate-600">
                  {selectedLanguage === 'en'
                    ? 'Need more time in Indonesia? Extend your visa without leaving the country. Simple process with guaranteed approval. Stay up to 180 days.'
                    : 'هل تحتاج إلى المزيد من الوقت في إندونيسيا؟ يمكنك تمديد تأشيرتك دون مغادرة البلاد. عملية بسيطة مع ضمان الموافقة. ابق حتى 180 يوما.'}
                </p>
                <a
                  href="https://indonesianvisas.com/extend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-slate-800 border-2 border-amber-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-300 inline-flex items-center gap-2"
                >
                  {selectedLanguage === 'en' ? 'Extend Now' : 'مدد الآن'} <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Visa Services */}
        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-800">
                {selectedLanguage === 'en' ? 'Our Visa Services' : 'خدمات التأشيرة الخاصة بنا'}
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                {selectedLanguage === 'en'
                  ? 'Choose right visa type for your needs - from tourist to business and investment visas. Expert guidance for every visa category.'
                  : 'اختر نوع التأشيرة المناسب لاحتياجاتك - من السياحة إلى الأعمال والاستثمار. إرشادات متخصصة لكل فئة تأشيرة.'}
              </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
              {VISA_SERVICES.map((service, index) => {
                const IconComponent = ICON_MAP[service.icon as keyof typeof ICON_MAP];
                return (
                  <article key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="text-amber-500 mb-4">{IconComponent && <IconComponent className="w-16 h-16" />}</div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
                    <p className="text-sm md:text-base text-slate-600 mb-6">{service.description}</p>
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-slate-800 hover:text-amber-500 transition-colors"
                    >
                      {selectedLanguage === 'en' ? 'Learn More' : 'اعرف المزيد'} <ArrowRight className="w-4 h-4" />
                    </a>
                  </article>
                );
              })}
            </div>
            <div className="text-center">
              <a
                href="https://indonesianvisas.com/services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 text-white px-8 md:px-10 py-4 rounded-full font-bold text-base md:text-lg hover:bg-slate-800 hover:text-white transition-all duration-300 inline-flex items-center gap-2"
              >
                {selectedLanguage === 'en' ? 'View All Visa Types' : 'عرض جميع أنواع التأشيرة'} <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Indonesia & UAE Section */}
        <section className="py-16 md:py-20 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-800">
                {selectedLanguage === 'en' ? 'Indonesia & UAE' : 'إندونيسيا والإمارات العربية المتحدة'}
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                {selectedLanguage === 'en'
                  ? 'Bridging two great regions with seamless visa services and cultural connections'
                  : 'جسر منطقتين عظيمين بخدمات تأشيرة وثقافات رائعة'}
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <article className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <Plane className="w-12 h-12 text-amber-500" aria-hidden="true" />
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                    {selectedLanguage === 'en' ? 'About Indonesia' : 'عن إندونيسيا'}
                  </h3>
                </div>
                <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
                  {selectedLanguage === 'en'
                    ? 'Indonesia is world\'s largest archipelago nation, comprising over 17,000 islands with diverse cultures, stunning landscapes, and rich heritage. From the temples of Bali to the rainforests of Sumatra, Indonesia offers endless adventures.'
                    : 'إندونيسيا هي أكبر دولة أرخبيلي في العالم، تضم أكثر من 17,000 جزيرة بثقافات متنوعة ومناظر طبيعية خلابة وتراث غني. من معابد بالي إلى غابات سومطرا، تقدم إندونيسيا مغامرات لا نهائية.'}
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  {selectedLanguage === 'en'
                    ? 'With a tropical climate year-round, vibrant cities, and world-class beaches, Indonesia has become one of most popular destinations for travelers from UAE seeking adventure, relaxation, and cultural experiences.'
                    : 'مع مناخق استوائي على مدار السنة، ومدن حية، وشواطئ عالمية الطبقة الأولى، أصبحت إندونيسيا واحدة من أكثر الوجهات السياحية الشائعة للمسافرين من الإمارات العربية المتحدة بحثًا عن المغامرة والاسترخاء والتجارب الثقافية.'}
                </p>
              </article>

              <article className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <Globe className="w-12 h-12 text-amber-500" aria-hidden="true" />
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                    {selectedLanguage === 'en' ? 'About UAE' : 'عن الإمارات العربية المتحدة'}
                  </h3>
                </div>
                <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
                  {selectedLanguage === 'en'
                    ? 'The United Arab Emirates, comprising seven emirates, is a global leader in tourism, finance, and cultural diversity. Emirati travelers have long been drawn to Indonesia\'s natural beauty, Islamic heritage, and world-renowned hospitality.'
                    : 'تتضم الإمارات العربية المتحدة سبع إمارات، وهي قائدة عالمية في السياحة والتمويل والتنوع الثقافي. لطالما جذب المسافرون الإماراتيون إلى جمال إندونيسيا الطبيعي والتراث الإسلامي والضيافة العالمية للمقيمين في إندونيسيا.'}
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  {selectedLanguage === 'en'
                    ? 'With strong diplomatic ties and increasing tourism between our nations, UAE citizens can easily obtain Indonesian visas to experience everything from Bali\'s spiritual retreats to Komodo\'s unique wildlife, making it an ideal destination for Emirati travelers.'
                    : 'مع العلاقات الدبلومية القوية وتزايد السياحة بين أمتنا، يمكن للمواطنين الإماراتيين الحصول بسهولة على تأشيرات إندونيسيا لتجربة كل شيء من منتجعات بالي الروحانية إلى سحورات كومودو الفريدة، مما يجعل إندونيسيا وجهة مثالية للمسافرين من الإمارات.'}
                </p>
              </article>
            </div>

            <div className="bg-gradient-to-br from-amber-500 to-amber-400 rounded-2xl md:rounded-3xl p-8 md:p-12 text-white text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Heart className="w-8 h-8 md:w-10 md:h-10" aria-hidden="true" />
                <h3 className="text-2xl md:text-3xl font-bold">
                  {selectedLanguage === 'en' ? 'Strong Connection Between Nations' : 'علاقة قوية بين الأمتين'}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl md:text-4xl font-black mb-2">500,000+</div>
                  <div className="text-sm md:text-base font-semibold">
                    {selectedLanguage === 'en' ? 'Emirati Visitors to Indonesia Annually' : 'زيارات من الإمارات إلى إندونيسيا سنوياً'}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl md:text-4xl font-black mb-2">8 Hours</div>
                  <div className="text-sm md:text-base font-semibold">
                    {selectedLanguage === 'en' ? 'Average Flight Duration' : 'متوسط مدة الرحلة'}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl md:text-4xl font-black mb-2">Daily Flights</div>
                  <div className="text-sm md:text-base font-semibold">
                    {selectedLanguage === 'en' ? 'Dubai to Jakarta & Bali' : 'من دبي إلى جاكرتا وبالي'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-800">
                {selectedLanguage === 'en' ? 'UAE Indonesia Strategic Partnership & Tourism Relations' : 'الشراكة الاستراتيجية والسياحية بين الإمارات وإندونيسيا'}
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto">
                {selectedLanguage === 'en'
                  ? 'Strengthening bilateral ties between United Arab Emirates and Indonesia through strategic cooperation in tourism, trade, and cultural exchange'
                  : 'تعزيز العلاقات الثنائية بين الإمارات العربية المتحدة وإندونيسيا من خلال التعاون الاستراتيجي في السياحة والتجارة والتبادل الثقافي'}
              </p>
            </header>

            <div className="bg-gradient-to-br from-amber-50 to-white p-8 md:p-12 rounded-2xl md:rounded-3xl border-2 border-amber-100 mb-12">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <Globe className="w-10 h-10 md:w-12 md:h-12 text-amber-500" aria-hidden="true" />
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                  {selectedLanguage === 'en' ? 'Historical Diplomatic Relations' : 'العلاقات الدبلومية التاريخية'}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  {selectedLanguage === 'en'
                    ? 'The United Arab Emirates and Indonesia share a long-standing diplomatic relationship established in 1976. Both nations have maintained strong bilateral ties spanning nearly 50 years of cooperation in various sectors.'
                    : 'تشارك الإمارات العربية المتحدة وإندونيسيا علاقة دبلومية طويلة الأمد قامت منذ عام 1976. حافظت كلتا الأمتان على علاقات ثنائية قوية قامت عبر مختلف القطاعات.'}
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  {selectedLanguage === 'en'
                    ? 'The UAE maintains an Embassy in Jakarta and consular offices across major cities, while Indonesia maintains diplomatic missions in Abu Dhabi and Dubai, facilitating seamless communication and cooperation between both nations.'
                    : 'تحتفظ الإمارات بسفارة في جاكرتا ومكاتب قنصلية في المدن الكبرى، بينما تحتفظ إندونيسيا بمهمات دبلومية في أبوظبي ودبي، مما يسهل الاتصال والتعاون بين الأمتين.'}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-500 to-amber-400 rounded-2xl md:rounded-3xl p-8 md:p-12 text-white">
              <div className="text-center mb-8 md:mb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {selectedLanguage === 'en' ? 'Partnership Impact' : 'أثر الشراكة'}
                </h3>
                <p className="text-base md:text-lg opacity-90 max-w-3xl mx-auto">
                  {selectedLanguage === 'en' ? 'Measurable achievements through UAE-Indonesia strategic cooperation across multiple sectors' : 'الإنجازات ملموسة من خلال التعاون الاستراتيجي بين الإمارات وإندونيسيا عبر قطاعات متعددة'}
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 text-center">
                  <div className="text-2xl md:text-3xl font-black mb-2">$25B+</div>
                  <div className="text-xs md:text-sm font-semibold">
                    {selectedLanguage === 'en' ? 'Annual Trade Volume' : 'حجم التجارة السنوي'}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 text-center">
                  <div className="text-2xl md:text-3xl font-black mb-2">$4B+</div>
                  <div className="text-xs md:text-sm font-semibold">
                    {selectedLanguage === 'en' ? 'UAE Investment in Indonesia' : 'استثمارات الإمارات في إندونيسيا'}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 text-center">
                  <div className="text-2xl md:text-3xl font-black mb-2">12,000+</div>
                  <div className="text-xs md:text-sm font-semibold">
                    {selectedLanguage === 'en' ? 'Indonesian Students in UAE' : 'الطلاب الإندونيسيين في الإمارات'}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 text-center">
                  <div className="text-2xl md:text-3xl font-black mb-2">48+ Years</div>
                  <div className="text-xs md:text-sm font-semibold">
                    {selectedLanguage === 'en' ? 'Diplomatic Relations' : 'العلاقات الدبلومية'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ & Contact Quick Links */}
        <section className="py-16 md:py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Globe className="w-16 h-16 mx-auto mb-4 md:mb-6 text-slate-800" aria-hidden="true" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">
                  {selectedLanguage === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}
                </h3>
                <p className="text-base md:text-lg mb-6 text-slate-600">
                  {selectedLanguage === 'en'
                    ? 'Find answers to common visa questions and requirements. Learn about processing times, required documents, and more.'
                    : 'ابحث عن إجابات للأسئلة الشائعة حول متطلبات التأشيرة والوثائق المطلوبة والمزيد. تعرف عن أوقات المعالجة والوثائق المطلوبة والمزيد.'}
                </p>
                <a
                  href="https://indonesianvisas.com/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-slate-800 hover:text-white transition-all duration-300 inline-flex items-center gap-2"
                >
                  {selectedLanguage === 'en' ? 'View FAQ' : 'عرض الأسئلة الشائعة'} <ArrowRight className="w-4 h-4" />
                </a>
              </article>
              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Star className="w-16 h-16 mx-auto mb-4 md:mb-6 text-slate-800" aria-hidden="true" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">
                  {selectedLanguage === 'en' ? 'Contact Us' : 'اتصل بنا'}
                </h3>
                <p className="text-base md:text-lg mb-6 text-slate-600 flex flex-col gap-2">
                  <span className="flex items-center justify-center gap-2"><MessageCircle className="w-5 h-5" />+61 423 854 701</span>
                  <span className="flex items-center justify-center gap-2"><Mail className="w-5 h-5" />info@indonesianvisas.agency</span>
                  <span className="flex items-center justify-center gap-2"><MapPin className="w-5 h-5" />Bali, Indonesia</span>
                </p>
                <a
                  href="https://wa.me/61423854701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-slate-800 hover:text-white transition-all duration-300 inline-flex items-center gap-2"
                >
                  {selectedLanguage === 'en' ? 'Get Help Now' : 'احصل على المساعدة الآن'} <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer selectedLanguage={selectedLanguage} />
    </div>
  );
}
