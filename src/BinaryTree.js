function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

Node.prototype.show = function () {
  console.log(this.data);
}

// 二叉查找树
function BST() {
  this.root = null;
}

BST.prototype = {
  insert,
  inOrder,
  preOrder,
  postOrder,
  min,
  max,
  find,
  remove
}

// 插入节点
function insert(data) {
  let newNode = new Node(data);

  if (this.root === null) {
    this.root = newNode;
  } else {
    let current = this.root,
      parent;
    while (current) {
      parent = current;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    if (data < parent.data) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }
  }
}

// 先序遍历
function preOrder(node) {
  if (node === null) return;
  if (typeof node === 'undefined') {
    node = this.root;
  }
  node.show();
  preOrder(node.left);
  preOrder(node.right);
}

// 中序遍历
function inOrder(node) {
  if (node === null) return;
  if (typeof node === 'undefined') {
    node = this.root;
  }
  inOrder(node.left);
  node.show();
  inOrder(node.right);
}

// 后序遍历
function postOrder(node) {
  if (node === null) return;
  if (typeof node === 'undefined') {
    node = this.root;
  }
  postOrder(node.left);
  postOrder(node.right);
  node.show();
}

// 获取最小节点
function min() {
  if (this.root === null) return null;

  let current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  return current;
}

// 获取最大节点
function max() {
  if (this.root === null) return null;

  let current = this.root;
  while (current.right !== null) {
    current = current.right;
  }
  return current;
}

// 查找某个节点
function find(data) {
  let current = this.root;

  while (current !== null) {
    if (current.data === data) {
      return current;
    } else if (current.data < data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return null;
}

// 移除某个节点
function remove(data) {
  this.root = this._removeNode(this.root, data)
}

function _removeNode(node, data) {
  if (node === null) {
    return null
  }

  if (data === node.data) {
    // 没有子节点
    if (node.left === null && node.right === null) {
      return null // 该节点变为空
    }
    // 只有右节点
    if (node.left === null) {
      return node.right // 该节点变为其右子节点
    }
    // 只有左节点
    if (node.right === null) {
      return node.left // 该节点变为其左子节点
    }

    // 有两个节点
    let tempNode = this.min.call(node.right) // 这里使用 getMin 方法获取右子树的最小值节点
    node.data = tempNode.data
    node.right = this._removeNode(node.right, tempNode.data)
    return node
  }
  else if (data < node.data) {
    node.left = this._removeNode(node.left, data)
    return node
  } else {
    node.right = this._removeNode(node.right, data)
    return node
  }
}
