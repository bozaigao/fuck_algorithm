/**
 * 大顶堆和小顶堆，堆是优先队列的一种实现
 */
class PriorityQueue {
  constructor(bigHeap) {
    this.bigHeap = bigHeap;
    this.data = [];
  }

  build(initData) {
    if (initData) {
      for (let i = 0; i < initData.length; i++) {
        this.add(initData[i]);
      }
    }
  }

  shift() {
    let tmp = this.data.shift();
    if (this.data.length) {
      this.data.unshift(this.data.pop());
      this.down(0);
    }

    return tmp;
  }

  add(v) {
    this.data.push(v);
    this.up(this.data.length - 1);
  }

  up(index) {
    while (index > 0) {
      let i = (index - 1) >> 1;
      if (
        this.bigHeap
          ? this.data[i] <= this.data[index]
          : this.data[i] >= this.data[index]
      ) {
        this.swap(i, index);
        index = i;
      } else break;
    }
  }

  swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }

  down(index) {
    let cnt = (this.data.length - 2) >> 1,
      max,
      maxIndex;
    while (index <= cnt) {
      let l = index * 2 + 1,
        r = l + 1;
      if (
        this.bigHeap
          ? this.data[l] >= (this.data[r] ? this.data[r] : -Infinity)
          : this.data[l] <= this.data[r] || !this.data[r]
      ) {
        max = this.data[l];
        maxIndex = l;
      } else {
        max = this.data[r];
        maxIndex = r;
      }
      if (this.bigHeap ? this.data[index] <= max : this.data[index] >= max) {
        this.swap(index, maxIndex);
        index = maxIndex;
      } else break;
    }
  }

  length() {
    return this.data.length;
  }
}

exports.PriorityQueue = PriorityQueue;
