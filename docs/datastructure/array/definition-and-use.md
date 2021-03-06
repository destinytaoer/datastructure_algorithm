# 数组的定义与使用

## 1. 定义

数组的标准定义是：一个存储元素的线性集合，元素可以通过索引来任意存取，索引通常是数字，用来计算元素之间存储位置的偏移量。

JavaScript 中的数组最大的不同是：它是一种**特殊的对象**。用来表示偏移量的索引就是该对象的属性，索引是整数，这些数字索引在内部被转换为字符串类型，因为 JavaScript 中的对象的属性名必须是字符串。因此，效率上不如其他语言中的数组高。

## 2. 使用

### 2.1 创建数组

最简单的方式就是通过 `[]` 操作符声明一个数组变量：

```javascript
var number = []; // 得到一个空数组
```

可以在 `[]` 里面放入元素来直接初始化数组。

另一种就是通过调用 Array 构造函数创建数组：

```javascript
var number = new Array(); // 得到一个空数组
```

可以只传入一个整数来指定数组的长度，也可以传入多个参数来直接初始化元素。

> 脚本语言里很常见的一个特性是，数组中的元素不必是同一种数据类型

```javascript
var object = [1, "joe", true, null];
```

### 2.2 读写数组

需要通过循环和 `[]` 操作符来读写数组。

```javascript
var nums = [];
for (var i = 0; i < 100; i++) {
  nums[i] = i + 1;
}

var nums = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < 5; i++) {
  sum += nums[0];
}
```

### 2.3 复制数组

**浅复制**

```javascript
var nums = [1, 2, 3, 4, 5];
var samenums = nums;
```

当把一个数组赋值给另一个数组时，只是为被赋值的数组增加了一个新的引用，当你通过原引用修改了数组的值，另外一个引用也会感知到这个变化。

**深复制**

```javascript
function (arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i];
  }
}
var nums = [1, 2, 3, 4, 5];
var samenums = [];
copy(nums, samenums);
```

这里将原数组中的每一个元素都复制一份到新数组中。

### 2.4 对象中的数组

在对象中，可以使用数组来存储复杂的数据。大多数情况下，都是将数据实现为一个对象，对象内部使用数组保存数据，并保存一些操作数据的方法。

```javascript
function weekTemps() {
  this.dataStore = [];
  this.add = function() {};
  this.average = function() {};
}
```

### 2.6 由字符串生成数组

调用字符串对象的 `split()` 方法可以生成数组。通过一些常见的分隔符，如空格，将一个字符串分隔成多个部分，并将每个部分作为一个元素保存在一个新建数组中。

```javascript
var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" "); //使用空格分隔
// words: ["the", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
```

