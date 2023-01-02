// 캐시 - LRU 캐시 교체 알고리즘을 구현하는 문제

// 입력
// 캐시크기 n과 도시이름 배열 cities를 입력받는다.
// 0 <= n <= 30
// cities.length <= 100,000
// 각 도시이름은 영문자로만 이뤄져있고, 대소문자를 구분하지 않는다.

// 출력
// 도시이름 배열을 순서대로 처리할 때 필요한 총 실행시간을 반환한다.

// 조건
// 캐시 교체 알고리즘은 가장 최근에 참조된 페이지를 캐시에 담고있는 LRU(Least Recently Used)를 사용.
// cache hit 일 경우 실행시간은 1
// cache miss 일 경우 실행시간은 5
function solution(n, cities) {
  let cache = [],
    answer = 0;
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toUpperCase();
    const idx = cache.indexOf(city);
    if (idx !== -1) {
      answer += 1;
      cache.splice(idx, 1);
      cache.push(city);
    } else {
      answer += 5;
      cache.push(city);
      if (n < cache.length) {
        cache.shift();
      }
    }
  }
  return answer;
}
// m = cities.length
// n = 0 <= cache.size <= 30
// 시간복잡도: O(nm) = O(m)
// 공간복잡도: O(n) = O(1)

// 다른 풀이 - 문제에서 n이 30이하로 제한되어있어서 상수 취급 할 수 있지만, 만약 n의 크기가 최적화가 필요할 만큼 크거나 크기의 제한이 없다면 캐쉬를 배열이 아닌 집합으로 구현하는게 훨씬 효율적이기 때문에 집합으로 다시 구현해보았다.
function solution(n, cities) {
  let cache = new Set(),
    answer = 0;
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toUpperCase();
    if (cache.has(city)) {
      answer++;
      cache.delete(city);
      cache.add(city);
    } else {
      answer += 5;
      cache.add(city);
      if (n < cache.size) {
        cache.delete(cache.values().next().value);
      } //.values()는 삽입된 순서대로 값들을 가지고 있는 iterator object을 반환
    }
  }
  return answer;
}

// m = cities.length
// n =  0 <= cache.size <= 30
// 시간복잡도: O(m)
// 공간복잡도: O(n) = O(1)

// 문제풀이 출처: https://allo-ew.tistory.com/105

// 다른 풀이
function solution(cacheSize, cities) {
  const map = new Map();
  const cacheHit = (city, map) => {
    map.delete(city);
    map.set(city, city);
    return 1;
  };
  const cacheMiss = (city, map, size) => {
    if (size === 0) return 5;
    map.size === size && map.delete(map.keys().next().value);
    map.set(city, city);
    return 5;
  };
  const getTimeCache = (city, map, size) =>
    (map.has(city.toLocaleLowerCase()) ? cacheHit : cacheMiss)(
      city.toLocaleLowerCase(),
      map,
      size
    );
  return cities
    .map((city) => getTimeCache(city.toLocaleLowerCase(), map, cacheSize))
    .reduce((a, c) => a + c, 0);
}

// 다른 풀이
const solution = (cacheSize, cities) => {
  let answer = 0;
  let arr = [];
  //1. 도시를 모두 대문자로 통일한다.
  cities = cities.map((it) => it.toUpperCase());
  //2. 캐시사이즈가 0이면 모든게 cache miss 이므로 *5로 리턴한다.
  if (cacheSize == 0) return cities.length * 5;
  //3. 배열을 순회하며 cache hit이면 배열의 맨뒤로 푸시하고
  // cache miss일때는 (배열이 꽉찼다면 맨앞을 제거하고) 배열의 맨뒤로 푸시한다.
  for (let i = 0; i < cities.length; i++) {
    const idx = arr.findIndex((it) => it === cities[i]);
    if (idx !== -1) {
      arr.splice(idx, 1);
      answer += 1;
    } else if (arr.length === cacheSize) {
      answer += 5;
      arr.shift();
    } else {
      answer += 5;
    }
    arr.push(cities[i]);
  }
  return answer;
};
// 이 문제는 LRU 알고리즘을 알고 있다면 좀더 쉽게 접근이 가능했던 문제가 아닌가 싶습니다.
// 캐시가 있다면 우리는 캐시 안에 내가 찾고자 하는 도시가 있다면 이것을 cache hit라고 하고, 
// 없다면 이것을 cache miss라고 합니다. 이cache hit 와 cache miss를 잘 구현하는 것이 이문제의 핵심이었던 것 같습니다. 
// 풀이는 다음과 같습니다.

// https://school.programmers.co.kr/learn/courses/30/lessons/17680
