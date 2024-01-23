---
layout: post
title: 如何解决coc.nvim下载超时的问题
tags: 技术
---

原讨论：[https://github.com/neoclide/coc.nvim/discussions/4829](https://github.com/neoclide/coc.nvim/discussions/4829)

## 原因

问题很简单，是由npm官方服务器在大陆地区速度慢导致超时。

## 解决

```
coc.nvim:registry=https://registry.npmmirror.com
```

上面代码放在`~/.npmrc`中

## 原理

如果仅仅改变npm的默认源，那么coc.nvim仍然会用默认源。以上代码可以让coc.nvim使用国内的镜像源。

----------

{{ site.ccbyncsa }}

