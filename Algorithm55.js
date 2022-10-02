// 크레인 인형뽑기 게임

// result = 4

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];
function solution(board, moves) {
  const basket = [];
  let result = 0;
  moves.forEach((order) => {
    const doll = pickup(board, order - 1);
    if (doll) {
      if (basket[basket.length - 1] === doll) {
        basket.pop();
        result += 2;
      } else {
        basket.push(doll);
      }
    }
  });
  return result;
}

function pickup(board, order) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][order] !== 0) {
      const doll = board[i][order];
      board[i][order] = 0;
      return doll;
    }
  }
}
// 문제 풀이 출처 - https://velog.io/@qmasem/프로그래머스-크레인-인형뽑기-게임-JavaScript

// 다른풀이
const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

const solution = (board, moves) => {
  const stacks = transpose(board).map((row) =>
    row.reverse().filter((el) => el !== 0)
  );
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};

// transpose가 너무 이해가 안 되어서 천천히 공부하면서 탐구해 본 결과입니다. 
// 먼저 이 것을 이해하기 위해서는 이 문제에서의 reduce와 map, …문법의 기능을 확실하게 이해해야 합니다. 

// (1) map : 대상의 되는 배열의 ‘각 요소’를 화살표 함수의 ‘반환값으로 대체’한다. 
// (2) reduce : 현재 reduce에서 돌아가고 있는 인덱스의 ‘이전 반환값’을 result에 저장한다. 
// (3) 화살표함수 : A=>B는 B를 ‘반환’한다는 말이다. 
// (4) … : …에 뒤따라오는 것이 ‘배열이라면 요소만 추출’해주고, ‘빈배열이라면 삭제’한다.

// 이게 무슨 말인지 설명하기 위해 예를 들어볼게요. 
// [1,2].map(x => x * 2); 의 반환값은 [2,4]가 됩니다.
// 이는 1,2 각각의 자리를, x*2의 결과인 2와 4가 대체했다고 볼 수 있는 것이죠. 
// 또 reduce를 살펴보자면, [1, 2, 3].reduce((sum, curr) => sum + curr, 0); 은 0+1+2+3의 결과를 반환해줍니다. 
// sum은 초기값인 0입니다. 
// reduce에서 curr =1일 때, sum에는 이전 반환값인 0이 저장되어 있는 상태입니다. 
// 그러므로 이 때 sum+curr의 결과값으로 0+1 = 1이 반환되며 , 이는 ‘다음 인덱스’의 sum이 되는 겁니다. 
// 이 말은 curr=2일 때 이전 인덱스에서의 반환값인 화살표 함수의 반환값(sum + curr)인 0+1이 불려와 sum에 저장되어 있다는 말입니다. 
// 그러므로 curr=2일때의 sum+curr값은 1+2 = 3이 되는 것입니다. 
// 그렇게 sum에는 0 -> 0+1 -> 0+1+2 이렇게 순차적으로 저장되다가 마지막에 3을 더하고 이를 반환합니다.

// 마지막으로 …문법인데 이 친구가 신기한 것이, [1, 2, ...[3]]는 [1,2,3]이 되고, [1, 2, ...[]]은 [1,2]가 됩니다. 이 문법에 대해서 더 알고 싶으신 분들은 이 분 블로그(https://yuddomack.tistory.com/entry/자바스크립트-문법-비구조화-할당)를 참고하시구 일단은 이렇다는 것만 압니다.

// (문제에 대해서만 볼려면 이 부분부터 보시면 됩니다.) 
// 예시를 들어, let A = transpose([[1, 2, 3], [4, 5, 6]]) 라고 해보죠. transpose에서 각 요소를 분석하는 함수가 두 개 있습니다. reduce와 map입니다. reduce는 [1,2,3]과 [4,5,6]이 요소가 될 것이며, map은 reduce가 [1,2,3]일 때 1과 2와 3이 되며, [4,5,6]일 때는 4,5,6이 됩니다. 이 때 map은 각 요소에 ‘화살표 함수의 반환값’으로 대체해준다고 했죠? 그렇다면 map((_, i) => [(result[i] || []), row[i]])에서 reduce = [1,2,3]일 때 1 은 map = […(result[0]||[]),row[0])이 됩니다. 그런데 result[0]은 [][0]와 같고 이 값은 null입니다. […(null||[]),row[0])과 똑같기에 이 결과는 […[],1]이 됩니다. (여기서 A||B는 A의 값이 null이나 undefined가 라면 B를 반환하고, 아니라면 A를 반환합니다.) 같은 방식으로 2와 3은 […[],2],[…[],3]이 됩니다. 그러므로 reduce = [1,2,3]일 때 map을 통해서 반환되는 것은 [[…[],1],[…[],2],[…[],3]]이 되며, …문법은 빈배열을 무시해버리기 때문에 [[1],[2],[3]]이 됩니다.

// 다음 reduce가 [4,5,6]일 때에 result에는 ‘이전 인덱스의 반환값’인 [[1],[2],[3]]가 저장되어 있습니다. 그러므로 reduce가 [4,5,6]일 때에는 4에서 […(result[0],[]),row[0])인데 이 값은, […([1]||[]),row[0])과 같고 이는 […[1],4]와 같습니다. 그런데! …문법에서는 배열 안의 요소를 끄집어 내주기 때문에, 이는 [1,4]와 같습니다. 같은 방법으로 이후에는 [2,5],[3,6]이 나옵니다. 결론적으로 A에는 [[1,2,3],[4,5,6]]을 함수를 통해 변환해준 [[1,4],[2,5],[3,6]]이 저장되는 것입니다. 문제에서는 transpose([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]])이기 때문에 이 값은 그렇다면, [[0, 0, 0, 4, 3],[0, 0, 2, 2, 5],[0, 1, 5, 4, 1],[0, 0, 0, 4, 3],[0, 3, 1, 2, 1]]이 됩니다. 이는 5X5배열의 행과 열을 바꾸어주는 것과 같지요!




// https://school.programmers.co.kr/learn/courses/30/lessons/64061
