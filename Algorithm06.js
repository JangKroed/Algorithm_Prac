// 없는 숫자 더하기

// 0부터 9까지 10개의 숫자리스트가
// 중복되지 않게 부여.
// 먼저 만들고 각 항에 있는것이
// 입력된 리스트에 있는지 확인 후
// 없는숫자 더하기

// 대조군에 입력값을 넣고 중복되는 것을 없애고 서로더하기

// numbers와 대조할 0~9 리스트
let oldNumbers = []
for (let i = 0; i <= 9; i++){
    oldNumbers.push(i)
}
// 입력될 numbers
let numbers = [1,2,3,4,6,7,8]

// 합치기
let newNumbers = oldNumbers.concat(numbers)

// 중복제거 - 실패
let a = [...new Set(newNumbers)]
let b = [...a]
console.log(a)

// 풀이겸 이해
function solution(numbers) {
    var answer = 0;
    // numbers와 대조할 0~9 리스트를 반복문으로
    for(let i=0; i<10; i++){
        if(!numbers.includes(i)) answer += i; 
        // numbers가 i를 포함하지 않는다면, answer에 그 i 값들을 더해라
    } 
    return answer;
}

// 풀이
function solution(numbers) {
    // 0 - 9의 총합 입력 - 
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

// => a의 총합 - b의 총합