
DSL 即「Domain Specific Language」，在《领域特定语言》这本书中它有了一个定义：

> 一种为特定领域设计的，具有受限表达性的编程语言


## 外部DSL

外部 DSL 的直接对应就是 GPPL，由于受限语法特性更少，一般不要求图灵完备，所以它实现难度会低于 GPPL。

> GPPL 即 「General Purpose Programming Language」，又称通用编程语言，例如我们常用的 JavaScript，它们被设计用来解决通用编程问题。
> 前端常用的模板引擎如 `mustache` 以及 React、Vue 支持的 `JSX` 语法都属于外部 DSL, 以及json/yaml等

`2 weeks ago`

## 内部DSL

内部 DSL（Embedded DSL or Internal DSL） ，它是建立在其它宿主语言之上（一般为 GPPL）的特殊 DSL，它与宿主语言共享编译与调试工具等基础设施，学习成本更低，也更容易被集成。他在语法上与宿主语言同源，但在运行时上需要做额外的封装。

> 你也可以将内部DSL视为针对特定任务的特殊接口封装风格，比如 `jQuery` 就可以认为是针对 DOM 操作的一种内部 DSL。

`(2).weeks().ago()`

> Proxy 使得 JavaScript 具备了极强的元编程能力，它除了可以轻松模拟出 Ruby 沾沾自喜的 method_missing 特性外，也可以有很多其它动态代理能力，这些都是实现内部 DSL 的重要工具。



常规编程解决思路下表达更多的是「How」即如何实现的细节，牵扯进的表达式、语句和数据结构等编程元素会影响到领域工作者对本源问题的理解。而 DSL 的秘诀在于它强调表达是「What」，将原本的命令式编程转化为极致的声明式表述，使得 DSL 具备强大的自解释性（self-explanatory），从而提高编程效率，甚至可以赋能给没有编程经验的用户。



# dsl 工具

- [PEG.js &ndash; Parser Generator for JavaScript](https://pegjs.org/)
- [jison](https://github.com/zaach/jison)

# refs

[前端 DSL 实践指南（上）—— 内部 DSL](https://zhuanlan.zhihu.com/p/107947462)