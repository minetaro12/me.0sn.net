export default function (posts) {
  let srcTags = []
  for (const post of posts) {
    srcTags.push(...post.tags)
  }

  // 重複削除
  const tags = Array.from(new Set(srcTags))

  // 昇順に並び替え
  tags.sort((a, b) => {
    if (a < b) {
      return -1
    }
    if (a > b) {
      return 1
    }
    return 0
  })

  return tags
}