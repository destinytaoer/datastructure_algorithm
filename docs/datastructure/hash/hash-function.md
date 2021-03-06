# 散列函数

## 1. 散列化字符串

### 1.1 simpleHash

散列函数的选择依赖于键值的数据类型，如果键是整型，最简单的散列函数就是以数组的长度对键取余。这种散列方式称为除留余数法。

键是字符串类型，可以将字符串中每个字符的 ASCII 码数值相加的和除以数组长度的余数。

```javascript
HashTable.prototype.simpleHash = function(data) {
  var total = 0;
  for (var i = 0; i < data.length; i++) {
    total += data.charCodeAt(i);
  }
  return total % this.table.length;
}
```

但是这样的散列函数会发生冲突，出现值被覆盖的现象，需要对其进行改善。

### 1.2 betterHash

为了避免冲突，首先要确保散列表中用来存储的数组其大小是个质数，这和计算散列值时使用的取余运算有关。数组的长度应该在 100 以上，这是为了让数据在散列表中分布得更加均匀。

在给散列表一个合适的大小后，接下来要有一个计算散列更好的方法。这里使用**霍纳算法**。

在此算法中，新的散列函数仍然先计算字符串中各字符的 ASCII 码值，不过求和时，每次要乘以一个质数。建议使用一个较小的质数，如 31，但这里使用 37，刚好不会产生冲突。

```javascript
HashTable.prototype.betterHash = function(data) {
  var H = 37;
  var total = 0;
  for (var i = 0; i < data.length; i++) {
    total = H * total + data.charCodeAt(i);
  }
  total = total % this.table.length;
  if (total < 0) {
    total += this.table.length - 1;
  }
  return parseInt(total);
}
```

## 2. 散列化整型键

使用学生的成绩作为数据集，将随机产生一个 9 位数的键，用以识别学生身份和一门成绩。

```javascript
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuData(arr) {
  for (var i = 0;i<arr.length;i++) {
    var num = '';
    for(var j =1;j <= 9;j++) {
      num += Math.floor(Math.random()*10);
    }
    num += getRandomInt(50, 100); // 这里使用随机 50-100 表示成绩
    arr[i] = num;
  }
}
```

散列函数可以直接通过将生成的学生 ID 里的数字相加，使用前面的 `simpleHash` 计算出散列值。当然更好的还是使用 `betterHash` 来减少冲突。

