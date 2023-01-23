// 숫자의 표현

// 자연수 n이 15일때 덧셈의 오름차순으로
// 표현할수 있는 경우의수.

// ex)
// n = 15 일때,
// 1 + 2 + 3 + 4 + 5 = 15
// 4 + 5 + 6 = 15
// 7 + 8 = 15
// 15 = 15

// => 경우가 4가지이르로 4를 리턴.

// 1에서 n까지의 배열을 만들고 순서대로 합계가 15가 되는 필터 ?
let n = 15;
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) answer++;
  }
  return answer;
}
console.log(solution(n));
// 주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수와 주어진 수의 홀수인 약수 갯수는 같다.

// https://school.programmers.co.kr/learn/courses/30/lessons/12924
