// 소수 만들기

const { range } = require("express/lib/request");

// 주어진 숫자중 3개의 숫자를 더했을때 소수가 되는 경우의 개수를 리턴
// 숫자들이 들어있는 배열 nums
// 배열 속 숫자들 중 서로다른 3개를 골라 더했을 때 소수가 되는 경우의 수를 count하라.

// nums는 3개 이상 50개 이하
// nums는 1이상 1000이하의 자연수 중복x

// 소수 찾기
// 2,3,5,7을 제외한 2,3,4,7의 배수를 제거

// 새로운 배열에 nums의 가장큰 수까지의 배열을 만들고
// ex) nums = [1,2,3,4] 일때, Math.max(...nums)하고
// let arr = []
// for(i=1;i<=Math.max(...nums);i++){
//     arr.push(i)
// }
// 2,3,5,7을 제외한 2,3,5,7의 배수를 arr에서 slice

// nums = [1,2,3,4] 일때,
// 중첩 반복문으로 각 자리에 한번씩 더해보고 결과가 소수라면 그수를 answer에 push
// answer를 Set한뒤 length값을 리턴

// let a = [1,2,3,4,5,6]

// let idx = a.indexOf(3)

// a.splice(idx,1)

// console.log(a)

let nums = [1, 2, 7, 6, 4];
function solution(nums) {
  let answer = 0;
  for (let a = 0; a < nums.length; a++) {
    for (let b = a + 1; b < nums.length; b++) {
      for (let c = b + 1; c < nums.length; c++) {
        if (is_prime(nums[a] + nums[b] + nums[c])) answer += 1;
      }
    }
  } return answer
}

function is_prime(num) {
  for (i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 소수 판독기를 따로 함수로 만들어서
// if문으로 만족하는 값일때 answer에 + 1 해주려고 했는데 으렵넹..

console.log(solution(nums));
// console.log(is_prime(97));

// https://school.programmers.co.kr/learn/courses/30/lessons/12977

// for (const x of Array(5).keys()) {
//   console.log(x, String.fromCharCode("A".charCodeAt(0) + x));
// }

// function range(size, startAt = 1) {
//     return [...Array(size).keys()].map(i => i + startAt);
// }

// console.log(range(5))
