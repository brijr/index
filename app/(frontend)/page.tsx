import { Intro } from "@/components/intro";
import { Work } from "@/components/work";
import { getPosts } from "@/lib/data";
import { Post as PostProps } from "@/payload-types";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <section className="fade-in-up delay-header">
        <h1 className="font-medium">Bridger Tower</h1>
        <h2 className="text-accent">Designer and Engineer</h2>
      </section>

      <Intro />
      <Work />

      <div className="grid gap-8 fade-in-up delay-300">
        {posts.map((post: PostProps) => (
          <div key={post.id}>
            <h3>
              <Link href={`./${post.slug}`}>{post.title}</Link>
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}
