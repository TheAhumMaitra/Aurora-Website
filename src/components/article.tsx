import Image from "next/image";

import type { Post } from "#site/content";

interface PostPageProps {
  post: Post;
}

export default function PostPage({ post }: PostPageProps) {
  const publishedAt = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 py-8 sm:py-10">
      <section className="overflow-hidden border-b-2 border-border/70 bg-background/85 shadow-[0_24px_60px_-35px_rgba(0,0,0,0.3)]">
        <div className="aspect-[16/9] overflow-hidden bg-muted">
          <Image
            src={post.cover.src}
            alt={post.title}
            width={post.cover.width}
            height={post.cover.height}
            placeholder="blur"
            blurDataURL={post.cover.blurDataURL}
            sizes="(min-width: 1024px) 960px, 100vw"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-5 sm:p-7">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-[0.7rem] uppercase tracking-[0.28em] text-primary">
            <span>{publishedAt}</span>
            <span className="text-muted-foreground">•</span>
            <span>{post.metadata.readingTime} min read</span>
          </div>

          <div className="space-y-3">
            <h1 className="font-heading text-2xl font-black uppercase sm:text-3xl">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="border-border/70 bg-background/85 px-5 pb-5 pt-3 sm:px-7 sm:pb-7 sm:pt-4">
        <div
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>
    </main>
  );
}
