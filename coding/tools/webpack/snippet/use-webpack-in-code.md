


// https://github.com/antonmedv/jsize/blob/master/index.js
```
function build (config) {
  return new Promise((resolve, reject) => {
    const compiler = webpack(Object.assign(config, {
      output: { filename: 'file' },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"production"',
          'process.browser': true
        })
      ]
    }), (err, stats) => {
      if (err || stats.hasErrors()) reject(err || new Error(stats.toString('errors-only')))
      const compilation = stats.compilation
      const compiler = compilation.compiler
      const memoryFs = compiler.outputFileSystem
      const outputFile = compilation.assets.file.existsAt
      resolve(memoryFs.readFileSync(outputFile, 'utf8'))
    })
    compiler.outputFileSystem = new MemoryFs()
  })
}
```


### resolve

```
const resolver = enhancedResolve.ResolverFactory.createResolver({
  fileSystem: new enhancedResolve.NodeJsInputFileSystem(),
  mainFields: ['browser', 'module', 'main']
})
```