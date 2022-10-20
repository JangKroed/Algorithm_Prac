// 점의 위치 구하기

/**
 * 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분이다.
 * 사분면은 우측 상단부터 1번이고 반시계 방향으로 1싹 증가한다.
 *
 * 제 1사분면 = + +
 * 제 2사분면 = - +
 * 제 3사분면 = - -
 * 제 4사분면 = + -
 *
 * Math.sign()은 들어가는 매개변수가 양수라면 1, 음수 -1, 0은 0으로 출력
 *
 * dot[0], dot[1]을 넣어서
 * 나오는값에 따라 사분면의 숫자를 리턴
 */
const dot = [2, -4];
function solution(dot) {
  const arr = [Math.sign(dot[0]), Math.sign(dot[1])];
  if (arr[0] === 1 && arr[1] === 1) return 1;
  else if (arr[0] === -1 && arr[1] === 1) return 2;
  else if (arr[0] === -1 && arr[1] === -1) return 3;
  else if (arr[0] === 1 && arr[1] === -1) return 4;
}
console.log(solution(dot));

// 다른 풀이
function solution(dot) {
  return dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : dot[1] > 0 ? 2 : 3;
}

function solution(dot) {
  const [num, num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120841
