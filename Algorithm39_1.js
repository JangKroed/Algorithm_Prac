// 신규 아이디 추천 정규표현식 법
let new_id = "...!@BaT#*..y.abcdefghijklm";
function solution(new_id) {
  // 1
  var answer = "";
  new_id = new_id.toLowerCase();
  // 2
  answer = new_id.replace(/[^a-z0-9-_.]/g, "");
  // 3
  answer = answer.replace(/\.+/g, ".");
  // 4
  answer = answer.replace(/^[.]|[.]$/g, ""); // 되나 ?
  // 5
  if (answer === "") answer = "a";
  // 6
  if (answer.length > 15) answer = answer.substring(0, 15);
  if (answer.charAt(answer.length - 1) == ".")
    answer = answer.replace(/^\.+|\.+$/g, "");

  // 7
  while (answer.length < 3) answer += answer.charAt(answer.length - 1);

  return answer;
}

console.log(solution(new_id));

// 다른 정규식 풀이
const solution = (new_id) => {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .padEnd(1, "a")
    .slice(0, 15)
    .replace(/^\.|\.$/g, "");
  return id.padEnd(3, id[id.length - 1]);
};

// 다른 풀이 2
const solution = (new_id) =>
  new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .match(/^.{0,14}[^.]/)[0]
    .replace(/^(.)$/, "$1$1$1")
    .replace(/^(.)(.)$/, "$1$2$2");
