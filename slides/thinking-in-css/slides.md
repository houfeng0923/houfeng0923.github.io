title: thinking in css
speaker: houfeng
prismTheme: okaidia
plugins:
js:
    - embed.js
css:
    - style.css
    - magic.css

<slide class="bg-black-blue aligncenter" >

# thinking in css {.text-landing.text-shadow.font-epen}

---

  CSS 边界与技术趋势 {.text-intro.animated.fadeInUp.delay-500}

By { houfeng }{.text-intro}

<slide class="bg-black-gray" :class="size-50 ">
##  🤔CSS 关注度不高

!![css3 img]


* css 并非一门编程语言{.pulse}
* 浏览器兼容问题改善{.pulse}
* js为中心{.pulse}
* 拓展技术边界{.pulse}


:::note
数据驱动开发
css 处于从属地位
再谈一些老生常谈的话题! 类似 ps的技巧
:::

<slide :class="size-40 aligncenter">


## CSS is Fun ✅

 聊一聊前端有趣的事情

 :::note
 站在 css 视角; 不涉及于基础概念和理论的阐述
 面向有一定基础的前端,可以只关注效果,不关注代码实现
 只有 html +css, 没有 js

 :::

<slide :class="size-30 ">

## Contents


* 相关背景信息 {.animated.fadeInUp}
* showcase {.animated.fadeInUp.delay-400}
* 开发技术与趋势 {.animated.fadeInUp.delay-800}
* 工程化 {.animated.fadeInUp.delay-1200}
<!-- * thinking {.animated.fadeInUp.delay-1200} -->

:::note

:::

<slide :class="size-40">

## 关注点分离

