// 제곱수 판별하기

/**
 * 정수 n이 제곱수면 1 아니면 2를 return
 */

function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}

// 다른 풀이
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

function solution(n) {
  var sqrt = Math.sqrt(n);
  for (let i = 1; i <= sqrt; i++) {
    if (i * i == n) {
      return 1;
    }
  }
  return 2;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120909
