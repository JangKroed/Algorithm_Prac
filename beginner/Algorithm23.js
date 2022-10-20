// 양꼬치

/**
 * 양꼬치 10인분에 음료수 하나 서비스
 * 양꼬치 1인분 12,000원
 * 음료수 2000원
 * n인분의 양꼬치와 k개의 음료수를 먹었을때
 * 총 지불금액을 리턴
 */
let n = 10;
let k = 3;
function solution(n, k) {
  let she = 12000 * n;
  let coke = 2000 * k;
  let answer = she + coke;
  if (she >= 120000) return (answer -= ~~(she / 120000) * 2000);
} // 테스트 3 실패
console.log(solution(n, k));

// 다른 풀이
function solution(n, k) {
  return n * 12000 + (k - ~~(n / 10)) * 2000;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120830
