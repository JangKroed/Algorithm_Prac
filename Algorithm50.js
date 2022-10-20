// [1차] 비밀지도

// n 은 가로세로의 길이

// arr1 | arr2 한 새로운 배열을 선언
// 2진수화 시켜서 0은 " "(공백), 1은 "#"으로 치환 후 리턴.

let n = 6;
let arr1 = [46, 33, 33, 22, 31, 50];
let arr2 = [27, 56, 19, 14, 14, 10];
function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(arr1[i] | arr2[i]);
  }
  for (let i = 0; i < n; i++) {
    answer[i] = answer[i].toString(2).padStart(n, "0");
  }

  return answer.join().replace(/1/gm, "#").replace(/0/gm, " ").split(",");
}
console.log(solution(n, arr1, arr2));

// 다른 풀이
var solution = (n, a, b) =>
  a.map((a, i) =>
    (a | b[i]).toString(2).padStart(n, 0).replace(/0/g, " ").replace(/1/g, "#")
  );

//https://school.programmers.co.kr/learn/courses/30/lessons/17681
