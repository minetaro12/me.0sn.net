export default function (posts, asc) {
  if (asc) {
    // 昇順
    posts.sort((a, b) => {
      if (a.date < b.date) {
        return -1
      }
      if (a.date > b.date) {
        return 1
      }
      return 0
    });
  } else {
    // 降順
    posts.sort((a, b) => {
      if (a.date > b.date) {
        return -1
      }
      if (a.date < b.date) {
        return 1
      }
      return 0
    })
  }

  return posts
}