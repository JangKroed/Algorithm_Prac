// x만큼 간격이 있는 n개의 숫자

// a+a를 b길이만큼 더한 리스트
// a=2, b=3 => [2,4,6]

// 반복문으로 구구단을 n길이만큼 구하기?

function solution(x, n) {
    var answer = [];
    // 반복문으로 n길이만큼 i를 구하고
    for(let i = 1; i <= n; i++){
        // x에 i길이만큼 곱해주면 완성!
        answer.push(x*i)
    }
    // 구구단이네 ?
    return answer
}
// console.log(solution(2,5))

// 다른 풀이 1
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
    // Array(a) = > a길이만큼 배열자리를 만든다. a=2, [undefined, undefined]
    // .fill(b) = > b값을 배열 자리마다 +?
}
// 다른 풀이 2
console.log(Array(5).fill(2).map((v,i) => (i+1)*v))