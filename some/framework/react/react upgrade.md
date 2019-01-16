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



 ### [完全理解 Fiber](http://www.ayqy.net/blog/dive-into-react-fiber/)

React Fiber把更新过程碎片化，执行过程如下面的图所示，每执行完一段更新过程，就把控制权交还给React负责任务协调的模块，看看有没有其他紧急任务要做，如果没有就继续去更新，如果有紧急任务，那就去做紧急任务。
**维护每一个分片的数据结构，就是Fiber**

有分片后的更新极有可能被打断(取消), React Fiber 的一个更新过程分为两个阶段:
- Reconciliation Phase (diff;可打断)
- Commit Phase (dom 操作)

第一阶段生命周期函数:
componentWillMount
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render



这导致: 第一阶段中的生命周期函数在一次加载和更新过程中可能会被多次调用！



refs:

- [浅谈React16框架 - Fiber](https://zhuanlan.zhihu.com/p/43394081)

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

API解决了什么问题?

- 和组件props相比，新旧的Context API和Redux都解决了props存在的“只要是子组件需要的信息，即使父组件不需要，也必须先传给父组件然后一层层传到子组件”的问题
- 和Redux相比，新旧的Context API都解决了Redux存在的“一些信息的内容需要根据组件的包含关系决定，而Redux难以处理这类包含关系”的问题
- 和旧的Context API相比，新API解决了旧API无法处理“两个互相嵌套的组件提供的两个Context中，key相同的部分会冲突”的问题



- 组件化Context

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
