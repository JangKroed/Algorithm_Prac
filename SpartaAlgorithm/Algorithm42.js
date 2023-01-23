// 예산

// 예산 budget가 9일때
// 각부서에서 요청하는 금액이 d = [1,3,2,5,4]
// 일때 요청한 금액만큼 주고 모자란 금액은 안주므로

// d를 오름차순 배열하고 - sort((a,b)=>a-b)
// budget에서 순서대로 빼주는데 결과값이 0보다 작으면 stop
let d = [1, 3, 2, 5, 4];
let budget = 9;
function solution(d, budget) {
  d = d.sort((a, b) => a - b);
  // let answer = budget
  let count = 0;
  for (let i = 0; i < d.length; i++) {
    budget -= d[i];
    if (budget > 0) {
      count++;
    } else if (budget === 0) {
      count++;
    } else if (budget < 0) {
      break;
    }
  }
  return count;
}
console.log(solution(d, budget));

// 다른 풀이 for of
const solution = (d, budget) => {
  let cnt = 0;
  d = d.sort((a, b) => a - b);
  for (let vals of d) {
    budget -= vals;
    if (budget < 0) break;
    else cnt++;
  }

  return cnt;
};

// 다른 풀이 2
function solution(d, budget) {
  return ~(
    ~d.sort((a, b) => a - b)
      .map((v) => (budget -= v))
      .findIndex((v) => v < 0) || ~d.length
  );
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12982
