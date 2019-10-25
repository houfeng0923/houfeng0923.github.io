## sudoku

标准出题:

- 30 个提示为限
- 旋转 180 度 仍然相同


## 解法


### 基本解法

0. 唯一数

![](http://www.sudokufans.org.cn/forums/uploads/monthly_05_2010/post-2-1274163996_thumb.png)

1. 摈除法

宫/行/列摈除

![宫摈除](http://www.sudokufans.org.cn/forums/uploads/monthly_05_2010/post-2-1273909567_thumb.png)

![行摈除](http://www.sudokufans.org.cn/forums/uploads/monthly_05_2010/post-2-1274019279_thumb.png)

![列摈除](http://www.sudokufans.org.cn/forums/uploads/monthly_05_2010/post-2-1274244422_thumb.png)

![行摈除 2](http://www.sudokufans.org.cn/forums/uploads/monthly_05_2010/post-2-1274019175_thumb.png)

> 可以发现在上述的例子中，观察的困难度也越来越高，在最后一个例子里的数字3对R1摒除的动作是很难想到的。
为什么行列摒除会比宫摒除难呢？宫摒除的聚焦点是一个宫，一道题有九个宫，需要观察摒除数的位置可能在其他四个宫里；而行列摒除的聚焦点是一行或一列，一道题有九行和九列，需要观察的摒除数可能分布在全盘，也就是说观察范围是宫摒除的整整一倍之多。

[行列摈除训练图](http://www.sudokufans.org.cn/forums/applications/core/interface/file/attachment.php?id=117)

2. (唯一)余数法

![](http://www.sudokufans.org.cn/forums/uploads/monthly_05_2010/post-2-1274244564_thumb.png)


![](http://www.sudokufans.org.cn/forums/uploads/monthly_05_2010/post-2-1274247816_thumb.png)

> 唯余的难度在于寻找哪一格是唯余格。
> 从前面的例子中可以看到，寻找空格数比较少的单元比较容易找到唯余解。


一道唯余法练习题:

![](http://www.sudokufans.org.cn/forums/uploads/monthly_05_2010/post-2-1274351092_thumb.png)

### 组合解法

3. 区块摈除法



4. 数对法








## refs


[标准数独技巧导读帖](http://www.sudokufans.org.cn/forums/topic/69/)
[标准数独解题之旅（用一道数独题讲解最基本的5种解题技巧）](http://www.sudokufans.org.cn/forums/topic/8/)

