## react upgrade

> from 15.4.2 -> 16.2.0

- async render (React Fibor!!!)

	[demo](https://build-mbfootjxoo.now.sh/)

- ErrorBoundary  componentDidCatch

	https://zhuanlan.zhihu.com/p/29708121

- render 支持返回 数组 字符串 fragement

- portals (虫洞)

	- v16前版本实现逻辑：https://segmentfault.com/a/1190000003821401
	- [react-modal](https://github.com/reactjs/react-modal/blob/master/src/components/Modal.js)
	> for ng2 : CDK Portals


- `prop-types`



 ### Fiber

 **初衷**: 不希望 js 不受控制地长时间执行 (影响交互,动画等).

 Fiber 之前的 reconciler（被称为**Stack reconciler**）自顶向下的递归 mount/update，无法中断（持续占用主线程），这样主线程上的布局、动画等周期性任务以及交互响应就无法立即得到处理，影响体验.


 **策略**: 增量渲染(合作式调度,操作系统多任务的 3 种调度策略之一), 将渲染任务拆分,每次制作一小段,之后交换控制权给调度器.(firefox 对真实 dom 也应用了该技术)

渲染/更新过程（递归 diff）拆分成一系列小任务，每次检查树上的一小部分，做完看是否还有时间继续下一个任务，有的话继续，没有的话把自己挂起，主线程不忙的时候(`requestIdleCallback`)再继续.

vdom tree -> fiber tree (workInProgress tree , effect list)

**构建 workInProgress tree 的过程就是 diff 的过程**.通过 requestIdleCallback 来调度执行一组任务，每完成一个任务后回来看看有没有插队的（更紧急的），每完成一组任务，把时间控制权交还给主线程，直到下一次 requestIdleCallback 回调再继续构建 workInProgress tree.


React Fiber 把**更新过程碎片化**，执行过程如下面的图所示，每执行完一段更新过程，就把控制权交还给 React 负责任务协调的模块，看看有没有**其他紧急任务**要做，如果没有就继续去更新，如果有紧急任务，那就去做紧急任务。

从 Stack reconciler 到 Fiber reconciler，源码层面就是干了一件递归改循环的事情.

**维护每一个分片的数据结构，就是 Fiber**

有分片后的更新极有可能被打断(取消), React Fiber 的一个更新过程分为两个阶段:
- Reconciliation Phase (diff;可打断)
- Commit Phase (dom 操作)

第一阶段:
构建 workInProgress tree

生命周期函数:(low 优先级)
componentWillMount
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render


这导致: 第一阶段中的生命周期函数在一次加载和更新过程中可能会被多次调用！


第二件阶段:

处理 effect list (更新 dom)

及生命周期函数:

componentDidMount
componentDidUpdate
componentWillUnmount


关于优先级:

synchronous
task
animation
high
low
offscreen



refs:

- [浅谈React16框架 - Fiber](https://zhuanlan.zhihu.com/p/43394081)
- [完全理解 Fiber](http://www.ayqy.net/blog/dive-into-react-fiber/)
- [Deep In React之浅谈 React Fiber 架构](https://mp.weixin.qq.com/s?__biz=MzI1ODk2Mjk0Nw==&mid=2247484469&idx=1&sn=f68d044f1b0e4e2eb981e3878427b75b&scene=21#wechat_redirect)
- [requestIdleCallback 当浏览器处于闲置状态时，调度工作的新的性能相关的 API](https://github.com/justjavac/the-front-end-knowledge-you-may-not-know/issues/9)
- [利用好浏览器的空闲时间 --- requestIdleCallback](https://www.cnblogs.com/Wayou/p/requestIdleCallback.html)

### 3rd

- react-router


	涉及到 react-router / react-router-redux / react-router-transition

	- https://github.com/YutHelloWorld/Blog/issues/4
	- https://github.com/YutHelloWorld/Blog/issues/5

	- v4 遵循 Just Component 的 API  设计理念 。👍
	- 取消了v3 集中配置的方式


	- async route loader 实现起来比v3要方便很多了，具体可参考[3rd.md](./3rd.md)，
	- 另外，对于async route + redux，还要配合完成异步注册 reducer 到 global store。

	- replace 方案有没有(类似 ember)？可以用纯组件解决，即改变当前route下的component





###

- https://reactjs.org/blog/2017/09/26/react-v16.0.html
- https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html
- [](https://zhuanlan.zhihu.com/p/29709314)
- [](https://www.zhihu.com/question/65920482)



> to 16.3

[!png](https://cdn.ruguoapp.com/571ad919d63d645a43ffb3e95d33118c?imageView2/0/h/2000/interlace/1)

## Context api

API 解决了什么问题?

- 和组件 props 相比，新旧的 Context API 和 Redux 都解决了 props 存在的“只要是子组件需要的信息，即使父组件不需要，也必须先传给父组件然后一层层传到子组件”的问题
- 和 Redux 相比，新旧的 Context API 都解决了 Redux 存在的“一些信息的内容需要根据组件的包含关系决定，而 Redux 难以处理这类包含关系”的问题
- 和旧的 Context API 相比，新 API 解决了旧 API 无法处理“两个互相嵌套的组件提供的两个 Context 中，key 相同的部分会冲突”的问题



- 组件化 Context

	- 解决组件优化 shouldComponentUpdate 导致的 子组件未重新render
	- context属性不会被子context覆盖

	如何解决子组件未重新render?
		应该是通过Provider/Customer 组件 render

- 生命周期调整

	static getDerivedStateFromProps() // 替代 constructor/componentWillReceiveProps setState()
	: 一般只在父组件传入props时会被调用

	more: https://github.com/reactjs/rfcs/blob/master/text/0006-static-lifecycle-methods.md

- StrictMode

- AsyncMode  // React.unstable_AsyncMode

- React.createRef / React.forwardRef

	(exposing dom refs to parent component)
	https://reactjs.org/docs/refs-and-the-dom.html

	HOC




## about setState

> 如果是由React引发的事件处理（比如通过onClick引发的事件处理），调用setState不会同步更新this.state; 除此之外的setState调用会同步执行this.state.

 ???

 > getDerivedStateFromProps 在 组件及子组件 setState 时 被调用
	祸根： react-css-modules， 原因待查明

 >
