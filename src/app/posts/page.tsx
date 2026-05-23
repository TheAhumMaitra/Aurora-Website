import Image from "next/image";
import Link from "next/link";

import { getPosts } from "@/lib/posts";

export default function PostsPage() {
  const posts = getPosts();

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-4 py-10">
      <section className="space-y-4">
        <div className="space-y-2">
          <h1 className="font-heading text-4xl font-black uppercase">Posts</h1>
          <p className="text-slate-700 dark:text-slate-200">
            Feel free to know more about Aurora!
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="block overflow-hidden rounded-[28px] border border-border/70 bg-background/80 transition hover:border-primary/60"
          >
            <article>
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={post.cover.src}
                  alt={post.title}
                  width={post.cover.width}
                  height={post.cover.height}
                  placeholder="blur"
                  blurDataURL={post.cover.blurDataURL}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-4 p-5">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="font-heading text-2xl font-bold">
                    {post.title}
                  </h2>
                </div>

                <p className="text-slate-700 dark:text-slate-200">
                  {post.shortText ?? post.excerpt}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
