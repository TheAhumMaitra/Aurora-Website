import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PostPage from "@/components/article";
import { getPostBySlug, getPostStaticParams } from "@/lib/posts";

interface PostDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPostStaticParams();
}

export async function generateMetadata({
  params,
}: PostDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (post == null) {
    return {
      title: "404 Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (post == null) {
    notFound();
  }

  return <PostPage post={post} />;
}
