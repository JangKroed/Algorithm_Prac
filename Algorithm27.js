// 하샤드 수

// 하샤드 수는 무엇인가?
// x = 12일 때, y = 1+2 이고
// x%y = 0이 되는수를 명한다.

// 주어진 x를 각 자리수 별로 쪼개고 reduce해준값이 y로
// if(x%y === 0) return true
// else return false

function solution(x) {
  let y = (x + "")
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
  console.log("x: ", x, "y: ", y);
  if (x % y === 0) return true;
  else return false;
}
console.log(solution(12));

// 다른 풀이 - do while문
function solution(x) {
    let num = x;
    let sum = 0;
    do {
        sum += x%10;
        x = Math.floor(x/10);
    } while (x>0);

    return !(num%sum);
}

// 다른 풀이 2 - 분석해보자
function solution(x) {
    return x%eval([...x.toString()].join("+")) ? false : true;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12947