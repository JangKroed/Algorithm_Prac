// 두 수의 나눗셈

/**
 * num1을 num2로 나눈 값에 1000을 곱한 뒤 정수를 리턴
 */

function solution(num1, num2) {
  return parseInt((num1 / num2) * 1000);
}

// 다른 풀이
function solution(num1, num2) {
  return Math.floor((num1 / num2) * 1000);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120806
