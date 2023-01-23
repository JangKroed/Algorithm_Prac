// 내적

// a와 b의 내적을 구하라. - 뭔솔?
// 배열의 길이를 n 이라하고
// a = [1,2,3,4], b = [-3,-1,0,2]일때
// 각 배열의 index값 끼리 곱한값의 총합을 출력
// ex) [[[1]*[-3]]+[[2]*[-1]]+[[3]*[0]]+[[4]*[2]]]
// console.log(-3+-2+0+8) // 3을 출력

// 뭔가 행렬의 덧셈 응용하면 될거같은데

function solution(a, b) {
    var answer;

    return answer;
}

let a = [1,2,3,4]
let b = [-3,-1,0,2]

function solution(a, b){
    var answer = 0;
    // 반복문으로 a 길이만큼 i값 출력 (배열길이구하기)
    for(let i = 0; i < a.length; i++){
        // 출력할 값에 반복될때마다 a[index] * b[index]
        answer += a[i] * b[i]
    }
    return answer;
}

console.log(solution(a,b))

// 풀이 - reduce로 삼항연산 ?
function solution(a, b) {
    var answer = a.reduce((acc, cur, idx) => acc += cur*b[idx], 0)
    return answer;
}
// 풀이2 - 마스터세요 ?
var solution=(a,b)=>a.reduce((a,c,i) => a+c*b[i], 0);
