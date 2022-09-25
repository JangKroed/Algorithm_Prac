// 정수 제곱근 판별

// n은 양의정수, 어떤 수 x의 제곱근인지?
// 맞다면 n+1 의 제곱근을 리턴
// 틀리다면 -1을 리턴

// ex) n은 121일때, 121은 11의 제곱이므로(x^2)
// x = 11 + 1 인 12의 제곱근을 리턴.
// 제곱근이 아니라면 +1을 리턴

// 루트씌워서 정수라면 +1후 제곱값 리턴
// 정수가 아니라면 -1 리턴 ()

function solution(n) {
    let a = Math.sqrt(n)
    if (a%1 === 0) return Math.pow(a+1,2)
    else return -1
}

// 다른 풀이
function nextSqaure(n){
    // 제곱근이 정수(integer)임을 이용한다.
    // Math.sqrt는 제곱근을 반환한다
    // Math.sqrt(9); // 3
    // Math.sqrt(2); // 1.414213562373095
    // parseInt(1.414213562373095); // 1
    var root = Math.sqrt(n);
    // if((parseInt(root) - root) === 0){
    //   return (root + 1 ) * (root + 1);
    // } else{
    //   return "no";
    // }
    var result = parseInt(root) - root === 0 ? (root + 1 ) * (root + 1) : "no";
    return result;
  }

// https://school.programmers.co.kr/learn/courses/30/lessons/12934