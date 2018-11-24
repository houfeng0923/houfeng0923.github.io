

精确定位到状态的变更.

```
react: diff dom，但是不 diff 数据
vue: diff 数据（其实不能叫 diff，而是通过对更改的劫持，自动获得了 diff），也 diff dom（其实可以不 diff，它这个机制，其实用不到 vdom）
angular: diff 数据，但是不 diff dom
cycle: diff dom，但不 diff 数据

```


## question



1 v-if : vdom 版本 dom树 存在 comment ？ 非vdom版本 则没有