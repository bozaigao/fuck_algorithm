/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 class PriorityQueue{
    constructor(nums){
        this.data = [];
        this.build(nums);
    }

    add(item){
        this.data.push(item);
        this.up(this.data.length-1);
    }

    up(index){
        while(index>0){
            let parentIndex = (index-1)>>1;
            if(this.data[parentIndex]<=this.data[index]){
                this.swap(index,parentIndex);
                index =  parentIndex;
            }else{
                break;
            }
        }
    }

    down(index){
        let cnt = (this.data.length-2)>>1;
        while(index<=cnt){
            let l = 2*index+1,r = l+1,max,maxIndex;
            if((this.data[l]?this.data[l]:-Infinity)>=(this.data[r]?this.data[r]:-Infinity))            {
                max = this.data[l];
                maxIndex = l;
            }else{
                max = this.data[r];
                maxIndex = r;
            }
            if(this.data[index]<=max){
                this.swap(index,maxIndex);
                index = maxIndex;
            }else{
                break;
            }
        }
    }

    swap(i,j){
        [this.data[i],this.data[j]] = [this.data[j],this.data[i]];
    }

    length(){
        return this.data.length;
    }

    shift(){
        let res = this.data.shift();
        this.data.unshift(this.data.pop());
        this.down(0);

        return res;
    }

    build(nums){
        for(let i=0; i<nums.length; i++){
            this.add(nums[i]);
        }
    }
}
var findKthLargest = function(nums, k) {
    let priorityQueue = new PriorityQueue(nums);
    let kMax = 0;
    // const length = priorityQueue.length();
    // for(let i=0; i<length; i++){
    // console.log(priorityQueue.shift());
    // }
    console.log('最大1',priorityQueue);
    for(let i=0; i<k; i++){
        kMax = priorityQueue.shift();
        console.log('最大',kMax);
    }
    // let tmp = nums.sort((i,j)=>j-i);
    // let kMax = tmp[k-1];
    

    return kMax;
};

findKthLargest([3,2,3,1,2,4,5,5,6],4);




/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 class PriorityQueue{
    constructor(nums){
        this.data = [];
        this.build(nums);
    }

    add(item){
        this.data.push(item);
        this.up(this.data.length-1);
    }

    up(index){
        while(index>0){
            let parentIndex = (index-1)>>1;
            if(this.data[parentIndex]<=this.data[index]){
                this.swap(index,parentIndex);
                index =  parentIndex;
            }else{
                break;
            }
        }
    }

    down(index){
        let cnt = (this.data.length-2)>>1;
        while(index<=cnt){
            let l = 2*index+1,r = l+1,max,maxIndex;
            if((this.data[l]?this.data[l]:-Infinity)>=(this.data[r]?this.data[r]:-Infinity))            {
                max = this.data[l];
                maxIndex = l;
            }else{
                max = this.data[r];
                maxIndex = r;
            }
            if(this.data[index]<=max){
                this.swap(index,maxIndex);
                index = maxIndex;
            }else{
                break;
            }
        }
    }

    swap(i,j){
        [this.data[i],this.data[j]] = [this.data[j],this.data[i]];
    }

    length(){
        return this.data.length;
    }

    shift(){
        let res = this.data.shift();
        this.data.unshift(this.data.pop());
        this.down(0);

        return res;
    }

    build(nums){
        for(let i=0; i<nums.length; i++){
            this.add(nums[i]);
        }
    }
}
var findKthLargest = function(nums, k) {
    // let priorityQueue = new PriorityQueue(nums);
    // let kMax = 0;

    // for(let i=0; i<k; i++){
    //     kMax = priorityQueue.shift();
    // }
    let tmp = nums.sort((i,j)=>j-i);
    let kMax = tmp[k-1];
    

    return kMax;
};