---
layout: post
title: 双系统时grub与win引导的问题及解决办法
tags: 技术
---

# 双系统时grub与win引导的问题及解决办法

### 问题背景

大概在上月初，我尝试安装win10+Linux双系统。

由于已经装好了win10，所以我就划出大约70GB装Linux。win10已经装好了，是UEFI+GPT启动。

**注意**：这是单硬盘引导双系统，在其他双系统安装教程中通常都是以双硬盘为前提。

至于Linux，我选择了Arch Linux，安装过程一切顺利，但是到了安装grub引导是出现了问题，我尝试重新安装多次，都没有解决。我更改了镜像，决定安装同为Arch系的Manjaro，但是在图形化界面的安装日志中仍然卡在了安装grub引导的那一步[^1]。我认为可能是Arch系的通病，所以转而测试了Fedora 41，但事实证明不是Linux安装程序的问题，Fedora安装后**没有**显示报错[^2]，但是重启后直接进入了win boot manager，直接启动windows10，其中并没有Fedora的启动项。我并未尝试Debian系的Ubuntu等，但是我觉得应该会出现同样问题。

### 问题分析

报错出现在grub安装时，通过观察当时的报错，我觉得仅仅是grub安装时出现的问题，可能是和win的引导“不兼容”。

既然Arch和Fedora都出现了问题，那么就更加肯定了是grub的单方面问题了。

解决自然要从grub的安装入手。

我通过DiskGenius（后文简称DG）的引导更改了优先启动Fedora，果然，启动成功，那么就可以大概断言是win占用了grub的引导优先级，并且拒绝引导linux系统。

### 问题解决

我在查阅相关双系统安装教程时都发现了一个相同的特点：他们都要求**不要格式化EFI分区**，使用os-prober来引导win10。

所以我认为是这步显然不适合我的设备。我重新尝试了安装Manjaro，并在分区界面要求Manjaro格式化EFI分区，果不其然，Manjaro正常启动，而win失去了引导。

所以，只要先安装grub的引导，在用os-prober来识别win的引导即可解决问题。

~~但是现在我的win打不开了~~

我不打算用PE恢复win的引导，因为我正巧要重装win10 LTSC 2021，所以我先重装win10，保证win可以正常启动后，使用DG把win的EFI引导复制出来，就是复制EFI分区下的`EFI/Microsoft`整个文件夹，正常安装Manjaro，同样要求格式化EFI分区，安装完成后正常进入Manjaro。

之后，修复win引导。使用PE把`EFI/Microsoft`整个文件夹放回去。用`grub-mkconfig -o /boot/grub/grub.cfg`重新生成grub引导。由此，win10启动项添加成功。（因为已经过了一个月了，这里记得不是太清楚，可能涉及到重新生成`fstab`文件，可以参考Arch的安装教程）

经过一段时间的使用，我重新回到了Arch，同样的，在安装过程中把EFI格式化，`grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=Arch`时没有任何报错。重启，确定Arch可以被成功引导后，使用PE来恢复`EFI/Microsoft`文件，进入系统后重新生成grub引导，win启动项成功添加。

**小插曲**：在格式化EFI分区之后，我忘记了重新生成fstab文件，导致系统找不到引导重装。当时不太清楚，但我觉得可能是fstab文件的问题，进入Arch启动U盘（应该叫做LiveCD），重新生成fstab，重新构建grub，成功启动。

由此，问题~~顺利~~解决。

全过程大概耗费我两天的时间，因为配置原因，安装win10和各种Linux都有让人坐立难安的等待时间。而且，多次重装系统实在让我心浮气躁。但最终我还是成功安装了，~~有一种大业已成的感觉~~学到了解决这个问题的方法，希望其他像我一样的初学者可以避坑。

[^1]: 我装了两次Manjaro，第一次没有报错，第二次有报错，但在重启后直接都进入到了win boot manager，而其中都没有Manjaro的启动项。

[^2]: 同样安装了两次Fedora，当时我竟然愚蠢的认为是Fedora Gnome的问题。转向了i3版，但同样没有报错，没有引导
