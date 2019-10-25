
## 浏览器揭秘

### 1

iframe 站点隔离, [Chrome Site Isolation 简介](https://zhuanlan.zhihu.com/p/37861033),
站点隔离 是 Chrome 为应对潜在的安全问题所实现的功能，以防止恶意网站获取其他网站的信息.

相关概念有:

同源策略

CORB 屏蔽跨域资源加载: img script 等标签可加载跨域资源到当前渲染进程内存,利用 spectre 等漏洞可以获取数据.







- [现代浏览器内部揭秘（第一部分）](https://github.com/xitu/gold-miner/blob/master/TODO1/inside-look-at-modern-web-browser-part1.md)
- [Web 極速刷新不卡屏：WebRender 終結網頁卡頓的秘密（上）](https://medium.com/@moz2000tw/web-???????-webrender-?????????-?-2c016a0f0902)
- [The whole web at maximum FPS: How WebRender gets rid of jank – Mozilla Hacks - the Web developer blog](https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/)