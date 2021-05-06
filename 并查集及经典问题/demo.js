/**
 * @param {number[][]} isConnected
 * @return {number}
 */

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
      this.father[x] == x ? x : this.find(this.father[x]));
  }

  merge(a, b) {
    this.father[this.find(a)] = this.find(b);
  }
}
var findCircleNum = function (isConnected) {
  const length = isConnected.length;
  const unionSet = new UnionSet(length);
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (isConnected[i][j] === 1) {
        unionSet.merge(i, j);
      }
    }
  }
  let ans = 0;
  for (let i = 0; i < length; i++) {
    if (unionSet.find(i) === i) {
      ans++;
    }
  }

  return ans;
};

