---
layout: post
title: Github Desktop提交代码:git SSL certificate problem:unable to get local issuer certificate
tags: Github
---

# Github Desktop提交代码:git SSL certificate problem:unable to get local issuer certificate

这个问题是由于没有配置信任的服务器HTTPS验证。

# 解决问题

Git输入：

```
git config --global http.sslVerify false
```

问题解决！

--------------------

{{ site.ccbync }}
