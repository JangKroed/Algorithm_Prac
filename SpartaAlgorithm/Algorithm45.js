// 나머지가 1이 되는 수 찾기

// 자연수 n 이 10일때
// 10을 x로 나누고 1이 남는 수를 구하라.

// 반복문 돌려서 나머지가 1일때의 나눈결과값을 Math.floor
let n = 12;
function solution(n) {
  let i = 0;
  while (n % i !== 1) {
    i++;
    if (n % i === 1) return i;
  }
}
// console.log(10 % 3 === 1);
console.log(solution(n));

// 다른 풀이 - 이게되네 ?
function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}

// 다른 풀이 2 - 재귀 함수
function solution(n, x = 0) {
  return n % x === 1 ? x : solution(n, x + 1);
} // 런타임 에러

// https://school.programmers.co.kr/learn/courses/30/lessons/87389

// console.log('n : ',n)
//   for (let i = 1; i <= n.length; i++) {
//     // console.log("n % i = ", n%i);
//     if (n%i === 1) {
//         return Math.floor(n / i);
//     }
//   }
