## brocoli



### Node



transform nodes: a instance of `broccoli-plugin` subclass . transform a set of input dirs to out dir.

source nodes:  a instance of broccoli-source class


inputPaths ([prevNode.outputPath])

outputPath

[nodeInfo](https://github.com/broccolijs/broccoli/blob/master/docs/node-api.md#the-nodeinfo-object)



### plugins


- broccoli-plugin

only for watch dir [houfeng0923/broccoli-watched-tree](https://github.com/houfeng0923/broccoli-watched-tree)

- broccoli-source

Broccoli plugin for creating "source" nodes that refer to physical file system
directories.

WatchedDir / SourceNodeWrapper


- broccoli-funnel

give a input node, return a new node. (usage: mv  subset files)

- broccoli-merge-trees

Copy multiple trees of files on top of each other, resulting in a single merged tree.

- broccoli-stew

Provides commonly used convenience functions for developing broccoli based build pipelines.

- tree-sync

mv files helper


- broccoli-persistent-filter, broccoli-babel-transpiler ...

- broccoli-caching-writer, broccoli-webpack, broccoli-webpack-cached ...(todo)

- broccoli-concat

### build

#### Builder(tree)


#### Watch

sane(Adapter)

-----

## node.js tips


'esm':



'heimdalljs' : 高效性能 benchmarks 测试的计时/计数 工具