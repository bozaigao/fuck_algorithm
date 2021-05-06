//QuickUnion使用的是树形结构来表示节点之间的连通关系
class UnionSet {
  constructor(n) {
    this.n = n;
    this.root = [];
    //初始化的时候节点的根节点就是它自己
    for (let i = 0; i < n; i++) {
      this.root[i] = i;
    }
  }

  //时间复杂度跟树高有关
  find(x) {
    if (this.root[x] === x) return x;
    return this.find(this.root[x]);
  }

  //时间复杂度跟树高有关
  merge(a, b) {
    //如果两个点的对应集合的根节点如果相同那么这两个点已经处于同一个集合，此时没必要再进行合并操作
    if (this.find(a) === this.find(b)) return;
    this.root[this.find(a)] = b;
  }
}

const unionSet = new UnionSet(10);
unionSet.merge(0, 1);
unionSet.merge(1, 3);
unionSet.merge(2, 3);
console.log(
  unionSet.find(0),
  unionSet.find(1),
  unionSet.find(2),
  unionSet.find(3)
);
