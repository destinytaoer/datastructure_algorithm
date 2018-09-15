# 练习

## 实例应用

### 1. 数制间的相互转换

可以利用栈将一个数字从一个数制转换成另一个数制。

假设想将十进制数字 `n` 转换为以 `b` 为基数的数字，实现转换的算法如下： 1. 最高位为 `n%b`，将此位压入栈 2. 使用 `n/b` 代替 `n` 3. 重复上面步骤，知道 `n` 等于 `0`，且没有余数 4. 持续将栈内元素弹出栈，知道栈为空，依次将这些元素排列，就得到转换后数字的字符串形式。

这里的基数只限于 2-9 数制。

```javascript
function mulBase(num, base) {
  var s = new Stack();
    do {
      s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0)
    var converted = '';
    while (s.length() > 0) {
      converted +=s.pop();
    }
    return converted;
}
console.log(mulBase(10, 2)); // 1010
console.log(mulBase(10, 8)); // 12
```

### 2. 回文

回文是指一种现象：一个单词、短语或数字，从前往后写和从后往前写都是一样的。如单词 dad，数字 101等

使用栈，可以很轻松的判断一个字符串是否是回文。我们将拿到的字符串的每个字符按从左到右的顺序压入栈中。当字符串中的字符都压入栈后，栈内就保存了一个反转后的字符串。

```javascript
function isPalindrome(word) {
  var s = new Stack();
  for (var i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  var rword = '';
  while (s.length() > 0) {
    rword += s.pop();
  }
  if (word == rword) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome('abccba')); // true
console.log(isPalindrome('1010')); // false
```

### 3. 递归演示

栈常常被用来实现编程语言，使用栈实现递归即为一例。这里只用栈来模拟递归。

求解阶乘：

```javascript
// 常规
function factorial(n) {
  if (n === 0) {
      return i
    } else {
      return n * factorial(n-1);
    }
}
// 栈模拟
function fac(n) {
  var s = new Stack();
    while (n > 1) {
      s.push(n--);
    }
    var product = 1;
    while (s.length() > 0) {
      product *= s.pop();
    }
    return product;
}
console.log(factorial(5)); // 120
console.log(fac(5)); // 120
```

## 练习

1. 栈可以用来判断一个算术表达式中的括号是否匹配。编写一个函数，该函数接受一个算数表达式作为参数，返回括号缺失的位置。
2. 一个算数表达式的后缀表达式形式如下：op1 op2 operator，使用两个栈，一个用来存储操作数，另一个用来存储操作符，设计并实现一个函数，该函数可以将中缀表达式转换为后缀表达式，然后利用栈对表达式求值。
3. 现实生活中栈的一个例子是佩兹糖果盒。想象一下你有一盒佩兹糖果，里面塞满了红色、黄色和白色的糖果，但是你不喜欢黄色的糖果。使用栈写一段程序，在不改变盒内其他糖果的叠放顺序的基础上，将黄色糖果移出

