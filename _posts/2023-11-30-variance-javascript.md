---
layout: post
title: 用JavaScript实现方差计算
tags: 技术
mathjax: on
---

# 用JavaScript实现方差计算

~~注：本文是为了练习MathJax而写~~

首先，方差公式是

$$ S^2 = \frac {1} {n} [(x_1 - \overline x)^2 + (x_2 - \overline x)^2 + \ldots + (x_n - \overline x)^2] $$

所以要先求平均数

```
function average(event) {
    let x=0;
    for(let i=0;i < event.length;i++){
        x+=event[i];
    }
    let average = x / event.length;
    return average;
}
```

把平均数带入方差公式

```
function variance(event) {
    // 平均数
    let x=0;
    for(let i=0;i < event.length;i++){
        x+=event[i];
    }
    let average = x / event.length;
    // 方差
    let variance=0;
    for (i=0;i < event.length;i++) {
        variance+= (event[i] - average)**2;
    }
    return variance / event.length;
}
```

有了逻辑，开始化简，此处决定使用`reduce()`方法

```
function variance(event) {
    // 平均值
    let average = event.reduce((sum, value) => sum + value, 0) / event.length;
    // 方差
    let variance = event.reduce((sum, value) => sum + (value - average)**2, 0) / event.length;
    return variance;
}
```

------------------

{{ site.ccbync }}
