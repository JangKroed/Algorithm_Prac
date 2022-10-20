//   힙에서 부모 - 자식 간 관계

// 힙은 배열을 이용해 완전 이진 트리 형태로 구현
// 이진 트리이기 때문에 당연히 부모와 자식 노드가 발생하는데, 힙의 경우엔 보통의 완전 이진 트리와는 다르게 반정렬 상태(느슨한 정렬 상태)를 유지
// 이는 최대힙이라면 큰 값이 부모 노드쪽에, 최소힙이라면 작은 값이 부모 노드 쪽에 배치되는 것만 유지하고 왼쪽 자식과 오른쪽 자식은 부모 노드보다 작은 값을 유지하기만 하면 된다.

class Heap {
  constructor() {
    this.heap = [null]; // 첫 원소는 사용 X
  }
  // 최소 힙, 삽입
  heappush(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0;

    // 최소힙이므로 부모노드가 제일 작아야 한다. 즉 부모노드가 현재노드보다 큰 지 검사하며 반복한다.
    while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
      [this.heap[parIdx], this.heap[curIdx]] = [
        this.heap[curIdx],
        this.heap[parIdx],
      ];
      // 구조분해 할당을 이용해 부모와 자식을 swap 한다. 따로 함수로 빼주어 작성해도 좋다.
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }
  // 삭제
  heappop() {
    const min = this.heap[1]; // 배열 첫 원소를 비워두므로 root는 heap[1]에 항상 위치한다.
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();
    // 배열 마지막 원소를 root 위치에 먼저 배치하는 과정이다.
    // if-else로 분기되는 이유는 추후 heap이 비었는지 아닌지 확인하기 위해 size 체크 함수를 만들때 -1을 통해 0을 만들어주기 때문.

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    // 왼쪽 자식이 없다는 것은 오른쪽 자식도 없는, 즉 루트만 있는 상태이므로 바로 반환!
    if (!this.heap[rightIdx]) {if (this.heap[leftIdx] < this.heap[curIdx]) {
        [this.heap[leftIdx], this.heap[curIdx]] = [this.heap[curIdx],this.heap[leftIdx]];
        // 오른쪽 자식이 없다면 왼쪽 자식하나만 있다는 것을 의미한다.
      }
      return min;
    }

    // 위에 조건에 걸리지 않는 경우 왼쪽과 오른쪽 자식이 모두 있는 경우이다.
    // 따라서 현재 노드가 왼쪽 또는 오른쪽 보다 큰 지 작은지를 검사하며 반복한다.
    while (
      this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]
    ) {
      // 왼쪽과 오른쪽 자식 중에 더 작은 값과 현재 노드를 교체하면 된다.
      const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      [this.heap[minIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[minIdx],];
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }
    return min;
  }
}

//   왼쪽 자식의 index = 부모 index * 2
//   오른쪽 자식의 index = (부모 index * 2) + 1
//   부모의 index = Math.floor(자식의 인덱스 / 2);
