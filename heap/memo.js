// 힙을 어떤때에 쓰면 좋을까?

// 완전 정렬되지 않은 정렬구조

// 2진 트리구조.

// 핵심은 루트노드에만 값이 의미가 있고
// 다른데서 찾으면 에러

// 무조건 0번 인덱스만 유용.
// ex) 최대값과 최소값을 빠르게 찾을때 유용.
// 정렬 불필요

// 문자 크기비교는 아스키코드 기반해서 가능

class MaxHeap {
    // 은 프라이빗 해시필드 - 런타임에서 참조가 안됨. 은닉.
  heap = [null];
  heapify(arr) {
    for (const n of arr) {
        this.push(n);
    }
  }
  show() {
    return this.heap
  }
  push(n) {
    this.heap.push(n);
    let child = this.heap.length - 1;
    let parent = Math.floor(child / 2);

    while (this.heap[parent] !== null && this.heap[parent] < this.heap[child]) {
      [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]];

      child = parent;
      parent = Math.floor(child / 2);
    }
  }
  // 값을 하나 꺼낼때 마다 노드를 재정렬해야함. 최적화하는 과정 필요.
  pop() {
    const result = this.heap[1];

    // let parent = this.heap[2] > this.heap[3] ? 2 : 3;
    // this.heap[1] = this.heap[parent];
    // let child = this.heap[parent * 2] < this.heap[parent * 2 + 1] ? parent * 2 + 1 : parent * 2;

    // while (this.heap[parent] < this.heap[child]{
    //     [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]];

    //     parent = child;
    //     child = this.heap[parent * 2] < this.heap[parent * 2 + 1] ? parent * 2 + 1 : parnet * 2;
    // }
    // console.log(this.heap)
    //-------------------------------------------------------------------------------------------------
    if (this.heap.length === 2) return this.heap.pop()
    this.heap[1] = this.heap.pop();

    let parent = 1;
    let child = this.heap[2] > this.heap[3] ? 2 : 3;

    while (this.heap[parent] < this.heap[child]) {
        [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]];

        parent = child;
        child = this.heap[parent * 2] > this.heap[parent * 2 + 1] ? parent * 2 : parent * 2 + 1
    }

    return result;
  }
}


// const arr =[1,2,3,4,5,6,7,8,9,10]
// const arr = Array.from(Array(10), (_) => Math.random().toPrecision(3))
// const arr = [1,2,3,4,5,6,7,8,9,10]
const arr = Array.from(Array(10000000), (_) => Math.random().toPrecision(3))

const forHeap = arr.slice();
const forSort = arr.slice();

// max no.1
console.time('sort')

forSort.sort();
while(forSort.langth) {
    forSort.pop()
} // pop은 시간복잡도가 1이다.

console.timeEnd('sort')

// ------------------------------------------------------------------------


// max no.2
console.time('heap')
const h = new MaxHeap();
h.heapify(forHeap);
while(h.heapify.length > 1) {
    h.pop();
}


console.timeEnd('heap')

// h.heapify(arr);
// console.log(h.show());
// console.log(h.pop())
// console.log(h.pop())
// console.log(h.pop())
// console.log(h.pop())
// console.log(h.pop())
// console.log(h.pop())
// console.log(h.pop())
// console.log(h.pop())
// console.log(h.pop())
// console.log(h.pop())