# 字典的实现

Dictionary 类的基础是一个对象。

```javascript
function Dictionary() {
  this.dataStore = new Object();
}
```

## 1. add 添加

参数为键名和键值

```javascript
Dictionary.prototype.add = function(key, value) {
  this.dataStore[key] = value;
}
```

## 2. find 查找

参数为键名，返回对应键值

```javascript
Dictionary.prototype.find = function(key) {
  return this.dataStore[key];
}
```

## 3. remove 删除

参数为键名，删除对应键名的键值对，这里应该使用 `delete` 来删除对象中的属性。

```javascript
Dictionary.prototype.remove = function(key) {
  delete this.dataStore[key];
}
```

## 4. showAll 显示

显示所有的键值对

```javascript
Dictionary.prototype.showAll = function() {
  for (var key in this.dataStore) {
    console.log(key + ' -> ' + this.dataStore[key]);
  }
}
```

## 5. count 数量

返回键值对个数

```javascript
Dictionary.prototype.count = function() {
  var n = 0;
  for (var key in this.dataStore) {
    n++;
  }
  return n;
}
```

## 6. clear 清空

清空数据，这里同样使用 `delete`。

```javascript
Dictionary.prototype.clear = function() {
  for (var key in this.dataStore) {
    delete this.dataStore[key];
  }
}
```

## 7. 排序功能

字典的主要用途是通过键取值，所以不需要关心字典中实际的存储顺序。但是，在显示字典的时候，大多数人都希望显示一个有序的字典，方便查阅。通常以键名排序。

我们可以通过 `Object.keys()` 方法取出字典的所有键名，该方法返回的是一个数组，可以使用 `sort` 方法排序。再根据排序后的数组进行显示。

```javascript
Dictionary.prototype.showAll = function() {
  var keys = Object.keys(this.dataStore);
    keys.sort();// 这里只是简单的排序，也可以通过传入一个函数进行一些复杂的排序。
  for (var key in keys) {
    console.log(keys[key] + ' -> ' + this.dataStore[keys[key]]);
  }
}
```

