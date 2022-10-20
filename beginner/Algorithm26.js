// 배열의 유사도

/**
 * 각 배열 s1과 s2가 서로 같은 요소의 개수를 리턴
 */
let s1 = ["a", "b", "c"];
let s2 = ["com", "b", "d", "p", "c"];
function solution(s1, s2) {
  let answer = s1.filter((r) => s2.includes(r));
  return answer;
}
console.log(solution(s1, s2));

// 다른 풀이
function solution(s1, s2) {
  let count = 0;
  for (let v of s1) if (s2.includes(v)) count++;
  return count;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120903
