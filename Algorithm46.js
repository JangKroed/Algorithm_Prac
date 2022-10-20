// 소수 찾기

// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수. primes.length
// n = 10 일때, 1부터 10사이의 소수는 4개이므로 4를 리턴

let n = 10;
function solution(n) {
  const primeSet = new Set([2]);
  for (let i = 3; i <= n; i += 2) primeSet.add(i);

  const maxSqrt = Math.ceil(n ** 1 / 2);
  for (let i = 3; i <= maxSqrt; i += 2)
    for (let j = 3; i * j <= n; j += 2) primeSet.delete(i * j);
  return [...primeSet].length;
}
console.log(solution(n));

// 다른 풀이
function solution(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for (let j = 3; j < Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}

// 다른 풀이 2
function numberOfPrime(n) {
  if (n == 2) return 1;

  var count = 0;
  for (var i = 2; i <= n; i++) {
    var a = 2; // 사이클이 시작할때마다 a = 2 로 리셋
    while (a < i) {
      //이렇게하면 자신의 숫자로 나누어질 일은 없다.
      if (i % a != 0) {
        // 그리고 나누어지지않으면 계속, 나누어지면 카운트하고 끝
        a++;
      } else {
        count++;
        break;
      }
    }
  }
  return n - count - 1;
  // 카운트된 것은 소수가 아닌것들이고, -1을 더 해주는 이유는 1의 경우때문이다.
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12921
