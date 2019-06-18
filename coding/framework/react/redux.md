

## react-redux

    <Provider> 组件通过context属性向后代<connect>组件提供（provide）store对象；
    <connect> 是一个高阶组件，作用是将store与view层组件连接起来（这里重复提一句，redux官方将<connect>直接连接的组件定义为container component），<connect>向开发者开放了几个回调函数钩子（mapStateToProps, mapDispatchToProps...）用于自定义注入container component的props的姿势；
    react-redux监听redux store的变更，store改变后通知每一个connect组件刷新自己和后代组件，为了减少不必要的刷新提升性能，connect实现了shouldComponentUpdate方法，如果props不变的话，不刷新connect包裹的container component；



  **react-redux 的 `connect` 方法，内部与 PureComponent 一样，通过 `shallowCompare` 对 props 做了比较。**

  - [reselect!!](https://github.com/reactjs/reselect)

    对于引用类型的 prop(Array/Object/Function/...), connect 要尽量避免重新赋值，reselect 是一个高效的方案!!!

  - [use immutablejs](http://redux.js.org/docs/recipes/UsingImmutableJS.html)

    and [maybe you should not use immutablejs](https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/)

    面对复杂的 reducer， 使用 es6,return 代码会过分冗余。`immutablejs` 可以缓解编码的痛苦（借助 Proxy 实现 es 元编程，内部实现 obj 的 immutable）。结合 redux 可以考虑`redux-box`?。

 - [hoc reducer](https://cn.redux.js.org/docs/recipes/ImplementingUndoHistory.html)

  - [dva! 后redux解决方案](https://github.com/dvajs/dva)

  - [支付宝前端应用架构的发展和选择 · Issue #6 · sorrycc/blog](https://github.com/sorrycc/blog/issues/6)

  - [Redux的副作用处理与No-Reducer开发模式!!](https://zhuanlan.zhihu.com/p/28796342)
    (项目结构,组件通信)

### 所有 reducers 都会执行一次

无差别攻击

### subscribe 发生在何种组件

Provider 根组件, redux 内部做了 state 一次比较优化

**渲染两次( why?!!)**

1, Dumb 组件内(render 前) dispatch action 并同步 更新了 state
2, Dumb 组件继续 render (旧 props) ??
3, Dumb 组件被再次 Render( 新 props).

梳理:

react component 在 render 前 通过 setState() 更新状态, 也被理解为 异步执行.
但这会中断本次 render, 最终只会执行一次 render().

而基于 redux 的 dispatch 方案, connectHOC 组件在 [componentDidMount](https://github.com/reduxjs/react-redux/blob/master/src/components/connectAdvanced.js#L148)后 ,才 subscribe store 变更事件,同时做一次比对并强制更新.

所以,才导致如上 步骤 2 和 3 的执行.


## 数据驱动 UI 几个需求场景探讨

1. 各种 pending 状态

邮箱场景: 收取邮件(局部 loading); 页面加载(全局 loading); 邮件正文加载(局部 loading).

    * 由于每个场景的 api 不会重叠, 三个场景对应三个 state 没有冲突.

**冲突场景: 同一个 api( 或参数不同), 在不同模块内调用,页面显示不同的 loading 状态 ?**

    统一 loading 状态, 由统一 actions 触发; 局部 loading 状态,由局部 actions 触发.(类同2:result 处理)

    > 应该这么理解, 不同的api代表了不同的 action!



感觉 dva loading 的方案还是不错, 通过单独的 key 维护异步状态, 对于不关心异步状态的组件, mapStateToProps 可以忽略 状态 state,这样还避免了状态信息记录在对应 state 中引发的重复 render 问题.



2. 各种 result 处理

同一个 api 响应,不同的处理逻辑: 定义不同的 action



3. **跨模块 dispatch**



4. **promise**

在 redux-thunk/promise 中, dispatch 异步 action 返回 promise, 模块内可以很直接地继续处理后续状态.
saga 并不能返回 promise. 组件模块内也只能通过新的 state 来应变.

考虑是否(需要)有相关方案?

    如果全局 state 维护了分支判定所需要的信息(譬如 login 成功跳转,失败提示), 组件内可以不必过于在意 异步 action 的返回.


社区方案相关:
- payload 记录特殊标记,识别后,返回 promise.
- saga 提供了一个[middleWare 方案](https://github.com/redux-saga/redux-saga/issues/697#issuecomment-269497247)
- [diegohaz/redux-saga-thunk](https://github.com/diegohaz/redux-saga-thunk)

5. **太多的 action**

一种方案是 `no reducer`,及弱化 reducer 职责,只接受 set/replace action, 具体操作 state 逻辑代码留给 saga 和 createAction 处理. (如此会失去状态跟踪和回溯的能力)

手动 action 定义 可以思考或使用 create-action 的思路

其他...


6. **如何组织业务逻辑**

Dumb 组件 作为 view 层, Smart 组件 承担一部分 controller 的职责.

saga?

reducers?


7. state 数据结构

可以考虑 redux 提供的 [State 范式化](https://cn.redux.js.org/docs/recipes/reducers/NormalizingStateShape.html) 技巧, 目的是提供清晰一致的 业务模型数据 及 高效的查询.


8. **domain computed props**

这个问题严重的话,会影响是否需要采用 redux.
目前方案是 在 mapStateToProps 中 依赖 reselect 的 cache 功能.但并不好维护的感觉.



### references

- [精读《重新思考 Redux》 - 掘金](https://juejin.im/post/5af8dff9f265da0b9f40616b)
- [[译] Redux 异步四兄弟 - 掘金](https://juejin.im/post/58c75f9444d90400699add86)
- [10-tips-for-better-redux-architecture](https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44)

- [有了GraphQL，你可以扔掉Redux了](https://mp.weixin.qq.com/s?__biz=MzUxMzcxMzE5Ng==&mid=2247488758&idx=1&sn=f2ad2e60a4b883f662d2d15ece91b970&chksm=f951a1b5ce2628a37c2ccb1fced8cc27bfa2dfc82b90bcf004f75fadf917b762730014a3af6c&scene=21#wechat_redirect)

## 结合  Immutable


react 规定 props state 必须是 普通对象 . 所以需要比较明确知道 Immutable 对象存在的场景!


相关库:

- [Immutable.js](https://facebook.github.io/immutable-js/)
- [mweststrate/immer](https://github.com/mweststrate/immer)

about immer:

- [immer ppt](http://immer.surge.sh/#21)
- [introducing-immer](https://hackernoon.com/introducing-immer-immutability-the-easy-way-9d73d8f71cb3)
- [the-rise-of-immer-in-react](https://www.netlify.com/blog/2018/09/12/the-rise-of-immer-in-react/)
- [**immer.js 简介及源码简析**](https://zhuanlan.zhihu.com/p/33507866)

### 深刻理解适用场景, 使用前务必思考是否合理和必要.


列出哪些你认为适用的场景和不适用的场景


### 边界性问题

应用中哪些数据需要使用 不可变数据对象? 哪些数据需要使用原生对象? 哪些地方需要转换?

- [结合 Immutable.JS 使用 Redux · GitBook](https://cn.redux.js.org/docs/recipes/UsingImmutableJS.html#immutable-js-best-practices)
- [如何用React+Redux+ImmutableJS进行SPA开发](http://yunlaiwu.github.io/blog/2016/12/01/react+redux+immutablejs/)
- [Immutable.js 以及在 react+redux 项目中的实践 - 掘金](https://juejin.im/post/5948985ea0bb9f006bed7472#heading-10)

### 何时需要重写 combineReducers ?

依旧涉及到 边界性问题.
对于把 Immutable.js Map 对象作为顶层 state 树的应用程序来说，可能无法使用 combineReducers 管理应用状态.这种情况下需要 增强 combineReducers [redux-immutable](https://github.com/gajus/redux-immutable).
 同时需要了解到 combineReducers 在 redux 项目中非必须.




### 重写 Component shouldComponnetUpdate()

    PureComponent 重写了 shouldComponentUpdate, 是对 keys(props) keys(state)的 原生对象 `is` 比对.
    重写的目的是 使用  Immutable.is 比对 Immutable 对象.


### mapStateToProps 性能相关

不要在  内部 对 immutable 数据做 toJS 处理.




## redux-saga

redux-thunk/promise 改变了 action 的原有语义.

**Side effect**: 不论是事件机制还是数据持久化还是 HTTP 请求, 都超出了 store -> action -> reducer 的闭环, 产生的效果(effect)已经超出(side)redux 这个系统. .

- [Redux-Saga 实用指北 - 掘金](https://juejin.im/post/5ad83a70f265da503825b2b4)

### 调试问题



### 场景- websocket

总结: channel 的运用

- [markerikson/redux-ecosystem-links](https://github.com/markerikson/redux-ecosystem-links/blob/master/middleware-sockets-adapters.md)
- [stipsan/redux-saga-sc](https://github.com/stipsan/redux-saga-sc/blob/master/src/workers.js)
- [wangtao0101/redux-saga-websocket](https://github.com/wangtao0101/redux-saga-websocket/blob/master/src/reduxSocket.js)

some articles:

- [Using websockets with redux-saga](https://medium.com/@pierremaoui/using-websockets-with-redux-sagas-a2bf26467cab)
- [Bidirectional Websockets with Redux Saga](https://medium.com/@ebakhtarov/bidirectional-websockets-with-redux-saga-bfd5b677c7e7)
- [Real-time data with redux-saga event channels and socket.IO](https://medium.com/@viacheslavlushchinskiy/real-time-data-with-redux-saga-event-channels-and-socket-io-ad6e64dbefd9)
- [How to Build a Chat Application using React, Redux, Redux-Saga, and Web Sockets](https://medium.freecodecamp.org/how-to-build-a-chat-application-using-react-redux-redux-saga-and-web-sockets-47423e4bc21a)


### perf

 - [redux perf faq](http://redux.js.org/docs/faq/Performance.html)
 - [Recommendations for best practices regarding action-creators, reducers, and selectors · Issue #1171 · reduxjs/redux](https://github.com/reduxjs/redux/issues/1171)

 - [multiple actions in one action](https://redux.js.org/faq/actions#should-i-dispatch-multiple-actions-in-a-row-from-one-action-creator)

### demo

- [俄罗斯方块](https://github.com/chvin/react-tetris)