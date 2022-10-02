// 체육복

// 서로 빌려줄수 있는 번호는 앞뒤 번호에게만,
// 전체 학생의 수 n
// 없는 학생 lost
// 빌려줄수 있는 학생의 번호 reserve
// 가질 수 있는 학생의 최댓값을 리턴.

// 전체 학생의 수는 2명 이상 30명 이하
// 없는학생은 1명이상 n명이하 중복x
// 빌려줄수 있는 학생의 수도 동일
// 여벌이있는 학생만 빌려줄 수 있음
// 여벌있는 학생도 도난당할 수 있고 1개가 남으면 빌려줄수 없음
let n = 5;
let lost = [2, 4];
let reserve = [1, 3, 5];
function solution(n, lost, reserve) {
  // 처음 가능한 학생수 = n - lost.length
  var answer = n - lost.length;
  // 왜 정렬을 해줘야 하지? - [4,2], [3,5]와 같은 케이스 때문

  let realLost = lost.filter((l) => !reserve.includes(l));
  let realReserve = reserve.filter((r) => !lost.includes(r));
  answer += lost.length - realLost.length;
  // 순서대로 확인 하므로 오름차순정렬
  realLost.sort((a, b) => a - b);

  realLost.forEach((l) => {
    if (realReserve.length === 0) {
      return;
    }
    // lost 배열 앞뒤의 값을 reserve에 포함되어있는지를 확인 -> 해당값을 reserve에서 뺌 + answer++

    if (realReserve.includes(l - 1)) {
      realReserve = realReserve.filter((r) => r !== l - 1);
      answer++;
    } else if (realReserve.includes(l + 1)) {
      realReserve = realReserve.filter((r) => r !== l + 1);
      answer++;
    }
  });
  return answer;
}
console.log(solution(n, lost, reserve));

// 다른 풀이
function solution(n, lost, reserve) {
    // 학생들 오름차순 재배열
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  // 체육복 가진 학생들 중 도난당한 학생 제외
  const newLost = lost.filter((l) => !reserve.includes(l));
  let newReserve = reserve.filter((r) => !lost.includes(r));
  return (n - newLost.filter((a) => {
      const b = newReserve.find((r) => Math.abs(r - a) <= 1);
      if (!b) return true;
      newReserve = newReserve.filter((r) => r !== b);
    }).length
  );
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42862
