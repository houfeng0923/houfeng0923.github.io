
标头压缩

    - 标头字段静态索引表 + 动态表
    - HPACK 压缩格式编码


HTTP/2 所有性能增强的核心在于新的二进制分帧层.

- 二进制分帧 (帧,数据流, [消息])
- 数据流优先级


服务端推送: 还没有收到浏览器的请求，服务器就把各种资源推送给浏览器。


协议协商机制  [谈谈 HTTP/2 的协议协商机制 | JerryQu 的小站](https://imququ.com/post/protocol-negotiation-in-http2.html) ,
[为什么我们应该尽快支持 ALPN？ | JerryQu 的小站](https://imququ.com/post/enable-alpn-asap.html)

### reference

- [http2](https://developers.google.com/web/fundamentals/performance/http2/?hl=zh-cn)
- [HTTP/2 服务器推送（Server Push）教程 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2018/03/http2_server_push.html)