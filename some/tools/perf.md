# perf



## some

### react:不是快，而是为什么不慢

- render vdom + diff > render template ; but minifiy dom operation.

#### dom operation  为什么慢？

- dom对象属于重型对象（1，2，3，4）：继承链深（6 7层），属性多（70+），访问属性追溯原型链耗时。
- dom操作对于js实际上是外部函数调用。dom操作耗时在：建立上下文，层层检查。（改变DOM 结构的调用都有极其高的API Overhead.） 把DOM和JavaScript各自想象成一个岛屿，它们之间用收费桥梁连接。
- dom操作会触发浏览器reflow/repaint

> 浏览器通常会把js和DOM分开来分别独立实现。
> 举个栗子冷知识，在IE中，js的实现名为JScript，位于jscript.dll文件中；DOM的实现则存在另一个库中，名为mshtml.dll（Trident）。
> Chrome中的DOM实现为webkit中的webCore，但js引擎是Google自己研发的V8。
> Firefox中的js引擎是SpiderMonkey，渲染引擎（DOM）则是Gecko。


对于overhead高的api，标准解决方案🈶两个：

- Batching && diff

- [为什么说DOM操作很慢](https://leozdgao.me/why-dom-slow/)
- [框架与原生dom操作性能比较（有误。多版本比较，raw还是理论上最快的）](http://chrisharrington.github.io/demos/performance/)
- []()
- [知乎：网上都说操作真实 DOM 慢，但测试结果却比 React 更快，为什么(精)](https://www.zhihu.com/question/31809713)

	-
	- vdom和dom比较 （React.js 和你的算法最后都是把特定的意图翻译成一组DOM操作，差别只是谁的翻译更加优化而已）


很多初学者会被框架绑架一种认知：错误的认为框架运行地更快。其实框架是性能和维护性的取舍产物，更多的是从人和团队的角度平衡协作、效率和质量。这就决定了框架不可能做到各个场景下性能最优，它提供的实际应用大多数场景下的性能较优方案。当然你可以手动维护dom并持续优化，可以在特定场景下超越框架的性能，但成果不具备适普性。


## v8


## chrome dev tool






## references


- [为何浏览器控制台的JavaScript引擎性能这么差？](https://www.zhihu.com/question/29352114/answer/44050599)
- [精读《JavaScript 开销》](https://zhuanlan.zhihu.com/p/33761893)
- [react perf](./react.md)
- [js perf](../js/perf.md)
