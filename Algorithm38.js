// 시저 암호

// 각 알파벳의 일정한 거리만큼 민 결과를 리턴.
// 공백은 아무리 밀어도 공백
// s는 문자열, n은 밀어야하는 거리

// ex1)
// s = "AB" 이고 n = 1 일때,
// answer = "BC"

// ex2)
// s = "a B z", n = 4 일때,
// answer = "e F d"

// 응용 해보자
// let a = 'a'
// let b = a.charCodeAt(0)+4
// console.log(String.fromCharCode(b))

// 주어진 s를 하나하나 꺼냇을때
// if (' ') countinue
// else str[i] = String.fromCharCode(a.charCodeAt(i)+n)
let a = "a B z";
let b = 4;
function solution(s, n) {
  for (i = 0; i < s.length; i++) {
    if (s[i] === " ") continue;
    // else if (s[i] === "z") s[i] = "a";
    // else if (s[i] === "Z") s[i] = "A";
    else s[i] = String.fromCharCode(s.charCodeAt(i) + n);
  }
  return s;
} // 될거 같기도.. 한데... 지식이 부족하다..

console.log(solution(a, b));

// 해보고 싶던 비슷한 풀이, 빠르다
function solution(s, n) {
  return s
    .split("")
    .map((el) => {
      if (el == " ") {
        return el;
      }
      const tmp = el.charCodeAt();
      return el.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(tmp + n - 26)
        : String.fromCharCode(tmp + n);
    })
    .join("");
}

// 아스키코드x
function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}

// 다른 풀이 2
function caesar(s, n) {
  var result = s.replace(
    /[a-z]/gi,
    (c) =>
      [
        (c = c.charCodeAt(0)),
        String.fromCharCode((c & 96) + (((c % 32) + n - 1) % 26) + 1),
      ][1]
  );

  // 함수를 완성하세요.
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12926
