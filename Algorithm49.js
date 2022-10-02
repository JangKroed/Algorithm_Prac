// 폰켓몬

// 총 폰켓몬의 개수가 N일때 N/2만큼 가져갈수 있다
// 중복되지 않은 배열을 가져갈수 있는 최대갯수

// 받아온 값.length/2 만큼만 가져갈수 있다
// 중복제거한 길이가 n/2보다 크면 n/2 리턴
// 아니면 중복제거한 길이 리턴

let nums = [3, 1, 2, 3];
function solution(nums) {
  let arr = [...new Set(nums)];
  let max = nums.length / 2;
  // if (max < arr.length) return max;
  // else return arr.length;
  return arr.length > max ? max : arr.length;
}
console.log(solution(nums));

// 다른 풀이
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/1845
