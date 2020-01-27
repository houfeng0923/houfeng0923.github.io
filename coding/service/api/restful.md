## history

RPC->(xml-rpc)SOAP->json-rpc->RESTful->GraphQL



参考:

- [咖啡馆的故事：FTP, RMI , XML-RPC, SOAP, REST一网打尽](https://mp.weixin.qq.com/s/OXIFJGSozoRWNaLhnD0wxw)
- [为什么RESTful很糟糕？](https://mp.weixin.qq.com/s/lmtcMxyOCGB11syWbG0e_g)
- [(译) JSON-RPC 2.0 规范(中文版) - wiki . leozvc](http://wiki.geekdream.com/Specification/json-rpc_2.0.html)
- [gRPC](https://www.infoq.cn/article/2015%2F03%2Fgrpc-google-http2-protobuf)
- [Node, gRPC, and Postgres demo](https://mp.weixin.qq.com/s/PGybtWNIY4YZvYz0RpkI5Q)
- [理解RESTful架构](http://www.ruanyifeng.com/blog/2011/09/restful.html)


## implements

### spring mvc (RestController...)

erebor web 的方法

Spring Boot 太厚重了，使用 Spring MVC 的语法，性能只有 Jersey 的一半

- [Spring MVC 4 RESTFul](https://blog.csdn.net/w605283073/article/details/51338765)

### RESTEasy + netty (过于底层,需要实现很多基本功能)
纯 netty 的性能远远高于其它框架，一方面是由于没有 http router 的逻辑，另一方面也显示了 Netty 框架的优秀。如果不是实现很复杂的路由和很多的 Service,不妨使用纯 Netty 实现高性能。


### Jersey + Jetty
Jersey 是 Jax-RS 的官方参考实现


参考:

- [Java RESTful 框架的性能比较](https://mp.weixin.qq.com/s/QFjHgblbmVIUQfIz__BbGQ)



## 设计

### endpoint:

1. version , header / url 我觉得都可,url 更清晰
2.  GET /articles
    X-HTTP-Method-Override:PUT
3. 统一都是用复数
4. filter, 避免多级 : 其他层级都用参数表示: GET /authors/12?categories=2 (另一种风格是 nested routing )
5. 发生错误时,状态码不要返回 200. (optional)
6. HATEOAS 提供链接,类似 api.github.com 的 api list 页面,以及 error 后的 doc 链接
7. 总有不符合 curd 的操作: 单独 endpoint/参数/ 转成 resource/

### 响应状态码

403 / 404 : github 的安全考虑

401 / 403/ 429




参考:

- [跟着 GitHub 学习 Restful HTTP API 设计!](https://mp.weixin.qq.com/s/2CxmkPH4wQc8T_45n_vHlg)
- [restful api 设计流程图](http://mmbiz.qpic.cn/mmbiz/INlUsGVmMrAFfPl5qF8DHibSGjOOaWz0pSzWrRNnPLUbsm9HATqJFYMB5gE2pAtPVw1lvGNs4zQKYmGia6uDlfTA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
- [RESTful API 最佳实践](https://mp.weixin.qq.com/s/kF3puRCM4cczVMwkQwIMqg)
- [RESTful API的十个最佳实践](http://www.cnblogs.com/xiaoyaojian/p/4612503.html)
- [microsoft api guideline](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md)
- [GitHub API v3](https://developer.github.com/v3/)
- [api - LinkedIn](https://docs.microsoft.com/en-us/linkedin/shared/authentication/client-credentials-flow?context=linkedin/context)
- [Best Practices for Designing a Pragmatic RESTful API](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)

## api doc 方案

- [微服务架构实战：Swagger规范RESTful API](https://mp.weixin.qq.com/s/N54vIfUQaeTljkyWaV9ppA)

- github api


## about GraphQL


- [!graphsql](http://jerryblog-image.b0.upaiyun.com/blog/posts/backend-arch.png)

代码及文档!

GraphQL API 的主要应用场景是 API 网关，在客户端和服务之间提供了一个抽象层。

标准化的`查询约定`和`库`.

访问控制?

[级联GraphQL访问控制](https://onetwo.ren/%E7%BA%A7%E8%81%94GraphQL%E8%AE%BF%E9%97%AE%E6%8E%A7%E5%88%B6/)

问题:

- n+1
- ...

- [GraphQL让我们拥抱下一代RESTful](https://mp.weixin.qq.com/s/377njACyhY5hPrKTIRmB2Q)
- [阻碍你使用 GraphQL 的十个问题](http://jerryzou.com/posts/10-questions-about-graphql/)
- [为什么说GraphQL可以取代REST API？](https://mp.weixin.qq.com/s/X-jm7jLXWmMmLBVgHfkRiQ)


