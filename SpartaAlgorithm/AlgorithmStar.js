//별 하나 씩 추가
let output = ''

for (let i = 0; i < 9; i++){
    for (let j = 0; j < i + 1; j++){
        output += '*'
    }
    output += '\n'
}

console.log(output)

// 홀수마다 별추가
let output = ''

for (let i = 0; i < 9; i++){
    for (let j = 0; j < (2 * i + 1); j++){
        output += '*'
    }
    output += '\n'
}

console.log(output)

// 피라미드
let output = ''

for (let i = 0; i < 9; i++){
    for (let k = 0; k < 8 - i; k++){
        output += ' '
    }
    
    for (let j = 0; j < (2 * i + 1); j++){
        output += '*'
    }
    output += '\n'
}

console.log(output)

// 마름모 피라미드
let output = ''

for (let i = 0; i < 9; i++){
    for (let k = 0; k < 9 - i; k++) {
        output += ' '
    }
    for (let j = 0; j < (2 * i + 1); j++) {
        output += '*'
    }
    output += '\n'
}

for (let i = 0; i < 10; i++) {
    for (let k = 0; k < i; k++){
        output += ' '
    }
    for (let j = 0; j < 2 * (9 - i) + 1; j++){
        output += '*'
    }
    output += '\n'
}

console.log(output)


// 분석 예제
let output = ''

for (let i = 0; i < 9; i++){
    for (let j = 0; j < i + 1; j++){
        output += '*'
    }
    output += '\n'
}

// 패턴
for (let i = 0; i < n; i++{ }
-> 반복문 내부를 n번 반복!

// 실행
output = ''
i = 0
for (let j = 0; j < i + 1; j++) { } // 1번 반복
  output = '*'
output = '*\n'

i = 1
for (let j = 0; j < i + 1; j++) { } // 2번 반복
  output = '*\n*'
  output = '*\n**'
output = '*\n**\n'

i = 2
for (let j = 0; j < i + 1; j++) { } // 3번 반복
  output = '*\n**\n*'
  output = '*\n**\n**'
  output = '*\n**\n***'
 output = '*\n**\n***\n'

i = 3
for (let j = 0; j < i + 1; j++) { } // 4번 반복
  output = '*\n**\n***\n*'
  output = '*\n**\n***\n**'
  output = '*\n**\n***\n***'
  output = '*\n**\n***\n****'
output = '*\n**\n***\n****\n'

i = 4
for (let j = 0; j < i + 1; j++) { } // 5번 반복
  output = '*\n**\n***\n****\n*'
  output = '*\n**\n***\n****\n**'
  output = '*\n**\n***\n****\n***'
  output = '*\n**\n***\n****\n****'
  output = '*\n**\n***\n****\n*****'
output = '*\n**\n***\n****\n*****\n'


// 스파르타 답안
let fs = require('fs');
let n = fs.readFileSync('/dev/stdin').toString().split(' ');
// 1. n을 입력 받기 (입력받는 형식은 외우지않아도 됩니다!)

let num = Number(n);

result = ''; //결과값을 문자열에 저장

for (let i = 0; i <= num; i++) {// 2. 1부터 i를 1씩 증가하며 반복하기
  for (let j = 0; j <= i; j++) { // 3.  i의 갯수 만큼
    result += '*';//별 출력하기
  }
	if(i!=n){// 5. n이라면 줄바꾸지 않기
	  result += '\n';// 4. 줄바꾸기
	}
}

console.log(result);//결과 문자열 출력

// 콘솔에서 쓰게 수정
let result = ''; //결과값을 문자열에 저장

for (let i = 0; i <= 5; i++) {// 2. 1부터 i를 1씩 증가하며 반복하기
  for (let j = 0; j <= i; j++) { // 3.  i의 갯수 만큼
    result += '*';//별 출력하기
  }
	if(i!=5){// 5. n이라면 줄바꾸지 않기
	  result += '\n';// 4. 줄바꾸기
	}
}

console.log(result);//결과 문자열 출력

