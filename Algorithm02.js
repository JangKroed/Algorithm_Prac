// 짝수와 홀수
function solution(num) {
  var answer = '';
  if(num%2==0){
      answer = 'Even'
  } else {
      answer = 'Odd'
  }
  return answer;
} // num 값을 2로 나누고 난뒤 나머지가 0이면 짝수,아니면 홀수.