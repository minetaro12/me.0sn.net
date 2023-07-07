import { globSync } from "glob"
import fs from "fs"
import fm from "front-matter"

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const postList = []
  globSync("./src/routes/posts/**/+page.md").forEach(function (file) {
    const frontMatter = fm(fs.readFileSync(file, "utf-8"))
    postList.push({
      path: file.slice(10).slice(0, -8),
      title: frontMatter.attributes.title,
      tags: frontMatter.attributes.tags,
      date: frontMatter.attributes.date
    })
  })
  return { postList }
}