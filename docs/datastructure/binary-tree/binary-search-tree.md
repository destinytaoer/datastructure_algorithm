# 二叉查找树的实现

## 二叉查找树的实现

二叉查找树由节点组成，所以我们要定义一个 Node 对象作为存储结构。 有三种方法实现树的存储结构也就是 Node 对象：

* 父亲表示法：只存存储数据和父节点的指针
* 孩子表示法：存储数据以及左右孩子节点的指针（另外也可以有父节点的指针，使用三叉链表）
* 孩子兄弟表示法：存储数据以及左孩子和兄弟节点的指针

这里使用第二种

```javascript
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}
Node.prototype.show = function() {
  return this.data;
}

function BST() {
  this.root = null;
}
```

## insert 插入

```javascript
var n =
```

