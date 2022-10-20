// 배열 원소의 길이

/**
 * 문자배열 strlist의 각 원소의 길이를 담은 배열을 리턴
 */

function solution(strlist) {
  let answer = [];
  for (let i of strlist) answer.push(i.length);
  return answer;
}

// 다른 풀이
function solution(strlist) {
  return strlist.map((el) => el.length);
}

function solution(strlist) {
  return strlist.reduce((a, b) => [...a, b.length], []);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120854
