# 集合的实现

创建一个 Set 类

```javascript
function Set() {
  this.dataStore = [];
}
```

## 1. size 长度

返回元素的个数

```javascript
Set.prototype.size = function() {
  return this.dataStore.length;
};
```

## 2. add 添加

添加元素，成功则返回 `true`，否则返回 `false`。避免重复的元素被添加。

```javascript
Set.prototype.add = function(data) {
  if (this.dataStore.indexOf(data) < 0) {
    this.dataStore.push(data);
    return true;
  } else {
    return false;
  }
};
```

## 3. remove 删除

删除元素，成功则返回 `true`，否则返回 `false`

```javascript
Set.prototype.remove = function(data) {
  var pos = this.dataStore.indexOf(data);
  if (pos > -1) {
    this.dataStore.splice(pos, 1);
    return true;
  } else {
    return false;
  }
};
`
```

## 4. show 显示

显示所有元素

```javascript
Set.prototype.show = function() {
  console.log(this.dataStore);
};
```

## 5. contains 包含

判断集合是否包含某元素

```javascript
Set.prototype.contains = function(data) {
  if (this.dataStore.indexOf(data) > -1) {
    return true;
  } else {
    return false;
  }
};
```

## 6. union 并集

并集操作，返回一个新的集合包含两个集合中所有不同的元素

```javascript
Set.prototype.union = function(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; i++) {
    tempSet.add(this.dataStore[i]);
  }
  for (var i = 0; i < set.dataStore.length; i++) {
    tempSet.add(set.dataStore[i]);
  }
  return tempSet;
};
```

## 7. intersect 交集

交集操作，返回一个新的集合包含两个集合中共同拥有的元素，

```javascript
Set.prototype.intersect = function(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; i++) {
    if (set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
};
```

## 8. difference 补集

补集操作，返回一个集合，包含属于第一个集合但不属于第二个集合的元素

```javascript
Set.prototype.difference = function(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; i++) {
    if (!set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
};
```

## 9. subset 子集

判断该集合是否为参数集合的子集

```javascript
Set.prototype.subset = function(set) {
  if (this.size() > set.size()) {
    return false;
  } else {
    for (var data in this.dataStore) {
      console.log(data)
      if (!set.contains(data)) {
        return false;
      }
    }
  }
  return true;
}
```

