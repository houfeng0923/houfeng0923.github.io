

## font-family

> font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
> font-family: Helvetica, Tahoma, Arial, STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑", SimSun, "宋体", Heiti, "黑体", sans-serif;

- 按顺序组成使用优先级
- 字体有空格使用引号
- 最后+ `通用字体族`


### 常见通用字体族

> 可以简单理解为在所有字体都是失效的情况下，浏览器从字体族中选择一种字体来显示

- sans-serif（非衬线字体） 移动端推荐
- serif（衬线字体）


衬线字体，通常是指使用末端加强原则的字体，通过在文字末端加入细小变化来改变小号文字的可读性；
非衬线字体字条比较均匀，所以在小号文字下的可读性不如衬线字体;
衬线字体适合小号文字的显示，如果使用非衬线字体要保证font-size足够大，以确保正文内容的可读性。11px下的英文推荐使用衬线字体，对于中文，无论如何都不推荐11px下显示。


### @font-face


- [中文webfont 提取: 字蛛](http://font-spider.org/)
- [icon-font字体解决方案](https://cnodejs.org/topic/55715ef4c4e7fbea6e9a2e7c)
- [iconfont.cn](http://iconfont.cn/)
- [justfont.cn](http://www.justfont.com/cheats)

### convert 

- [to.png](http://fa2png.io/r/brandico/lastfm/)


### mobile

```
font-family: "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
```

- iOS 4.0+ 使用英文字体 Helvetica Neue，之前的iOS版本降级使用 Helvetica，中文字体设置为华文黑体STHeiTi。（补充，ios9 系统内置苹方字体，给中文字体带来了新的选择。[参考](http://note.rpsh.net/posts/2015/11/18/using-pingfang-font-in-website/) ）
- 原生Android下中文字体与英文字体都选择默认的无衬线字体，4.0之前版本英文字体原生Android使用的是Droid Sans，中文字体原生Android会命中Droid Sans Fallback，4.0+ 中英文字体都会使用原生Android新的Roboto字体。其他第三方Android系统也一致选择默认的无衬线字体。
- 最后加上Arial字体方便pc端查看效果。



### references 

- [tenent 字体设置](https://github.com/AlloyTeam/Mars/blob/master/solutions/font-family.md)
- [Web 中文字体应用指南](https://ruby-china.org/topics/14005)