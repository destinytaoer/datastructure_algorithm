# 循环链表

循环链表和单向链表类似，节点类型都是一样的。唯一的区别是，最后的一个节点的下一个节点会指向 `head` 头节点。

最主要的修改是，在创建链表时，让头节点的 next 属性指向其本身。

```javascript
function LList() {
  this.head = new Node('head');
  this.head.next = this.head;
}
```

其次，因为循环，所以任何节点的下一个节点都不会是 `null`。需要修改所有关于 `curNode.next` 的判断为 `curNode.next.data == 'head'`

