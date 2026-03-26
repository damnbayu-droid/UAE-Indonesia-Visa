import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://uaeindonesiavisa.agency';
  
  const routes = [
    '',
    '/site-map',
    '/visa-indonesia',
    '/visa-bali',
    '/visa-jakarta',
    '/visa-lombok',
    '/visa-surabaya',
    '/visa-jogja',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
