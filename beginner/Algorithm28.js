// 피자 나눠 먹기 (3)

/**
 * 피자조각의 수는 slice, 먹는 사람의 수 n일때
 * n명의 사람이 최소 한조각이상 피자를 먹으려면
 * 최소 몇판의 피자를 시켜야 하는지 리턴
 */

/**
 * slice는 피자 한판
 * 사람의 수가 피자 한판의 조각수 보다 남으면
 * count++
 */
let slice = 4;
let n = 12;
function solution(slice, n) {
  return Math.ceil(n / slice);
}

// 다른 풀이
function solution(slice, n) {
  let i = 1;
  while (slice * i < n) {
    i++;
  }
  return i;
}

console.log(solution(slice, n));
// https://school.programmers.co.kr/learn/courses/30/lessons/120816
