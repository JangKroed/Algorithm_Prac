// 1. 자연수 뒤집어 더하기

// 자연수 n의 각 자리숫자를 뒤집은 순서로 더한값 리턴.

// ex)
// n = 12345 (숫자열) 일때.
// 5+4+3+2+1 = 15를 리턴

// (n+'').split('').sort().reverse()
// 까지하면 문자열로 만들고 내림차순 (문자열)
// .map(Number).reduce((a,b)=>a+b,0)
// 까지 하면 합계 끗.

// function solution(n) {
//   return (n + "")
//     .split("")
//     .reverse()
//     .map(Number)
//     .reduce((a, b) => a + b, 0);
// }

// console.log(solution(718253));

// 2. 몇시간했더라?

// 체크인과 체크아웃은 항상 정시
// 체크아웃시 익일 시간은 24+a (새벽 2시는 26)
// 체크아웃이 새벽 5시를 넘어가면 자동으로 전날 오후9시로 처리됨.

// checkin 배열과 checkout 배열이 주어짐
// 각 배열에는 월요일부터 일요일까지 체크인/체크아웃 한 시간이 담겨있다.
// 각 배열의 길이는 7이다

// 두개의 배열을 비교, for문과 if문 사용
// 체크아웃 - 체크인 시간을 result + 체크아웃-체크인
// 체크아웃 시간 29이상이면 +21
// let arr1 = [9, 9, 9, 9, 7, 9, 8];
// let arr2 = [23, 23, 30, 28, 30, 23, 23];

// function solution(arr1, arr2) {
//   let answer = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2[i] >= 29) answer.push(21 - arr1[i]);
//     else answer.push(arr2[i] - arr1[i]);
//   }
//   return answer.reduce((a, b) => a + b, 0);
// }

// console.log(solution(arr1, arr2));

// 3. 소수의 개수와 덧셈

// 문자배열 s에는 공백으로 구분된 숫자들이 있다
// str에 나타난 숫자중 소수의 최대값과 소수가 아닌 최소값을 찾아라.
// 최대값 = 소수인 숫자의 최대값
// 최소값 = 소수가 아닌 숫자의 최소값

// 소수 = 곱해서 나올수 없는숫자.
// ex)
// 6 = 2 x 3 (소수가 아니다)
// 5 = 곱해서 나오는 수가 없으므로 소수

// 소수인지 알려면 나눠야할거같은데
// 뭘로 나누고 무슨값을 찾아야 할까

// 소수배열과 소수가 아닌 배열 만들고
// 소수면 소수배열.push()
// 아니면 아닌배열.push()
// let primes = [] ;
// let numbers = "97 75 88 99 95 92 73"
// let n = ['1','1','1'].join(' ')

primes.push(n);
console.log(primes);

let primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
  157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
  239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
  331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
  421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
  509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607,
  613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701,
  709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811,
  821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911,
  919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019,
  1021, 1031, 1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093, 1097,
  1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163, 1171, 1181, 1187, 1193, 1201,
  1213, 1217, 1223
];
let s = "97 75 88 99 95 92 73";
function solution(s) {
  let newArr = s.split(" ");
  let max = [];
  let min = [];
  // return newArr
  // i는 주어진 수의 길이
  for (let i = 0; newArr.length; i++) {
    if (newArr[i % primes.length] == newArr[i]) max.push(newArr[i]);
  }
  let answer = Math.max(...max).concat(Math.min(...min));
  return answer;
}
console.log(solution(s));

// let a = []
// a.push(s)
// console.log(a, a.length)
// console.log(a[0].split(' '), a[0].split(' ').length)

// 콘캣, 조인, 에라토스테네스의 체
