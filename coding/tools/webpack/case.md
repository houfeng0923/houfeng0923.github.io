
### moment (reduce size only ja)

- [ContextReplacementPlugin](https://webpack.docschina.org/plugins/context-replacement-plugin/)
- [iamakulov/moment-locales-webpack-plugin](https://github.com/iamakulov/moment-locales-webpack-plugin)

```
plugins: [
  new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ja/)
  // new webpack.IgnorePlugin(/^\.\/locale$/, /moment\.min\.js$/),
  // new webpack.NormalModuleReplacementPlugin(/moment$/, function(res) {
  //   if (/bootstrap-datetimepicker\.js/.test(res.context)) {
  //     res.request = require('path').resolve(__dirname, 'vendor/moment-locale-ja.js');
  //   }
  // })
]
```