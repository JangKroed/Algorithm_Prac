// 약수의 합

// 정수 n을 입력받아 n의 약수를 모두 더한값을 리턴

let n = 12;
function solution(n) {
  let num = [];
  for (let i = 1; i <= n; i++) {
    if (Number.isInteger(n / i) === Number.isInteger(i)) num.push(i);
  }
  return num.reduce((a, b) => a + b, 0);
}
console.log(solution(n));

// 다른 풀이 - 아래짝을 찾으면 위아래 더하는 방식
function solution(n) {
  var answer = 0;
  for (var i = 1; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      answer += i + n / i;
    }
  }
  i--;
  return i === n / i ? answer - i : answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12928
