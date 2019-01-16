
> 在模块化基础上，管理和打包项目资源（一切皆为模块）。
> gulp作为基于stream的自动化构建工具（管理和执行task），抽象了任务处理模型。与grunt本质类似，集成度不高。
> 使用JavaScript（入口）构建。模块自我管理依赖。

## [generator react webpack](https://github.com/newtriks/generator-react-webpack)

- [webpack.cn](https://webpack.vuefe.cn/concepts/index/)
- [webpackdoc](http://webpackdoc.com/troubleshooting.html)

- https://llp0574.github.io/2016/11/29/getting-started-with-webpack2/


## resolve

resolve.root  vs resolve.modulesDirectories

```
resolve: {
    root: [path.resolve(__dirname, 'app'), path.resolve(__dirname, 'vendor')],
    extensions: ['.hbs', '.js', '.json', '.css', '.less', '.scss', ''],
    modulesDirectories: ['bower_components', 'node_modules']
},

import v from 'mymodule' // in vendor or app
```

## hash vs chunkhash

hash: 代表的是compilation的hash值。与全量文件内容有关，即多个chunk的hash是一致的。

chunkhash: 代表的是chunk的hash值，即是模块内容的hash值。


> 延伸： extract-text-webpack-plugin 的 contenthash

使用extract-text-webpack-plugin插件分离 css内容，会造成 js和css共用chunkhash, 所以该插件提供了contenthash，即根据css文件内容来计算hash的方式。


那么css的变化影响js的chunkhash如何解决？

webpack提供了`chunk-hash`的钩子函数，可以在计算完chunkhash后，自定义钩子函数重新计算hash值替换原有hash值。
可以直接使用 webpack-md5-hash 插件来完成。

### more
- https://zhuanlan.zhihu.com/p/27710902
- https://loveky.github.io/2017/03/29/webpack-module-ids/

## HMR

- webpack-dev-server 不仅知晓 文件何时变化，还清楚哪些文件（bundle）发生了变化。
- 在启用`--hot` 或`HotModuleReplacementPlugin`时(** 同时配置会失效 ** )，webpack-dev-server 会与客户端建立socket通道，通知浏览器代码发生了变化（liveload）,例如update bundle或jsx错误。
- 通过[webpack HMR api](http://webpack.github.io/docs/hot-module-replacement.html)，我们可以更新变化的模块，避免页面刷新引起的全局状态丢失问题。

### livereload (iframe / inline)


### HMR 消息冒泡机制

如果消息在新模块上没有被捕获的话就会再次进行传递；如果所有的消息都被捕获了的话，那我们的应用就应该已经按照代码进行了更新；反之如果有消息冒泡到了入口文件还没有被捕获的话，那就说明我们的代码中没有处理这类变更方法，那webpack就会刷新浏览器页面，即从HMR回退到LiveReload。

实际使用过程中，不必要为每个模块编写 hot代码，一般会根据需要控制更新粒度即可。？


在react中使用hmr，模块更新后，react 组件的 state 会丢失。如何避免这个问题？

### [react-hot-loader](http://gaearon.github.io/react-hot-loader/getstarted/)


### some tips  (webpack2.x)

- 启动 webpack-dev-server, 通过ip访问： Invalid Host header： devServer.disableHostCheck = true & host: 0.0.0.0


意义：

- 真正提升开发效率，缩短应用初始化到恢复应用状态所需的时间

## 2.X

### tree shaking

基于 es6  静态module 特性。(https://www.zhihu.com/question/41922432)

正常输出 只是 标记 unused 代码， 通过 uglify 压缩时，移除 unsued 。

(http://www.aliued.com/?p=4060)过程原因，以及配置变迁， 这篇文章总结的比较清楚。


### 问题：

- --optimize-minimize vs uglify  plugin ?


- WEBPACK VISUALIZER 相关可视化依赖lib 如何 呈现 unused 或 过滤掉 unused




### references

- [** 深入浅出webpack ebook **](http://webpack.wuhaolin.cn/)
- [why i think webpack is right way approach to build pipelines](http://devlog.disco.zone/2016/06/01/webpack/)
- http://andrewhfarmer.com/webpack-hmr-tutorial/
- https://blog.oyyd.net/post/how_does_react_hot_loader_works
- https://segmentfault.com/a/1190000003872635
- https://zhuanlan.zhihu.com/p/27046322
- [如何 10 倍提高你的 Webpack 构建效率](https://juejin.im/entry/5769f8dc128fe10057d2f4ae)
- [为什么我们要做三份 Webpack 配置文件](https://juejin.im/entry/59b8a83b5188256c60692b3f?utm_medium=fe&utm_source=weixinqun)
- [webpack for real tasks: decreasing front-end size and improving caching](https://iamakulov.com/notes/webpack-front-end-size-caching/#moment-js)


### others

- [rollup]()
- [microbundle](https://www.npmjs.com/package/microbundle)