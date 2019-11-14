title: thinking in css
speaker: houfeng
prismTheme: okaidia
plugins:
js:
    - embed.js
css:
    - style.css
    - magic.css

<slide>

:::{.aligncenter}
# thinking in css {.text-landing.text-shadow.font-epen}

----

CSS 边界与技术趋势{.text-intro}

:::

:::footer
houfeng@nextop{.alignright.animated.fadeInUp.delay-800}

<!-- ...{.alignleft} -->
:::

<slide :class="size-50 ">

##  CSS 关注度不高 🤔


:::flexblock{.fadeInUp.build}
* css 并非一门编程语言{.pulse}
* 浏览器兼容性{.pulse}
* js 为中心{.pulse}
* 拓展技术边界{.pulse}
:::

:::note
数据驱动开发
css 处于从属地位
再谈一些老生常谈的话题! 类似 ps 的技巧
:::

<slide :class="size-40 aligncenter">


## CSS is Fun ✅

---

聊一聊前端有趣的事情

 :::note
 站在 css 视角; 不涉及于基础概念和理论的阐述
 面向有一定基础的前端,可以只关注效果,不关注代码实现
 只有 html +css, 没有 js

 :::

<slide :class="size-30 ">

## Contents 📒

:::flexblock{.fadeInUp}

* 背景信息 {.animated.fadeInUp}
* showcase {.animated.fadeInUp.delay-400}
* 流行技术与趋势 {.animated.fadeInUp.delay-800}
* 工程化 {.animated.fadeInUp.delay-1200}

:::


:::note

:::

<slide :class="size-50 aligncenter">

## 关注点分离

