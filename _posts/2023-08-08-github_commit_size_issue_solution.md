---
layout: post
title: 如何解决 GitHub 提交次数过多 .git 文件过大的问题？
tags: Github
---

# 如何解决 GitHub 提交次数过多 .git 文件过大的问题？

原文：[如何解决 GitHub 提交次数过多 .git 文件过大的问题？ - 郑宇的回答 - 知乎](https://www.zhihu.com/question/29769130/answer/315745139)

可以尝试把里面的大文件删掉。下面是具体的操作方法：

1.运行 `gc` ，生成 `pack` 文件（后面的 `--prune=now` 表示对之前的所有提交做修剪，有的时候仅仅 gc 一下 .git 文件就会小很多）

```
$ git gc --prune=now
```

2.找出最大的三个文件（看自己需要）

```
$ git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -3
# 示例输出：
#1debc758cf31a649c2fc5b0c59ea1b7f01416636 blob   4925660 3655422 14351
#c43a8da9476f97e84b52e0b34034f8c2d93b4d90 blob   154188651 152549294 12546842
#2272096493d061489349e0a312df00dcd0ec19a2 blob   155414465 153754005 165096136
```

3.查看那些大文件究竟是谁（`c43a8da` 是上面大文件的`hash`码）

```
$ git rev-list --objects --all | grep c43a8da
# c43a8da9476f97e84b52e0b34034f8c2d93b4d90 data/bigfile
```

4.移除对该文件的引用（也就是 `data/bigfile`）

```
$ git filter-branch --force --index-filter "git rm --cached --ignore-unmatch 'data/bigfile'" --prune-empty --tag-name-filter cat -- --all
```

5.进行 `repack`

```
$ git for-each-ref --format='delete %(refname)' refs/original | git update-ref --stdin
$ git reflog expire --expire=now --all
$ git gc --prune=now
```


6.查看 `pack` 的空间使用情况

```
$ git count-objects -v
```

-----------

版权归原作者所有<br>
感谢原作者，无删改。
