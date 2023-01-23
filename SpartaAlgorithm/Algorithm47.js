// 실패율

// 실패율은 다음과 같이 정의
// 스테이지를 도달했으나 클리어하지 못한 플레이어의 수
// 나누기
// 스테이지에 도달한 플레이어 수

// 전체 스테이지 개수가 N
// 사용자가 멈춰있는 스테이지 번호배열이 stages
// 실패율이 높은 스테이지부터 내림차순으로
// 스테이지 번호가 담긴 배열을 리턴.

// 스테이지 개수 N은 1이상 500이하
// 배열의 길이는 1이상 20만 이하
// 스테이지에는 1이상 N+1이하의 자연수가 담겨있다
// - 각 자연수는 사용자가 도전중인 스테이지 번호
// - 단, N+1은 마지막 스테이지 (N 번째 스테이지)까지 클리어 한 사용자를 나타낸다.
// 실패율이 같은 스테이지가 있다면 작은번호의 스테이지가 먼저 배치
// 스테이지에 도달한 유저가 없으면 실패율은 0

// N 은 스테이지의 길이를 뜻함.
// N = 5라면 1 ~ 5 스테이지가 있다

// stages는 주어진 배열에 각 도전중인 스테이지를 뜻하고
// N + 1 < stages(i) 일경우 그 사용자는 모든 스테이지 클리어.

// ex)
// 각 스테이지를 도전중인유저 / 지나간 유저
// 최종적으로 N.length만큼의 스테이지 배열을 만들고
// 실패율에 따라 내림차순 배열해주는데
// 실패율이 같으면 스테이지번호가 작은번호가 앞번호의 인덱스를 가진다. (a>b라면, a,b를 b,a로)

// 1 각 클리어한 배열과 클리어 하지 못한 배열을 만든다
let N = 5;
let stages = [2, 1, 2, 6, 2, 4, 3, 3];
function solution(N, stages) {
  let cl = [];
  let no = [];
  let stag = [];
  for (let i = 1; i <= N.length; i++) {
    stag.push(i);
  }
}

// 다른 풀이
function solution(N, stages) {
  let answer = [];
  //실패한 사람은 제외해야되기 떄문에 임시 변수 people생성
  let people = stages.length;
  for (let i = 1; i <= N + 1; i++) {
    //Array.filter() : 조건을 만족하는 원소만 추출
    let tmp = stages.filter((n) => n === i).length;
    //answer = [[스테이지, 실패율]]
    answer.push([i, tmp / people]);
    //실패한 사람 제외
    people -= tmp;
  }
  //마지막은 모두 깬사람들이므로 실패율이 없어서 pop()
  answer.pop();
  //answer의 2번째 원소기준으로 내림차순으로 정렬
  answer = answer.sort((a, b) => b[1] - a[1]);
  //Array.map() : 배열을 조건에 맞게 변환
  return answer.map((a) => a[0]);
}

// 다른 풀이 2
function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}

// 다른 풀이 3 - 2차원 배열
function solution(N, stages) {
  let records = [];
  let i;
  // 1 array 초기화
  for (i = 0; i < N + 1; i++) records.push([0, 0, i + 1]); //수, 실패율, 스테이지
  // 2 스테이지 도전 빈도 수
  stages.forEach((num) => records[num - 1][0]++);
  let ppl = 0;
  // 3 실패율 구하기
  for (i = 0; i < N + 1; i++) {
    records[i][1] = records[i][0] / (stages.length - ppl);
    ppl += records[i][0];
  }
  return records
    .slice(0, N)
    .sort((a, b) => b[1] - a[1])
    .map((el) => el[2]);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42889
