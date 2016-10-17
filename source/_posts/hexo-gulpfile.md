---
title: 优化hexo的发布代码
date: 2016-10-09 20:13:06
categories: 小记
tags:
    - hexo 优化
    - 代码优化
---

我们都知道`hexo`执行`hexo g`命令之后 ，会生成`/public`文件夹， 这是我们最终将要发布到线上的最终内容。 而由于各个hexo的主题中质量不一致，让`/public`文件夹还会有一定的优化空间， 我们需要对此文件夹进行一次基本的前端优化：
* 压缩图片
* html 压缩
* css 压缩
* js 压缩

本文总结一个试验后的可行方法。

## 安装依赖
建议安装淘宝的[cnpm](https://npm.taobao.org/)提速。

> (c)npm i gulp gulp gulp-uglify gulp-minify-css gulp-htmlmin gulp-minify-inline gulp-imagemin --save-dev

## 创建gulpfile.js

在hexo blog文件夹下创建`gulpfile.js`:

```javascript
var
  gulp         = require('gulp'),
  uglify       = require('gulp-uglify'),
  cssmin       = require('gulp-minify-css'),
  htmlmin      = require('gulp-htmlmin'),
  minifyInline = require('gulp-minify-inline'),
  imagemin     = require('gulp-imagemin');

//JS压缩
gulp.task('uglify', function () {
  return gulp.src('././public/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('././public/'));
});
//CSS压缩
gulp.task('cssmin', function () {
  return gulp.src('././public/**/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('././public/'));
});
//图片压缩
gulp.task('images', function () {
  gulp.src('././public/*.*')
    .pipe(imagemin({
      progressive: false
    }))
    .pipe(gulp.dest('././public/'));
});

//html压缩
gulp.task('htmlmin', function () {
  return gulp.src('././public/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(minifyInline())
    .pipe(gulp.dest('././public/'));
})

gulp.task('build', ['uglify', 'cssmin', 'images', 'htmlmin']);

```


## 执行优化命令
清空hexo public文件夹

> hexo clean
> hexo g
> gulp build

连续执行3个命令太麻烦， 可以直接在`package.json`文件中生成写入`scripts`:

```javascript
...
"scripts": {
  "build": "hexo clean && hexo g && gulp build"
}
...
```
然后直接执行如下命令就可以了
> npm run build

至此，可以得到一个html、css、js、image都更优化的`/public`文件夹，最后再用各种评测工具测试一下你的博客打开速度吧！~



