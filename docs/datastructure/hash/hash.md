# 散列表的实现

HashTable 类，使用质数 137 限制数组长度：

```javascript
function HashTable() {
  this.table = new Array(137);
}
```

## 1. simpleHash 散列函数

散列函数的选择依赖于键值的数据类型，如果键是整型，最简单的散列函数就是以数组的长度对键取余。这种散列方式称为除留余数法。

键是字符串类型，可以将字符串中每个字符的 ASCII 码数值相加的和除以数组长度的余数。

```javascript
HashTable.prototype.simpleHash = function(key) {
  var total = 0;
  for (var i = 0; i < key.length; i++) {
    total += data.charCodeAt(i);
  }
  return total % this.table.length;
}
```

## 2. put 插入

参数为键值和对应的数据

```javascript
HashTable.prototype.put = function(key, data) {
  var pos = this.simpleHash(key);
  this.table[pos] = data;
}
```

## 3. get 获取

参数为键值

```javascript
HashTable.prototype.get = function(key) {
  return this.table[this.simpleHash(key)];
}
```

## 4. show 显示

```javascript
HashTable.prototype.show = function() {
  var n = 0;
  for (var i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + ': ' + this.table[i]);
    }
  }
}
```

