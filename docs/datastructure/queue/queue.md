# 队列的实现

数组本身就具有队列的方法，使用数组来实现队列就很顺理成章。数组的 `push` 方法可以在数组的末尾添加元素，`shift` 方法则可以删除数组的第一个元素。

构造出 Queue 类：

```javascript
function Queue() {
  this.dataStore = [];
}
```

## 1. enqueue 添加

向队尾添加一个元素，参数为要添加的元素

```javascript
Queue.prototype.enqueue = function (element) {
  this.dataStore.push(element);
}
```

## 2. dequeue 删除

删除并返回队首的元素

```javascript
Queue.prototype.dequeue = function () {
  return this.dataStore.shift();
}
```

## 3. front 读取队首

返回队首的元素

```javascript
Queue.prototype.front = function () {
  return this.dataStore[0];
}
```

## 4. back 读取队尾

返回队尾的元素

```javascript
Queue.prototype.back = function () {
  return this.dataStore[this.dataStore.length - 1];
}
```

## 5. toString 转换成字符串

返回队列的字符串形式

```javascript
Queue.prototype.toString = function () {
  var retStr = '';
  for (var i = 0; i < this.dataStore.length; i++) {
    retStr += this.dataStore[i] + '\n';
  }
  return retStr;
}
```

## 6. length 长度

返回队列的长度

```javascript
Queue.prototype.length = function () {
  return this.dataStore.length;
}
```

## 7. empty 判断空

判断队列是否为空

```javascript
Queue.prototype.empty = function () {
  if(this.dataStore.length == 0) {
    return true;
  } else {
    return false;
  }
}
```

## 8. clear 清空

清空队列

```javascript
Queue.prototype.clear = function () {
  this.dataStore = [];
}
```

