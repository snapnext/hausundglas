import type { MetadataRoute } from 'next';

const BASE = 'https://hausundglas.de';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`,             lastModified: now, changeFrequency: 'monthly',  priority: 1.0 },
    { url: `${BASE}/impressum`,    lastModified: now, changeFrequency: 'yearly',   priority: 0.3 },
    { url: `${BASE}/datenschutz`,  lastModified: now, changeFrequency: 'yearly',   priority: 0.3 },
    { url: `${BASE}/agb`,          lastModified: now, changeFrequency: 'yearly',   priority: 0.2 },
  ];
}
