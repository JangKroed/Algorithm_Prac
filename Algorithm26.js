// 콜라츠 추측

// 주어진 수가 1이 될때까지 반복되는 작업횟수 구하기
// 500 이상일때 멈추고 -1을 반환
// 입력된 수가 짝수라면 2로 나누고
// 홀수라면 3을 더하고 1을 더한다.

// 반복되는 작업횟수는 count
// 주어진 수가 1이되면 break
// count가 500이상이 되면 break

// for문 안에 if와 else if를 넣어 조건을 돌려보자
// function solution(num) {
//   let count = 0;
//   for (let i = 1; i <= 500; count++) {
//     if (num%2 === 0){
//         num = num/2
//         continue
//     } else {
//         num = num*3+1
//     }
//     if (count === 500){
//         return count
//     } else if (num === 1) return count
//   }
// }

console.log(solution(16));

function solution(num) {
  let count = 0;

  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
      count++;
    } else if (num % 2 !== 0) {
      num = num * 3 + 1;
      count++;
    }
    if (count >= 500) {
      return -1;
    }
  }
  return count;
}

// 다른 풀이 - for
function collatz(num) {
  for (var answer = 0; answer < 500; answer++) {
    if (num % 2 == 0) {
      num = num / 2;
    } else if (num == 1) {
      return answer;
    } else if (num % 2 == 1) {
      num = num * 3 + 1;
    }
  }
  //if(answer == 500){return -1;}
  return -1;
}

// 다른 풀이 2 - while 조건문
function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}

// 다른 풀이 3 - 분석해보자
const solution = (num) => collatzGuessCount(num, 0);

const collatzGuessCount = (num, acc) =>
  num === 1
    ? acc > 500
      ? -1
      : acc
    : collatzGuessCount(processCollatz(num), acc + 1);

const processCollatz = (num) => (num % 2 === 0 ? num / 2 : num * 3 + 1);

// https://programmers.co.kr/learn/courses/30/lessons/12943