# 练习

## 实例应用

### 1. 舞伴分配

我们经常用队列模拟排队的人。

* 当男男女女来到舞池，他们按照自己的性别排成两队。
* 当舞池中有地方空出来时，选两个队列中的第一个人组成舞伴。
* 他们身后的人各自往前移动一位，变成新的队首。
* 当一对舞伴迈入舞池是，主持人会大声喊出他们的名字。
* 当一对舞伴走出舞池，且两排队伍中有任意一队没人时，主持人也会把情况告诉大家。

```javascript
// 使用 Dancer 对象存储每个舞者的信息
function Dancer(name, sex) {
  this.name = name;
  this.sex = sex;
}

// 读取舞者信息，并分配不同队列
function getDancers(dancers, males, females) {
  for (var i = 0; i < dancers.length; i++) {
    var sex = dancers[i][0];
    var name = dancers[i][1];
    if (sex == 'F') {
      females.enqueue(new Dancer(name, sex));
    } else {
      males.enqueue(new Dancer(name, sex));
    }
  }
}

// 组成舞伴开始跳舞
function dance(males, females) {
  if (!males.empty() && !females.empty()) {
    console.log('下一对是：');
    console.log(females.dequeue().name + '女士和' + males.dequeue().name + '男士');
  } else if (males.empty() && !females.empty()) {
    console.log(females.front().name + '女士在等待舞伴');
  } else if (!males.empty() && females.empty()){
    console.log(males.front().name + '男士在等待舞伴');
  } else {
    console.log('舞会结束');
  }
}

var maleDancers = new Queue();
var femalesDancers = new Queue();
var dancers = [['F', 'amy'], ['M', 'selldon'], ['F', 'penny'], ['M', 'lenerd'], ['F', 'emily']];
getDancers(dancers, maleDancers, femalesDancers);

dance(maleDancers, femalesDancers)
```

### 2. 基数排序

队列不仅用于执行现实生活中与排队有关的操作，还可以用于对数据进行排序。

计算机刚刚出现时，程序通过穿孔卡输入主机，每张卡包含一条程序语句。这些穿孔卡装在一个盒子里，经过一个机械装置进行排序。我们可以使用一组队列来模拟这一过程，这种排序技术就叫做基数排序。

对于 0-99 的数字，基数排序将数据集扫描两次。

* 第一次按个位上的数字进行排序
* 第二次按十位上的数字进行排序
* 每个数字根据对应位上的数值被分到不同的盒子里。

如 91，46，85，15，92，35，31，22 在第一次排序后：91，31，92，22，85，15，35，46 在第二次排序后：15，22，32，35，46，85，91，92

使用队列来代表盒子，可以实现这个算法。

* 我们需要九个队列，每个对应一个数字，将所有队列保存在一个数组中
* 使用取余和除法操作来获取个位和十位
* 剩余部分就是把数字加入相应的队列，根据个位数值对其重新排序，然后再根据十位上的数值进行排序

```javascript
// 将数字分配到相应的队列，digit为1时，按个位分配，digit为10时，按十位分配
function distribute(nums, queues, digit) {
  for (var i = 0; i < nums.length; i++) {
    if (digit == 1) {
      queues[nums[i] % 10].enqueue(nums[i]);
    } else {
      queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
    }
  }
}

// 按照队列的顺序把排序好的数字重新放入数组中
function collect(queues, nums) {
  var i = 0;
  for (var digit = 0; digit < 10; digit++) {
    while (!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue();
    }
  }
}

// 显示数组
function dispArray(arr) {
  console.log(arr);
}

var queues = [];
for (var i = 0; i < 10; i++) {
  queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; i++) {
  nums[i] = Math.floor(Math.random() * 100);
}
dispArray(nums);
distribute(nums, queues, 1);
collect(queues, nums);
dispArray(nums);
distribute(nums, queues, 10);
collect(queues, nums);
dispArray(nums);
```

### 3. 优先队列

在一般情况下，从队列中删除元素，一定是最先入队的元素。但是也有一些使用队列的应用，在删除元素时，不完全遵守先进先出的约定，这种应用，需要使用一个叫做优先队列的数据结构进行模拟。

* 从优先队列中删除元素，需要考虑优先权的限制
* 如医院急诊科的候诊室，会根据病情的严重性，进行优先级确定。
* 高优先级的患者先就医，同优先级的按照先后顺序就医

```javascript
// 定义存储队列元素的病人对象，优先码小的优先级高。
function Patient(name, code) {
  this.name = name;
  this.code = code;
}

// 重新定义队列类的 dequeue 方法
Queue.prototype.dequeue = function () {
  var index = 0;
  var priority = this.dataStore[0].code;
  for (var i = 1; i < this.dataStore.length; i++) {
    if(this.dataStore[i].code < priority) {
      index = i;
      priority = this.dataStore[i].code;
    }
  }
  return this.dataStore.splice(index, 1);
}

// 显示队列
Queue.prototype.show = function () {
  var retStr = '';
  for (var i = 0; i < this.dataStore.length; i++) {
    retStr += this.dataStore[i].name + ' ' + this.dataStore[i].code + '\n';
  }
  console.log(retStr);
  return retStr;
}
var p = new Patient('selldon', 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient('amy', 4);
ed.enqueue(p);
p = new Patient('penny', 6);
ed.enqueue(p);
p = new Patient('lenerd', 1);
ed.enqueue(p);
p = new Patient('howerd', 1);
ed.enqueue(p);
ed.show();
console.log(ed.dequeue());
console.log(ed.dequeue());
console.log(ed.dequeue());
console.log(ed.dequeue());
```

## 练习

1. 修改 Queue 类，形成 Deque 类。这是一个和队列类似的数据结构，允许从队列两端添加和删除元素，因此也叫双向队列。写一段测试程序测试该类。
2. 使用前面完成的 Deque 类来判断一个给定单词是否为回文。
3. 修改优先队列，使得优先级高的元素优先码也大。写一段程序测试你的改动。
4. 修改优先队列的候诊室程序，使得候诊室内的活动可以被控制。写一个类似菜单系统，让用户可以进行选择：
   * 患者进入候诊室
   * 患者就诊
   * 显示等待就诊患者名单

