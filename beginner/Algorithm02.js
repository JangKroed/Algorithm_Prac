// 몫 구하기

/**
 * 정수 num1을 num2로 나눈 몫을 리턴
 */

function solution(num1, num2) {
  let answer = num1 / num2;
  return Math.floor(answer);
}

// 다른 풀이

function solution(num1, num2) {
  return parseInt(num1 / num2);
}

function solution(num1, num2) {
  return Math.trunc(num1 / num2);
}

function solution(num1, num2) {
  return ~~(num1 / num2);
}

function solution(num1, num2) {
  let result = 0;

  while (num1 >= num2) {
    num1 -= num2;

    result += 1;
  }

  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120805
