# 练习

## 实例应用

影碟查找和租赁

```javascript
function displayList(list) {
  for (list.front(); list.currentPos() < list.length(); list.next()) {
    if (list.getElement() instanceof Customer) {
      console.log(list.getElement().name + ',' + list.getElement().movie);
    } else {
      console.log(list.getElement());
    }
  }
}

function Customer(name, movie) {
  this.name = name;
  this.movie = movie;
}

function checkOut(name, movie, movieList, customerList) {
  if (movieList.find(movie) > -1) {
    var c = new Customer(name, movie);
    customerList.append(c);
    movieList.remove(movie)
  } else {
    console.log(movie + ' is available')
  }
}

var movie = ['aa', 'bb', 'cc']

var movieList = new List(movie);
var customerList = new List();

displayList(movieList)
checkOut('destiny', 'aa', movieList, customerList)
displayList(customerList)
displayList(movieList)
```

## 练习

1. 增加一个向列表中插入元素的方法，该方法只在待插元素大于列表中所有元素时才执行插入操作。这里的大于有多重含义，对于数字，它是指数值上的大小，对于字母，它是指在字母表中出现的先后顺序。
2. 增加一个向列表中插入元素的方法，该方法只在待插元素小于列表中所有元素时才执行插入操作。
3. 创建 Person 类，该类用于保存人的姓名和性别信息。创建一个至少包含 10 个 Person 对象的列表。写一个函数显示列表中所有拥有相同性别的人。
4. 修改影碟租赁程序，当一部影片检出后，将其加入一个已租影片列表。每当有客户检出一部影片，都显示该列表的内容。
5. 为影碟租赁程序创建一个 check-in 函数，当客户归还一部影片时，将该影片从已租列表中删除，同时添加到现有影片列表中。

