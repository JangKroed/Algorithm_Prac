// 배열 뒤집기

/**
 * 정수 배열 num_list의 원소 순서를
 * 거꾸로 뒤집은 배열을 return
 */

function solution(num_list) {
  return num_list.reverse();
}

// 다른 풀이
function solution(num_list) {
  var answer = [];
  var j = num_list.length;
  for (var i = 1; i <= j; i++) {
    answer.push(num_list[j - i]);
  }
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120821
