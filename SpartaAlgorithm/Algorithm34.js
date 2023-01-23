// 문자열 내 마음대로 정렬하기

// 문자열로 구성된 배열 strings, 정수 n
// 각 문자열의 인덱스 n번째를 기준으로 오름차순 정렬
// ex)
// strings = ["sun", "bed", "car"] 일이고 n=1일때,
// 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬

// sort로 배열속 단어 선택가능 ?
// let strs = ["sun", "bed", "car"];
// console.log(strs[0][1]);

// 반복문으로 strings의 length만큼 돌아가며
// strings의 [i][1]을 기준으로 sort
let strings = ["sun", "bed", "car"];
let n = 1;
// function solution(strings, n) {
//   let a = strings;
//   for (let j = 0; j <= n; j++) {
//     for (let i = 0; i < a.length; i++) {
//       if (a[i]?.charAt(n) > a[i + 1]?.charAt(n)) {
//         [a[i], a[i + 1]] = [a[i + 1], a[i]];
//       }
//     }
//   }
//   return a;
// }
// 이 방법은 문자가 같을때 그다음 문자 정렬불가..

// function solution(strings, n) {
//   let arr = [];
//   for (let i = 0; i < strings.length; i++) {
//     arr.push("" + strings[i].charAt(n) + strings[i]);
//   }
//   arr.sort();
//   let answer = [arr.length];
//   for (let i = 0; i < arr.length; i++) {
//     answer.push(arr.shift(i).substring(1, arr.shift(i).length));
//   }
//   return answer;
// } // 자바보고 해볼라햇는데 어렵네..;

function solution(strings, n) {
  let answer = strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a[n] === b[n]) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    }
  });

  return answer;
}

// 다른 풀이 - sort, localeCompare
function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );
}

console.log(solution(strings, n));

// 다른 풀이 2 - 자바보고 해보고싶던거, 
function solution(strings, n) {
    var answer = [];
    for (var i = 0; i < strings.length; i++) {
        var chu = strings[i][n];
        strings[i] = chu + strings[i];
    }
    strings.sort();
    for (var j = 0; j < strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0],"");
        answer.push(strings[j])
    }

    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12915

// let a = 'a'
// let b = 'b'
// let c = 'c'

// console.log(a.localeCompare(c))