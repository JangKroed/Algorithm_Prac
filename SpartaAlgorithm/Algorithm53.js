// 최대값과 최소값

// 문자열 s에 공백으로 구분된 숫자들중
// 최소값과 최대값을 리턴.

// ex)
// s = "1 2 3 4"
// return = "1 4"
// let a = '1 2'.split(' ').map(Number)
// console.log(Math.max(...a))
// 구하고 배열에 넣고 문지 조인
let s = "1 2 3 4";
function solution(s) {
  let answer = [];
  s = s.split(" ").map(Number);
  answer.push(Math.min(...s));
  answer.push(Math.max(...s));
  return answer.join().replace(/,/g, " ");
}
console.log(solution(s));
console.log(typeof solution(s));

// 다른 풀이 - 굳이 숫자열 치환 안해도 가능
function solution(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12939
