// 최대공약수와 최소공배수

// 두 자연수 n과 m의 최대공약수와 최소 공배수를 구하라.

// 유클리드 호제법 참고하자
let n = 2;
let m = 5;
function solution(n, m) {
  return [max(n, m), min(n, m)];
}

function max(n1, n2) {
  let num1 = [];
  let num2 = [];
  for (let i = 1; i <= n1; i++) {
    if (Number.isInteger(n1 / i) === Number.isInteger(i)) num1.push(i);
  }
  for (let i = 1; i <= n2; i++) {
    if (Number.isInteger(n2 / i) === Number.isInteger(i)) num2.push(i);
  }
  let answer = num1.filter((x) => num2.includes(x));

  return Math.max(...answer);
}

function min(n1, n2) {
  let num1 = [];
  let num2 = [];
  let max;
  if (n1 >= n2) max = n1;
  else max = n2;
  for (let i = 1; i <= max; i++) {
    num1.push(n1 * i);
    num2.push(n2 * i);
  }
  let answer = num1.filter((x) => num2.includes(x));
  return Math.min(...answer);
}

console.log(max(n, m));
console.log(min(n, m));
console.log(solution(n, m));
console.log(gcdlcm(n, m));

// 다른 풀이 - 유클리드 호제법 ?
function gcdlcm(a, b) {
  var r; // for (let i=0;i<n.length;i++)
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
// for문에 받는 인자 a,b를 곱한수를 ab로 선언
// r 은 a / b 의 나머지 값
// a = b
// b = r

// return b는 최대 공약수, a*b/b는 최소공배수


// 세준님 풀이
function solution(n,m){
    const result = n*m
    let initial = 1
    while(initial){
        initial = n%m
        if(initial == 0) break
        n = m
        m = initial
    }
    
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12940
