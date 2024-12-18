import { getPostBySlug } from '@/lib/data'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Header } from '@/components/site/header'
import { Article } from '@/components/craft'
import { notFound } from 'next/navigation'

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug({ slug })

  if (!post) {
    return notFound()
  }

  return (
    <>
      <Header page={post.title} />
      <Article className="fade-in-up delay-300">
        <RichText data={post.content} />
      </Article>
    </>
  )
}
