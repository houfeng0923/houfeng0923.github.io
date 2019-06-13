

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
