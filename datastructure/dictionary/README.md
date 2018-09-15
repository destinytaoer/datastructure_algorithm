# 字典

字典是一种以键值对形式存储数据的数据结构，查找 `key`，就能得到相应的 `value`。

JavaScript 中的 Object 类就是以字典的形式设计的，所以可以直接把对象当作字典来使用，但是定义一个 Dictionary 类更方便。

## 属性和方法

* dataStore：用于存储键值对数据，是一个对象
* add\(key, value\)：添加数据
* find\(key\)：查找数据
* remove\(key\)：删除数据
* showAll\(\)：显示所有键值对
* count\(\)：返回字典元素个数
* clear\(\)：清空字典

