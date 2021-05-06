//并查集主要是解决连通性问题，主要是用于维护连通关系和查询连通关系，但是由于并查集可以根据不同的使用场景进行灵活使用所以没有固定的模板，不能像堆栈等数据结构一样可以直接固化
//连通关系：连通具有传递性，比如a==b,b==c,可以推导出a==c,此时a、b、c具有连通性它们属于同一个集合
//实际案例：朋友圈具有传递性，a跟b是朋友，b跟c是朋友，那么可以推导出a跟c也是朋友，a、b、c同属于一个朋友圈
//QuickFind用到的是染色方法,将两个点合并为同一个集合就是将这两个点的颜色染成一样，同一个集合的所有点的颜色都是一样的
class UnionSet {
  constructor(n) {
    this.colors = [];
    this.n = n;
    //初始化每个点的颜色，每一个点都用下标表示不同的颜色
    for (let i = 0; i < n; i++) {
      this.colors.push(i);
    }
  }

  //时间复杂度O(1)
  find(x) {
    return this.colors[x];
  }

  //时间复杂度O(n)
  merge(a, b) {
    const ca = this.colors[a];
    if (this.colors[b] === ca) return;
    for (let i = 0; i < this.n; i++) {
      if (this.colors[i] === ca) {
        this.colors[i] = this.colors[b];
      }
    }
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
