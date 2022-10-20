// 짝수의 합

/**
 * 정수 n이하의 짝수를 모두 더한 값을 리턴
 */
let n = 10;
function solution(n) {
  let answer = 0;
  let nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }
  for (let i of nums) {
    if (i % 2 === 0) answer += i;
  }
  return answer;
}
console.log(solution(n));

// 다른 풀이
function solution(n) {
    var answer = 0;

    for(let i=2 ; i<=n ; i+=2)
        answer += i;

    return answer;
}

function solution(n) {
    let count = Math.trunc(n / 2)
    return count * (count+1)
}

function solution(n) {
    var half = Math.floor(n/2);
    return half*(half+1);
}
// https://school.programmers.co.kr/learn/courses/30/lessons/120831
