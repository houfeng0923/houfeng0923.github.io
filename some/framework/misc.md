

精确定位到状态的变更.

```
react: diff dom，但是不 diff 数据
vue: diff 数据（其实不能叫 diff，而是通过对更改的劫持，自动获得了 diff），也 diff dom（其实可以不 diff，它这个机制，其实用不到 vdom）
angular: diff 数据，但是不 diff dom
cycle: diff dom，但不 diff 数据

```


思考下 哪一个框架才是" 避免引入一大堆额外成本,然后进一步优化 "呢


## refs

- [支付宝前端应用架构的发展和选择 · Issue #6 · sorrycc/blog](https://github.com/sorrycc/blog/issues/6)
- [所谓的 Virtual DOM 到底是什么？](https://zhuanlan.zhihu.com/p/37391628)