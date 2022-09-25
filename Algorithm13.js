// 문자열 내 p와 y의 개수

// 대소문자 구분 x
// 문자열에서 p와 y의 각각의 개수를구하고
// if문으로 비교해서 같으면true, 다르면 false

let a = "pPoooyY"

function solution(s){
    let lower = s.toLowerCase()
    let count = 0
    for (let i = 0; i < s.length; i++){
        // if (lower[i]==='p') count++
        if (lower[i]==='p'){
            count++
            // else if (lower[i]==='y') count--
        } else if (lower[i]==='y'){
            count--
        }
    }
    return count === 0 ? true : false
}

console.log(solution(a))

// 다른 풀이
function numPY(s){
    return s.toUpperCase().split("P").length 
    === s.toUpperCase().split("Y").length;
}