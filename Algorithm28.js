// 3진법 뒤집기

// 자연수 n은 매개변수
// 3진법 상에서 앞뒤로 뒤집고 이를 10진법으로 표현한 수 return.

// n.toString(3) 하면 3진수 문자열이됨.
// .split('').reverse().toString(10).map(Number)

function solution(n) {
    n = n.toString(3).split('').reverse().join('')
    return parseInt(n, 3)
}

console.log(solution(45))

// 다른 풀이 - 좀더 단순화
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/68935