
##v8 编译优化

- https://www.html5rocks.com/en/tutorials/speed/v8/
- [为V8优化JavaScript](http://www.jianshu.com/p/bbdaf86fcd57#)
- [JIT与GC优化](https://www.kancloud.cn/kancloud/web_performance_optimization/80993)
- [JavaScript工作机制：V8 引擎内部机制及如何编写优化代码的5个诀窍](http://www.zcfy.cc/article/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-4033.html?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)


总结：


充分利用 Hidden Class：不要动态添加属性、一次性初始化数组、预定义变量类型（初始值）

- hidden class
- 内联缓存

so: 优化建议：

- 始终以相同的顺序初始化对象属性，以便共享隐藏类和内联缓存
- 尽量避免动态属性
- 数值：避免产生稀疏数组，删除元素
- 数值控制在 31 位有效表示，避免 v8 的 装箱 转换为 double


v5.9 版本是个分水岭： full-codeget（简单编译器） 和 Crankshaft(JIT 优化编译器)  -> Ignition（解释器） 和 TurboFan(优化编译器)


## web worker

- [Examining Web Worker Performance &middot; loxodrome.io - James Milner&#39;s personal blog](https://www.loxodrome.io/post/web-worker-performance/)
- [Performance issue of using massive transferable objects in Web Worker](https://joji.me/en-us/blog/performance-issue-of-using-massive-transferable-objects-in-web-worker/) (方法可能有点问题)

理论上应该还是 transferable 效率高点


libs:
- [GoogleChromeLabs/comlink](https://github.com/GoogleChromeLabs/comlink)
- [nolanlawson/promise-worker](https://github.com/nolanlawson/promise-worker)

## reference
- [WebAssembly](https://www.zhihu.com/question/31415286/answer/58022648)