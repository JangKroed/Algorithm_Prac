// 머쓱이보다 키 큰 사람

/**
 * 정수배열 array에서 height보다 큰 갯수를 리턴
 */

function solution(array, height) {
  let count = 0;
  for (let i of array) if (i > height) count++;
  return count;
}

// 다른 풀이
function solution(array, height) {
  return array.filter((el) => {
    return el > height;
  }).length;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120585
