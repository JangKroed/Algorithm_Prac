// 신규 아이디 추천

// 아이디의 생성규칙이 있다.
// 맞지않는 아이디를 입력시 유사하면서 규칙에 맞는 아이디를 추천하는 문자열을 리턴

// 생성규칙
// 아이디의 길이는 3 <= 15 이하
// 알파벳 소문자, 숫자, '-', '_' 사용가능.
// '.'도 사용가능하지만 처음과 끝에는 안되고
// 연속적 사용 불가

// 과정을 7단계로 나누고 입력된 아이디가 new_id일때
// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다. - toLowerCase
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다. - a-z, 0-9, '-', '_', '.' 제거
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다. - 앞뒤값을 비교하여 '.'==='.' 일때 하나제거
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다. - 앞뒤에 위치시 shift or pop
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다. - 문자열이 비어있으면 new_id = 'a'
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다. - new_id.length>=15 일때 이후 문자 제거
// 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다. - 제거후 4단계 상황이면 재반복
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다. - new_id.length <= 2 일때 마지막 문자를 길이가 3이될때 까지 반복.
let new_id = "...!@BaT#*..y.abcdefghijklm";
// 정규표현식 안쓰는 버전
function solution(new_id) {
  // 1
  var answer = "";
  new_id = new_id.toLowerCase();
  // 2
  for (let i = 0; i < new_id.length; i++) {
    let ch = new_id.charAt(i);
    if (is_Alpha(ch) || is_Digit(ch) || ch == "-" || ch == "_" || ch == ".")
      answer += ch;
  }
  // 3
  while (answer.indexOf("..") != -1) answer = answer.replace("..", ".");
  // 4
  if (answer.charAt(0) == ".") answer = answer.substring(1);
  if (answer.charAt(answer.length - 1) == ".")
    answer = answer.substring(0, answer.length - 1);
  // 5
  if (answer === "") answer = "a";
  // 6
  if (answer.length > 15) answer = answer.substring(0, 15);
  if (answer.charAt(answer.length - 1) == ".")
    answer = answer.substring(0, answer.length - 1);

  // 7
  while (answer.length < 3) answer += answer.charAt(answer.length - 1);

  return answer;
}

function is_Alpha(str) {
  let a = "abcdefghijklmnopqrstuvwxyz";
  if (a.indexOf(str) !== -1) return true;
  else return false;
}

function is_Digit(num) {
  if (Number(num)) return true;
  else return false;
}

console.log(solution(new_id));

// https://school.programmers.co.kr/learn/courses/30/lessons/72410
