# Efficiency_jekyll_theme

原[README.md](README-ultralight.md)

这是一个开源的Jekyll主题！

基于[kotet/ultralight](https://github.com/kotet/ultralight)

经过我们的测试，此主题比官方快18%！

我更改的代码仍然遵守[mit](LICENSE)

我创建了[新的LICENSE](LICENSE)。此处为[原LICENSE](LICENSE-ultralight)。

## 使用的东西

- [highlight.js](https://github.com/highlightjs/highlight.js)
- [welcometitle.js](https://github.com/ZiChenStudio/welcometitle.js)
- [smoothscroll.js](https://github.com/ZiChenStudio/smoothscroll.js)

----

下方内容更改自[原README.md](README-ultralight.md)

## 使用方法

### GitHub Pages

```console
$ git clone https://github.com/ZiChenStudio/Efficiency_jekyll_theme.git --branch master && cd Efficiency_jekyll_theme
$ git remote set-url origin https://github.com/yourname/yourname.github.io.git
$ git push origin master
```

### IPFS

```console
$ git clone https://github.com/ZiChenStudio/Efficiency_jekyll_theme.git --branch master&& cd Efficiency_jekyll_theme
$ bundle && bundle exec jekyll build
$ ipfs add -r _site/
```

