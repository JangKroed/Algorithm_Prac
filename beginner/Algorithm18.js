// 세균 증식

/**
 * n은 1시간에 두배로 증식하는데
 * t시간후 n의 값을 리턴
 */

function solution(n, t) {
  for (let i = 1; i <= t; i++) n *= 2;
  return n;
}

// 다른 풀이
function solution(n, t) {
  while (t-- > 0) n *= 2;
  return n;
}

function solution(n, t) {
  return n * Math.pow(2, t);
}

function solution(n, t) {
  return n * 2 ** t;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120910
