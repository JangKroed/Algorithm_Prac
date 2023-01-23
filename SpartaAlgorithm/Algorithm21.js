// 자릿수 더하기

// n=123 일때, 1+2+3으로 만들고
// 결과값을 출력

// n을 리스트에 반복문으로 넣어주고
// 서로 더한값을 출력


let a = 1234

function solution(n) {
    var answer = 0;
    let b = n.toString()
    for (let i = 0; i < b.length; i++){
        answer += +b[i]
    }
    return answer;
}

console.log(solution(a))

// 다른 풀이

function solution(n){
// // 문자 풀이
// return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)

// 숫자풀이
var sum = 0;

do {
sum += n%10;
n = Math.floor(n/10);
} while(n > 0);

return sum;
}