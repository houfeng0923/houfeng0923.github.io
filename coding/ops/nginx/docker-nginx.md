
## docker nginx evn

### start container

docker run  --rm --name  mynginx -d -p 8080:80 -v ~/work/site:/usr/share/nginx/html:ro -d nginx

docker container run  --rm --name  mynginx -d -p 80:80
-v "$PWD/site":/usr/share/nginx/html
-v ~/somepage:/usr/share/nginx/somepage
-v "$PWD/site/files/nginx":/etc/nginx  nginx

### stop

docker container stop mynginx


## config



## 301


- [前端开发掌握nginx常用功能之rewrite](https://www.cnblogs.com/wonyun/p/10355574.html)


### todo list

- [ ]  301 /
- [ ] https [Nginx 容器教程 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2018/02/nginx-docker.html)
- [ ] http -> https
- [ ] http2 push [HTTP/2 服务器推送（Server Push）教程 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2018/03/http2_server_push.html)