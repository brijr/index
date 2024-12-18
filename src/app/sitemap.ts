import type { MetadataRoute } from 'next'
import { getPosts } from '@/lib/data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()

  const routes = [
    {
      url: 'https://bridger.to',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: 'https://bridger.to/open-source',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://bridger.to/software',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://bridger.to/websites',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://bridger.to/posts',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    },
    ...posts.map((post) => ({
      url: `https://bridger.to/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]

  return routes
}
