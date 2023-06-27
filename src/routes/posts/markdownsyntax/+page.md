---
title: "Markdown Syntax"
date: "2023-06-27T09:58:20+09:00"
hideTitle: false
---
# Markdown example

## 箇条書き
- AAAA
- BBBB
  - CCCC
  - DDDD
    - EEEE
- FFFF

## 表
|name|age|state|
|-|-|-|
|test|20|Tokyo|
|test|20|Tokyo|

## リンク
### 内部リンク
[Home](/)
### 外部リンク
[0sn.net](https://0sn.net)

## コードブロック
`inline code`

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello")
}
```