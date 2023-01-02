// LRU Cache

// 설명
// Cache 알고리즘 중에 가장 유명한 알고리즘 중 하나로 LRU 알고리즘 이라는 것이 있습니다.
// LRU 알고리즘이란 (Least Recently Used Algorithm) 이며 즉 캐시에 대한 데이터 구조를 설계하고 구현합니다.

// get, put
// get(key) 키가 캐시에 있으면 키의 (양수)값을 가져오고, 그렇지 않다면 -1로 반환합니다.
// put(key, value)아직 키가 없을 경우 값을 설정하거나 삽입해야하며,
// 캐시가 용량 한계에 도달하면 새 값을 삽입하기 전에 가장 최근에 사용한 값을 제거합니다

// 예시
LRUCache cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // returns 1
cache.put(3, 3); // evicts key 2
cache.get(2); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
cache.get(1); // returns -1 (not found)
cache.get(3); // returns 3
cache.get(4); // returns 4

class LRU {
  constructor(v) {
    this.size = v;
    this.map = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  put(key, val) {
    let node = new Node(key, val);
    this.map.set(key, node);
    this.insertFront(node);

    if (this.size < this.map.size) {
      this.removeLast();
    }
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    let node = this.map.get(key);
    this.breakAndLink(node);
    this.insertFront(node);
    return node.val;
  }

  breakAndLink(node) {
    let p = node.prev;
    let n = node.next;
    p.next = n;
    n.prev = p;
    node.next = null;
    node.prev = null;
  }

  insertFront(node) {
    let h2 = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    h2.prev = node;
    node.next = h2;
  }

  removeLast() {
    // remove from linklist
    let node = this.tail.prev;
    this.breakAndLink(node);
    // remove from map
    this.map.delete(node.key);
  }
}

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// test
let cache = new LRU(2);
cache.put(1, 1);
cache.put(2, 2);

console.log(cache.get(1)); // returns 1
cache.put(3, 3); // evicts key 2
console.log(cache.get(2)); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
console.log(cache.get(1)); // returns -1 (not found)
console.log(cache.get(3)); // returns 3
console.log(cache.get(4)); // returns 4
