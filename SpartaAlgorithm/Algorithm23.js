// 정수 내림차순으로 배치하기

// 정수 n을 내림차순으로 리턴 (숫자열)

// 정수 n을 문자열로 만들고 (n+''),(toString())
// 문자마다 나누고 (.split(''))
// 내림차순 배열 (.reverse())
// 그대로 배열 벗겨주기

// .join('')은 배열 속 문자열을 연결시켜준다.

function solution(n) {
    var answer = (n+'').split('').sort().reverse()
    let a = '';
    for (i = 0; i < answer.length; i++){
        a += answer[i]
    }
    return parseInt(a);
}

// 다른 풀이
function solution(n) {
    //숫자가 분명히 더 빠름
    var nums =[];
    do{
        nums.push(n%10);
        n=Math.floor(n/10);
    } while(n>0)

    return nums.sort((a,b)=>b-a).join('')*1;
    //문자는 느림
    return (n+"").split('').sort((a,b)=>b-a).join('')*1;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12933
