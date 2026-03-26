import { ArrowRight } from 'lucide-react';
import { POPULAR_VISAS, ICON_MAP } from '@/lib/data';

export function VisaGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12">
      {POPULAR_VISAS.map((service, index) => {
        const IconComponent = ICON_MAP[service.icon as keyof typeof ICON_MAP];
        return (
          <article key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="text-amber-500 mb-4">{IconComponent && <IconComponent className="w-12 h-12" />}</div>
            <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
            <p className="text-sm md:text-base text-slate-600 mb-6 flex-grow">{service.description}</p>
            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-slate-800 hover:text-amber-500 transition-colors mt-auto"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </article>
        );
      })}
    </div>
  );
}
