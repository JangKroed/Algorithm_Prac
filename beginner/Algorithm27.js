// 가장 큰 수 찾기

/**
 * 정수 배열 array의 요소중
 * 가장 큰수와 그 수의 인덱스 배열을 리턴.
 */
let arr = [1, 8, 3];
function solution(array) {
  let arr2 = array.slice().sort((a, b) => b - a);
  return [arr2[0], array.indexOf(arr2[0])];
}
console.log(solution(arr));

// 다른 풀이
function solution(array) {
  return [Math.max(...array), array.indexOf(Math.max(...array))];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120899
