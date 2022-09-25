// 수박수박수박수박수박수?

// 길이가 n 일때, n만큼 문자열을 리턴.
// ex) n = 3, '수박수'출력

// '수'와 '박'을 홀수 짝수 마다 for문으로 ?
// n 만큼 '수박'이라는 단어를 생성
// 2로 나눈 값으로 문자열 자르기(substring)

let a = '수박수박수박'

function solution(n) {
    var a = ''
    for (let i = 0; i < n; i++){
        a += '수박'
    }
    b = a.length / 2
    return a.substring(0, b)
}

console.log(solution(1))

// 풀이 - str.repeat(count);
const waterMelon = n => "수박".repeat(n).slice(0,n); // 깔끔함 무엇 ;