// 문자열을 정수로 바꾸기
function solution(s) {
    var answer = 0;
    answer = Number(s)
    // return answer;
    console.log(answer)
}
solution('-1234')

// 다른 풀이

function strToInt(str){
    return +str
    }
console.log(strToInt("-1234"));