!![](https://i.loli.net/2019/06/11/5cff99359051c14049.jpg?mix)

<slide :class="size-50">

##  web 标准组织


:::flexblock {.blink.center}

!![](https://cdn.worldvectorlogo.com/logos/w3c-blue.svg)
### W3C
(HTML, CSS, XML ...)

CSSWG , HTMLWG ...

---

!![](https://upload.wikimedia.org/wikipedia/commons/a/a1/WHATWG_logo.svg)
### WHATWG
(HTML5)

Mozilla, Google, Apple, Opera, Microsoft

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
5. `REC` Recommendation 推荐标准（最稳定的）

:::

<slide>

![](https://mdn.mozillademos.org/files/3623/CSS_Modules_and_Snapshots.png)

#### [CSS3 modules](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS3)

<!-- <slide :class="size-90 aligncenter"> -->

 <!-- !![](https://i.loli.net/2019/06/11/5cffa5a6205b355346.png?mix){.fadeInUp} -->

<!-- <slide :class="size-90 aligncenter"> -->


 <!-- !![](https://i.loli.net/2019/06/11/5cffa5dbdd27853067.png?mix){.fadeInUp} -->


<!-- <slide :class="size-50 aligncenter"> -->

<!-- !![](https://img.88gag.com/201711/zuMMEbN7.jpg) -->


<slide :class="size-30 ">

## 浏览器工作机制(考虑省略 或 perf)


<slide :class="size-60 ">

### 渲染引擎

---

- Trident (MSHTML)
- EdgeHTML
- Gecko
- Webkit(Blink)


<slide :class="size-60 ">

:::flexblock {.blink.center}

!![](https://user-gold-cdn.xitu.io/2017/11/1/1bc8d128e62937cc42a55290e99783d8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### webkit 工作流程

:::


:::note

解析 HTML 构建 DOM 树时渲染引擎会将 HTML 文件的便签元素解析成多个 DOM 元素对象节点，并且将这些节点根据父子关系组成一个树结构。同时 CSS 文件被解析成 CSS 规则表，然后将每条 CSS 规则按照「从右向左」的方式在 DOM 树上进行逆向匹配，生成一个具有样式规则描述的 DOM 渲染树。接下来就是将渲染树进行布局、绘制的过程。首先根据 DOM 渲染树上的样式规则，对 DOM 元素进行大小和位置的定位，关键属性如position;width;margin;padding;top;border;...，接下来再根据元素样式规则中的color;background;shadow;...规则进行绘制。
另外，这个过程是逐步完成的，为了更好的用户体验，渲染引擎将会尽可能早的将内容呈现到屏幕上，并不会等到所有的 html 都解析完成之后再去构建和布局 render 树。它是解析完一部分内容就显示一部分内容，同时，可能还在通过网络下载其余内容。
:::

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
[webpack logo](https://codepen.io/chZoe/pen/OXpXjO)
:::

<slide :class="size-60 ">

### 单位选择 (delete)

---

why px

why not px

缩放按钮实例

移动端 rem


:::note
绝对单位
相对单位
:::


<slide :class="size-60 ">

### 定位与布局

---

#### 经典布局方案

[双飞翼](https://codepen.io/houfeng0923/pen/NZPQrB)

[flex layout](https://codepen.io/houfeng0923/pen/dBPxJW)

[grid layout](https://codepen.io/houfeng0923/pen/wLBVLO)


:::note
[圣杯](https://codepen.io/houfeng0923/pen/VJYOZX)

:::


<slide :class="size-60 ">

### 层次

常见问题: modal/ dropdown/ tooltip 的层叠

!![](https://upload-images.jianshu.io/upload_images/5075296-1a793bccd52e6e95.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/661/format/webp)

原生组件的特别之处: `select` , `tooltip`, `dialog`



<slide :class="size-60 aligncenter">

# ShowCase{.font-epen}

 css 的边界{.lightSpeedIn.animated}


#### CSS 表现力(魔法)
#### CSS 页面重构

:::note
通过几个例子, 了解下相关属性及产生的表现效果
艺术边界和技术(技巧)边界!

:::

<slide :class="size-80 aligncenter">


### 图形:三角
---

### arrow{.arrow-up.arrow-hover.aligncenter}

<br>

[`popup`](https://v4.bootcss.com/docs/4.0/components/popovers/), `tooltip`, `dropdown`, `pagination` ...

<slide :class="size-80 ">


#### `border`

<br>

up{.arrow-down.arrow-hover}

---

```css
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-top: 20px solid #f00;

```



- `::before` `::after`

- [generator](https://codepen.io/yukulele/pen/KLnhJ)



<slide :class="size=80">


#### `background-image`

<br>

up{.arrow-bg.arrow-hover}


---

```css
  background: linear-gradient( -45deg, #ff0000 50%, transparent 0 );

```

- [linear-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient)
- [background 纹理效果](https://codepen.io/sanjay8bisht/pen/GpOZJr)

<slide :class="size=80">


#### `clip-path`

<br>

up{.arrow-clip}


---

```css
    background: #ff0000;
    clip-path: polygon(90% 0, 100% 30%, 0 65%);
```

- [clip-path](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)
- [30种濒临灭绝动物](http://www.webhek.com/misc-res/species-in-pieces/?utm_source=wechat_session#)



<slide :class="size-80 aligncenter">


### 图形:圆角
---

### circle{.circle-border.blink.aligncenter}

### ellipse{.circle-border.ellipse}

### rectangle{.circle-border.rectangle}

<br>

`button`, `panel` ...

:::note
拟物化设计风格
:::

<slide :class="size=80">


#### `border-radius`

<br>

leaf{.circle-leaf}


---

```css
    border-radius: 100% 0px 100% 0px; // 50%;
    border: 1px solid green;
```

- [border-radius](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)

<slide class="star-bg" :class="size=80 ">

## x{.stars}
## x{.stars2}
## x{.stars3}


#### `box-shadow`

<br>

moon{.circle-moon}

```css
    border-radius: 50%;
    box-shadow: inset 1em 1em silver;
```

- [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)
- [multiple-borders](http://todomvc.com/examples/vue/)
- [loading](https://codepen.io/green-plastic/pen/fmgnt)
- [背景图](https://jsfiddle.net/houfeng0923/hj6kwp5f/)

<slide :class="size-60 ">

### CSS 魔法时刻

组合运用, 滤镜和图层混合模式


---

- [卡通头像](https://codepen.io/aakashrodrigues/pen/Gfhjw)
- [滤镜应用 - 💧](https://codepen.io/Chokcoco/pen/gZVjJw)
- [滤镜应用 - 🔥](https://codepen.io/Chokcoco/pen/jJJbmz)
- [抖音logo](https://codepen.io/houfeng0923/pen/rEVEmd?editors=1100)
- [more in codepen](https://codepen.io/search/pens?q=creativity&page=1&order=popularity&depth=everything)

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
- [:first-line](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line)

:::note
css region
<!-- 多行截断 -->
:::




<!-- <slide :class="size-80 aligncenter"> -->

:::note
mark (文字透明背景 http://www.webhek.com/misc-res/species-in-pieces/?utm_source=wechat_session)


阴阳文字
https://codepen.io/houfeng0923/pen/Wqvqdp
ruby

https://jsfiddle.net/houfeng0923/c5L6jpnn/


灵活调整:
https://www.axis-praxis.org/specimens/amstelvar
[more: w3c css fonts]

- [更多文字效果](https://codepen.io/search/pens?q=%20%20text%20effect%20css&page=1&order=popularity&depth=everything)
:::

<slide :class="size-80 aligncenter">


### WebFont

<slide :class="size-80 aligncenter">


### thinking in css {.text-landing.text-shadow.font-epen}

---

### 孔子曰：中午不睡，下午崩溃!{.font-alibaba}

:::note
不在依赖系统字体

艺术字
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

#### 伪类的运用
---

- [css tabs](https://codepen.io/oknoblich/pen/tfjFl)
- [css tooltips](http://xurui3762791.github.io/tooltips/)




<slide :class="size-80 aligncenter">

#### modal dialog

`<dialog>`

```
<dialog id="modal1">
  <p>This is da dialog!</p>
  <button id="close">Close</button>
</dialog>

// js
document.querySelector('#modal1').show();

```


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


<slide :class="size-80 aligncenter">

#### form

---


- 文字对齐
- 表单元素表现力
- 可用性 (`:hover` `:focus` `:focus-within`)

---

[form demo](https://codepen.io/houfeng0923/pen/KjpZMG){.button}
[掘金社区 登录](https://juejin.im/){.button}


- [text-align-last](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align-last)

:::note
radio, checkbox 表现力 select(zindex)


:hover
:focus
:focus-within
:::

<slide :class="size-80 aligncenter">

#### table

---

- [Responsive Table]((https://codepen.io/AllThingsSmitty/pen/MyqmdM))


- [HeaderAffixed Table](https://codepen.io/houfeng0923/pen/ZNKjzY)



---

- [@media](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries)
- [position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)



<!-- <slide :class="size-80 aligncenter"> -->

<!-- #### scrollbar -->



<slide :class="size-60 ">

### think

---

- 分化的 web 应用场景 (page -> application)
- 语义化
- 辩证批判 "奇技淫巧" (css hack)
- **合理**使用纯 css 方案

:::note

(展示类:排版需求;应用类:功能需求)
类桌面应用,(ie6 时代的故事)

语义化: 标签并非越少越好

奇技淫巧:
关注展示创意类或对 css 有原始兴趣的同学, 可以关注
应用类 重构技巧 (ps 技巧)

[&lt;css-doodle /&gt;](https://css-doodle.com/), css 禅意花园, css secret

合理使用:(忌过度使用, 与众不同并不那么重要)
权衡  团队维护成本等人的因素,做出选择

大量属性查询成本,展望: 子集
等等类别（可访问性相关，打印相关，字体相关，图标相关等），大家根据业务场景 了解学习

:::


<slide :class="size-40 aligncenter">

## CSS 流行技术与趋势


<slide :class="size-60 aligncenter">

### preprocessor

!![](https://www.growingwiththeweb.com/images/2014/03/17/preprocessors.png)
#### [less/scss/styl code] -> css


变量, 嵌套, 复用 (function, include, mixin)

:::note
不是新鲜的东西
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
CSS工作组）认识到庞大整体式的“版本”一点也不好。很难维护，并且开发缓慢。
新特性:level1
旧特性: level4
:::

<slide :class="size-60 aligncenter">

### 动态性
---

- [css variables](https://caniuse.com/#feat=css-variables)
- 相对单位 em rem,
- viewport: vh, vw, vmin, vmax
- [calc(100% - 2em)](https://codepen.io/houfeng0923/pen/dBPwJR)
- media query



:::note
利用 vw vh的 响应式 ui, font (https://www.w3cplus.com/css/simplify-your-stylesheets-with-the-magical-css-viewport-units.html)

calc : 减少嵌套; 左列固定,右列填充
:::

<slide :class="size-60 aligncenter">

### 特性查询

---

- [can i use](https://caniuse.com/)
- [cssdb](https://cssdb.org/)
- [Modernizr](https://www.cnblogs.com/coco1s/p/6478389.html)
- @support



:::note
can i use cli
modernizr 不严谨

:::
<slide :class="size-60 aligncenter">

### api
---

- CSSOM -> TypeOM
- CSS Hodini



<slide :class="size-60 aligncenter">

### 扩展应用场景
---

- weex
- wxss


:::note
- 看法
:::




<slide :class="size-60 aligncenter">

## CSS 与前端工程化


<!-- <slide :class="size-60 aligncenter"> -->
<!--
### 前后端分离

- 分工
- 分离(关注点: 复杂业务逻辑,复杂交互逻辑; 后: 高并发, 稳定性,伸缩性) -->


<slide :class="size-60 aligncenter">

### 工程化

- 预处理
- 打包工具
- css in js
- 维护性


<slide :class="size-60 aligncenter">

## 可维护 CSS

- rest/normalize.css
- lint
- 顺序
- css 骨架 (DPL)

:::note
容易形成祖传代码

:::

<slide :class="size-60 aligncenter">

### 维护性原则

- 合理性
- 兼容性
- 维护成本
- 性能


<slide :class="size-60 aligncenter">

## End

- 如何学习和资料

- online

    - https://codesandbox.io/?from-app=1
    - https://codepen.io/

- dev tool (发现新世界)

- 技术情怀
    - 偏执
    - 耐心
    - 有所追求
    - on the road


<pre>
.houfeng {
    position: nextop;
    content: 'thinking in css';
    role: 'frontend';
    desc: '';
}</pre> {.text-intro}






