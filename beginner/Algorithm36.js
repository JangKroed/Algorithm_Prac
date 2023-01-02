// n의 배수 고르기

/**
 * 정수 배열 numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return
 *
 * Math.max(...numlist) 만큼 반복문으로 n의 배수를 push한 배열을 만들고
 * filter + includes
 */

function solution(n, numlist) {
  const answer = [];
  numlist.map((e) => {
    if (Number.isInteger(e / n)) answer.push(e);
  });
  return answer;
}

// 다른 풀이
function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120905
