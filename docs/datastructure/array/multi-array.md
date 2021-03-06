# 二维和多维数组

JavaScript 只支持一维数组，但是通过在数组里保存数组元素的方式，可以轻松创建多维数组。

## 1. 创建二维数组

```javascript
var twod = [];
var rows = 5;
for (var i = 0; i < rows; i++) {
  twod[i] = [];
}
```

这样做的问题是，每个数组中的元素都是 `undefined`。更好的方式是通过扩展 JavaScript 数组对象，为其增加一个新方法，该方法根据传入参数，设定了数组的行数、列数和初始值。

```javascript
Array.matrix = function(numrows, numcols, initial) {
  var arr = [];
  for (var i = 0; i < numrows; i++) {
    var columns = [];
    for (var j = 0; j < numcols; j++) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
}
```

## 2. 处理二维数组的元素

处理二维数组中的元素，有两种最基本的方法：按行访问和按列访问。

```javascript
var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
var total = 0;
var average = 0.0;

//按行访问，可以处理每行元素个数相同的数组，也可以处理参差不齐的数组
for (var row = 0; row < grades.length; row++) {
  for (var col = 0; col < grades[row].length; col++) {
    total += grades[row][col];
  }
  average = total / grades[row].length;
  console.log("Student" + parseInt(row+1) + "average: " + average.toFixed(2));
  total = 0;
  average = 0.0;
}

//按列访问，只可以处理每行元素个数相同的数组
for (var col = 0; col < grades[0].length; col++) {
  for(var row = 0; row < grades.length; row++) {
    total += grades[row][col];
  }
  average = total / grades.length;
  console.log("course" + parseInt(col+1) + "average: " + average.toFixed(2));
  total = 0;
  average = 0.0;
}
```

参差不齐的数组无法按列访问。

