// 배열의 평균값

/**
 * 정수 배열 numbers의 평균값을 return
 */

function solution(numbers) {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

// 다른 풀이
function solution(numbers) {
    var answer = 0;
    for(i of numbers) {
        answer += i
    }
    return answer / numbers.length;

}

// https://school.programmers.co.kr/learn/courses/30/lessons/120817
