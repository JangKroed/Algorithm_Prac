// 짝수는 싫어요

/**
 * 정수 n이하의 홀수배열을 오름차순으로 리턴
 */
function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) answer.push(i);
  }
  return answer;
}

// 다른 풀이
const solution = (n) =>
  Array.from({ length: n }, (_, i) => i + 1).filter((i) => i % 2 !== 0);

function solution(n) {
  return Array(n)
    .fill(0)
    .map((v, index) => v + 1 + index)
    .filter((v) => v % 2);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120813
