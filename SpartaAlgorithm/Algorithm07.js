// 평균 구하기

// 총합과 배열갯수 나누기

let numbers = [1,2,3,4]
function solution(arr) {
    // 총합
    let sum = arr.reduce((cur,acc) => cur + acc, 0)
    // 갯수 (배열길이)
    let len = arr.length
    // 평균
    return sum/len
}
console.log(solution(numbers))

// 다른 풀이
function average(array){
    var sum = 0;
  for(var value of array){
    sum += value;
  }
  return sum/array.length;
}