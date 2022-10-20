// 나이 출력

/**
 * 나이 age가 주어질 때,
 * 2022년을 기준으로 출생년도를 return
 */
let age = 23;
function solution(age) {
  return 2022 - age + 1;
}
console.log(solution(age));

// 다른 풀이

function solution(age) {
  return 2022 - 1 * (age - 1);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120820
