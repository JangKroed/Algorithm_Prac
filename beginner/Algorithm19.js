//  삼각형의 완성조건 (1)

/**
 * 선분 세 개로 삼각형을 만들라
 * - 가장 긴 변의 길이는 다른 두 변의 길이보다 작아야 합니다
 * 삼각형의 세 변의 길이를 담은 배열 sides로 삼각형을
 * 만들수 있으면 1, 없으면 2를 리턴
 */
/**
 * sides의 원소는 자연수이며 길이는 3이다.
 * 1 <= sides원소 <= 1,000
 */

function solution(sides) {
  sides.sort((a, b) => b - a);
  return sides[0] < sides[1] + sides[2] ? 1 : 2;
}

// 다른 풀이
function solution(sides) {
  var answer = 0;
  const max = Math.max(...sides);
  const sum = sides.reduce((a, b) => a + b, 0) - max;

  answer = max < sum ? 1 : 2;

  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120889
