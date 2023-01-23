// 이상한 문자 만들기

// 문자열의 홀수는 소문자, 짝수는 대문자
// 인덱스 값이 0부터 이므로 짝수부터 시작
// 공백도 포함

// 단어의 길이만큼 반복문을 돌려서
// 배열로 만들면서 짝수는 Upper, 홀수는 Lower 
// (중첩 for문과 length이용)

function solution(s) {
    var answer = '';
    // 각 문자마다 쪼개기
    let str = s.split('')
    // idx 초기화
    let idx = 0;
    // s문자열 길이만큼 반복문을 돌린다
    for (let i = 0; i < str.length; i++){
        // 배열중 공백이면 
        if (str[i] == " ") {
            idx = 0;
            // 짝수면
        } else if (idx%2===0){
            // 짝수값 마다 대문자로 만들고
            str[i] = str[i].toUpperCase()
            // idx에 더해준다
            idx++
            // 홀수면
        } else if (idx%2!==0){
            // 홀수값 마다 소문자로 만들고
            str[i] = str[i].toLowerCase()
            // idx에 더해준다
            idx++
        }
        // 각 값을 answer에 더해준다
        answer += str[i]
    }
    return answer;
}

// 풀이
function toWeirdCase(s){
    //함수를 완성해주세요
    return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
  
  }