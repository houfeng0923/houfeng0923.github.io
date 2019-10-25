
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

- http_proxy // 反向代理

upstream

proxy_pass


- http_gzip

- http_stream // 负载
- server 虚拟主机

- location url 配置

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

- [nginx documentation](http://nginx.org/en/docs/)
- [nginx 与前端开发](https://juejin.im/post/5bacbd395188255c8d0fd4b2?utm_medium=fe&utm_source=weixinqun)