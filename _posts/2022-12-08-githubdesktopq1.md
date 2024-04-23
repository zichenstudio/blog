---
layout: post
title: Github Desktop提交代码:schannel:failed to receive handshake, SSL/TLS connectionfailed
tags: Bug
---

# Github Desktop提交代码:schannel:failed to receive handshake, SSL/TLS connectionfailed

在一次新的提交中遇到了一个问题

```
failed to receive handshake, SSL/TLS connection 

```
解决方法:
在当前仓库打开Git
输入:

```
git config --global http.sslBackend "openssl"
```

--------------

{{ site.ccbync }}
