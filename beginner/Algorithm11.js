// 중복된 숫자 개수

/**
 * 정수가 담진 배열 array에
 * 정수 n이 몇개 있는지 리턴
 */

function solution(array, n) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) count++;
  }
  return count;
}

// 다른 풀이
function solution(array, n) {
  return array.filter((v) => v === n).length;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120583
