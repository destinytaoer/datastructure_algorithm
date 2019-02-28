let vertices = ['cs1', 'cs2', '汇编语言', '数据结构', '操作系统', '算法']

/** 
 * 邻接表
 * 0 - 1
 * 1 - 2 3
 * 2 -
 * 3 - 4 5
 * 4 -
 * 5 -
 */
let adj = [
  [1],
  [2, 3],
  [],
  [4, 5],
  [],
  []
]
// 拓扑排序
function topSort() {
  let stack = []
  let visited = []

  // 初始化 visited
  for (let i = 0; i < vertices.length; i++) {
    visited[i] = false
  }

  for (let i = 0; i < vertices.length; i++) {
    topSortHelper(i, visited, stack)
  }
  while (stack.length !== 0) {
    let a = stack.pop()
    console.log(a);
  }
}

function topSortHelper(v, visited, stack) {
  if (visited[v]) return
  visited[v] = true
  adj[v].forEach(item => {
    if (!visited[item]) {
      topSortHelper(item, visited, stack)
    }
  })
  stack.push(v)
}
topSort()