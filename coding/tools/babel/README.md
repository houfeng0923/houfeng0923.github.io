


## babel-node  执行 es6 代码

```
babel-node --presets es2015 es6.js  // or: babel-node  es6.js  (need  .babelrc)

{
  "presets": [
	["es2015"]
  ],
  "plugins": ["transform-class-properties"]
}

// 前置条件：
yarn add global babel-cli ## global
yarn add babel-preset-es2015

```


## babel-polyfill


babel 只转义 新的语法，但不会处理新的 API 。例如 Promise , Map ...

> 配合 preset-env 使用， `import 'babel-polyfill'` will  replaced to single imports :
https://babeljs.io/repl/#?babili=false&evaluate=false&lineWrap=false&presets=env&targets=&browsers=ie%209&builtIns=true&debug=false&code_lz=JYWwDg9gTgLgBAcgEYEMkFMA2BaSmCeAZsJpggNwBQQA&experimental=true&loose=true&spec=false&playground=false&stage=0

polyfill 会污染全局变量。像 Map，Array.prototype.find 这些就存在于全局空间中。

> ps: 通过配置选项: **useBuiltIns**: 'entry' //可以按需导入, 或者 'usage', 自动按使用到的 polyfill 导入

**babel-runtime** 不会污染全局空间和内置对象原型。事实上 babel-runtime 是一个模块，你可以把它作为依赖来达成 ES2015 的支持:

require(‘babel-runtime/core-js/promise’)

单独使用会造成模块重复引用问题,为此需要用到  babel-plugin-transform-runtime，它会分析我们的 ast(**按需引入**) 中，是否有引用 babel-runtime 中的垫片，如果有，就会在当前模块顶部插入我们需要的垫片。

此外 babel-runtime 不模拟实例方法!, so:

## preset (from babel6) **按环境引入**

babel 相关： plugin-transform*  & polyfill
(更正： babel 已经将 plugin 从核心中剥离，具体的工作通过 plugins 完成，通过一组 presets 集合定义一组可共享的.babelrc 配置， 可以避免早期手动配置庞大的 plugin 集合。)， 更多 preset 参考： http://babeljs.io/docs/plugins/

* 拆分成几个核心包，babel-core,babel-node,babel-cli...
* 没有了默认的转换，现在你需要手动的添加 plugin。也就是插件化
* 添加了 preset，也就是预置条件。
* 增加了 .babelrc 文件，方便自定义的配置。


**forceAllTransforms**:

    如果工程需要通过 uglify(默认)压缩代码,由于 uglify 并不能识别 es6 class 等特性, 需要通过 babel预先 transform 为 es5 再压缩.
    通过 forceAllTransforms 可以达成.此外, forceAllTransforms 还可以用在解决下面提到的问题.

### `babel-preset-env`

根据指定的运行环境,自动确定需要的 plugins 和 polyfills.

```
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "browsers": ["last 2 Chrome versions", "last 2 ChromeAndroid versions", "last 2 iOS versions"],
          "uglify": true
        },
        "loose": true,
        "modules": false,
        "useBuiltIns": "entry",
        "debug": true,
        "include": [
          "es6.object.assign",
        ],
        "exclude": [
          "transform-regenerator",
        ]
      }
    ]
  ],
  "plugins": ["transform-object-rest-spread", "transform-class-properties"]
}
```


### loose

大多数 Babel 插件都有两种模式 normal mode 和 loose mode，normal mode 转换而来的 ES5 代码更加符合 ECMAScript 6 的语义，而 loose mode 转换而来的代码更加简单，更像是人写的。

look at this [@babel/plugin-proposal-class-properties · Babel](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)



### change from  babel7

部分变更,特性:

- new scoped package @babel/
- **optional chaining: a?.b**
- 无效合并操作符: a??b // a === undefined || a === null , return b
- 管道操作: ' nice ' |> padLeft |> padRight |> uppercase
- 数字分隔符:  1_000
- 可选的 catch
- new target
- 支持 .babelrc.js
- typescript presets
- flow presets
- 任何提案都将被以 -proposal- 命名来标记他们还没有在 JavaScript 官方之内
......

可通过**?????** 升级工具升级.









## min bundle size

```
babel-plugin-material-ui: that targets specifically Material-UI.
babel-plugin-import: is quite customizable and with enough tweaks works with Material-UI.
**babel-plugin-lodash** : aims to work out of the box with all the package.json.
```

- https://material-ui-1dab0.firebaseapp.com/guides/minimizing-bundle-size

## references

- https://zhuanlan.zhihu.com/p/27305941?utm_source=wechat_session&utm_medium=social
- https://juejin.im/post/59b9ffa8f265da06710d8e89
- [Babel book!!!](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/README.md)
- [一口（很长的）气了解 babel](https://zhuanlan.zhihu.com/p/43249121)
- [关于 Babel 你必须知道的](https://mp.weixin.qq.com/s/1OyBkl5NnFO1q86L7GjQwg)

## FAQ

### Uncaught TypeError: Class constructor ToolTipPanel cannot be invoked without 'new'

fix: `forceAllTransforms: true`  (or @babel/plugin-transform-classes)

工程 中 定义  class `ToolTipPanel` extends B, 而 B 为依赖项,已经被转换为 function. 当调用 super() 调用 B 的构造函数时, 浏览器就会抛出如上错误.
而根据工程编译环境, class 可能原样输出(浏览器都支持). 设定 forceAllTransforms 为 true, 可以强制 class 到 function 的转换.