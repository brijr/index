import { RichText } from "@payloadcms/richtext-lexical/react";
import { getPostBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import { Post as PostProps } from "@/payload-types";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug({ slug });

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: `Read ${post.title} by Bridger Tower`,
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post: PostProps = await getPostBySlug({ slug });

  if (!post) {
    return notFound();
  }

  return (
    <>
      <section className="fade-in-up delay-header">
        <h1 className="font-medium">{post.title}</h1>
        <h2 className="text-accent">
          by <a href="https://x.com/bridgertower">Bridger Tower</a>
        </h2>
      </section>

      <div className="fade-in-up delay-intro craft spaced delay-300">
        <RichText data={post.content} />
      </div>
    </>
  );
}
