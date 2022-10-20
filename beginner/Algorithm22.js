// 아이스 아메리카노

/**
 * 아메리카노 한잔에 5,500원일때
 * 가진돈 money로 최대 마실수 있는 잔 수와
 * 잔돈을 리턴
 */
function solution(money) {
  return [Math.trunc(money / 5500), money % 5500];
}

// 다른 풀이
function solution(money) {
  return [~~(money / 5500), money % 5500];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120819
