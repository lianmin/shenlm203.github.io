---
title: editorconfig 使用
date: 2016-10-16 13:24:12
categories: Web前端
tags:
    - editorconfig
    - 代码质量
---

# 介绍

由于团队成员开发经历、熟悉的编辑器及开发习惯等的不同，在协作开发的时候往往会遇到许多因代码风格而引起的尴尬问题。比如，协作开发过程中各成员之间代码一致，只是因tab缩进，行尾换行符，多余空格等而差异导致VCS产生了冲突。

Editorconfig是一款帮助开发者在不同编辑器或IDE之间定义和保持代码风格的工具。它包含了两部分内容：代码风格规则定义&支持此规则的一系列编辑器插件。

本文根据[editorconfig](http://editorconfig.org/)官网的内容，结合常规开发所能遇到的情况，为大家介绍一下其用法

# Editorconfig的特点:

- 支持一套统一的代码风格
- 跨编辑器
- 配置简单、快捷


# 配置

## 1.通配符匹配规则

![](/assets/img/1.png)

- [] 匹配规则是从当前目录算起;

- ?只能匹配且必须有    如`f1.js`、`f2.js`、`f12.js`通过f??.js只能匹配到 `f12.js`，而f**.js可以匹配到所有;

- {s1,s2,s3}之间不能有空格。[{f1.js, f2.js, f3.js}] 无法匹配`f2.js`,`f3.js`;

- `*`和`**`可以匹配空字符串   如`f*.js`可以匹配`f.js`

- 多个匹配之间的规则如果不冲突是可以合并的

- 优先级问题（有点类似于css ）

    如果两个匹配所定义的规则冲突，则会以最靠近打开文件的`.editorconfig`文件为准;

    如果同一个文件中匹配定义冲突，则会以最后定义的为准。所以在定义规则的时候，须先定义通用规则，后定义特殊规则。



## 2.支持属性

![](/assets/img/2.png)

    注：

    1.所有属性设置大小写敏感，使用小写；

    2.`.editorconfig`文件的使用规则：

        当打开一个文件的时候，IDE中安装的Editorconfig组件会在当前文件目录以及其父目录查找.editorconfig文件。当到达根目录或者查找到一个editorconfig文件中root=true时，停止查找。

        查找顺序从根目录（或root=true文件夹）到当前目录，最接近当前打开文件的.editorconfig会最后被读取，这些文件中所设置的属性越靠近当前打开文件，优先级越高

    3.Windows中由于扩展规则限制，可通过输入'.editorconfig.'生成配置文件

# 常用IDE下载链接

- Notepad++:        https://github.com/editorconfig/editorconfig-notepad-plus-plus#readme
- Sublime Text:     https://github.com/sindresorhus/editorconfig-sublime#readme
- jetBrains:        https://github.com/editorconfig/editorconfig-jetbrains#readme
- Vim:              https://github.com/editorconfig/editorconfig-vim#readme
- TextMate:         https://github.com/Mr0grog/editorconfig-textmate#readme
- Code::Blocks:     https://github.com/editorconfig/editorconfig-codeblocks#readme


支持的所有编辑器列表：

![](/assets/img/3.png)

# 安装举例

## jetbrains (包括Intellij IDEA 和 webstrom) 安装

1.打开settings->plugins

![](/assets/img/4.png)

2.选择从本地磁盘安装

![](/assets/img/5.png)

3.选择安装插件[见附件]

## sublime text安装

通过`package control` 输入 editorcofnig 查找安装即可

![](/assets/img/6.png)



## notepad ++ 安装

1.打开插件管理

![](/assets/img/7.png)

2.找到`editorconfig`,直接安装即可



# editor配置示例

将.editorconfig文件(内容如下)放到项目根目录，并且对自己的IDE安装相应支持的插件即可。

    # editorconfig文件定义一致的code style规范
    # 根据不同的开发IDE或编辑器统一代码风格
    # 详情见 editorconfig.org
    root = true


    [*]
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
    indent_style = space
    indent_size = 4

