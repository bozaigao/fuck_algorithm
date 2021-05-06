//在WeightQuickUnion的的基础上进行路径压缩提高查找效率
class UnionSet {
  constructor(n) {
    this.n = n;
    this.root = [];
    this.size = [];
    for (let i = 0; i < n; i++) {
      this.root[i] = i;
      this.size[i] = 1;
    }
  }
  //时间复杂度接近于O(1)
  find(x) {
    return (this.root[x] = this.root[x] === x ? x : this.find(this.root[x]));
  }
  //时间复杂度接近于O(1)
  merge(a, b) {
    const ra = this.find(a),
      rb = this.find(b);
    if (ra === rb) return;
    if (this.size[ra] < this.size[rb]) {
      this.root[ra] = rb;
      this.size[ra] += this.size[rb];
    } else {
      this.root[rb] = ra;
      this.size[rb] += this.size[ra];
    }
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