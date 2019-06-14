

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




<slide :class="size-80 aligncenter">


###  Theme


<slide :class="size-80 aligncenter">


#### css 优先级
---


##### 利用 css 优先级, 新主题颜色覆盖旧主题颜色


- 静态  (theme-default.css + theme-white.css)
- 动态

---

[demo with prefers-color-scheme](https://codepen.io/houfeng0923/pen/bPNOVM?&editable=true){.button}

:::note
elementui 暴力替换
react + css in js
:::


<slide :class="size-80 aligncenter">

#### css variable

----

```
:root {
  /* global variables */
  --font-color: #333;
  --background-color: #fff;
}
body {
  color: var(--font-color);
  background-color: var(--background-color);
}
// change theme white
// document.documentElement.style.setProperty('--font-color', '#fff');
// document.documentElement.style.setProperty('--background-color', '#333');
```


[demo](https://codepen.io/danhearn/full/QpPjrK){.button}

<slide :class="size-80 aligncenter">

#### filter

适用面窄

https://habr.com/en/company/yandex/blog/450032/

```
filter: invert(100) hue-rotate(180deg)
```




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










<slide :class="size-60 aligncenter">

## CSS 与前端工程化

:::note
web 技术发展与工程化需求
分工: (切图到设计, )
css 如何融入
:::

<!-- <slide :class="size-60 aligncenter"> -->

:::note
### 前后端分离

- 分工
- 分离(关注点: 复杂业务逻辑,复杂交互逻辑; 后: 高并发, 稳定性,伸缩性)
:::

<slide :class="size-60 aligncenter">

### 工程化

- 预处理
- 打包工具
- css in js
- 维护性