!![](https://i.loli.net/2019/06/11/5cff99359051c14049.jpg?mix)

<slide :class="size-50 aligncenter">

##  web 标准组织


:::flexblock {.blink.center.box-standard}

!![](https://cdn.worldvectorlogo.com/logos/w3c-blue.svg)
### W3C
(HTML, CSS, XML ...)

CSSWG , HTMLWG ...

---

!![](https://upload.wikimedia.org/wikipedia/commons/a/a1/WHATWG_logo.svg)
### WHATWG
(HTML5)

浏览器厂商 ...

:::


<slide class="aligncenter text-serif">

:::div {.content-left}
## 标准化流程
:::

:::div {.content-left}

1. `ED` Editor Draft 编辑草案
2. `WD` Working Draft 工作草案
3. `CR` Candidate Recommendation 候选推荐标准
4. `PR` Proposed Recommendation 提议推荐标准
5. `REC` Recommendation 推荐标准

:::

<slide :class="aligncenter">

[CSS3 modules](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS3#%E6%A8%A1%E5%9D%97%E5%92%8C%E6%A0%87%E5%87%86%E5%8C%96%E8%BF%9B%E7%A8%8B)

![](https://mdn.mozillademos.org/files/3623/CSS_Modules_and_Snapshots.png)

<slide :class="size-60 " image="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80 .opacity-4">

## CSS 基本概念及常见问题

- color, background
- text, font
- `box model`
- `position`, `float`, `layout`
- [transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform), [transition](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions), [animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)
- zindex
- .....


:::note
简单介绍
单位

:::


<slide :class="size-60 aligncenter">

### 定位与布局


##### 经典布局方案{.fadeInUp.animated}

---


- [双飞翼](https://codepen.io/houfeng0923/pen/NZPQrB){.fadeInUp}
- [flex layout](https://codepen.io/houfeng0923/pen/dBPxJW){.fadeInUp}
- [grid layout](https://codepen.io/houfeng0923/pen/wLBVLO){.fadeInUp}
    {.build}


:::note
[圣杯](https://codepen.io/houfeng0923/pen/VJYOZX)

:::


<slide :class="aligncenter ">

### 层次 (z-index)

:::column {.vertical-align}

!![](https://upload-images.jianshu.io/upload_images/5075296-1a793bccd52e6e95.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/661/format/webp)


---

:::flexblock

常见问题   `modal` / `dropdown` / `tooltip` ... 的层叠

原生组件的特别之处: `select` , `tooltip`, `dialog`
:::

:::

<slide :class="size-60 aligncenter">

# ShowCase{.font-epen}


 `css 的边界`{.text-intro}

---

#### CSS 表现力 🎩 / 页面重构

:::note
通过几个例子, 了解下相关属性及产生的表现效果
艺术边界和技术(技巧)边界!

:::

<slide :class="size-80 aligncenter">


### 图形 - 三角
---

### arrow{.arrow-up.aligncenter}

<br>

[`popup`](https://v4.bootcss.com/docs/4.0/components/popovers/), `tooltip`, `dropdown`, `pagination` ...

<slide :class="size-80 ">


#### `border`

<br>

up{.arrow-down.arrow-hover}

:::flexblock{.fadeInUp.build}
```css
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-top: 20px solid #f00;

```
:::


:::{.fadeInUp.build}
- `::before` `::after`
- [triangle 生成器](https://codepen.io/yukulele/pen/KLnhJ)
:::

<slide :class="size-80">


#### `background-image`

<br>

up{.arrow-bg.arrow-hover}



:::flexblock{.fadeInUp.build}

```css
  background: linear-gradient( -45deg, #ff0000 50%, transparent 0 );

```
:::


:::{.fadeInUp.build}
- [linear-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient)
:::

:::{.fadeInUp.build}
- [background 纹理效果](https://codepen.io/sanjay8bisht/pen/GpOZJr)
:::

<slide :class="size-80">


#### `clip-path`

<br>

up{.arrow-clip.arrow-hover}


:::flexblock{.fadeInUp.build}


```css
    background: #ff0000;
    clip-path: polygon(90% 0, 100% 30%, 0 65%);
```
:::

:::{.fadeInUp.build}

- [clip-path](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)
- [clip-path 生成器](https://www.html.cn/tool/css-clip-path/)
:::
:::{.fadeInUp.build}

- [30种濒临灭绝动物](http://www.webhek.com/misc-res/species-in-pieces/?utm_source=wechat_session#)
:::


<slide :class="size-80 aligncenter">


### 图形 - 圆角
---

### circle{.circle-border.blink.aligncenter}

### ellipse{.circle-border.ellipse}

### rectangle{.circle-border.rectangle}

<br>

`button`, `panel` ...

:::note
拟物化设计风格
:::

<slide :class="size-80">


#### `border-radius`

<br>

leaf{.circle-leaf}


---

```css
    border-radius: 100% 0px 100% 0px; // 50%;
    border: 1px solid green;
```

- [border-radius](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)

<slide class="star-bg" :class="size-80">

## x{.stars}
## x{.stars2}
## x{.stars3}


#### `box-shadow`

<p>

moon{.circle-moon}


:::flexblock{.fadeInUp.build}
```css
    border-radius: 50%;
    box-shadow: inset 1em 1em silver;
```

:::

:::{.fadeInUp.build}
- [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)
- [multiple-borders](http://todomvc.com/examples/vue/)
- [loading](https://codepen.io/green-plastic/pen/fmgnt)
- [背景图](https://jsfiddle.net/houfeng0923/hj6kwp5f/)
:::

<slide :class="size-60 ">

### CSS 魔法时刻 🎩

组合运用, 滤镜和图层混合模式

---

:::flexblock{.fadeInUp.build}

- [卡通头像](https://codepen.io/aakashrodrigues/pen/Gfhjw)
- [滤镜应用 - 💧](https://codepen.io/Chokcoco/pen/gZVjJw)
- [滤镜应用 - 🔥](https://codepen.io/Chokcoco/pen/jJJbmz)
- [抖音logo](https://codepen.io/houfeng0923/pen/rEVEmd?editors=1100)
- [more in codepen](https://codepen.io/search/pens?q=creativity&page=1&order=popularity&depth=everything)

:::


:::note
华而不实, 权当娱乐
:::
<slide :class="size-80 aligncenter">

### 文字 - 排版和装饰

---

<slide>

<input type="checkbox" id="icecream">
<label for="icecream">[enable shape outside]</label>

!![](https://i.loli.net/2019/06/13/5d0209a387d6472157.png .icecream.alignleft)


Have you ever spent days and days and days making up flavors of ice cream that no one's ever eaten before? Like chicken and telephone ice cream? Green mouse ice cream was the worst. I didn't like that at all.Have you ever spent days and days and days making up flavors of ice cream that no one's ever eaten before? Like chicken and telephone ice cream? Green mouse ice cream was the worst. I didn't like that at all.Have you ever spent days and days and days making up flavors of ice cream that no one's ever eaten before? Like chicken and telephone ice cream? Green mouse ice cream was the worst. I didn't like that at all.Have you ever spent days and days and days making up flavors of ice cream that no one's ever eaten before? Like chicken and telephone ice cream? Green mouse ice cream was the worst. I didn't like that at all.{.font14.first-line}

- [shape-outside](https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-outside)
- [`::first-line`](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line)

:::note
css region
<!-- 多行截断 -->
:::

<slide :class=" aligncenter">


!![](https://01.org/sites/default/files/resize/users/u27005/cssrounddisplay-browse1-310x309.png)

---

:::{.fadeInUp.build.aligncenter.size-30}
- [CSS Round Display Level 1](https://drafts.csswg.org/css-round-display/)
- [@viewport](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@viewport)
:::

:::note
https://aotu.io/notes/2017/11/27/iphonex/index.html
:::

<slide :class="size-80 aligncenter">


### WebFont


:::note
不在依赖系统字体

艺术字
图标

:::
<slide :class="size-80 aligncenter">


### thinking in css {.text-landing.text-shadow.font-epen}


:::flexblock{.fadeInUp.build}
```css
@import url('https://fonts.googleapis.com/css?family=Fredericka+the+Great&text=THINKINGINCSSShowCase');

.font-ftg {
  font-family: 'Fredericka the Great';
  font-weight: normal;
}
```

:::


<slide :class="size-80 aligncenter">


### 孔子曰：中午不睡，下午崩溃!{.font-alibaba}


:::flexblock{.fadeInUp.build}
```css
@font-face {
  font-family: 'webfont';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_hargkabo16q.eot');
  src: url('//at.alicdn.com/t/webfont_hargkabo16q.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/webfont_hargkabo16q.woff2') format('woff2'),
    url('//at.alicdn.com/t/webfont_hargkabo16q.woff') format('woff'),
    url('//at.alicdn.com/t/webfont_hargkabo16q.ttf') format('truetype'),
    url('//at.alicdn.com/t/webfont_hargkabo16q.svg#AlibabaPuHuiTiM') format('svg');
}

.font-ph {
  font-family: "webfont";
  font-weight: normal;
}
```

:::


<slide :class="size-80 aligncenter">


### ICON
---

::fa-tree ::
::fa-tree medium green::
::fa-tree large green::

---

- [Font Awesome Icons](https://fontawesome.com/icons?d=gallery)
- [Iconfont-阿里巴巴矢量图标库](https://www.iconfont.cn/)

:::note
动画图标
https://codepen.io/jcoulterdesign/pen/OMOqjy
:::


<!-- theme  -->

<slide :class="size-80 aligncenter">


### CSS 组件
---

<slide :class="size-80 aligncenter">

#### 伪类选择器

---

`:hover` `:checked`


[css tabs](https://codepen.io/oknoblich/pen/tfjFl){.button}
[css tooltips](http://xurui3762791.github.io/tooltips/){.button}




<slide :class="size-80 aligncenter">

#### Modal (HTML5)

[`<dialog>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dialog)

:::{.fadeInUp}
<dialog id="modal1">
  <p>This is a dialog!</p>
  <button id="close">Close</button>
</dialog>
<button id="show">Open Dialog!</button>
<button id="show2">Open Modal Dialog!</button>
<script>
    var dialog = document.querySelector('#modal1');
    document.querySelector('#show').onclick = function() {
    dialog.show();
    };
    document.querySelector('#show2').onclick = function() {
    dialog.showModal();
    };
    document.querySelector('#close').onclick = function() {
    dialog.close();
    };
</script>

---

:::

:::flexblock{.fadeInUp.build}
```
<dialog id="modal">
  <p>This is a dialog!</p>
  <button id="close">Close</button>
</dialog>
<button id="show">Open Dialog!</button>
<button id="showModal">Open Modal Dialog!</button>

// js
document.querySelector('#modal1').show(); // showModal() // close()

```
:::


<slide :class="size-80 aligncenter">

#### Form

---


- 文字对齐 (`text-align-last`)
- 表单元素表现力 (`appearance`)
- 可用性 (`:hover` `:focus` `:focus-within` `:focus-visible`)

---

[form demo](https://codepen.io/houfeng0923/pen/KjpZMG){.button}
[掘金社区 登录](https://juejin.im/){.button}


:::note

- [text-align-last](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align-last)
radio, checkbox 表现力 select(zindex)


:hover
:focus
:focus-within
:::

<slide :class="aligncenter">

#### Table

---


[Responsive Table]((https://codepen.io/AllThingsSmitty/pen/MyqmdM)){.button}
[HeaderAffixed Table](https://codepen.io/houfeng0923/pen/ZNKjzY){.button}


---

:::{.fadeInUp.build.aligncenter.size-30}
- [@media](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries)
- [position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)
:::

:::note
about scrollbar

:::
<slide :class="size-80 aligncenter">

#### Scrollbar


!![](https://i.loli.net/2019/06/14/5d0357dcdf50717480.png)


:::{.fadeInUp.build.aligncenter}
- [custom scrollbar](https://www.w3.org/TR/css-scrollbars-1/)
- [scroll behavior](https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-behavior)
- [scroll snap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Scroll_Snap)
- [scroll snap demo](https://codepen.io/Jinjiang/embed/qvzGwX)
:::

:::note
https://blogs.windows.com/msedgedev/2017/03/08/scrolling-on-the-web/#Thjr7rTcVXlOhTLq.97
:::
<slide :class="size-60 ">

### Think 🤔

---

- 奇技淫巧 (skill? hack?){.flipInX}
- 合理使用纯 css 方案{.flipInX}
- 语义化{.flipInX}
- 分化的 WEB (page -> application){.flipInX}
    {.build}

:::note


辩证看待奇技淫巧: 技巧和填坑

项目中可能很少涉及,使用; 有些依然有价值去探索(取决于个人兴趣和方向)
偏重效果的网页设计 和 产品中,可以适量运用; (css 禅意花园, css secret)
组件类 重构技巧, 产品的同学可以多关注.

合理使用:
看场景和复杂度,该用 js 用 js


语义化:
语义化 可以 降低机器阅读的难度 (结合无障碍, seo)
标签并非越少越好,合理使用
权衡  团队维护成本等人的因素,做出选择


(展示类:排版需求;应用类:功能需求)
类桌面应用,(ie6 时代的故事);
展示类可以
大量属性查询成本,展望: 子集 (后面会涉及)


[&lt;css-doodle /&gt;](https://css-doodle.com/),


:::


<slide :class="size-40 aligncenter">

## CSS 流行技术与趋势


<slide :class="size-60 aligncenter">

### preprocessor (DRY)

!![](https://www.growingwiththeweb.com/images/2014/03/17/preprocessors.png)
#### [less/scss/styl code] -> css


变量, 嵌套, 复用 (function, include, mixin)

:::note
不是新鲜的东西 DRY
- nodejs
- lesser code
- 问题


:::

<slide :class="size-60 aligncenter">

###  postcss?

!![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/PostCSS_Logo.svg/440px-PostCSS_Logo.svg.png?mix .size-30)


[cssnext - Use tomorrow’s CSS syntax, today.](https://cssnext.github.io/)

:::note
<!-- #### plugins -->
更强大更灵活, 相较成本高一点
可编程式
autoprefixer
ast->[plugins]->
feature css next
:::

<slide :class="size-60 aligncenter">

### Future CSS
----

#### CSS2.1 -> CSS3 -> CSS

#### modules (level)


:::note
css2.1
css3 module
CSS 工作组）认识到庞大整体式的“版本”一点也不好。很难维护，并且开发缓慢。
新特性:level1
旧特性: level4
:::

<slide :class="size-60 aligncenter">

### 动态性
---

- [css variables](https://caniuse.com/#feat=css-variables)
- [calc(100% - 2em)](https://codepen.io/houfeng0923/pen/dBPwJR)
- 相对单位 `em` `rem` ...
- viewport `vh`, `vw`, `vmin`, `vmax`
- `@media`



:::note
利用 vw vh 的 响应式 ui, font (https://www.w3cplus.com/css/simplify-your-stylesheets-with-the-magical-css-viewport-units.html)

calc : 减少嵌套; 左列固定,右列填充
:::

<slide :class="size-60 aligncenter">

### 特性查询

---

- [can i use](https://caniuse.com/), [cssdb](https://cssdb.org/)
- [Modernizr](https://www.cnblogs.com/coco1s/p/6478389.html) -> [@support](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)



:::note
渐进增强
modernizr 不严谨

:::
<slide :class="size-60 aligncenter">

### API

---

- CSSOM -> [Typed OM](https://developer.mozilla.org/en-US/docs/Web/CSS_Typed_OM)
- CSS Hodini (js in css)
    {.build}


---

:::{.aligncenter.flash.build}
<ruby>
  胡 <rp>(</rp><rt>Hu<sup>2</sup></rt><rp>)</rp>
  迪 <rp>(</rp><rt>di<sup>2</sup></rt><rp>)</rp>
  尼 <rp>(</rp><rt>ni<sup>2</sup></rt><rp>)</rp>
</ruby>
:::

<slide :class="size-60 aligncenter">

### 扩展应用场景
---

- [wxss](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html)
- [weex](https://weex.apache.org/zh/docs/styles/common-styles.html)

- [map](https://docs.mapbox.com/help/glossary/cartocss/)
    {.build}

:::note
- 看法


[the end of cartocss](https://blog.mapbox.com/the-end-of-cartocss-da2d7427cf1)
:::



<slide :class="size-60 aligncenter">

## CSS 与前端工程化{.font-del}
## 可维护 CSS


<slide :class="size-60 aligncenter">
### 项目中的 CSS
---

:::
- reset.css/normalize.css/bootstrap(dpl)
- stylelint
- order
- proprocesser?
    {.build}

:::

:::note
容易形成祖传代码
如非必要, 尽量不要用不稳定或草案的 api. 浏览器在自动升级

:::

<!-- <slide :class="size-60 aligncenter"> -->
:::note
 维护性原则
- 合理性
- 兼容性
- 成本
- 性能
:::

<slide :class="size-60 aligncenter">

###  学习资料

---

-  [MDN CSS 在线文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
-  [codepen.io](https://codepen.io/)
-  [《CSS Secret》](https://item.jd.com/11911279.html)
-  F12 (发现新世界)
    {.build}


<slide :class="size-60 aligncenter">
<!-- image="https://i.loli.net/2019/06/14/5d03714e7a46650417.png .fx" -->
## `<Thanks/>`
---


:::flexblock{.fadeInUp}
```css
.houfeng {
    position: nextop.cn;
    display: frontend engineer  👨‍💻;
}
```
:::

:::flexblock{.fadeInUp.build}
```css
.houfeng:hover {
    display: fitness trainer 🏋🏼‍;
}
```
:::

:::note

- 技术情怀
- 偏执
- 耐心
- 有所追求
- on the road

:::




