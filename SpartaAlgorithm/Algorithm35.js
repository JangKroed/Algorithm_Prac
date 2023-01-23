// 문자열 내림차순으로 배치하기

// 문자열 s에 나타내는 문자를 내림차순으로 리턴
// 대소문자로 되어있고 대문자 < 소문자
let s = "Zbcdefg"
function solution(s) {
    let a = s.split('')
    a=a.sort().reverse().join('')
    return a
}
console.log(solution(s))

// 다른 풀이 - sort, 삼항연산자
function solution(s) {
    return s.split("").sort((a,b) => a<b ? 1:-1).join("")
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12917