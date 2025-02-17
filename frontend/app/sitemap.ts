import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
        url: 'https://tasktracker.dcamill.com',
        lastModified: new Date(),
        changeFrequency: 'always',
        priority: 1,
    },
    {
        url: 'https://tasktracker.dcamill.com/docs',
        lastModified: new Date(),
        changeFrequency: 'always',
        priority: 0.9,
    },
  ]
}