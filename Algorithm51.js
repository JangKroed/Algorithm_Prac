// 키패드 누르기

// numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
// hand = "right"
// result = "LRLLLRLLRRL"

let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand = "right";
function solution(numbers, hand) {
  // 위치 찾아주는 함수
  function findKey(key) {
    let keypad = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ["*", 0, "#"],
    ];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (keypad[i][j] === key) {
          return [i, j];
        }
      }
    }
  }
  var answer = "";
  let left = "*";
  let right = "#";
  for (let i of numbers) {
    if (i === 1 || i === 4 || i === 7) {
      answer += "L";
      left = i;
    } else if (i === 3 || i === 6 || i === 9) {
      answer += "R";
      right = i - 2;
    } else {
      let r = findKey(right);
      let l = findKey(left);
      let middle = findKey(i);
      // 손위치와 눌러야할 키패드 거리 구하기
      let rr = Math.abs(r[0] - middle[0]) + Math.abs(r[1] - middle[1]);
      let ll = Math.abs(l[0] - middle[0]) + Math.abs(l[1] - middle[1]);
      if (rr === ll) {
        // 거리가 같다면 오른손잡이 -> 'R', 왼손잡이 -> 'L'
        hand === "right"
          ? ((right = i), (answer += "R"))
          : ((left = i), (answer += "L"));
      } else if (rr > ll) {
        // 오른손의 거리가 더 멀다면
        answer += "L";
        left = i;
      } else {
        // 왼손의 거리가 더 멀다면
        answer += "R";
        right = i;
      }
    }
  }
  return answer;
}

// 먼저 키패드의 위치를 찾아주는 findKey함수를 정의하고, 1, 4, 7은 왼손이 누르고 그 위치로 이동, 3, 6, 9는 오른손이 누르고 그 위치로 이동한다.
// 가운데 2, 5, 8, 0의 경우 findKey함수를 통해 오른손과 왼손 그리고 가운데 버튼의 위치를 찾고 각각 오른손과 가운데 버튼의 거리, 왼손과 가운데 버튼의 거리를 구한다.
// 거리가 같다면 오른손 잡이의 경우 오른손이, 왼손 잡이의 경우 왼손이 이동한다.
// 오른손의 거리가 더 멀다면 왼손이, 왼손의 거리가 더 멀다면 오른손이 이동한다.

// 다른 풀이
function solution(numbers, hand) {
  function dis(num, lH, rH, pos, hand) {
    const lD =
      Math.abs(pos[lH][0] - pos[num][0]) + Math.abs(pos[lH][1] - pos[num][1]);
    const rD =
      Math.abs(pos[rH][0] - pos[num][0]) + Math.abs(pos[rH][1] - pos[num][1]);
    if (lD === rD) return hand === "left" ? "L" : "R";
    return lD < rD ? "L" : "R";
  }
  const pos = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  var lH = "*",
    rH = "#";
  var result = "";
  for (var num of numbers) {
    if (num % 3 === 1) {
      result += "L";
      lH = num;
    } else if (num !== 0 && num % 3 === 0) {
      result += "R";
      rH = num;
    } else {
      result += dis(num, lH, rH, pos, hand);
      result[result.length - 1] === "L" ? (lH = num) : (rH = num);
    }
  }
  return result;
}
// 코드 설명
// (1) pos라는 1 ~ #까지를 좌표화한 객체를 생성한다.
// (2) 현재 왼손과 오른손의 위치를 의미하는 lH, rH 변수를 각각 '*', '#'로 초기화한다.
// (3) numbers의 길이만큼 for문으로 반복한다.
// 1, 4, 7(num%3 === 1)일 경우에는 L을 더해주고 lH의 위치를 갱신해준다.
// 3, 6, 9(num%3 === 0, 0은 제외)일 경우에는 R을 더해주고 rH의 위치를 갱신해준다.
// 이 두 경우가 아닐 경우 dis 함수를 이용해서 위치를 구한다.
// (4) dis 함수 설명:
// 매개변수로 누르려는 수, 왼손의 현 위치, 오른손의 현 위치, 좌표, 왼손/오른손잡이 여부를 받는다.
// lD는 왼손 현 위치에서 목표점까지의 x축과 y축의 거리를 의미하고, rD는 오른손 현 위치에서 목표점까지의 x축과 y축의 거리를 의미한다.
// 만약 lD와 rD가 같다면 왼손잡이인지 오른손잡이인지 확인한다.
// 같지 않다면 D가 더 작은 손을 return한다.
// (5) return된 결과가 L이라면 lH를 현 위치로 갱신하고, R이라면 rH를 현 위치로 갱신한다.

// https://school.programmers.co.kr/learn/courses/30/lessons/67256
