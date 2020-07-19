
## 认证\权限与安全

常见机制: HTTP Basic，HTTP Digest  / Api_key + Security_key /  OAuth2 / JWT?
restful API 是无状态的也就是说用户请求的鉴权和 cookie 以及 session 无关，每一次请求都应该包含鉴权证明。统一使用 Token 或者 OAuth2.0 认证。

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


### about oAuth2.0

[Authorization Code Flow(3-legged-OAuth)](https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin/context)

Authorization Code Grant, 授权码许可, 标准流程.

[Client Credential Flow(2-legged-OAuth)](https://docs.microsoft.com/en-us/linkedin/shared/authentication/client-credentials-flow?context=linkedin/context)

2-legged OAuth 协议是两个服务器 backend 的交互，与 3-legged 相比，缺少了 user 这个角色，不需要经过 user-agent(Gadget，浏览器等)。
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
- [Authentication and Authorization | GitLab](https://docs.gitlab.com/ee/administration/auth/README.html)
- [OAuth2 实现单点登录 SSO!](https://mp.weixin.qq.com/s/Ny_NoCcV9fZIscExzkh3vA)

### JWT
包含内容的 token.


header.payload.signature

在 web 上安全的传递信息(非敏感信息)/ 替代 session / sso 认证 /

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
- [不要用JWT替代session管理（上）：全面了解Token,JWT,OAuth,SAML,SSO](https://zhuanlan.zhihu.com/p/38942172)
- [整合第三方登录的开源库](https://github.com/justauth/JustAuth)