

## mediaquery


### use `em`

> 需要注意,em 是非物理单位(这么表述也不严谨). so, 2.33 em 可能会匹配 合适的 px.所以, @mediaquery 使用 em ,可以会造成 部分匹配丢失.




## 移动适配

由于 viewport 单位得到众多浏览器的兼容，[amfe/lib-flexible](https://github.com/amfe/lib-flexible) 这个过渡方案已经可以放弃使用，不管是现在的版本还是以前的版本，都存有一定的问题。建议大家开始使用 viewport 来替代此方案。vw 的兼容方案可以参阅《如何在 Vue 项目中使用 vw 实现移动端适配》一文。

问题:

- 比例问题
- 兼容问题
- rem 浮点截断(吃像素)问题
- viewport 缩放问题
- 响应式兼容问题 (viewport 缩放版本)

适用面分析: flexible 目标是解决手机端页面适配问题;并未考虑兼容平板和 pc 设备(响应式范畴).所以当你的应用兼容主要考虑的是大小屏适配问题, flexible 不适合. flexible 适合做手机 app 页面适配.

