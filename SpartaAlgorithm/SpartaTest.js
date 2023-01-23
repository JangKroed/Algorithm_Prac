// 스파르타 주특기 코딩고사

// 1 - 없는 정수 사이의 합
// 0부터 9까지의 숫자 중 일부가 들어있는 배열 numbers
// numbers에서 찾을수 없는 숫자는 두개
// 두 정수를 a,b라고 했을때
// a, b 사이의 수를 합한값을 리턴

// arr을 배열로 초기화 하고
// 반복문과 if문을 이용하여 numbers와 일치하지 않는값을 arr.push(i)
// 두 수를 오름차순 정렬하고 다시 새로운 배열 answer을 초기화 해준뒤 - 처음부터 오름차순 해줘도 될듯
// for(let i=a;i<b;i++) 해준뒤 answer.push(i)
// .reduce 끗 // 등차수열 합공식을 써보자!!
function solution(arr1) {
  let arr = [];
  arr1.sort((a, b) => a - b);
  for (let i = 0; i <= 9; i++) {
    arr.push(i);
  }
  let lost = arr.filter((r) => !arr1.includes(r));
  let start = lost.shift();
  let end = lost.pop();
  let answer = [];
  for (let i = start; i <= end; i++) {
    answer.push(i);
  }
  return answer.reduce((a, b) => a + b, 0);
}
let arr1 = [1, 3, 5, 9, 2, 4, 8, 0];
console.log(solution(arr1));

// 이상한 문자 만들기 2

// 문자열 s는 한 개 이상의 단어로 구성.
// 문장의 인덱스값이 짝수번째이면 대문자,
// 홀수번째면 소문자 처리를 해준다.
// 공백을 포함하지 않은 인덱스 번호로 쳐주지 않는다
// 첫번째 0번 인덱스는 짝수로 시작

// 공백없앤 문자열을 깊은복사
// 공백인덱스값을 가진 배열 복사
// 반복문으로 해당인덱스값에 공백 삽입

// 인덱스값이 짝수이면서 공백일때

// 인덱스값이 홀수이면서 공백일때

function solution(s) {
  let answer = "";
  let str = s.split("");

  let idx = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") idx = idx + 2;
    else if (idx % 2 === 0) {
      str[i] = str[i].toUpperCase();
      idx++;
    } else if (idx % 2 !== 0) {
      str[i] = str[i].toLowerCase();
      idx++;
    }
    answer += str[i];
  }

  return answer;
}
let s = "hang hae ninety nine";
console.log(solution(s));

// 세욱님 풀이
/**
 *
 * s: 문자열. 공백으로 구분된 한개 이상의 단어
 * 짝수는 대문자, 홀수는 소문자
 *
 * 문자열 반복
 * blank == continue
 * count%2 == 0     > lower
 * count%2 == 1     > upper
 *
 */
function solution(s) {
  let answer = "";
  let count = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i];
      continue;
    }
    switch (count++ % 2) {
      case 0:
        answer += s[i].toUpperCase();
        break;
      case 1:
        answer += s[i].toLowerCase();
        break;
    }
  }
  return answer;
}

// 3번. 같은 단어는 싫어

// 배열 arr와 정수 n이 주어집니다. 배열 arr의 각 원소는 문자열로 이루어져 있습니다. 이때, 배열 arr에서 중복되는 단어는 전부 제거하려고 합니다. 단, 제거된 후 남은 단어들을 반환할 때는 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
// 예를 들어 strings가 ["brush", "sun", "brush", "bed", "car"]이고 n이 1이면 중복을 제거한 배열인 ["sun", "bed", "car"]에서 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// 제한 조건
// strings는 길이 1 이상, 50이하인 배열입니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// 모든 strings의 원소의 길이는 n보다 큽니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

// 입출력 예
// arr = ["brush", "sun", "brush", "bed", "car"]
// n = 1
// answer = ["car", "bed", "sun"]
// arr = ["banana", "cat", "car", "apple", "banana", "banana"]
// n = 0
// answer = ["apple","car","cat"]

// 지정 입력값
// arr = ["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"]
// n = 2
// answer = ["glass", "yogurt", "coke", "vitamin", "water"]

// 중복된 단어만으로 구성된 배열을 만들고
// 필터로 걸러내기

function solution(arr, n) {
  arr.sort((a, b) => a - b);
  let w = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      w.push(arr[i]);
      w.push(arr[i + 1]);
    }
  }
  let answer = arr.filter((r) => !w.includes(r));
  return answer.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );
}
let arr = ["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"];
let n = 2;
console.log(solution(arr, n));
