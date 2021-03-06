# 冲突处理

当散列函数对于多个输入产生同样的输出时，就产生了冲突。有两种冲突解决方法：开链法和线性探测法。

## 1. 开链法

当冲突发生时，我们仍然希望将键存储到通过散列算法产生的索引位置上，但实际上，不可能将多分数据存储到一个数组单元中。

开链法是指实现散列表的底层数组中，每个数组元素又是一个新的数据结构，如数组，这样就可以存储多个键了。

实现开链法的方法是：在创建存储键值的数组时，通过调用一个函数创建一个新的空数组，然后将该数组赋给散列表中的每个数组元素，来创建二维数组。

```javascript
HashTable.prototype.buildChains = function () {
  for (var i = 0; i< this.table.length; i++) {
    this.table[i] = new Array();
  }
}
```

为了更好的显示运用多维数组存储的散列表，需要修改 `show` 方法：

```javascript
HashTable.prototype.showDistro = function() {
  var n = 0;
  for (var i = 0; i < this.table.length; i++) {
    if (this.table[i][0]) {
      console.log(i + ': ' + this.table[i]);
    }
  }
}
```

同样，需要重新定义 `put` 和 `get` 方法：

```javascript
HashTable.prototype.put = function(key, data) {
  var pos = this.betterHash(key);
    var index = 0;
    if (!this.table[pos][index]) {
    this.table[pos][index] = key;
        this.table[pos][index+1] = data;
  } else {
    do {
      index++;
        } while (this.table[pos][index])
    this.table[pos][index] = key;
    this.table[pos][index+1] = data;
  }
}

HashTable.prototype.get = function(key) {
  var index = 0;
  var hash = this,betterHash(key);
  if (this.table[pos][index] == key) {
    return this.table[pos][index+1];
  } else {
    do {
      index += 2;
        } while (this.table[pos][index] != key)
    return this.table[pos][index+1];
  }
  return undefined;
}
```

## 2. 线性探测法

线性探测法隶属于一种更一般的散列技术：开放寻址法。

当冲突发生时，线性探测法检查散列表中的下一个位置是否为空，如果为空，就将数据存入该位置，如果不为空，则继续检查下一个位置，知道找到空位置为止。

该技术基于一个事实，每个散列表中都会有很多空余的位置，可以使用它们来存储数据。

当存储数据使用的数组特别大时，选择线性探测法要比开链法好。如果数组大小是待存储数据个数的 1.5 倍，使用开链法。如果数组大小大于或等于两倍，使用线性探测法。

为了实现线性探测法，需要需要为 HashTable 类新增一个与 `table` 同样大小的数组属性 `values` 用来存储数据，而原先的 `table` 则用来存储键值。数组 `table` 与 `values` 并行工作，当将一个键值保存在数组 `table` 时，将数据存入数组 `values` 中的相应位置中。

```javascript
function HashTable() {
  this.table = new Array(137);
  this.values = new Array(137);
}

HashTable.prototype.put = function(key, data) {
  var pos = this.betterHash(key);
  if (!this.table[pos]) {
    this.table[pos] = key;
    this.values[pos] = data;
  } else {
    while (this.table[pos]) {
      pos++;
    }
    this.table[pos] = key;
    this.values[pos] = data;
  }
}

HashTable.prototype.get = function(key) {
  var hash = -1;
  hash = this.betterHash(key);
  if (hash > -1) {
    for (var i = hash; this.table[hash]; i++) {
      if (this.table[hash] == key) {
        return this.values[hash];
      }
    }
  }
  return undefined;
}
```

