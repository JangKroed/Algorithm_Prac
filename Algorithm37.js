// 숫자 문자열과 영단어

// 주어진 문자열속 영단어의 숫자를 치환하여 리턴.
// ex))
// s = "one4seveneight" 일때, answer = 1478

let s = "one4seveneight";
// console.log(s.indexOf('one'))

// 위 같은 경우 seven의 인덱스 시작값인 4를 출력,
// seven의 길이만큼 없애고 그자리에 7을 넣어주면 ?

// let b = s.slice(s.indexOf('one'),'one'.length)
// if (b==='one') b = 1
// console.log(b, 'one'.length)

// 어렵..

// function solution(s) {
//   let answer = 0;

//   s = s.replace(/zero/i, 0);
//   s = s.replace(/one/i, 1);
//   s = s.replace(/two/i, 2);
//   s = s.replace(/three/i, 3);
//   s = s.replace(/four/i, 4);
//   s = s.replace(/five/i, 5);
//   s = s.replace(/six/i, 6);
//   s = s.replace(/seven/i, 7);
//   s = s.replace(/eight/i, 8);
//   s = s.replace(/nine/i, 9);

//   answer = Number(s);
//   return answer;
// } // replace로 간단하게 될줄 알았지만 채점탈락.

function solution(s) {
  // 해당하는 문자배열을 만들어주고
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;
  // 만들어준 배열의 길이만큼 반복
  for (let i = 0; i < numbers.length; i++) {
    // arr을 선언하여 s를 해당 문자열을 기준으로 나누고(없어진다)
    let arr = answer.split(numbers[i]);
    // 이어주며 그자리에 해당 인덱스(숫자)를 넣으며 합쳐준다.
    answer = arr.join(i);
  }
  // 숫자열로 바꿔주며 리턴
  return Number(answer);
}

console.log(solution(s));

// 다른 풀이

const digit2word = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
function solution(s) {
  return Number(
    digit2word.reduce(
      (ans, word, digit) => ans.replace(new RegExp(word, "g"), digit),
      s
    )
  );
}

// https://school.programmers.co.kr/learn/courses/30/lessons/81301
