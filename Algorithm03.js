// 가운데 글자 가져오기

// 홀수면 정 가운데 글자, 짝수면 두글자
// 길이값을 구하고 2로 나눴을때 짝수라면 +1
// 홀수라면 그대로

function solution(s) {
  var answer = '';
  let str = s.length;
  if (str % 2 == 0){
      answer = s.substring(str/2-1,str/2+1)
  } else {
      answer = s.charAt(str/2-0.5)
  }
  return answer;
}

// 다른 풀이
function solution(s) {
  var answer = '';
  
  if (s.length % 2 == 0 ) { // 짝수일 경우,
      answer = s[s.length / 2 - 1] + s[s.length / 2];
  } else {
      answer = s[Math.floor(s.length/2)]; // 홀수일 경우, 반내림 하기
  }
  return answer;
}

// 강의 풀의

function solution(s) {
  let answer = '';
  
  //s.length를 2로 나누었을 때 나머지가 0이면 s의 길이는 짝수 아니면 홀수입니다.
  // 짝수일경우
  if(s.length%2 === 0) {
      //s 문자열의 중간에 위치한 문자를 가져오기 위해서 해당 문자의 index값을 구합니다.
      //s의 길이가 짝수일 경우에는 가운데 문자가 두개이기때문에 구해야하는 index 값이 두개입니다.
      //첫번째로오는 가운데 문자의 index를 firstIndex, 두번째로오늘 가운데 문자 index를 secondIndex.
      const firstIndex = s.length/2 - 1;
      const secondIndex = s.length/2;
      
      //index 값을 구했으면 반환되는 각 문자 값을 구해서 더합니다.
      const firstWord = s[firstIndex];
      const secondWord = s[secondIndex];
      
      answer = firstWord + secondWord;
  } 
  
  // 홀수일경우
  else{
      //s의 길이가 홀수일 경우에는 가운데 문자가 하나이기때문에 구해야하는 index 값이 하나입니다.
      const index = Math.floor(s.length/2);
      
      //index 값을 구했으면 반환되는 문자 값을 구해서 answer에 할당시킵니다.
      const word = s[index];
      
      answer = word;
  }
  
  return answer;
}