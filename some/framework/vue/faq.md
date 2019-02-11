

## question


### Object.defineProperty  vs Proxy

defineProperty 副作用: 初始化组件树需要对状态数据 不断递归 进行包装和建立监听,初始化耗费更多成本.

而 proxy 是 lazy 的!


###  v-if

vdom 版本 dom 树 存在 comment ？ 非vdom版本 则没有?

### v-model vs  .sync

The differences I can see are:

* the default prop name
* **.sync allows you to use multiple props**
* the event name you emit from your component


[.sync vs v-model](https://forum.vuejs.org/t/sync-vs-v-model/19380)

### props 自动更新

子组件接收父组件传入的 props, 如果通过 computed 属性关联, 子组件会同步父组件对应 prop 的变更; 如果是通过 data 关联, 属于初始化一次性赋值, 不会同步父组件变更 (只能使用 watch 了);

[demo (HelloWorld.vue)](https://codesandbox.io/s/ppm67jql0q)


### replace

vue2.0 中去掉了
`replace: false`
这个参数，原因是 vue2.0 采用了 virtual dom，而其设计的数据结构需要唯一的根节点。

[Vue 2.0 解读之 用 render 实现 replace: false](https://tech.ethercap.com/article/7)

### vdom

- 做渲染引擎代码量更少,降低复杂度; 性能更好(?), 跨平台
- 依赖收集耗内存; vdom diff 耗cpu; 移动场景下,内存对性能和体验的重要性更高
- vue 依赖收集,结合 vdom, 可以自动避免无效 diff;

更多可以了解下:[Virtual DOM 背后的秘密（Diff 篇）](https://zhuanlan.zhihu.com/p/36500459)
以及 [Announcing Vue.js 2.0](https://zhuanlan.zhihu.com/p/20814761)



### scoped 子组件的根元素

[Scoped CSS | Vue Loader](https://vue-loader.vuejs.org/zh/guide/scoped-css.html#%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84%E6%A0%B9%E5%85%83%E7%B4%A0)