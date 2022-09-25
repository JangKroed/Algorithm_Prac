// 서울에서 김서방 찾기

// 문제설명
// String형 배열 seoul의 element중 'Kim'의 위치 x를 찾아, 
// '김서방은 x에 있다'는 String을 반환하는 함수,
// solution을 완성하세요.
// seoul에 'Kim'은 오직 한 번만 나타나며
// 잘못된 값이 입력되는 경우는 없습니다.

// 제한사항
// - seoul은 길이 1이상, 1000이하인 배열입니다.
// - seoul의 원소는 길이 1이상, 20이하인 문자열입니다.
// - 'Kim'은 반드시 seoul 안에 포함되어 있습니다.

// seoul이라는 배열안에 'Kim'이 포함되어 있는데,
// 'Kim'은 몇번째에 있는지?

function solution(seoul) {
    // i를 seoul의 길이만큼 개수를 구하고
    for (let i = 0; i < seoul.length; i++) {
        // if문으로 i를 뒤져가며 true값을 출력
        if (seoul[i] === 'Kim') return `김서방은 ${i}에 있다`
    }
}

// 다른 풀이
function findKim(seoul){
    var idx = seoul.indexOf('Kim');
    return "김서방은 " + idx + "에 있다";
  }
  // seoul에 'Kim'은 한번만 나오고 반드시 포함되어 있기 때문에
  // indexOf 메소드를 사용할수 있다. (발견되지 않으면 -1를 출력)

// 다른 풀이
const solution = (arr) => 
`김서방은 ${arr.findIndex(s => s === 'Kim')}에 있다`;