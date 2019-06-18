

## i18n 动态加载方案


- [基于后编译的国际化解决方案 - 掘金](https://juejin.im/post/5b47148c518825196b01ca3a)


## style

- [风格指南 — Vue.js](https://cn.vuejs.org/v2/style-guide/#%E6%A8%A1%E6%9D%BF%E4%B8%AD%E7%9A%84%E7%BB%84%E4%BB%B6%E5%90%8D%E5%A4%A7%E5%B0%8F%E5%86%99-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)


## functional

[whats-the-deal-with-functional-components-in-vue-js](https://itnext.io/whats-the-deal-with-functional-components-in-vue-js-513a31eb72b0)

### 何时使用?



## slot (>=vue2.6)

现象:
```
// App.vue
<template>
<Container>
    <Item slot="on"/> // 后续分析,推荐:<template v-slot:on><Item/></template>
</Container>
</template>
```
上例, App.vue update, 即便 Container props 无变化,同样会触发 Container 的 update;
原因是 slot 的存在,需要 update Item 组件. (如无 slot,组件不会 update, render, 不会耗费任何成本)

**slot 场景, 此时 Container 内部组件并不会触发 update**
**Container 内部如果存在 functional 组件, 触发 re-render; 非 functional 组件,不会 re-render**

所以, vue 只 update 变动的部分(组件,或 受到 slot 影响的组件);  re-render 范围也尽量最小化.



同时, 参考 [Vue 2.6 发布了](https://zhuanlan.zhihu.com/p/56260917) 关于 slot 的性能优化:

- 2.6 之前,普通 slot 受到父组件更新的影响, 导致子组件更新. (目前看, slot 无论是否有依赖变更,都会收到父组件更新影响).**使用新的 v-slot 语法的 slot 都会被编译为 scoped slot。这意味着所有使用新语法的 slot 代码都会获得上述的性能优化；**

所以, 推荐更新使用 **v-slot** 语法获取更好的性能!

- scoped slot 只会在插槽子组件依赖更新时 更新, 而与父组件更新与否无关(除非 slot 依赖了所在父组件的 data). (合理)
 同时,scoped slot 依赖如果来源于所在组件, 组件树的更新渲染会从所在组件开始.即便所在组件与子组件之间的所有组件未依赖变更项(有无进一步优化的可能?)
- 2.6.10 版本 问题: 如果 slot 内 v-bind="this", 则无法体现性能优化;需要降级为 v-bind:xx="xx" ;(继续跟踪是否是 bug)

对于下面形式,暂时还得需要通过 template 包装 子元素才行.(等待  vue 升级优化)
```
<Container>
    <template v-slot>
    <Item/>
    <Item/>
    <Item/>
    </template>
</Container>
```
> vue demo : https://codesandbox.io/s/01q8qvr7k0
> 对比 react 渲染: https://codesandbox.io/s/qlqo1q49q9



## abstract component

 通过添加 abstract: true 可以把一个组件抽象化，这样组件是无法渲染其自身，而只会挂在内部的装载组件。但这样做之后，会导致外部容器无法通过 ref 属性查找到它，更无法获取到装载组件，因此也以失败告终。

 常用于   hoc 组件



## vue cli

default devtool: eval ?

    update to sourcemap ?

toggle.vue?xxxxx  多个映射文件来源 (vue-loader?  hot reload?)

webpack-internal:// ?