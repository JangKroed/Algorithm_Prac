// 배열 두배 만들기

/**
 * 정수 배열 numbers의 각 원소에 두배한 원소를 가진 배열을 return
 */
const numbers = [1, 2, 3, 4, 5];
function solution(numbers) {
  return numbers.map((x) => x * 2);
}
console.log(solution(numbers));

// 다른 풀이
function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120809
