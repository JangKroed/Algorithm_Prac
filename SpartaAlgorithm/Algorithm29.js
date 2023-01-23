// 최소직사각형

// 번호     가로    세로
//  1       60      50
//  2       30      70
//  3       60      30
//  4       80      40  일때,

// 가장 긴 가로길이는 80
// 가장 긴 세로길이는 70

// 80 x 70 크기의 지갑을 만들면 모든 명함이 수납 가능하다.
// 하지만 2번 명함을 눕혀 수납한다면 80 x 50크기의 모든 명함이 수납할 수 있다.
// 이때의 지갑 크기는 4000(=80 * 50)

//모든 명함의 가로 길이와 세로길이를 나타내는 2차원 배열 sizes가 매개변수로 주어짐.

// 모든 명함을 수납할수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return

// sizes의 길이는 1이상 10,000이하
// sizes의 원소 w = 가로길이, h = 세로길이
// w 과 h는 1이상 1,000이하인 자연수

// -------------------------------------

// sizes = [[60, 50], [30, 70], [60, 30], [80, 40]]

// 일단 가로길이 > 세로길이 를 만족하는 배열로 재배치 한뒤,
// 가로길이 최대값, 세로길이 최대값을 곱한수 리턴.

// 내림차순 정렬.sort((a, b) => b[1] - a[1]);

let size = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

function solution(sizes) {
  let max = 0;
  let min = 0;
// for of 를 쓰면 배열이 한번 벗겨지고 1차원배열로 나뉜다.
// ex) [60, 50], [30, 70], [60, 30], [80, 40]
  for (let i of sizes) {
    // i[0]은 가로값 i[1]은 세로값
    if (i[0] > i[1]) {
      // 가로가 더 긴 경우
      if (max < i[0]) max = i[0];
      if (min < i[1]) min = i[1];
    } else {
      // 세로가 더 긴 경우
      if (max < i[1]) max = i[1];
      if (min < i[0]) min = i[0];
    }
  }
  return max * min;
}
console.log(solution(size));

// let a = [size[0][0], size[0][1]] = [size[0][1], size[0][0]]

// while문에 조건식을 달아서 값을 비교해서 앞자리가 작으면 swap


// 다른풀이 - reduce, Math.max, Math.min
function solution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}

// 다른풀이 2 - map, sort, Math.max, Math.min
function solution(sizes) {
    sizes.map((item) => item.sort((a, b) => b - a));
    let hMax = Math.max.apply(null, sizes.map((item) => item[0]));
    let vMax = Math.max.apply(null, sizes.map((item) => item[1]));
    return hMax * vMax;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/86491
