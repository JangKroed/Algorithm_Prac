// 약수 구하기

/**
 * 정수 n의 약수를 오름차순 배열로 return
 */
const n = 24;
function solution(n) {
  let nums = [];
  for (let i = 1; i <= n; i++) {
    if (Number.isInteger(n / i) === Number.isInteger(i)) nums.push(i);
  }
  return nums;
}
console.log(solution(n));

// 다른 풀이
function solution(n) {
  return Array.from({ length: n }, (_, i) => i + 1).filter(
    (el) => n % el === 0
  );
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120897
