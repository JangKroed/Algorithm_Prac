// 자릿수 더하기

/**
 * 정수 n의 각 자리 숫자의 합을 리턴
 */
let n = 1234;
function solution(n) {
  return (answer = n
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0));
}
console.log(solution(n));

// 다른 풀이
function solution(n) {
  var answer = 0;
  let j = n;
  for (let i = 0; i < j; i++) {
    answer += n % 10;
    n = Math.floor(n / 10);
  }
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120906
