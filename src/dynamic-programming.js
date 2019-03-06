// 动态规划

// 斐波那契数列 0 1 1 2 3 5 8 13 21 34 55...

// 递归实现
function recurFib(n) {
  if (n < 2) return n
  return recurFib(n - 1) + recurFib(n - 2)
}

console.time('recur')
recurFib(30)
console.timeEnd('recur')

// 动态规划实现
function dynFib(n) {
  let val = []

  if (n < 2) return n
  
  val[0] = 0
  val[1] = 1

  for (let i = 2; i <= n; i++) {
    val[i] = val[i - 1] + val[i - 2]
  }
  return val[n]
}

console.time('dyn')
dynFib(30)
console.timeEnd('dyn')

// 不需要保存的迭代方法
function iterFib(n) {
  if (n < 2) return n
  let last = 1
  let nextLast = 1
  let result = 1
  for (let i = 2; i < n; i++) {
    result = last + nextLast
    nextLast = last
    last = result
  }
  return result
}

function lcs(str1, str2) {
  let max = 0
  let index = 0
  // 初始化二维数组
  let lcsArr = new Array(str1.length + 1)

  for (let i = 0; i <= str1.length; i++) {
    lcsArr[i] = new Array(str2.length + 1)
    for (let j = 0; j < str2.length; j++) {
      lcsArr[i][j] = 0
    }
  }
  // 构建用于保存字符串匹配记录的表
  for (let i = 0; i <= str1.length; i++) {
    for (let j = 0; j <= str2.length; j++) {
      
      if (i === 0 || j === 0) {
        lcsArr[i][j] = 0;
      } else {
        if (str1[i - 1] === str2[j - 1]) {
          lcsArr[i][j] = lcsArr[i - 1][j - 1] + 1
        } else {
          lcsArr[i][j] = 0
        }
      }
      if (max < lcsArr[i][j]) {
        max = lcsArr[i][j]
        index = i
      }
    }
  }

  // 确定从哪里开始构建最长公共子串
  let str = ''
  if (max === 0) return ""
  for (let i = index - max; i < index; i++) {
    str += str1[i]
  }
  return str
}

console.log(lcs('abbcc', 'dbbcc'))
function max(a, b) {
  return a > b ? a : b
}
function recurPackage(content, sizes, values, n) {
  if (n === 0 || content === 0) return 0
  if (sizes[n - 1] > content) {
    return recurPackage(content, sizes, values, n - 1)
  } else {
    return max(values[n - 1] + recurPackage(content - sizes[n - 1], sizes, values, n - 1), recurPackage(content, sizes, values, n - 1))
  }
}
let sizes = [3, 4, 7, 8, 9]
let values = [4, 5, 10, 11, 13]
let content = 16
let n = 5

console.log(recurPackage(content, sizes, values, n));

function dynPackage(content, sizes, values, n) {
  let k = []
  for (let i = 0; i <= n + 1; i++) {
    k[i] = []
  }

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= content; j++) {
      if (i === 0 || j === 0) {
        k[i][j] = 0
      } else if (sizes[i - 1] <= j) {
        k[i][j] = max(values[i - 1] + k[i - 1][j - sizes[i - 1]], k[i - 1][j])
      } else {
        k[i][j] = k[i - 1][j]
      }
    }
    console.log(k[i]);
  }
  return k[n][content]
}

console.log(dynPackage(content, sizes, values, n));