export default function (posts, searchTag) {
  let resPosts = []

  for (const post of posts) {
    for (const tag of post.tags) {
      if (tag === searchTag) {
        resPosts.push(post)
      }
    }
  }

  return resPosts
}