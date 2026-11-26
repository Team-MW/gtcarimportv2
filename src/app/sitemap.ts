import { MetadataRoute } from 'next'
import { PAGES, type PageEntry } from '@/lib/pages'
import { SITE_URL } from '@/lib/seo'
import { toSwiss } from '@/lib/region'

// Chaque page existe en version France (adresse d'origine) et Suisse (/ch/…-sw/).
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: PageEntry[] = Object.values(PAGES)
  return entries
    .filter((p) => !p.noindex)
    .flatMap((p) => {
      const fr = `${SITE_URL}${p.path}`
      const ch = `${SITE_URL}${toSwiss(p.path)}`
      const alternates = { languages: { 'fr-FR': fr, 'fr-CH': ch } }
      return [fr, ch].map((url) => ({
        url,
        lastModified: new Date(),
        changeFrequency: p.changeFrequency,
        priority: p.priority,
        alternates,
      }))
    })
}
