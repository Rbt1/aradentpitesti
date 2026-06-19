import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://aradentpitesti.ro'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/servicii/implantologie`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/servicii/chirurgie-orala`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/servicii/endodontie`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/servicii/parodontologie`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/servicii/obturatii`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/servicii/protetica-dentara`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/resurse`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/blog/cat-costa-implant-dentar-romania-2026`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
