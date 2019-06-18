

## question


### Object.defineProperty  vs Proxy

defineProperty 副作用: 初始化组件树需要对状态数据 不断递归 进行包装和建立监听,初始化耗费更多成本.

而 proxy 是 lazy 的!


###  v-if

vdom 版本 dom 树 存在 comment ？ 非 vdom 版本 则没有?

### v-model vs  .sync

The differences I can see are:

* the default prop name
* **.sync allows you to use multiple props**
* the event name you emit from your component

child component has `update:xxx' event;

[.sync vs v-model](https://forum.vuejs.org/t/sync-vs-v-model/19380)

### props 自动更新

子组件接收父组件传入的 props, 如果通过 computed 属性关联, 子组件会同步父组件对应 prop 的变更; 如果是通过 data 关联, 属于初始化一次性赋值, 不会同步父组件变更 (只能使用 watch 了);

[demo (HelloWorld.vue)](https://codesandbox.io/s/ppm67jql0q)


### replace

vue2.0 中去掉了
`replace: false`
这个参数，原因是 vue2.0 采用了 virtual dom，而其设计的数据结构需要唯一的根节点。

app = new Vue().$mount(); app.$el;
// 注意: 通过 $el 再插入 dom 树, 此时 组件 mounted 钩子调用,但组件 dom 还未插入 dom 树.
// 对于需要在 mounted 中获取 dom 并计算样式或尺寸的功能会有影响.

[Vue 2.0 解读之 用 render 实现 replace: false](https://tech.ethercap.com/article/7)

### vdom

- 做渲染引擎代码量更少,降低复杂度; 性能更好(?), 跨平台
- 依赖收集耗内存; vdom diff 耗 cpu; 移动场景下,内存对性能和体验的重要性更高
- vue 依赖收集,结合 vdom, 可以自动避免无效 diff;

更多可以了解下:[Virtual DOM 背后的秘密（Diff 篇）](https://zhuanlan.zhihu.com/p/36500459)
以及 [Announcing Vue.js 2.0](https://zhuanlan.zhihu.com/p/20814761)

[Why is Vue.js using a VDOM?](https://stackoverflow.com/questions/44238139/why-is-vue-js-using-a-vdom)



### scoped 子组件的根元素

[Scoped CSS | Vue Loader](https://vue-loader.vuejs.org/zh/guide/scoped-css.html#%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84%E6%A0%B9%E5%85%83%E7%B4%A0)

### $nextTick()

use mircoTask

[2.6 Internal Change: Reverting nextTick to Always Use Microtask](https://gist.github.com/yyx990803/d1a0eaac052654f93a1ccaab072076dd)

[Vue nextTick 机制](https://github.com/muwoo/blogs/issues/13)
[从JS事件循环(Event Loop)机制到vue.nextTick的实现 - 掘金](https://juejin.im/post/5a631349f265da3e261c0d22)


### ts

[TypeScript 不适合在 vue 业务开发中使用吗？ - 知乎](https://www.zhihu.com/question/310485097)

api 未考虑 类型系统. (object based)
断层
Vue 一直很重视 “引入一个 script 就可以开始写” 这样的用例. 替代 jquery



### lifecycle order

```
parent created
child created
child mounted
parent mounted
```

[vue-parent-and-child-lifecycle-hooks](https://medium.com/@brockreece/vue-parent-and-child-lifecycle-hooks-5d6236bd561f)

**问题 1: 对于根元素包含 if 判断逻辑的组件, mounted 后,$el 为 comment 节点(也即是空) .**

可以在 $nextTick 后, 拿到 ref

**问题 2: 子组件在 mounted 后, 父组件还未 mounted,此时 document 上无法查找到组件 el**

正常情况下, child mounted() 时,dom 树已经存在 parent dom.

该情况属于编码问题: parent 在 create 是 创建的 prop 间接依赖了 dom!



### functional  component  : class/ style


[DOM class attribute not rendered properly with functional components · Issue #1014 · vuejs/vue-loader](https://github.com/vuejs/vue-loader/issues/1014)

`:style="[data.style, data.staticStyle]"`


### vue component name

1. 组件命名需要避免和 html 原生 标签名冲突..
2. 在 dom 中的模板, 只能使用 xxx-xxx (kebab-case)

> ps: vue2 后 通过引入 vdom, 模板解析不依赖 dom. 重名检测也区分大小写(html, svg不区分)

- [聊聊 Vue 组件命名那些事 - jingsam](https://jingsam.github.io/2016/10/30/vue-components-naming.html)
- [为什么推荐在单文件组件和字符串模板中组件名应该总是 PascalCase 的](https://cn.vuejs.org/v2/style-guide/#%E6%A8%A1%E6%9D%BF%E4%B8%AD%E7%9A%84%E7%BB%84%E4%BB%B6%E5%90%8D%E5%A4%A7%E5%B0%8F%E5%86%99-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)



### event

`<div @click.stop>`


### if computed props is dom?




### pass slot from parent to child

https://codepen.io/Kradek/pen/awGmjj?editors=1010
and upgrade version:

https://codepen.io/anon/pen/eapmMM?editors=1010

(can work in vue 2.6 use v-slot)

named scope:

https://jsfiddle.net/Loilo/7hycewrs/3/
https://jsfiddle.net/houfeng0923/woytap06/1/

