


js 遵循 (IEEE754) 浮点数规范。 其 Number类型对于浮点数只有double一种表示。也就是说我们在进行js运算都是double类型的四则计算。

对于 1.002155 ，其计算机内部表示 实际值是 1.002154999999999； 直接基于double进行的toFixed(5)返回的依然是 1.00215 ;

对于小数位精度输出的场景，可以采用高精度BigDecimal类库来进行运算。

猜测：js在输出的时候，v8引擎做了有效数字取整（c，swift的输出函数也一样,只是取整策略不一样）。
所以在做比较验证的时候，要关注内存数据的变化，而不仅仅是输出结果的差异。对于高级语言来说，输出函数对于绝大多数人来说也是个黑盒子。


## convertion

在`Node.js 根本没有float`下文中，存在 double 到float的转换（writeFloatBE), 会出现double到float后，最后的值或者变大，或者变小的情况，分析下：

// 变大案例：
let a = 1.25502    			// binary: 1.0100000101001000111111011001111111010011011011111
buf.writeFloatBE(a) 										     <- 进位
let b = buf.readFloatBE()   // binary: 1.01000001010010001111111

反之，16位下一位为0，舍弃


##  number | 0

取整。但要注意： number 如果太大多余32位 (2^31−1) 取整结果会丢失高位数据。
还需要使用 Math.floor()

另外，number为浮点数，因为浮点数不能做 位运算，会先取整，然后再执行位运算。


js 位运算相关： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators



## reference

 - [浮点数内存模型](http://alvarto.github.io/VisualNumeric64/#12.55005)
 - [Node.js 根本没有float](https://mp.weixin.qq.com/s?__biz=MzIwNjQwMzUwMQ==&mid=2247485180&idx=1&sn=4169b92dda8c2fcc84ed6ac8f20eb1ab&chksm=9723643ea054ed282eb4287b20dacb530b881c91b7b93043e0939ee63234cf7d59788ee54800&mpshare=1&scene=1&srcid=0506UWFT5AaKy3ItVnmfiBiB&key=4d2184d4dd86ac88cb388013263fd9961ac47c652ff5c4ab0dc4c0a1655b24be503e58245345edb5efdbff71d6ca2570afbdb6d685e2b091e257e5004cdb7e58c37cdc8ec2a923f068b50e3fa43140a7&ascene=0&uin=MjA0ODAxOTEwMw%3D%3D&devicetype=iMac+MacBookPro12%2C1+OSX+OSX+10.12.4+build(16E195)&version=12020610&nettype=WIFI&fontScale=100&pass_ticket=a%2FuYUZvWyUWY2R0Qe1u3SgDhVlI1fQq3eDMkLCBa0%2FeOAbN5v31IY569HG%2Fw%2BleJ)

 - [图解：JavaScript中Number的一些表示上/下限](https://segmentfault.com/a/1190000000407658)
 - [代码之谜（四）- 浮点数（从惊讶到思考）](http://justjavac.com/codepuzzle/2012/11/02/codepuzzle-float-from-surprised-to-ponder.html)
 - [number encoding](http://2ality.com/2012/04/number-encoding.html)
 - [why-converting-from-float-to-double-changes-the-value](http://stackoverflow.com/questions/17504833/why-converting-from-float-to-double-changes-the-value)