// 모의고사

// 각 1,2,3번 수포자들이 찍는 방식을
// 답안과 비교하여 가장많이 맞은 번호를 리턴.
// 맞춘갯수가 같은 사람 오름차순 리턴
// 답은 1이상 5이하
// 최대 1만문제

// 답의 길이만큼 반복문을 돌려 맞은갯수 카운트

// 1번 수포자 = [1, 2, 3, 4, 5]
// 2번 수포자 = [2, 1, 2, 3, 2, 4, 2, 5]
// 3번 수포자 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

let answers = [1, 3, 2, 4, 2];

function solution(a) {
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let thr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let answer = [0, 0, 0];
  for (let i = 0; i < a.length; i++) {
    // 각자의 답안길이 index값을 나눈 나머지
    // 그러면 1번부터 5번이 나옴.
    if (one[i % one.length] === a[i]) answer[0]++;
    if (two[i % two.length] === a[i]) answer[1]++;
    if (thr[i % thr.length] === a[i]) answer[2]++;
  }
  let maxNum = Math.max(...answer);
  let ans = [];
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === maxNum) ans.push(i + 1);
  }
  return ans;
}
console.log(solution(answers));

// https://school.programmers.co.kr/learn/courses/30/lessons/42840
