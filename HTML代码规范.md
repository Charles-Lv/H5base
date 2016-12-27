# HTML代码规范整理

## 推荐学习网站
   常用比较全面的学习网站 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/Tutorials)

## 使用基础HTML模板
```HTML
<!DOCTYPE html>
<html>
<head lang="zh-cn">
    <title>aa</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,user-scalable=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <meta content="black" name="apple-mobile-web-app-status-bar-style"/>
    <meta content="telephone=no" name="format-detection"/>
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"  media="screen"/>
</head>
<body>
  <header></header>
  <div class="page"></div>
  <footer></footer>
</body>
</html>
```
> 所有的HTML标签必须小写   
所有的HTML属性必须小写     
所有的样式名及规则必须小写

>引用样式或者脚本，去掉`http:` 或者 `https:`
如 `//cdn.bootcss.com/babel-core/5.8.34/browser.min.js`

## 按模块添加注释
```HTML
在每个模块开始和结束的地方添加注释
<!-- comment -->
注释内容左右两边保留和注释符号有1个空格位
在注释内容内不允许再出现中划线“-”，某些浏览器会报错

<!-- 新闻列表模块 -->
<div id="news" class="g-mod"
...
<!-- /新闻列表模块 -->
<!-- 排行榜模块 -->
<div id="topic" class="g-mod"
<!-- /排行榜模块 -->
```

##  语义化标签

> 在合适的场景选择语义合适的标签
禁止使用被废弃的用于表现的标签，如 center, font等
部分在XHTML1中被废弃的标签，在HTML5中被重新赋予了新的语义，在选用时请先弄清其语义，如:b, i, u等。注意内联元素中不可放置块级元素。比如 <span><div></div></span>

* 元素据标记 head, title, base, link, meta, style
* 章节标签 html, body, section, nav, article, aside, h1, h2, h3, h4, h5, h6, hgroup, header, footer, address (页面布局常用)
* 脚本标记 script, noscript
* 分组内容标记 p, hr, pre, blockquote, ol, ul, li, dl, dt, dd, figure, figcaption, div
* 文本标签 a, em, strong, small, s, cite, q, dfn, abbr, time, code, var, samp, kbd, sub, sup, i, b, u, mark, ruby, rt, rp, bdi, bdo, span, br, wbr, ins, del
* 媒体标签 img, iframe, embed, object, param, video, audio, source, track, canvas, map, area
* 互动标签 details, summary, command, menu
* 表单标签 form, fieldset, legend, label, input, button, select, datalist, optgroup, option, textarea, keygen, output, progress, meter
* 表格标签 table, caption, colgroup, col, thead, tbody, tfoot, tr, td, th

## 样式名称和ID

* 尽量使用ID（#）提供给对应的js代码查找DOM等操作。
* 尽量使用样式class 进行对应的样式代码编写
* 在js中有对应查找dom和样式相关的代码中，尽量添加js前缀以减少样式和js代码的耦合。
