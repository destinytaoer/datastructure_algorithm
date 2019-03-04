// 顺序查找
function seqSearch(arr, data) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === data) {
      return i
    }
  }
  return -1
}

// 最大最小值
function findMin(arr) {
  let min = arr[0]
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}
function findMax(arr) {
  let max = arr[0]
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

// 自组织数据
function seqSearch(arr, data) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === data) {
      if (i > 0) {
        [arr[i], arr[i-1]] = [arr[i-1], arr[i]]
      }
      return i
    }
  }
  return -1
}

// 二分查找
function binSearch(arr, data) {
  let upper = arr.length - 1
  let lower = 0
  while (lower <= upper) {
    let mid = Math.floor((upper + lower) / 2)

    if (arr[mid] < data) {
      lower = mid + 1
    } else if (arr[mid] > data) {
      upper = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

// 计算重复次数
function count(arr, data) {
  let count = 0
  let position = binSearch(arr, data)

  if (position === -1) return count

  count++

  for (let i = position + 1; i > 0; i--) {
    if (arr[i] === data) {
      count++
    } else {
      break
    }
  }
  for (let i = position + 1; i < arr.length; i++) {
    if (arr[i] === data) {
      count++
    } else {
      break
    }
  }
}