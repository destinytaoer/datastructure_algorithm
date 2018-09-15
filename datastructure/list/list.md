# 列表的实现

根据定义的列表抽象数据类型，可以直接实现一个 List 类。

```javascript
function List(arr=[]) {
  this.listSize = arr.length || 0;
  this.pos = 0;
  this.dataStore =  arr || [];
}
```

## 1. append 添加

添加元素，参数为元素，在数组末尾添加元素。

```javascript
List.prototype.append = function (element) {
  this.dataStore[this.listSize++] = element;
}
```

## 2. find 查找

查找元素，参数为元素，查找成功返回其位置；查找失败返回 `-1`。

```javascript
List.prototype.find = function (element) {
  for (var i = this.listSize - 1; i >= 0; i--) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}
```

## 3. remove 删除

删除元素，参数为元素或者元素位置，先查找元素，再将其删除，删除成功返回 `true`；查找失败或删除失败返回 `false`。

```javascript
List.prototype.remove = function (element) {
  var foundAt;
  if (typeof element === 'number') {
       foundAt =element;
  } else {
      foundAt = this.find(element);
    }


  if (foundAt > -1 && foundAt < this.listSize) {
    this.dataStore.splice(foundAt, 1);
    this.listSize--;
    return true;
  }
  return false;
}
```

## 4. insert 插入

插入元素，参数为要插入的元素以及插入位置，插入成功返回 `true`；插入失败返回 `false`。

```javascript
List.prototype.insert = function (element, insertPos) {
  if (insertPos > -1 && insertPos < this.listSize) {
    this.dataStore.splice(insertPos + 1, 0, element);
    this.listSize++;
    return true;
  }
  return false;
}
```

## 5. length 长度

列表长度，返回列表元素个数

```javascript
List.prototype.length = function () {
  return this.listSize;
}
```

## 6. show 显示

显示列表中的元素，输出并返回数组

```javascript
List.prototype.show = function () {
  console.log(this.dataStore)
    return this.dataStore
}
```

## 7. clear 清空列表

```javascript
List.prototype.clear = function () {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}
```

## 8. 迭代器方法

使用迭代器，可以不必关心数据的内部储存方式，以实现对列表的遍历。

和使用数组索引的方式相比，使用迭代器有以下优点：

* 访问列表元素时不必关心底层的数据存储结构
* 当为列表添加元素时，索引的值就不对了，此时只用更新列表，而不用更新迭代器
* 可以用不同类型的数据结构存储方式实现 List 类，迭代器为访问列表里的元素提供了一种统一的方式

使用迭代器遍历列表：

```javascript
for (names.front(); names.currentPos() < names.length(); names.next()) {
  console.log(names.getElement());
}
```

> **注意**：迭代器遍历容易陷入死循环，原因在于 `next` 方法无法突破列表长度，也就是到一定程度不会再增加，判断条件将一直正确，所以不应该限制 `next` 和 `prev`

**迭代器只是用来在列表上随意移动，而不应该和任何为列表增加和删除元素的方法一起使用**。

### 8.1 front

当前位置回到开头

```javascript
List.prototype.front = function () {
  this.pos = 0;
}
```

### 8.2 end

当前位置跳到最后

```javascript
List.prototype.end = function () {
  this.pos = this.listSize - 1;
}
```

### 8.3 next

当前位置往后移一位，注意这里 pos 应当可以超过列表的长度，否则使用迭代器遍历会陷入死循环

```javascript
List.prototype.next = function () {
  this.pos++;
}
```

### 8.4 prev

当前位置向前移一位

```javascript
List.prototype.prev = function () {
  this.pos--;
}
```

### 8.5 currentPos

返回当前位置

```javascript
List.prototype.currentPos = function () {
  return this.pos;
}
```

### 8.6 moveTo

移动到某一位置

```javascript
List.prototype.moveTo = function (position) {
  if (position < this.listSize && position >= 0) {
    this.pos = position;
  }
}
```

### 8.7 getElement

获取当前位置元素

```javascript
List.prototype.getElement = function () {
  return this.dataStore[this.pos];
}
```

