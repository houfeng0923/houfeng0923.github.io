


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

## preset 

babel 相关： plugin-transform*  & polyfill 
(更正： babel已经将plugin 从核心中剥离，具体的工作通过plugins完成，通过一组presets集合定义一组可共享的.babelrc 配置， 可以避免早期手动配置庞大的plugin集合。)， 更多 preset 参考： http://babeljs.io/docs/plugins/

babel6 : `babel-preset-env`


## babel-polyfill


babel 只转义 新的语法，但不会处理新的API 。例如 Promise , Map ...

> 配合 preset-env 使用， `import 'babel-polyfill'` will  replaced to single imports : 
https://babeljs.io/repl/#?babili=false&evaluate=false&lineWrap=false&presets=env&targets=&browsers=ie%209&builtIns=true&debug=false&code_lz=JYWwDg9gTgLgBAcgEYEMkFMA2BaSmCeAZsJpggNwBQQA&experimental=true&loose=true&spec=false&playground=false&stage=0



## min bundle size 

```
babel-plugin-material-ui: that targets specifically Material-UI.
babel-plugin-import: is quite customizable and with enough tweaks works with Material-UI.
babel-plugin-lodash: aims to work out of the box with all the package.json.
```

- https://material-ui-1dab0.firebaseapp.com/guides/minimizing-bundle-size

## references 

- https://zhuanlan.zhihu.com/p/27305941?utm_source=wechat_session&utm_medium=social