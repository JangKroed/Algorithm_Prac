// 자연수 뒤집어 배열로 만들기

// 배열이 아닌 자연수 n을 내림차순 배열로 출력.
// ex) n = 12345 => n = [5,4,3,2,1]

// n을 문자열로 받고 (n+'')
// 스프레드로 뿌려주고 (...)
// 배열에 넣어주고 .reverse()

function solution(n) {
    var answer = [];
    let a = n+''
    for (i = 0; i < a.length; i++){
        answer.push(+a[i])
    }
    return answer.reverse();
}

// ver 2

function solution(...n) {
    var answer = (n+'').split('').reverse().map(i=>Number(i))
    return answer;
}

// 다른풀이
function solution(n) {
// 문자풀이
return (n+"").split("").reverse().map(v => parseInt(v));

// 숫자풀이
var arr = [];

do {
    // arr에 n나누기 10의 나머지값을 push(123이라면 3을push)
    arr.push(n%10);
    // n을 10으로 나누고 소숫점 버린 정수 선언
    n = Math.floor(n/10);
    // n이 0보다 작을때까지
} while (n>0);

return arr;
}

console.log(solution(45678))

//https://school.programmers.co.kr/learn/courses/30/lessons/12932