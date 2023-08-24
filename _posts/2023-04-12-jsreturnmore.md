---
layout: post
title: JavaScript中的return、return false、break、continue都怎么用？
tags: 技术
---

# JavaScript 中的关键字：return、return false、break 和 continue

在 JavaScript 编程中，有四个关键字具有不同的作用：`return`、`return false`、`break` 和 `continue`。它们通常用于控制整个程序流程。本文将一一介绍它们各自的作用。

# 1. return

`return` 通常用于函数体中，用于将函数的返回值返回给函数调用者。一个函数可以返回任何类型的数据（包括数字、字符串、对象等），也可以不返回任何数据。当 `return` 后面没有值时，函数返回的是 `undefined`。

```
function add(x, y) {
  return x + y;
}

const result = add(2, 3);
console.log(result); // 输出 5
```

# 2. return false

`return false` 通常用于事件回调函数中，用于阻止浏览器默认的行为。这个 `false` 值可以告诉浏览器，当前事件处理已经完成，浏览器可以停止传播事件并且不执行相应的默认操作了。比如防止表单提交或超链接跳转。

```
<a href="http://www.baidu.com" onclick="return false;">点击我不会跳转</a>
```

在 jQuery 中，`return false` 等价于 `event.preventDefault()` 和 `event.stopPropagation()` 的组合，可以同时阻止默认行为和事件冒泡。

```
$(document).ready(function() {
  $('a').click(function(event) {
    event.preventDefault(); // 阻止超链接跳转
    event.stopPropagation(); // 防止事件冒泡
  });
});
```

# 3. break

`break` 通常用于循环语句中，用于提前跳出当前循环。

```
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // 当 i 等于 5 时，跳出当前循环
  }
  console.log(i); // 输出 1、2、3、4
}
```

在多重嵌套的循环语句中，`break` 可以搭配标签（label）一起使用，用于跳出指定的循环。

```
outerloop: // 定义外部循环的标签
for(let i = 0; i < 10; i++) {
  for(let j = 0; j < 10; j++) {
    if (i === 5 && j === 5) {
      break outerloop; // 提前跳出外部循环
    }
    console.log(`i=${i}, j=${j}`);
  }
}
```

# 4. continue

`continue` 通常用于循环语句中，它会直接跳过当前循环的执行，然后进入下一个循环的执行。

```
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // 当 i 等于 5 时，直接进入下一次循环
  }
  console.log(i); // 输出 1、2、3、4、6、7、8、9、10
}
```

在多重嵌套的循环语句中，`continue` 可以搭配标签一起使用，用于跳过指定的循环。

``
outerloop: // 定义外部循环的标签
for(let i = 0; i < 10; i++) {
  for(let j = 0; j < 10; j++) {
    if (i === j) {
      continue outerloop; // 跳过当前外部循环
    }
    console.log(`i=${i}, j=${j}`);
  }
}
```

-------------

{{ site.ccbync }}
