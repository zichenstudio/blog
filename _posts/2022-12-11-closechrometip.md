---
layout: post
title: 关闭Chrome不支持Windows7提示
tags: 技术
---

Win7 打开 Chrome 浏览器,上面通知写道：“想要获得后续谷歌 Chrome 更新,你需要升级到 Win10 或者更高版本.当前设备运行的是 Win7 系统”.Win7 设备今天打开 Chrome 浏览器,上面通知写道：“想要获得后续谷歌 Chrome 更新,你需要升级到 Win10 或者更高版本.当前设备运行的是 Win7 系统”.

这个弹窗可以按右侧的 X 关掉,但每次打开Chrome都要点一次,所以我上网找到了一个解决办法.

1. 打开“开始”,输入 `regedit.exe`,选择注册表编辑器.
2. 转到 `HKEY_CURRENT_USER/Software/Policies/Google/Chrome`. 如果其中一个键不存在,在前面的键上点击右键,选择新建 > 键.给它起个相应的名字.
3. 右键点击 Chrome,选择新建 > Dword（32 位）值.
4. 将其命名为 `SuppressUnsupportedOSWarning` .
5. 双击该名称并将其值设为 1.
6. 重新启动Chrome浏览器.

这样就解决了.