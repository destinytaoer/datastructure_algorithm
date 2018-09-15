# 链表的实现

Node 类用来表示节点，LList 类实现链表

```javascript
function Node(element) {
  this.data = element;
  this.next = null;
}

function LList() {
  this.head = new Node('head');
}
```

## 1. find 查找

查找指定 item 值的节点，查找成功返回该节点，否则返回 `null`

```javascript
LList.prototype.find = function(item) {
  var curNode = this.head;
  while (curNode.data != item) {
    if (!curNode.next) {
      return null;
    } else {
      curNode = curNode.next;
    }
  }
  return curNode;
}
```

## 2. insert 插入

将新的节点插入到指定位置，成功返回 `true`，否则返回 `false`，说明查找插入位置的节点 `item` 不存在。

```javascript
LList.prototype.insert = function(element, item) {
  var newNode = new Node(element);
  var current = this.find(item);// 找到插入位置的节点
  if (current) {
    newNode.next = current.next;
    current.next = newNode;
    return true;
  } else {
    return false;
  }
}
```

## 3. remove 删除

从链表中删除节点，需要先找到待删除节点前面的节点。所以先要定义一个 `findPrevious()` 方法。

```javascript
// 查找某个节点的前一个节点
LList.prototype.findPrevious = function(item) {
  var curNode = this.head;
  while(curNode.next && curNode.next.data != item) {
    curNode = curNode.next;
  }
  return curNode;
}

// 删除某个元素
LList.prototype.remove = function(item) {
  var curNode = this.find(item); // 找到该节点
  var prevNode = this.findPrevious(item); // 找到该节点的前一个节点
  if (prevNode) {
    prevNode.next = curNode.next;
    curNode.next = null;
  } else {
      return false;
    }
}
```

## 4. display 显示

显示链表

```javascript
LList.prototype.display = function() {
  var curNode = this.head;
  while (curNode.next) {
    console.log(curNode.next.data);
    curNode = curNode.next;
  }
}
```

