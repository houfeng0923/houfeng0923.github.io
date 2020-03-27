

## core object

Compiler: 代表构建过程中整个 webpack **环境**. 提供给 loader 和 plugin 使用. (extends Tapable)

Compilation: 对象代表了一次单一的版本构建和生成资源(**内容**)。当运行 webpack 开发环境中间件时，每当检测到一个文件变化，一次新的编译将被创建，从而生成一组新的编译资源。一个编译对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。编译对象也提供了很多关键点回调供插件做自定义处理时选择使用。

Module

[核心流程](https://img.alicdn.com/tps/TB1GVGFNXXXXXaTapXXXXXXXXXX-4436-4244.jpg)

## related lib

json schedule for option formatting check: [schema-utils](https://github.com/webpack-contrib/schema-utils)

-  ajv（JSON 模式验证器）

## step

### basic webpack

模块依赖 + 模块查找 => moduleDepsTree :> 模块拼接\文件分割(bootstrap) 输出

[fake-webpack](https://github.com/youngwind/fake-webpack.git)



## loader

input(source) : output(parse source)

 [编写一个 loader!!!](https://webpack.docschina.org/contribute/writing-a-loader/)

### resolver

模块插件: [webpack/enhanced-resolve](https://github.com/webpack/enhanced-resolve)

三种类型:

- normal : 通过绝对/相对路径,解析模块
- context: 通过给定的 context 解析模块
- loader: 解析一个 webpack loader

### context

loader.addDependency() ?

loader.emitFile()

### loader :pitching

[pitching loader](https://webpack.docschina.org/api/loaders/#%E8%B6%8A%E8%BF%87-loader-pitching-loader-)
[pitching loader](https://survivejs.com/webpack/extending/loaders/#pitch-loaders)

例子: style-loader, bundle-loader, script-loader

```
module.exports.pitch(request) {}

module.exports = function(content, map) {}
```

### cachable

this.cachable()?

https://github.com/webpack-contrib/cache-loader/blob/master/README.md

### loader-runner

### loader-utils




### source-map-loader

    若依赖项有存在的 map, 通过该 loader 添加到webpack 构建过程.


### less-loader

核心步骤: lessc(source): {css, map, imports} => addDependency(imports) , css remove sourcemapurl , pass to next loader

**less-loader 将 less 编译器进行了扩展，自定义路径解析逻辑。然后通过 webpack 的 this.resolve 解析依赖。**

- [less-laoder: use less plugin](https://github.com/webpack-contrib/less-loader/blob/master/src/createWebpackLessPlugin.js#L95)

### post-loader

通过 postcss 解析 css(post css plugin).
若项目中 css 没有 @import\css modules , 不需要 css-loader 处理


### css-loader

**css modules**

通过 postcss, 处理 @import \ url() 依赖 ,最终解析成 css 或 module;
post css **modules** plugins:  values, local, extractImport, modulesScope

**option: importLoaders**

目前需要手动设置的参数(将来视 webpack 支持决定是否自动识别).具体可[参考](https://github.com/webpack-contrib/css-loader/issues/137) , 为 css 文件中 @import/url() 的其他资源文件设置正确的 loader!

### style-loader

输入 css string(module), 输出 js module string . (pitching loader)

### vue-loader



### [react-hot-loader](../../framework/react/utils.md)


## plugin


Tapable: webpack 依赖的基础类库; webpack 本质是一种事件流机制的架构, tapable 提供一系列 Hook 函数, webpack 使用 tapable 来实现插件的 binding 和 applying. (类比 node EventEmitter )

插件必须包含 apply() 方法完成注册. (会在 compiler.run(cb) 之前注册完).webpack 构建到某个阶段就会发布一个生命周期事件,此时订阅了发布事件的 plugins 会按照注册顺序执行 callback.

- [compiler 钩子](https://webpack.docschina.org/api/compiler-hooks/)
- [compilation 钩子](https://webpack.docschina.org/api/compilation-hooks/)

to review some simple plugins , you can see how the  plugin work :

- [ignore-assets-webpack-plugin](https://github.com/medfreeman/ignore-assets-webpack-plugin)


###

### sourcemap plugin

devtool:

    控制如何生成 sourcemap;  而 SourceMapDevToolPlugin 进行更细粒度的配置.

    module: 如何生成对应的 sourcemap ?


- [打破砂锅问到底：详解Webpack中的sourcemap](https://segmentfault.com/a/1190000008315937)



## temp (ember auto import)


## about hmr

### webpack hmr


通过文档 [模块热替换](https://webpack.docschina.org/guides/hot-module-replacement/#%E5%90%AF%E7%94%A8-hmr)
, [HMR原理及应用](https://ericteen.github.io/2018/03/11/HMR/), [webpack 热加载原理探索](http://shepherdwind.com/2017/02/07/webpack-hmr-principle/) 了解 hot 基本配置.

[Error Happened](https://medium.com/frochu/react-%E6%95%B4%E5%90%88-hot-module-replacement-cc4721a432af)

[What exactly is Hot Module Replacement in Webpack?](https://stackoverflow.com/questions/24581873/what-exactly-is-hot-module-replacement-in-webpack)

几个相关概念: manifest, webpackJsonp:动态加载(code splitting), webpackHotUpdate:动态更新(hmr)



webpack 只提供热更新的基础服务, 还需要开发者自行定义模块更新逻辑(module.hot.accept) .
> HMR 是可选功能，只会影响包含 HMR 代码的模块。举个例子，通过 style-loader 为 style 样式追加补丁。 为了运行追加补丁，style-loader 实现了 HMR 接口；当它通过 HMR 接收到更新，它会使用新的样式替换旧的样式。
>类似的，当在一个模块中实现了 HMR 接口(module.hot, 来源于 HotModuleReplacementPlugin)，你可以描述出当模块被更新后发生了什么。然而在多数情况下，不需要强制在每个模块中写入 HMR 代码。如果一个模块没有 HMR 处理函数，更新就会**冒泡**。这意味着一个简单的处理函数能够对整个模块树(complete module tree)进行更新。如果在这个模块树中，一个单独的模块被更新，那么整组依赖模块都会被重新加载。

### css hmr

 `style-loader` 实现了 hmr 接口, 所以借助  style-loader, 可实现 css 热更新.

### hmr with react

对于 js, 可以有 2 种方案,一种是通过 babel plugin, 对代码进行编译转换; 一种是借助 webpack loader, 对代码进行改造. (本质上还是 module.hot.accept api 的植入)


**about: react-hot-loader**

如果你使用 redux, state 保持在全局, 那么你不必使用 react-hot-loader .
react-hot-loader 解决了 react 组件被更新时的 state 保持和 dom 销毁问题

细节可以阅读:[追溯 React Hot Loader 的实现!!](http://www.cnblogs.com/ikcamp/p/8521145.html) 了解.非常不错.

之后,可以理解为什么会有 `react-hot-loader/babel`(js 推荐)以及`react-hot-loader/webpack`(其他 compile-to-js 使用)


**async component**
在 react-hot-loader 文档中提到了 code splitting 方案,推荐了几个完全**兼容**的 lazy component 方案,同时也 提到了不兼容的组件( react-async-component), 在[v4.13](https://github.com/gaearon/react-hot-loader/tree/v4.1.3#code-splitting)中 有相关解释.

react-loadable:
> 每次会在 render 中取新的 component:
> https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js#L242
> 每次 变更, loadable 组件重新创建(hot loader 已经代理了该组件,**this.state状态会保留**),  组件实例化 会重新执行 load 组件逻辑(https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js#L122).

react-async-component:
> 同样 在 componentDidMount 中加载异步组件. 由于 hook 只执行一次,并且组件并没有记录 上次加载的组件信息, 所以在 AsyncComponent 组件更新(被代理),组件状态被重置后,无法再次加载异步组件.当前节点会被更新为 Loading 状态组件.


### redux

replaceReducer


### dva



## references

- [细说 WebPack 之流程](http://taobaofed.org/blog/2016/09/09/webpack-flow/)
- [webpack 源码探索之插件机制 - 掘金](https://juejin.im/post/5a80e7fe6fb9a0633a70fe62)
- [Extending with Loaders](https://survivejs.com/webpack/extending/loaders/)
- [webpack进阶:可视化展示webpack内部插件与钩子关系](https://juejin.im/post/5bb06c55e51d450e7c0d8ab9)
- [Webpack原理-编写Plugin](https://juejin.im/post/5a5c18f2518825734f52ad65)
- [从构建进程间缓存设计谈Webpack5 优化和工作原理](https://mp.weixin.qq.com/s/rLwxVGVsEoyTTEFKYQNZbA)
