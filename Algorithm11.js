// 부족한 금액 계산하기

// 일단은 처음이용료 price를 count만큼 
// 반복문을 내금액을 초과한 첫번째값까지 돌리고
// 초과한 금액 - 내금액을 출력

function solution(price, money, count) {
    var answer = money;
    // 반복문으로 count만큼 price를 곱하고
    for (let i = 0; i <= count; i++){
        // money에 price * count 값을 빼준다
        answer -= price * i;
    }
    // money가 0보다 작으면
    if(answer < 0){
        // money이 -니까 - * (-money)
        answer = -answer;
    } else {
        // money가 +값이면
        answer = 0;
    }
    return answer;
}

console.log(solution(3,20,4))

// 풀이 1 - 가우스 공식
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}

// 풀이 2 - 뭐야이건
const solution = (..._) => Math.max(_[0]*_[2]*++_[2]/2-_[1], 0);
// 설명을 하자면 ..._ 는 코딩 테스트시 solution 함수에 들어오는 매개변수의 목록을 의미하고
// 결과적으로, 함수 몸체에서 _[0] 은 price, _[1]은 money, _[2]는 count가 됩니다.
// Math.max 부분은 0과 우리가 계산하고자 하는 결과 둘 중에 더 큰 수를 반환하게 하여, 계산 결과가 음수인 경우, 즉 돈이 부족하지 않은 경우에는 0이 나오도록 한 것입니다.
// '++_[2]' 부분은 전위연산자로써, _[2]에 대해 먼저 +1하고 계산하는.. 즉 count+1을 의미한다고 보시면 됩니다.

// 풀이 3 - 삼항연산자
function solution(price, money, count) {
    let answer = 0;

    for (let i = 1; i <= count; i++) {
        answer += price * i;
    }

    return answer > money ? answer - money : 0;
}