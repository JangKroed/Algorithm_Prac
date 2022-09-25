// 두 정수 사이의 합
// a=3, b=5 일때 3+4+5하여 12를 출력.

let a = 5
let b = 3
let answer = 0;
let arr = []
if(b - a > 0){
  for(let i = a; i <= b; i++){
    arr.push(i)
  }
  arr.forEach((item) => {
    answer += item;
  })
} else {
  for(let j = a; j >= b; j--){
  arr.push(j)
}
arr.forEach((item) => {
  answer += item
})
}

console.log(answer)

// 다른 풀이
function solution(a, b) {
  var answer = 0;
  
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  
  for(let i=min; i<=max; i++) answer+=i;
  return answer;
}