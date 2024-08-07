---
layout: post
title: JavaScript中的var、let、const的区别和用法
tags: 技术
---

# JavaScript中的var、let、const的区别和用法

在 JavaScript 中，有三种声明变量的方式：`var`、`let` 和 `const`。它们有不同的作用域和使用方法，本文将为你详细介绍它们的区别和用法。

## var

`var` 是 JavaScript 最早的声明变量的方式。它的特点是可以重复声明同一变量名（但不应该这样做），并且没有块级作用域，而是函数级作用域。在函数内定义的变量，外部是无法访问的。如果在函数内不使用关键字声明，会自动成为全局变量。

```
function foo() {
  var bar = "hello";
}
console.log(bar); // 报错：bar 未定义
```

## let

`let` 是 ES6 引入的新特性，它的作用域是块级作用域。块级作用域是指在 `if/for/while` 等代码块内部定义的变量，外面是无法访问的。

```
function foo() {
  if(true) {
    let bar = "hello";
  }
  console.log(bar); // 报错：bar 未定义
}
```

let 需要先声明再使用，不能重复声明同一变量名。

## const

`const` 也是 ES6 的新特性，它用于声明常量。常量一旦声明，就不能被重新赋值。如果 `const` 声明一个对象，那么可以修改对象的属性，但不能重新赋值。

```
const PI = 3.1415;
PI = 3; // 报错：常量无法被重新赋值

const obj = {name: "张三"};
obj.age = 20; // 可以运行，因为只是修改了对象的属性
obj = {}; // 报错：常量无法被重新赋值
```

与 `let` 类似，`const` 的作用域也是块级作用域。

## 总结

- var 没有块级作用域，在函数内部定义的变量会提升到函数顶部；
- let 和 const 都有块级作用域；
- let 定义的变量可重新赋值，不可重复定义同一变量名；
- const 定义的变量不可重新赋值，定义对象时可以修改属性，不可重复定义同一变量名。

建议在平时开发中优先使用 `let` 和 `const`。`var` 虽然历史悠久，但容易出现问题，不适合新项目使用。

-----------------

{{ site.ccbync }}
