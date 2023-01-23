// 문자열 다루기 기본

// 문자열 s의 length는 4 or 6,
// 숫자만으로 구성되어있는지 확인하는함수를 만들어라.

// +s 해주고 NaN을 이용하여 true, false 출력

function solution(s) {
    var answer;
    if (isNaN(s)) answer = false
    else answer = true

    return answer
}
let a = 'a123'

// console.log(solution(a))
// 문자열 길이 맞춰야됨..
// 명확한 '숫자'만 true 출력해야해서 걸러낼 조건이 더 필요함.

//풀이 - 정규표현식 1
function alpha_string46(s){
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
  }

// 풀이 - 정규표현식 2
function solution(s) {
    // 좌측 or 항은 같고 우측항 정규표현식.test
    // .test는 정규표현식이 맞으면 true, 틀리면 false
    return (s.length===4 || s.length===6) && /^[0-9]+$/.test(s);
}

// 풀이 - if로 조진다 컨셉
function alpha_string46(s){
    var result = false
    // 함수를 완성하세요
    if(s > 999){
      if(s <10000){
        result = true
      }else if(s > 99999){
        if(s < 1000000){
          result = true
        }else{
          result = false
        }
      }
    }
  
    return result;
  }
  // 0000 이나 0123는 못걸러내지만 재밌어서 킵