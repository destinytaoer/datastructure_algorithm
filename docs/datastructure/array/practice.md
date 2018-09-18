# 练习

1. 创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法。
2. 将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词
3. 创建一个对象，使它可以使用一个二维数组来存储每月的有用数据。编写一些方法实现添加数据、显示月平均数、具体某一周平均数和所有周的平均数。
4. 创建一个对象，它将字母存储在一个数组中，并且用一个方法可以将字母连在一起，显示成一个单词。

## 参考答案

1

```javascript
function Grades(grades) {
  this.grades = grades;
}

//查找，参数为字符串名字，查找成功返回 1，并打印该人成绩；查找失败返回 -1。
Grades.prototype.search = function(name) {
  for(var i = 0; i < this.grades.length; i++){
    if(this.grades[i][0] == name) {
      console.log(this.grades[i]);
      return 1;
    }
  }
  console.log("Not Found");
  return -1;
};

//添加成绩，参数为数组：名字和成绩，把这个数组添加进成绩表的二维数组。
Grades.prototype.addGrades = function(grade) {
  this.grades.push(grade);
  console.log("添加成功");
  return true;
};

//显示学生平均成绩，参数为名字，找到其位置，计算并打印其平均成绩。
Grades.prototype.showAverage = function(name) {
  var total = 0;
  var average = 0;
  var foundAt = this.search(name);
  if(foundAt > -1) {
    for(var j = 1; j < this.grades[foundAt].length; j++) {
      total += this.grades[foundAt][j];
    }
    average = total / (this.grades[foundAt].length - 1);
    console.log(average);
    return average;
  }
  console.log("未找到该学生");
  return -1;
};
```

