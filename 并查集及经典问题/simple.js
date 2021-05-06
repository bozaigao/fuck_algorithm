//由于采用路径压缩后效率已经很高但是代码很简洁所以一般直接采用该方法
class UnionSet {
  constructor(n) {
    this.n = n;
    this.father = [];
    for (let i = 0; i < n; i++) {
      this.father[i] = i;
    }
  }

  find(x) {
    return (this.father[x] =
      this.father[x] === x ? x : this.find(this.father[x]));
  }

  merge(a, b) {
    this.father[this.find(a)] = this.find(b);
  }
}

const unionSet = new UnionSet(10);
unionSet.merge(0, 1);
unionSet.merge(1, 3);
unionSet.merge(2, 3);
//0,1,2,3属于同一个集合它们都拥有相同的颜色3
console.log(
  unionSet.find(0),
  unionSet.find(1),
  unionSet.find(2),
  unionSet.find(3)
);

console.log('a'.charCodeAt(1));
