// 나누어 떨어지는 배열

// arr의 각 값이 divisor로 나누었을때 
// 나머지가 0인 값들만 새로 출력.

function solution(arr, divisor) {
    var answer = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%divisor === 0) answer.push(arr[i])
    } if (answer.length === 0) answer.push(-1)
    return answer.sort((a,b)=>a-b)
}

let asd = [5,9,7,10]

console.log(solution(asd,5))

// 김서방 찾기 참고함

// 풀이 - filter, 삼항 연산자
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}