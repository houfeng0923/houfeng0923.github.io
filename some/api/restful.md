## history

RPC->(xml-rpc)SOAP->json-rpc->RESTful->GraphQL



参考:

- [咖啡馆的故事：FTP, RMI , XML-RPC, SOAP, REST一网打尽](https://mp.weixin.qq.com/s/OXIFJGSozoRWNaLhnD0wxw)
- [为什么RESTful很糟糕？](https://mp.weixin.qq.com/s/lmtcMxyOCGB11syWbG0e_g)
- [(译) JSON-RPC 2.0 规范(中文版) - wiki . leozvc](http://wiki.geekdream.com/Specification/json-rpc_2.0.html)
- [gRPC](https://www.infoq.cn/article/2015%2F03%2Fgrpc-google-http2-protobuf)
- [理解RESTful架构](http://www.ruanyifeng.com/blog/2011/09/restful.html)


## implements

### spring mvc (RestController...)

erebor web的方法

Spring Boot太厚重了，使用Spring MVC的语法，性能只有Jersey的一半

- [Spring MVC 4 RESTFul](https://blog.csdn.net/w605283073/article/details/51338765)

### RESTEasy + netty (过于底层,需要实现很多基本功能)
纯netty的性能远远高于其它框架，一方面是由于没有http router的逻辑，另一方面也显示了Netty框架的优秀。如果不是实现很复杂的路由和很多的Service,不妨使用纯Netty实现高性能。


### Jersey + Jetty
Jersey 是Jax-RS的官方参考实现


参考:

- [Java RESTful 框架的性能比较](https://mp.weixin.qq.com/s/QFjHgblbmVIUQfIz__BbGQ)



## 设计

### endpoint:

1. version , header / url 我觉得都可,url 更清晰
2.  GET /articles
    X-HTTP-Method-Override:PUT
3. 统一都是用复数
4. filter, 避免多级 : 其他层级都用参数表示: GET /authors/12?categories=2 (另一种风格是 nested routing )
5. 发生错误时,状态码不要返回200. (optional)
6. HATEOAS 提供链接,类似 api.github.com 的 api list 页面,以及 error 后的 doc链接
7. 总有不符合 curd 的操作: 单独 endpoint/参数/ 转成 resource/

### 响应状态码

403 / 404 : github 的安全考虑

401 / 403/ 429




参考:

- [跟着 GitHub 学习 Restful HTTP API 设计!](https://mp.weixin.qq.com/s/2CxmkPH4wQc8T_45n_vHlg)
- [restful api 设计流程图](http://mmbiz.qpic.cn/mmbiz/INlUsGVmMrAFfPl5qF8DHibSGjOOaWz0pSzWrRNnPLUbsm9HATqJFYMB5gE2pAtPVw1lvGNs4zQKYmGia6uDlfTA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
- [RESTful API 最佳实践](https://mp.weixin.qq.com/s/kF3puRCM4cczVMwkQwIMqg)
- [microsoft api guideline](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md)
- [GitHub API v3](https://developer.github.com/v3/)
- [api - LinkedIn](https://docs.microsoft.com/en-us/linkedin/shared/authentication/client-credentials-flow?context=linkedin/context)

### 认证\权限与安全

常见机制: HTTP Basic，HTTP Digest  / Api_key + Security_key /  OAuth2 / JWT?
restful API是无状态的也就是说用户请求的鉴权和cookie以及session无关，每一次请求都应该包含鉴权证明。统一使用Token或者OAuth2.0认证。

申请 api-key 和  secret-key , 基于此获取 access token

AK 标记用户(api 调用者)身份; SK 保密,加密认证字符串和验证认证字符串的秘钥.

接口鉴权:
http 请求 + 请求字符串 -> 签名(HMAC 消息摘要算法:sign) -> 提交( header/url 中包含认证字符串 )
```
app_id=?&time_stamp=?&nonce_str=?&sign=?
```

其他安全考虑因素:

- 不同 role 授权,等级
- 流控, 防刷 (redis)
- 请求防篡改
- 防止重放攻击
- url/响应信息防止信息泄漏:字典攻击..
- web cors

参考:

- [RESTful API 设计指南 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)
- [RESTFUL API 安全设计指南](https://mp.weixin.qq.com/s/RS139g-3icC-_OEoU3c2ww)
- [百度云 api 认证机制](https://cloud.baidu.com/doc/BCC/API.html#.E6.8E.92.E7.89.88.E7.BA.A6.E5.AE.9A)
- [对外Restful API接口平台的设计与实现](https://mp.weixin.qq.com/s/HNVfFigkX4pt9epgiTzAhA)


#### about oAuth2.0

[Authorization Code Flow(3-legged-OAuth)](https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin/context)

Authorization Code Grant, 授权码许可, 标准流程.

[Client Credential Flow(2-legged-OAuth)](https://docs.microsoft.com/en-us/linkedin/shared/authentication/client-credentials-flow?context=linkedin/context)

2-legged OAuth协议是两个服务器backend的交互，与3-legged相比，缺少了user这个角色，不需要经过user-agent(Gadget，浏览器等)。
安全性差.

> OAuth关注的是authorization；而OpenID侧重的是authentication, openId protocols built on oAuth.


参考:

- [理解OAuth 2.0 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html)
- [http digest](https://www.jianshu.com/p/18fb07f2f65e)
- [OAuth 2.0 &mdash; OAuth](https://oauth.net/2/)
- [OAuth 2.0 for Mobile & Desktop Apps](https://developers.google.com/identity/protocols/OAuth2InstalledApp)
- [OpenID及其原理介绍,OAuth和OpenID的区别](https://blog.csdn.net/xcjing/article/details/73826889)
- [OpenID versus OAuth from the user&#8217;s perspective - cakebaker](http://cakebaker.42dh.com/2008/04/01/openid-versus-oauth-from-the-users-perspective/)
- [SSO with CAS or OAuth?](https://stackoverflow.com/questions/2033026/sso-with-cas-or-oauth)

#### JWT
包含内容的 token.


header.payload.signature

在 web 上安全的传递信息(非敏感信息)/ 替代session / sso认证 /

特点:

- 避免了中心化 token 存储和验证, 可分布式验证

缺点:
- 无法注销,只能等待过期失效

- 服务器虽然减少了维护 session 的存储或内存压力, 增加了加解密的 计算压力.具体情况具体分析了.




参考:
- [什么是 JWT  -- JSON WEB TOKEN](https://www.jianshu.com/p/576dbf44b2ae)
- [JSON Web Token设计单点登录系统](http://blog.leapoahead.com/2015/09/07/user-authentication-with-jwt/)
- [基于 Token 的身份验证：JSON Web Token（附：Node.js 项目） - 宁皓网](https://ninghao.net/blog/2834)- [[架构设计]一种新的移动APP保持登陆的实现机制介绍!!](http://www.sohu.com/a/151603260_733133)
- [brianloveswords/node-jws](https://github.com/brianloveswords/node-jws)
- [讲真，别再使用JWT了! ThoughtWorks洞见](http://insights.thoughtworkers.org/do-not-use-jwt-anymore/)

## api doc 方案

- [微服务架构实战：Swagger规范RESTful API](https://mp.weixin.qq.com/s/N54vIfUQaeTljkyWaV9ppA)

- github api


## about GraphQL


- [!graphsql](http://jerryblog-image.b0.upaiyun.com/blog/posts/backend-arch.png)

代码及文档!


问题:

- n+1
- ...

- [GraphQL让我们拥抱下一代RESTful](https://mp.weixin.qq.com/s/377njACyhY5hPrKTIRmB2Q)
- [阻碍你使用 GraphQL 的十个问题](http://jerryzou.com/posts/10-questions-about-graphql/)


