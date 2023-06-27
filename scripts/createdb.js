import { globSync } from "glob"
import fs from "fs"
import fm from "front-matter"
const postList = []

function writeFile(path, data) {
  try {
    fs.writeFileSync(path, data)
  } catch (err) {
    throw new Error("Failed to create file")
  }
}

globSync("./src/routes/posts/**/+page.md").forEach(function (file) {
  const frontMatter = fm(fs.readFileSync(file, "utf-8"))
  postList.push({
    path: file.slice(10).slice(0, -8),
    title: frontMatter.attributes.title,
    tags: frontMatter.attributes.tags,
    date: frontMatter.attributes.date
  })
})

// console.log(postList)
writeFile("./src/posts.js", "export const posts = " + JSON.stringify(postList))