// K번째수

// array = [1, 5, 2, 6, 3, 7, 4]
// i = 2, j = 5, k = 3 일때
// array의 2번째부터(i) array의 5번째(j) 까지를 오름차순하고
// 그 배열의 3번째의 수(k)를 push. (5)

// array.slice(2-1,5).sort((a,b)=>a-b)[5]
let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
function solution(array, commands) {
  let arr = array.slice();
  let a = [];
  for (let i = 0; i < commands.length; i++) {
    a.push(
      arr.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[
        commands[i][2] - 1
      ]
    );
  }
  return a;
}
console.log(solution(array, commands));

// 다른 풀이
function solution(array, commands) {
  let arr = array.slice();
  let a = [];
  for (let i = 0; i < commands.length; i++) {
    a.push(
      arr.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[
        commands[i][2] - 1
      ]
    );
  }
  return a;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42748
