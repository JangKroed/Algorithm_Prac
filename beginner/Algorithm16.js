// 최댓값 만들기 (1)

/**
 * 정수배열 numbers의 원소중 두개를 곱해 만들수 있는 최댓값을 리턴
 */
let numbers = [0, 31, 24, 10, 1, 9];
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}

console.log(solution(numbers));
// https://school.programmers.co.kr/learn/courses/30/lessons/120847
