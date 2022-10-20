// 두 수의 곱

function solution(num1, num2) {
  return num1 * num2;
}

// 다른 풀이

function solution(num1, num2) {
  var ans = 0;

  for (let i = 1; i <= num1; i++) {
    for (let j = 1; j <= num2; j++) {
      ans = ans + 1;
    }
  }

  return ans;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120804
