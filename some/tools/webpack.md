
> 在模块化基础上，管理和打包项目资源。
> gulp作为任务运行工具，提供多个任务处理，并不关心整个系统资源。
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

