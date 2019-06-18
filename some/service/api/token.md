
客户端常用的**客户身份验证**机制: session , token


session 不便于分布式系统 d 水平扩展.同步 session 或共享 session,增加了系统复杂度;




## token 认证

- 应用完全控制, 不受同源策略限制
- 避免 csrf
- 应用无状态

有效期:

与 session 对比,session 是自动续期的. (session 过期时间内存维护,避免大量的请求造成更新续期的持久化操作)

手机端应用,希望是用户登录一次后,相当长时间内不用再次登录. (accessToken+refreshToken)

- 快速验证 FasterChecks：Access Token 自身就包含了验证信息，Api Service 不需要再调用 Auth Service 来验证用户登录状态及获取用户信息。
- 安全性 ShortAttackWindow：Access Token 的短时效性极大地缩短 Man In The Middle(MITM)攻击的窗口，提升了安全性。


这种机制安全性其实并不比 session 或长效 token 高....

另一种提高安全性的尝试: 以旧换新 token. 如果服务端发现 token 多次使用,则强制失效.


### 无状态token

服务端签发,服务端验证,不存在两方加解密,所以无需非对称加密;
使用指定密码的散列算法会更快 (HMAC)

实现: JWT


### 注销问题

jwt 一旦签发, 服务端不维护数据, 也就无法注销会话.

方法:

- 前端可控: 通知前端丢弃 token
- 缩短 token 有效时间, 这样注销后有一定的延迟
- 增加风控,敏感操作增加二次验证


refreshToken 由于有效期长,所以服务端必须要有状态维护,确保用户可以销毁


### 分离认证和服务系统


认证服务签发 token, 用户可以通过 token 访问业务系统了. 业务系统如何验证 token 呢?

- 可以约定 秘钥和算法 认证, (或 jwt)
- 认证时给业务系统签发不同的 token (将业务系统信息记录在 token), 系统检验是否本系统信息
- token 如果含有用户隐私(或通过 token 可访问用户隐私信息), 认证系统需要识别业务系统(不受信业务系统),
防止伪造的业务系统,这样认证系统就不能统一颁发公钥了,而需要为每个需要认证的业务系统分别签发公私钥.(类似 openAPI 的认证).




## refs

- [Token 认证的来龙去脉 - 边城客栈 - 开源中国](https://my.oschina.net/jamesfancy/blog/1613994)
- [讲真，别再使用JWT了 &#8211; ThoughtWorks洞见](http://insights.thoughtworkers.org/do-not-use-jwt-anymore/)