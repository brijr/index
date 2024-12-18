import { getPosts } from '@/lib/data'
import { Post } from '@/payload-types'
import { Header } from '@/components/site/header'

import Link from 'next/link'

export default async function Posts() {
  const posts: Post[] = await getPosts()

  return (
    <>
      <Header page="Posts" />

      <div className="grid gap-8 fade-in-up delay-300">
        {posts.map((post: Post) => (
          <div key={post.id}>
            <h3>
              <Link href={`./${post.slug}`}>{post.title}</Link>
            </h3>
          </div>
        ))}
      </div>
    </>
  )
}
