// [1차] 다트게임

// 예제	dartResult	answer	설명
// 1	1S2D*3T	    37	    11 x 2 + 22 x 2 + 33
// 2	1D2S#10S	9   	12 + 21 x (-1) + 101
// 3	1D2S0T	    3	    12 + 21 + 03
// 4	1S2T3S	    23	    11 x 2 x 2 + 23 x 2 + 31
// 5	1D#2S*3S	5	    12 x (-1) x 2 + 21 x 2 + 31
// 6	1T2D3D#	    -4	    13 + 22 + 32 x (-1)
// 7	1D2S3T*	    59	    12 + 21 x 2 + 33 x 2
let dartResult = "1S2D*3T";
function solution(dartResult) {
  var score = 0;
  var answer = [];
  var temp = 0; // 숫자 담을 변수

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      //숫자일 경우
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        // 10일 경우 10으로 만들어주고 0을 건너뛰기 위해 i++ 해줌.
        temp = 10;
        i++;
      } else {
        // 0이 아닐 경우 그대로 temp에 넣어줌.
        temp = dartResult[i];
      }
    } else if (dartResult[i] === "S") {
      // 1제곱
      answer.push(temp);
    } else if (dartResult[i] === "D") {
      // 2제곱
      answer.push(Math.pow(temp, 2));
    } else if (dartResult[i] === "T") {
      // 3제곱
      answer.push(Math.pow(temp, 3));
    } else if (dartResult[i] === "#") {
      answer[answer.length - 1] *= -1; // 아차상, 해당 점수 -
    } else if (dartResult[i] === "*") {
      // 스타상, (직전 + 해당) *2
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    }
  }
  for (let i = 0; i < answer.length; i++) {
    // 보너스, 옵션 적용된 점수들 합치기
    score += Number(answer[i]);
  }

  return score;
}

// 정규식을 이용한 다른 풀이
function solution(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 },
          options = { '*': 2, '#': -1, undefined: 1 };

    let darts = dartResult.match(/\d\d?.?\D/g);

    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/17682
