---
layout: post
title: (译)怎样编写一个CONTRIBUTING.md
tags: 技术
---

原文: [How to Build a CONTRIBUTING.md](https://contributing.md/how-to-build-contributing-md/)

**版权归原作者所有!**

**注：内容以英文原文为准,其中无法正常翻译的保持不变.**

-----------------------

这是一个学习活动,其目的是向您展示 CONTRIBUTING.md 中应该包含哪些内容,以及如何在开源项目中构建和维护您的文件.

如果你有一个开放的科学项目,或者你是 Mozilla 研究小组的负责人,想要吸引并发展一个围绕你的项目的贡献者社区,那么这个活动就是为你准备的.

您将需要一个协作文档编辑器,比如 GoogleDocs,以及一个 Markdown 查看器来测试您的文件.

如果您计划通过向软件中添加内容来让人们参与,那么您必须有一个 CONTRIBUTING.md.这些文件也称为贡献准则,或软件贡献准则,是项目所有者或管理者在自由和开放源码软件包或其他开放媒体软件中包含的文本文件.该文件描述了任何人如何通过执行某些任务(如代码格式化、测试修复,甚至提交补丁)来参与项目.

除了提供如何参与的指南,这个文件的存在应该增加你的项目受到他人贡献的机会,所以如果你的项目的成功取决于用户贡献,不应该被忽视.

## 谁应当去编写 CONTRIBUTING.md 文件

这个文件对三组人都有用.首先,您是寻求贡献的人,因此最适合创建和维护 CONTRIBUTING.md.该文件将帮助您概述您期望其他人如何对项目做出贡献.

下一组受益者是贡献者,他们有兴趣知道哪些项目是他们可以处理的,以及他们如何使用项目.

处理 CONTRIBUTING.MD 文件的第三组是项目使用者.这些用户希望利用项目提供来处理或构建他们的项目.

## CONTRIBUTING.md 应该位于哪里？

CONTRIBUTING.md 应该与 README.md 和 LICENSE.md 一起放在根目录中.如果您还没有定义可能的贡献机制,可以考虑创建一个 CONTRIBUTING.md 文件草案,其中包含一个“即将发布的消息”,通知潜在的贡献者您打算征求他们的意见.包括项目负责人的联系信息以便跟帖.

CONTRIBUTING.md 将从您的项目中被访问.因此,有一个干净、有序、友好的项目结构是很重要的,比如这个例子.

## 在 CONTRIBUTING.md 文件中包含什么

您可以从创建本地草稿文件开始,或者使用Markdown编辑器（如Dillinger）练习在在线发布之前构建在线投稿文件.

[Generate CONTRIBUTING.MD](https://generator.contributing.md)

考虑在 CONTRIBUTING.md 文件中包含以下模块.

1. **欢迎信**<br>让贡献者知道你渴望他们加入,并期待与他们合作.
2. **目录**<br>为了方便贡献者跳转到他们感兴趣的部分,可以考虑建立一个目录.每个标题都应该有其 URL 链接.为了在 Markdown 中实现这一点,使用[] ,并在括号中使用标题,格式为: [标题名](#标题名)
3. **提供链接**<br>包括指向项目中不同项目所在位置的链接,以及指向对贡献者有用的资源的链接,例如：
    - **指向资源的链接**: 如重要文档、 bug 和通信页面
    - **模板**：模板提供了一种结构化格式,使用户更容易记录详细信息,项目经理也更容易快速分析信息.包括指向模板的超链接,例如错误报告和增强建议模板.通过下载模板,方便用户离线使用模板
    - **测试位置**：指向测试在目录中的位置的链接.
    - **提交更改链接**：指导用户如何进行和提交更改.包括他们可能会得到什么样的答复,以及他们可能会等待多长时间的答复的信息
    - **开发环境详细信息**: 这将指导用户如何设置开发环境.如果详细信息已经存在于 README.md 中,那么也在 CONTRIBUTING.md 中包含一个链接.
4. **包括“如何”详细信息**<br>通过以“如何”说明的形式给出如何导航项目的指导,让用户更容易做出贡献.考虑包括以下内容：
    - **如何报告错误**：指导用户如何报告项目中的问题.使流程尽可能简单,预测挑战并提供解决方案的链接/超链接.通过提供响应问题的链接（如已报告的错误列表）,让用户可以检查他们想要报告的内容是否已在之前报告过,一步一步的“如何”、“错误跟踪器”、“常见问题解答”、链接/超链接以及任何其他可以帮助用户进行错误报告的链接,来理清这一部分.
    - **如何修复错误**：除了报告错误之外,一些用户可能还想修复错误.提供一些关于允许用户修复的错误类型的指南,以及针对不同脚本、问题和拉请求标签的样式指南,可能会有所帮助.
    - **如何建议增强功能**：在本节中,提供用户如何提交增强功能建议的指南.这样的建议可以包括新的特征或对功能的改进.为用户提供指南的链接/超链接,这将帮助您作为维护者和社区了解他们的建议.

    包括相关建议、调试指南的链接/超链接,以及用户可以访问的项目的最新版本,以查看他们打算建议的增强是否已经得到处理或以其他方式实现.鼓励用户尽可能详细地说明他们的建议,并提供一个到增强建议模板的链接,以获得结构化和详细的建议.通过提供对项目配置设置的访问,鼓励他们测试他们的增强是否获得了期望的行为
    
    - **编码约定和风格指南**：对于GIT提交消息,让用户知道项目中要使用的时态、语气、字符数和其他风格格式.例如,您可以指示用户只使用现在时,限制第一行的字符数,甚至是否允许使用表情符号,以及如何包含它们.解决如何引用问题、拉取请求以及如何在CONTRIBUTING.md的本节中包含某些代码.

    给出使用不同脚本（如JavaScript、Documentation、Coffee Script或Specs风格指南）的代码示例,以指导用户在项目中使用的编码约定.
5. **其他模块**<br>这些是涉及项目中的交互的内务管理和您的职责的组件.目标是让用户感到与您一起工作很舒适.考虑包括：
    - **行为准则**: 您可能希望将此部分作为您的 CONTRIBUTING.md 的一部分,以便为贡献设定基调.行为代码也可以是一个单独的 Markdown 文件,链接在 CONTRIBUTING.md 或 LICENSE.md 中.
    - **表彰部分**: 为贡献者创建一个“感谢”部分,列出他们在项目中的投入可能获得的任何表彰.
    - **项目所有者和贡献者信息**：通过列出核心贡献者、如何联系他们或链接到人类,使项目具有人情味.TXT文件,让人们知道他们正在与谁合作,是人类,而不是机器人.
    - **我在哪里可以得到帮助?**–一个包含可靠的沟通渠道链接的扩展可以是一个有用的内容,因为它表明您对用户在项目中可能面临的挑战感兴趣,并为您提供了从用户角度审查工作的机会.

## 参考文件

CONTRIBUTING.md 通常会引用 LICENSE.md、 README.md 和一个 human.txt 文件.必须创建根目录中引用的所有文件.

帮助您创建 [LICENSE.md](https://license.md/),使用以下链接[https://creativecommons.org/choose/](https://creativecommons.org/choose/) 或 [https://license.md/](https://license.md/) ,包括相关文本.

[README.md](readme.md)包含项目的描述、设置和安装详细信息,您可能希望在CONTRIBUTING.md中参考这些信息.创建README.md,你可以按照这里的说明操作.

使用 humans.txt 文件识别贡献者.一旦部署了该文件,就可以通过 CONTRIBUTING.md 文件或项目结构上提供的链接访问它.如果您需要帮助来创建 humans.txt 文件,请参考以下示例.记住要有礼貌,并及时感谢人们的贡献、问题和要求,因为这将保持互动的开放性,并提高贡献的质量.

您还可以创建唯一的ID,称为数字对象标识符（ Digital Object Identifiers,DOI）,以使您的数据集更容易在学术文献中引用.Zenodo 等 Data archiving tools 可以分配 DOI 并为 GitHub.com 存储库issue archives.
