name: inverse

layout: true
class: center, middle, inverse
---
template: inverse
# 前端框架漫谈

.footnote[--- 前端那些事儿]

.hide[
    主题有点宽, 有些内容,特别是后面组件化和 mvc 相关内容, 按照个人的理解尝试去将一些内容,
    表述不完整或不清楚的话,欢迎大家提出来
]
---
template: inverse
## WEB 产品形态变化

.footnote[--- 前端开发模式的变化]
---
<!-- layout: false -->
.left-column[
  ### StaticPage
]
.right-column[
  **HTML + CSS + Script**

- JSP / JSTL / FreeMarker / Servlet / ...

- script: form validate / effect

- ActiveX / Flash / Applet
]
---
.left-column[
  ### StaticPage
  ### InteractivePage
]
.right-column[
  **DOM + AJAX**

- prototype.js / jQuery / ...

- UI libs: YUI / EasyUI / dojo / Extjs

- Flex / GWT

- Bootstrap

]
---
.left-column[
  ### StaticPage
  ### InteractivePage
]
.right-column[
  **DOM + AJAX**

- prototype.js / jQuery / ...

- UI libs: YUI / EasyUI / dojo / Extjs

- Flex / GWT

- Bootstrap

开发模式:

- 分工: 关注交互实现
- 浏览器兼容性 与 渐进增强

]
---
.left-column[
  ### StaticPage
  ### InteractivePage
  ### WebApplication
]
.right-column[
**HTML5 + CSS3 + Modern JavaScript + Node.js**

拓展 web 边界:

- [WebAPI](https://developer.mozilla.org/en-US/docs/WebAPI): Hardware / Devices / Media / Streaming / File / indexedDB / WebGL / ...

- HybridApp / PWA / RN ...

]
---
.left-column[
  ### StaticPage
  ### InteractivePage
  ### WebApplication
]
.right-column[
**HTML5 + CSS3 + Modern JavaScript + Node.js**

拓展 web 边界:

- [WebAPI](https://developer.mozilla.org/en-US/docs/WebAPI): Hardware / Devices / Media / Streaming / File / indexedDB / WebGL / ...

- HybridApp / PWA / RN ...

变革开发模式:

- Node.js : bower -> npm

- Module Standard : AMD / CMD / CommonJS / ES6 Module

- ES2015 / ES2016 / ... (babel)

- Compile to JS : CoffeeScript / TypeScript

- CSS3 / (LESS / SASS / Stylus) / PostCSS / ...

- Grunt / Gulp / webpack / rollup ...

- ServerRendering

新的问题

.hide[
回归到代码组织问题:
- 逻辑解耦
关注点分离
]

]
---
template: inverse

## 组件化 与 mv✨
---
.left-column[
  ## 组件
  #### 组件?
]
---
.left-column[
  ## 组件
  #### 组件?
]
.right-column[

#### 页面内独立的可见,可交互的区域 - UI 组件


]
---
.left-column[
  ## 组件
  #### 组件?
]
.right-column[
#### 页面内独立的可见,可交互的区域 - UI 组件

页面 ≈ 组件的组合

.text-center[<img src="https://ws3.sinaimg.cn/large/006tNbRwly1fye10m2zvgj306t0a7wee.jpg?mix" width="250px">]
]
---
.left-column[
  ## 组件
  #### 组件?
  #### 组件化开发
]
.right-column[

组件资源管理

工程结构: 组件单目录组织


<img src="https://ws3.sinaimg.cn/large/006tNbRwly1fye13vo9zfj30dq0an74y.jpg?mix" width="500px">

]
---
.left-column[
  ## 组件
  #### 组件?
  #### 组件化开发
]
.right-column[

组件资源管理

工程结构: 组件单目录组织


<img src="https://ws3.sinaimg.cn/large/006tNbRwly1fye13vo9zfj30dq0an74y.jpg?mix" width="300px">


组件化开发

- 组件状态更新*
- 组件逻辑复用
- 组件间通信
- 应用状态管理

.hide[
    大概最多只会介绍到 mv* 框架 在组件状态更新方面的变化,其他后续介绍
]
]
---
template: inverse
## mv✨
---
.left-column[
  ## mv*
  ### Backbone.js

]
.right-column[

<img src="https://www.css88.com/doc/backbone/docs/images/backbone.png" width="250px">

<img src="http://www.cloudesign.com/images/bb.jpg?mix" width="600px">

]
---
.left-column[
  ## mv*
  ### Backbone.js

]
.right-column[

<img src="https://www.css88.com/doc/backbone/docs/images/backbone.png" width="250px">

<img src="http://www.cloudesign.com/images/bb.jpg?mix" width="600px">

- 静态模板 + 手动数据绑定
]
---
background-image: url(https://knockoutjs.com/img/main-background.jpg)
.left-column[
  ## mv*
  ### Backbone.js
  ### Knockout

]
.right-column[

<img src="https://knockoutjs.com/img/ko-logo.png" width="250px">

<img src="https://ws2.sinaimg.cn/large/006tNbRwly1fydk4955ucj30hw0cf76m.jpg" width="500px">

- 最早的 mvvm/**MDD** 方案
- observable / computed
- based on dom

]
---
.left-column[
  ## mv*
  ### Backbone.js
  ### Knockout
  ### angularjs

]
.right-column[

<img src="https://angularjs.org/img/AngularJS-large.png" width="250px"/>

#### two way data binding

<img src="https://angularjsbrain.files.wordpress.com/2014/11/2.png?mix" width="600px">

]
---
.left-column[
  ## mv*
  ### Backbone.js
  ### Knockout
  ### angularjs

]
.right-column[

<img src="https://angularjs.org/img/AngularJS-large.png" width="250px"/>

#### two way data binding

<img src="https://angularjsbrain.files.wordpress.com/2014/11/2.png?mix" width="600px">


- mv?
- DI 及 大量的框架捏概念
- 组件概念不强
- plain object 与 dirty check 性能
- 框架方案不够完备
- 开发体验

]
---
.left-column[
  ## mv*
  ### Backbone.js
  ### Knockout
  ### angularjs
  ### Angular

]
.right-column[

<img src="https://www.angular.cn/assets/images/logos/angular/angular.svg" width="100px">

- 一站式解决方案!

- TypeScript / Dart

- rxjs

- 性能优化 (编译/CD)

]
---
.left-column[
  ## mv*
  ### Backbone.js
  ### Knockout
  ### angularjs
  ### Angular
  ### emberjs

]
.right-column[

<img src="https://spin.atomicobject.com/wp-content/uploads/20160223191852/ember_Ember-Light.png" width="200px">


<img src="https://emberigniter.com/images/5-essential-concepts/highlevel.png?mix" width="500px">

```
firstName: 'hou',
lastName: 'boyuan',
fullName: computed('firstName', 'lastName', function() {
  return `${this.get('firstName')} ${this.get('lastName')}`;
});
```

.hide[
Routes / Controllers / Components(+ handlebars templates) / Services / Models(observable ember object)
]

- inject
- observable object / computed properties
- Data Down, Action Up

]
---
background-image: linear-gradient(to right bottom, #01c180, #cdf1e4)

.left-column[
  ## mv*
  ### Backbone.js
  ### Knockout
  ### angularjs
  ### Angular
  ### emberjs
  ### Vue

]
.right-column[

<img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" width="80px">

<img src="https://v1.vuejs.org/images/data.png?mix" width="500px">

```
{
    data: {
        firstName: 'hou',
        lastName: 'boyuan',
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
}
```

]
---
background-image: linear-gradient(to right bottom, #01c180, #cdf1e4)

.left-column[
  ## mv*
  ### Backbone.js
  ### Knockout
  ### angularjs
  ### Angular
  ### emberjs
  ### Vue

]
.right-column[

<img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" width="80px">

<img src="https://v1.vuejs.org/images/data.png?mix" width="500px">


- mvvm 渐进式开发框架
- dependencies / computed
- 性能表现优秀

.footnote[[举个栗子](https://codesandbox.io/s/nrmx18z454)]

]
---
background-image: linear-gradient(to left top, #324553, #9fe4dc)

.left-column[
  ## mv*
  ### Backbone.js
  ### Knockout
  ### angularjs
  ### Angular
  ### emberjs
  ### Vue
  ### React
]
.right-column[

<img src="https://wix.github.io/react-templates/img/logo-rt.svg" width="200px">

#.text-center[UI = f(state)]

```
function ClockView(props) {
  const { hour, minute, second } = props.time;
  return (
      <span>{hour}:{minute}:{second}</span>
  )
}
```

]
---
background-image: linear-gradient(to left top, #324553, #9fe4dc)

.left-column[
  ## mv*
  ### Backbone.js
  ### Knockout
  ### angularjs
  ### Angular
  ### emberjs
  ### Vue
  ### React
]
.right-column[

<img src="https://wix.github.io/react-templates/img/logo-rt.svg" width="200px">

#.text-center[UI = f(state)]

- vdom

    - dom 操作很慢
    - js 很快

- js 为中心 ,  JSX

- state manage : redux

    - one way workflow
    - pure function & immutable


.footnote[[举个栗子](https://codesandbox.io/s/zo4zorz1x)]


]
---
template: inverse

# 选谁呢 🤔

---

## 方案选型的几个考虑因素

- 框架性能

    - 业务需求程度, 并非决定性因素
    - 基准测试 与 实际表现

- 生态

- 过渡成本

- 灵活度\生态\开发体验

.text-center.footnote[
[前端框架技术选型 issue](http://houfeng0923.github.io/coding/framework/readme.md)
]



.hide[
balance :自由度, 灵活性
why not ember ?
ng: 大团队协同开发复杂业务系统, 个人效率换团队效率.
]
---
template: inverse

## 就到这里了