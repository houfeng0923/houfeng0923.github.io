
### v-for :key

https://cn.vuejs.org/v2/guide/list.html#key

同一节点,不要和 v-if 同时服用

### Object.freeze()

https://cn.vuejs.org/v2/guide/instance.html#%E6%95%B0%E6%8D%AE%E4%B8%8E%E6%96%B9%E6%B3%95



### 留意 getter 的调用次数

- [Vue 性能优化之深挖数组 - 掘金](https://juejin.im/post/5c0dec8be51d451dac076f76)
> 问题:vue 内部是否 可以/会 优化getter array 的 依赖收集? (等待 proxy的版本)
> 组件 initData 时，深度遍历 props ，data ，所以 big array对性能有一定影响。

[Cookbook：优化 Vue 组件的运行时性能 - 掘金](https://juejin.im/post/5bf7ca2f6fb9a049a9795a88?from=groupmessage)

### vue2  set


- 用 Vue.set 添加对象属性，对象的所有属性(only 同级属性?)都会触发一次响应。
- 用 Vue.set 修改对象属性，只有当前修改的属性会触发一次响应。

[Vue.set 的副作用](https://zhuanlan.zhihu.com/p/106393759)

[demo test](https://codesandbox.io/s/vue-set-test-gfy6e)

### vue-i18n

大量函数调用 $t 的开销; 推荐 v-t ;
- [Performance optimization of vue-i18n](https://medium.com/@kazu_pon/performance-optimization-of-vue-i18n-83099eb45c2d)

无法使用指令的场景如何解决?

in vue, is flatten json better nested json ?


[Performance issues with big i18n files · Issue #165 · kazupon/vue-i18n](https://github.com/kazupon/vue-i18n/issues/165) , 并非由改原因导致的.(频繁 json 序列化导致)



### watch
```
// do
// from https://learn-vuejs.github.io/vue-patterns/patterns/#productivity-tips
watch: {
  searchText: {
    handler: 'fetchUserList',
    immediate: true,
  }
}
```


### computed

依赖如果是 方法调用（包含 getter）， computed 没有 缓存。


### array

```
arr = [];

this.$set(arr, 'length', 0); // dont  trigger update;
arr.splice(0); // trigger

arr.push(...[]); // trigger
```
