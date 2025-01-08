import { RichText } from "@payloadcms/richtext-lexical/react";
import { getPostBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import { Post } from "@/payload-types";

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post: Post = await getPostBySlug({ slug });

  if (!post) {
    return notFound();
  }

  return (
    <>
      <h1 className="fade-in-up">{post.title}</h1>
      <div className="fade-in-up delay-300">
        <RichText data={post.content} />
      </div>
    </>
  );
}
