---

layout: post
title: Git工作流程规范
tags: 官方

---

# Git工作流程规范

对于git的工作流程，我们选择使用「GitFlow」工作流，我们认为它很高效合理。下面是对此规范的简单介绍与具体使用示例。

### 一、常用分支

| 名称      | 介绍                                           |
|:------- |:-------------------------------------------- |
| main    | 主分支，只能合并，不可以直接更改（除初次提交）                      |
| develop | 主开发分支，主要用于合并，包含下一个版本的内容                      |
| feature | 功能开发分支，基于develop分支创建，用于开发新功能，后合并回develop     |
| release | 待发布分支，从develop中拉取，进行bug修复后合并到main和develop    |
| hotfix  | 热修复分支，与待发布分支不同，此分支从main中拉取，直接合并到main和develop |

### 二、使用示例

#### （一）develop

```git
# 创建并推送develop分支
git branch develop
git push -u origin develop
```

#### （二）feature

```git
# 创建并推送feature分支
git checkout -b feature develop
git push -u origin feature
# 完成
# 拉取develop确保是最新
git pull origin develop
git checkout develop
git merge --no-ff feature
# 删除该feature分支（可选）
git branch -d feature
```

对于feature分支的命名统一采用以下三种格式`feature`、`feature-日期`、`feature-功能-日期`。

#### （三）release

```git
# 从develop创建并推送release分支
git checkout -b release develop
git push -u origin release
# 完成
# 合并到main和develop并推送
git checkout main
git merge --no-ff release
git checkout develop
git merge --no-ff release
git push
# 删除该release分支
git branch -d release
```

release中的每次commit都应当有相应的tag

```git
git tag -a example main
git push --tags
```

其中example所代表的版本号命名遵循《版本号命名规范》，

#### （四）hotfix

```git
# 从main创建并推送hotfix分支
git checkout -b hotfix main
# 完成
# 合并到main和develop并推送
git checkout main
git merge --no-ff hotfix
git checkout develop
git merge --no-ff hotfix
git push
# 删除hotfix分支（可选）
git branch -d hotfix
# 为主分支打上版本标签
git tag -a vx.x.x.x main
# 将标签推送到远端仓库
git push --tags
```

对此作出规范，hotfix分支的命名遵循《版本号命名规范》，格式为`hotfix-example`，example部分更改均仅更改修订号。

### 三、生效范围

对此标准后所有新项目生效，旧项目则按需求更改。
