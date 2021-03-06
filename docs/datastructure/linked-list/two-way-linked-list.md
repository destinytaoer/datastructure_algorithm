# 双向链表

双向链表是指既可以从前往后遍历，又可以从后往前遍历的链表。

通过给 Node 类添加一个属性，该属性保存着指向前驱节点的引用，就可以实现双向链表。

```javascript
function Node(element) {
  this.data = element;
  this.next = null;
  this.previous = null;
}
```

在修改这个类之后，LList 类的方法也应该做出相应的改变以实现完整的功能。

## 1. insert 插入

`find` 方法不变，对 `insert` 内部添加前驱的指向

```javascript
LList.prototype.insert = function(element, item) {
  var newNode = new Node(element);
  var curNode = this.find(item);
  if (curNode) {
    newNode.next = curNode.next;
    newNode.previous = curNode;
    if (curNode.next) {
      curNode.next.previous = newNode;
    }
    curNode.next = newNode;
    return true;
  } else {
    return false;
  }
}
```

## 2. remove 删除

这里将不再需要 `findPrevious` 方法，直接由节点的 `previous` 属性取代。

```javascript
LList.prototype.remove = function(item) {
  var curNode = this.find(item);
  if (curNode) {
    curNode.previous.next = curNode.next;
    if (curNode.next) {
      curNode.next.previous = curNode.previous;
    }
    curNode.next = null;
    curNode.previous = null;
  }
}
```

## 3. displayReserve 反向显示

为了方便，可以先定义一个 `findLast` 方法，直接找到最后一个节点，方便以后的遍历。

```javascript
// 直接找到最后一个节点，避免每次都从前遍历到最后
LList.prototype.findLast = function() {
  var curNode = this.head;
  while (curNode.next) {
    curNode = curNode.next;
  }
  return curNode;
}

// 从后往前遍历显示
LList.prototype.displayReverse = function() {
  var curNode = this.findLast();
  while (curNode.previous) {
    console.log(curNode.data);
    curNode = curNode.previous;
  }
}
```

