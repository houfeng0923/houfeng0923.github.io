


### vdom history

- virtual-dom

    from React ;
    DFS


about more :
- [去哪儿网迷你React的研发心得](https://segmentfault.com/a/1190000011235844)

### about diff

diff 时间复杂度: `O(n^3) -> O(n)`

传统算法的循环递归只需O(N^2)复杂度，就能完成对比所需的遍历操作，但因涉及寻找修改操作的最优解，才又上升回O(N^3)的数量级。


react vdom  算法: 逐层比较(不考虑跨层级移动节点) ,DFS?
几个假定:

- 很少有跨层级移动节点
- 类型不同的节点, 拥有不用的结构, 不会复用
- 同层级子节点,通过 唯一id区分

基于以上的策略, react 分别对 tree / component / element 执行优化 diff.



延伸问题:

同级移动节点,如何找到最(较)优解呢?

**列表对比算法:(字符串的最小编辑距离问题(String Diff Algorithm),通过动态规划求解)**

[最小编辑距离问题：递归与动态规划](https://github.com/youngwind/blog/issues/106)

[编辑距离 (Edit distance) · GitBook](https://www.dreamxu.com/books/dsa/dp/edit-distance.html)

[diff 算法原理(优化版)](https://github.com/NervJS/nerv/issues/3)



> React及其他虚拟DOM库已经将虚拟DOM的生成交由JSX与babel处理了，因此不同点是，虚拟DOM的结构与diff算法。虚拟DOM万宗不离其变是三大属性，type, props, children，当然也可以改一下别名，babel可以做相应配置。此外，虚拟DOM可以加入更多冗余标识，以帮diff算法的改良。

code:

- [snippet](../../../snippets/vdom/min-distance.js)
- [livoras/list-diff](https://github.com/livoras/list-diff/blob/master/lib/diff.js)


### refs

- [如何实现一个 Virtual DOM 算法 ](https://github.com/livoras/blog/issues/13)
- [为什么inferno.js这么快？ - 知乎](https://www.zhihu.com/question/65824137/answer/235159117)
- [diff 算法原理概述 · Issue #3 · NervJS/nerv](https://github.com/NervJS/nerv/issues/3)
- [深入 Vue2.x 的虚拟 DOM diff 原理 - 云+社区 - 腾讯云](https://cloud.tencent.com/developer/article/1006029)
- [去哪儿网迷你React的研发心得 - javascript魔法师 - SegmentFault 思否](https://segmentfault.com/a/1190000011235844)



- [preact 源码分析](https://github.com/wangning0/preact_analyse)