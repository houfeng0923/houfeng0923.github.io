### vpn

1. 安全组设置  ssh 成功登陆

2. root

	sudo passwd root
	su root

3. install

	sudo apt-get update
	apt-get install python-pip
	pip install shadowsocks

	``` if  locale error:

		export LC_ALL="en_US.UTF-8"
		export LC_CTYPE="en_US.UTF-8"
		sudo dpkg-reconfigure locales

	```

4. config  vi /etc/shadowsocks.json

```
{
    "server":"0.0.0.0",
    "server_port":8888,
    "local_address":"127.0.0.1",
    "local_port":1080,
    "password":"iloveyou",
    "timeout":300,
    "method":"aes-256-cfb",
    "fast_open":false
}
```

配置安全组(http://upload-images.jianshu.io/upload_images/6734027-24701258411362fb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

5. ssserver -c /etc/shadowsocks.json -d start

6. 配置客户端 shadowsocksx for mac

    [download](https://github.com/shadowsocks/shadowsocks-iOS/releases)


## webserver

1. su root

2. install nvm -> node -> hs / forever

3. forever start -c 'hs -p 80' .

4. 配置安全组(开启80端口)

