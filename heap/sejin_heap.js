/**
 *
 * 힙...
 *
 * heap >> 더미. 무더기. 아무의미 없이 던져둔 더미
 *
 * 최상위 노드. 어떤기준 어떤 값을 찾아서 올려놓냐
 * 최댓값, 최솟값
 *
 *
 */

/**
 *
 * 인덱스 설정 (parent, child)
 *
 * 반복문 비교
 *  스왑
 *  인덱스 재설정
 *
 */

class Heap {
  #heap = [null];

  push(n) {
    this.#heap.push(n);
    let child = this.#heap.length - 1;
    let parent = Math.floor(child / 2);

    while (
      this.#heap[child] > this.#heap[parent] &&
      this.#heap[parent] !== null
    ) {
      [this.#heap[child], this.#heap[parent]] = [
        this.#heap[parent],
        this.#heap[child],
      ];
      child = parent;
      parent = Math.floor(child / 2);
    }
  }

  print() {
    console.log(this.#heap);
  }

  max() {
    return this.#heap[1];
  }

  pop() {
    const result = this.#heap[1];
    this.#heap[1] = this.#heap.pop();

    let parent = 1;
    let child =
      this.#heap[2 * parent] < this.#heap[2 * parent + 1]
        ? 2 * parent + 1
        : 2 * parent;

    while (this.#heap[child] > this.#heap[parent]) {
      [this.#heap[child], this.#heap[parent]] = [
        this.#heap[parent],
        this.#heap[child],
      ];
      parent = child;
      child =
        this.#heap[2 * parent] < this.#heap[2 * parent + 1]
          ? 2 * parent + 1
          : 2 * parent;
    }

    return result;
  }
}

const heap = new Heap();

const arr = Array.from({ length: 1000000 }, () => {
  return (Math.random() * 5000000) | 0;
});

const sortedArr = [];
console.time("heap");
for (const n of arr) {
  heap.push(n);
}
for (let i = 0; i < 100; i++) {
  heap.pop();
}
console.timeEnd("heap");

console.time("sort");
arr.sort((a, b) => b - a);
console.timeEnd("sort");
