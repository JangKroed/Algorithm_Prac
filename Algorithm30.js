// 같은 숫자는 싫어

// 배열속 중복된 수를 제거하고 Set
// 원배열 상태 그대로 리턴.
let a = [1, 1, 3, 3, 0, 1, 1];
function solution(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) newArr.push(arr[i]);
  }
  return newArr;
}

console.log(solution(a));

// 다른 풀이 - filter
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12906
