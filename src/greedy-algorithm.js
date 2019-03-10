// 找零问题
function makeChange(origAmt, coins) {
  let remainAmt = 0
  if (origAmt % 10 < origAmt) {
    coins[3] = parseInt(origAmt / 10)
    remainAmt = origAmt % 10
    origAmt = remainAmt
  }
  if (origAmt % 5 < origAmt) {
    coins[2] = parseInt(origAmt / 5)
    remainAmt = origAmt % 5
    origAmt = remainAmt
  }
  if (origAmt % 2 < origAmt) {
    coins[1] = parseInt(origAmt / 2)
    remainAmt = origAmt % 2
    origAmt = remainAmt
  }

  coins[0] = parseInt(origAmt / 1)
}

// 背包问题
function package(values, weights, capacity) {
  let load = 0
  let i = 0
  let w = 0
  
  while (load < capacity && i < 4) {
    if (weights[i] <= (capacity - load)) {
      w += values[i]
      load += weights[i]
    } else {
      let r = (capacity - load) / weights[i]
      w += r * values[i]
      load += weights[i]
    }
    i++
  }
  return w
}