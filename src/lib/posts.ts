import { posts } from '#site/content'

export function getPosts() {
  return [...posts].sort(
    (left, right) =>
      new Date(right.date).getTime() - new Date(left.date).getTime()
  )
}

export function getPostBySlug(slug: string) {
  return getPosts().find((post) => post.slug === slug)
}

export function getPostStaticParams() {
  return getPosts().map(({ slug }) => ({ slug }))
}
