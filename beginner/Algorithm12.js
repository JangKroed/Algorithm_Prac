// 각도기

/**
 * 0도 초과 90도 미만은 예각
 * 90도는 직각
 * 90도 초과 180도 미만은 둔각
 * 180도는 평각이다.
 */

/**
 * angle이 예각이면 1, 직각 2, 둔각 3, 평각 4로 리턴
 */

function solution(angle) {
  if (angle === 180) return 4;
  if (angle > 90) return 3;
  if (angle === 90) return 2;
  return 1;
}

// 다른 풀이
function solution(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120829
