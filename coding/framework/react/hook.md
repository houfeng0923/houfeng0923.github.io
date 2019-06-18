
## Hooks的使用有两个原则：

- 不要在循环，条件判断，函数嵌套中使用 hooks
- 只能在函数组件中使用 hooks

> 保证组件内 hook 调用顺序(内部实现与有序数组相关)

## useState  等 hooks 理解

先理解下这篇文章和相关资料 [react hooks进阶与原理](https://zhuanlan.zhihu.com/p/51356920)

useState() {
    ....
    dispatcher = ReactCurrentDispatcher.current
    dispatcher.useState()
    ....
}

简化理解:

react 为每个组件实例维护一个 hooks 数组









## ref

- [useEffect 完整指南](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)
- [9102，作为前端必须知道 hook 怎么玩了 - 掘金](https://juejin.im/post/5d00a67cf265da1b8a4f156f)