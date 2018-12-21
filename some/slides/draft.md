前端技术漫谈
====




## outline

- web 开发模式的进化及前端技术的演进 (10%)
  - 纵向:传统到现代
  - 模块化及标准
  - node 及前端工程化
- mvvm 与 vdom  (70%)
    - 组件化
- 其他 10
- 浏览器们(optional)




### web 前端技术演进

* 传统
内容展示
prototype.js jquery.js
easyui, yui, dojo, ext (**ui)
服务端渲染 + RIA( ext, gwt..) ,


* 现代
web2.0 从内容到服务, 客户端需求越来越重,复杂,用户体验要求越来越高,
刚需: 客户端渲染
不得不面对应用架构分层, 多端浏览器, 跨终端的需求

移动 h5 : hybrid Web

对软件质量,开发效率的要求: 各种新语言\新工具\框架

对组织机构的影响,基础平台部门的退化, 自研一站式解决方案退出
得益于 web 开源的生态系统 (npm, 大厂商\社区\大 V 推动的技术革新)




- dom 时代

- ui 组件


- mvc

- mvvm (knockout)

以 html 为中心,
命令式->声明式的转变
比对例子:(https://leeluolee.github.io/fequan-netease/#/24)

- vdom

以 js 为中心, (https://speakerdeck.com/dexteryy/understanding-modern-web-development-at-jsconf-china-2017-zhong-wen?slide=108)
面向组件

OOP 到 FP
(https://speakerdeck.com/dexteryy/understanding-modern-web-development-at-jsconf-china-2017-zhong-wen?slide=111)

单向数据流:(two way binding -> one way data-flow)
(https://speakerdeck.com/dexteryy/understanding-modern-web-development-at-jsconf-china-2017-zhong-wen?slide=112)



模式与 反模式


分离关注点 组件化之路



 ## vue

 [!双向绑定机制](https://s3.amazonaws.com/media-p.slid.es/uploads/41728/images/2448735/data.png)
 (https://cn.vuejs.org/images/data.png)

 UI = VM(state)  ?

 ## react

 UI = f(state)

precondition:

    1. dom 操作成本高
    2. js 足够快


 ## 组件化

 - 组件化之路
 - 组件间数据传递和消息通信
