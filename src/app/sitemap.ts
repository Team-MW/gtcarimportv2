import { MetadataRoute } from 'next'

// Les adresses reprennent exactement celles de l'ancien site (avec la barre finale).
const pages: { path: string; changeFrequency: 'weekly' | 'monthly' | 'yearly'; priority: number }[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/importations/', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/faire-une-demande/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/faq/', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/mentions-legales/', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/politique-de-confidentialite/', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/conditions-generales-de-ventes/', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gtcarsimport.com'

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
