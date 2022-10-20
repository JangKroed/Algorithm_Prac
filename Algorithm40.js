// 약수의 개수와 덧셈

// 두 정수 left와 right가 주어진다
// 두 정수 사이의 약수를 계산하는데
// 약수의 갯수가 짝수이면 더하고 홀수이면 뺀수를 리턴

// ex)
// left = 13, right = 17
// 13, 14, 15, 16, 17 의 각 수의 약수개수를 구한뒤
//( 2,  4,  4,  5,  2)
// 13 +14 +14 -16 +2 = 43 을 리턴

// 반복문으로 left부터 right까지의 숫자배열을 생성
// 각 수마다 반복문으로 그 수까지의 1-n까지의 수를
// 나눈값이 정수이면 새로운 배열에 push
// length가 짝수이면 +push, 홀수이면 -push
// let a = []
// a.push(-1)
// a.push(-1)
// a = a.reduce((a,b)=>a+b,0)
// console.log(a)

let left = 24;
let right = 27;

function solution(left, right) {
  let nums = [];
  // left부터 right까지의 숫자배열을 생성
  for (let i = left; i <= right; i++) {
    nums.push(i);
  }
  let answer = [];
  // 각 인덱스값의 약수의 개수를 구하고 짝수면 push(+i) 홀수면 push(-i)
  for (let j = 0; j < nums.length; j++) {
    if (isDivisor(nums[j]).length % 2 === 0) answer.push(+nums[j]);
    else answer.push(-nums[j]);
  }
  return answer.reduce((a, b) => a + b, 0);
}
// 약수 판독기
function isDivisor(num) {
  let n = [];
  for (let i = 1; i <= num; i++) {
    if (Number.isInteger(num / i) === Number.isInteger(i)) n.push(i);
  }
  return n;
}
// console.log(isDivisor(6))

console.log(solution(left, right));

// 다른 풀이
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    // 제곱근이 정수면 약수의 개수가 홀수다...
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/77884

// console.log(Number.isInteger(10)); // true
// console.log(Number.isInteger(0)); // true
// console.log(Number.isInteger(-10)); // true
// console.log(Number.isInteger(123.1)); // false

//-------------------------------------------------

// function isInteger(number) {
//   return number % 1 === 0;
// }

// console.log(isInteger(10)); // true
// console.log(isInteger(0)); // true
// console.log(isInteger(-10)); // true
// console.log(isInteger(123.1)); // false
