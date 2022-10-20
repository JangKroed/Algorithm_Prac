// 짝수 홀수 개수

/**
 * 정수가 담긴 num_list의 원소준 짝수와 홀수 개수를 담은 배열을 리턴
 */

function solution(num_list) {
  let result = [0, 0];
  for (let i of num_list) i % 2 ? result[1]++ : result[0]++;
  return result;
}

// 다른 풀이
function solution(num_list) {
  return num_list.reduce(
    ([even, odd], curr) => {
      return [curr % 2 === 0 ? even + 1 : even, curr % 2 === 1 ? odd + 1 : odd];
    },
    [0, 0]
  );
}

function solution(num_list) {
  var evenN = num_list.filter((el) => {
    return el % 2 == 0;
  }).length;
  return [evenN, num_list.length - evenN];
}

function solution(num_list) {
  var answer = [0, 0];
  for (let a of num_list) answer[a % 2] += 1;
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120824
