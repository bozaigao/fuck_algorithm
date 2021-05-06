//在QuickUnion的基础上进行的优化，为了比较是根据树节点数量还是根据树高来进行merge效率更高，我们需要一个评价指标：节点的平均查找次数
//平均查找次数=所有节点的查找次数/节点数量
//我们假设有a、b两棵树，a的节点数量为sa，b的节点数量为sb，a的树高为la，b的树高为lb，由此a、b两棵树分情况如下：
//a作为b的root时平均查找次数为：la+lb+sb/sa+sb  b作为a的root时平均查找次数为：la+lb+sa/sa+sb
//由此得出结论：当sb小的时候以a作为b的root平均查找次数更小，效率更优，即：a、b两棵树谁的节点数量更多谁作为root
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
  //时间复杂度O(lgN)
  find(x) {
    if (this.root[x] === x) return x;
    return this.find(this.root[x]);
  }

    //时间复杂度O(lgN)
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
  unionSet.find(3),
);
