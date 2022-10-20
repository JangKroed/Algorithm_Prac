// 배열 자르기

/**
 * 정수 배열 numbers를
 * num1 인덱스부터 num2 인덱스 까지 자른 정수 배열을 return
 */

function solution(numbers, num1, num2) {
  const answer = numbers.slice(num1, num2 + 1);
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120833
