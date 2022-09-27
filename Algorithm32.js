// 로또의 최고 순위와 최저 순위

// 방식은 로또와 동일.
// 1등      6개 일치
// 2등      5개 일치
//  .           .
//  .           .
// 6등      1개, 불일치

// 구매한 로또배열은 lottos, 당첨번호 배열은 win_nums
// 로또배열은 일정 번호가 지워져 0임.
// 로또배열중 같은번호는 없음.
// 로또 번호는 1이상 45이하인 배열
// 최대 순위와 최저순위 배열을 출력

// 로또번호와 당첨번호를 sort((a,b)=>a-b)
// 둘을 비교하는 문법을 써서 최대로 맞을 갯수와 최저갯수 리턴
// 갯수별로 if, else if로 리턴
let lottos = [44, 1, 0, 0, 31, 25];
let win_nums = [31, 10, 45, 1, 6, 19];

// function solution(L, W) {
//   let MW = L.sort((a, b) => a - b);
//   let WN = W.sort((a, b) => a - b);
//   let maxCount = 0;
//   let minCount = 0
//   let result = [];
//   for (let i = 0; i < WN.length; i++) {
//     if (MW === 0) maxCount++
//     for (let j = 0; j < WN.length; j++) {
//         if (MW[i]===WN[j]) minCount++
//     }
//   }
//   if (minCount === 6) result.push(1)
//   else if (minCount === 5) result.push(2)
//   else if (minCount === 4) result.push(3)
//   else if (minCount === 3) result.push(4)
//   else if (minCount === 2) result.push(5)
//   else result.push(6)

//   return result
// }
console.log(solution(lottos, win_nums));

// https://school.programmers.co.kr/learn/courses/30/lessons/77484
