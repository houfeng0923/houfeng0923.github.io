
## config

nginx -s reload/stop/reopen
nginx -t  // 检查配置

kill -USR2 <nginx master pid> // 热部署
kill -WINCH <nginx old master pid> // graceful quit work processes

## nginx 热部署

master worker 模式

master 读取配置,重新生成新的 worker 进程,优雅 结束旧的 worker.

## 性能

Nginx 采用了 Linux 的 epoll 型模


高可用方案: Keepalived + nginx


[proxy_pass] 反向代理 与  [upstream] 负载均衡

对比硬件负载 : bigip


## 指令相关及模块


http 模块

[http,server,location, upstream]

http {  /* 协议级别配置*/
  server {  /* 虚拟主机配置， 服务级别配置 */
    location *** { /* 请求级别配置 , 代理，缓存... */

    }
  }
  upstream ** {

  }
}

- http_proxy // 反向代理

upstream

proxy_pass


- http_gzip

- http_stream // 负载
- server 虚拟主机

### location url 配置

location /prefix-match {} // /prefix-match[/**]

location = /exact-match {} // /exact-match

location ^~ /best-match {} // 非正则，不需要继续匹配正则

// 正则

location ~ ^/lowercase$ { }

location ~* ^/anycase$ { }



> 匹配的顺序是**先匹配普通字符串，然后再匹配正则表达式**。另外普通字符串匹配顺序是根据配置中字符长度从长到短，也就是说使用**普通字符串配置的location顺序是无关紧要的**，反正最后nginx会根据配置的长短来进行匹配，但是需要注意的是**正则表达式按照配置文件里的顺序测试**。找到第一个比配的正则表达式将停止搜索。

> 一般情况下，**匹配成功了普通字符串location后还会进行正则表达式location匹配。有两种方法改变这种行为**，其一就是使用“=”前缀，这时执行的是严格匹配，并且匹配成功后立即停止其他匹配，同时处理这个请求；另外一种就是使用“^~”前缀，如果把这个前缀用于一个常规字符串那么告诉nginx 如果路径匹配那么不测试正则表达式。



> root vs alias [Nginx -- static file serving confusion with root &amp; alias](https://stackoverflow.com/questions/10631933/nginx-static-file-serving-confusion-with-root-alias)


- allow/deny 访问控制

- gzip , brotli(--add-module=/usr/local/src/ngx_brotli)

- autoindex


## https

- certbox tool

`certbot --nginx --nginx-server-root=/Users/houfeng/work/nginx-workspace/site/files/nginx/ -d localhost`


- [https](./https.md)

## log 分析

- GoAccess

## references

- [nginx  在线配置生成工具!](https://nginxconfig.io/)
- [nginx documentation](http://nginx.org/en/docs/)
- [nginx 这一篇就够了](https://juejin.im/post/5d81906c518825300a3ec7ca)
- [nginx 与前端开发](https://juejin.im/post/5bacbd395188255c8d0fd4b2?utm_medium=fe&utm_source=weixinqun)