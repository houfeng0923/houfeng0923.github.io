
BFC: block formatting context

FC: 页面中一块渲染区域,决定子元素如何布局,以及和其他元素的关系和作用

BFC, IFC, GFC, FFC

BFC 规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。


触发条件:

满足下列条件之一就可触发BFC
　　
 * 根元素，即HTML元素
 * float的值不为none
 * overflow的值不为visible
 * display的值为inline-block、table-cell、table-caption
 * position的值为absolute或fixed
　　
特征和规则:

1. 内部的Box会在垂直方向，一个接一个地放置。
2. Box垂直方向的距离由margin决定。**属于同一个BFC的两个相邻Box的margin会发生重叠** [阻止 margin 重叠]
3. 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
4. **BFC的区域不会与float box重叠** [自适应两栏布局]
5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
6. 计算BFC的高度时，浮动元素也参与计算 ([清理浮动])



## refs

- [[布局概念] 关于CSS-BFC深入理解 - 掘金](https://juejin.im/post/5909db2fda2f60005d2093db)

## 问题

1, [demo](http://jsfiddle.net/houfeng0923/9nyq5krf/) 中,
strong 标签上面的 div 之间 有一段间隙. 为啥呢?

非 bfc 问题. inline block  white-space 问题



