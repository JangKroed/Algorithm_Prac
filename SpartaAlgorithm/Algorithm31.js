// 두 개 뽑아서 더하기

// 정수배열 numbers에 있는 서로다른 인덱스 두개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 리턴.
// numbers의 길이는 2 이상 100 이하
// numbers의 모든 수는 0 이상 100 이하

// ex)
// numbers = [2,1,3,4,1]
// return = [2,3,4,5,6,7]

// 3 = 2 + 1
// 4 = 1 + 3
// 7 = 3 + 4
// 5 = 4 + 1 = 2 + 3
// 2 = 1 + 1
// 6 = 2 + 4

// 새로운 배열을 만들고 for문으로 ++
// 경우의수를 length, 중복제거 오름차순
// 배열의 경우의 수는 i < 2^i-1.length
let numbers = [2, 1, 3, 4, 1];
function solution(numbers) {
  let temp = [];
  // numbers의 길이만큼 i를 ++
  for (let i = 0; i < numbers.length; i++) {
    // j는 +1, 길이만큼 j++ (경우의 수)
    for (let j = i + 1; j < numbers.length; j++) {
        // 두 값을 더해준다
      temp.push(numbers[i] + numbers[j]);
      console.log('i : ',i,'j : ',j)
    }
  }console.log(temp)
  const answer = [...new Set(temp)];
  return answer.sort((a, b) => a - b);
}
console.log(solution(numbers));

// https://school.programmers.co.kr/learn/courses/30/lessons/68644
