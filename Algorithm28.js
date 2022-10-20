// 3진법 뒤집기

// 자연수 n은 매개변수
// 3진법 상에서 앞뒤로 뒤집고 이를 10진법으로 표현한 수 return.

// n.toString(3) 하면 3진수 문자열이됨.
// .split('').reverse().toString(10).map(Number)

function solution(n) {
    n = n.toString(3).split('').reverse().join('')
    return parseInt(n, 3)
}

console.log(solution(45))

// 다른 풀이 - 좀더 단순화
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

// 다른 풀이 - 섹시한 풀이
function solution(n, numbers = []) {
    while (n) numbers.push(n % 3), (n = parseInt(n / 3))
    return numbers.reduce((S, E, X, $) => S + E * Math.pow(3, $.length - X - 1), 0)
  }

// 노가다 풀이
function solution(n) {
    var answer = 0;
    let _3 = {};
    let x = 0;

    while (3**++x < n);
    if(3**x !== n) x--;

    let max = x;

    for (let i = x; i>=0; _3[i--] = 0);

    while(x>0){
        while(3**x <= n){
            n -= 3**x;
            _3[x] = _3[x]+1;
        }
        x--;    
    }
    _3[x] = n;
    for ( let key in _3){
        if(_3[key]) answer += (3**max * _3[key]);
        max--;
    }

    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/68935