# 栈的实现

采用数组作为存储数据的底层数据结构，来实现一个栈。

定义一个 Stack 类

```javascript
function Stack() {
  this.dataStore = [];
  this.top = 0;
}
```

## 1. push入栈

传入参数为入栈的元素

```javascript
Stack.prototype.push = function(element) {
  this.dataStore[this.top++] = element;
}
```

## 2. pop 出栈

弹出一个元素，并返回这个元素

```javascript
Stack.prototype.pop = function() {
  return this.dataStore[--this.top];
}
```

## 3. peek 预览

返回栈顶元素

```javascript
Stack.prototype.peek = function() {
  return this.dataStore[this.top - 1];
}
```

## 4. length 长度

返回栈的长度

```javascript
Stack.prototype.length = function() {
  return this.top;
}
```

## 5. clear 清空

清空栈

```javascript
Stack.prototype.clear function() {
  this.top = 0;
}
```

