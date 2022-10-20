// 특정 값을 포함하고 있는지 판별하고 true, false 리턴
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true

// Array.prototype.includes()

// 구문
// arr.includes(valueToFind[, fromIndex])

// 매개변수
// valueToFind = 탐색할 요소, 대소문자 구분
// fromIndex = 검색을 시작할 부분. 음의 값은 array.length + fromIndex의 인덱스를 아스키로 검색. 기본값은 0 이다.

// 반환 값은 true, false를 뜻하는 Boolean

// 0보다 작은 인덱스의 계산
// fromIndex가 음수라면 valueToFind를 찾기 시작할 배열의 위치로 사용되기 위해 계산.
// ex) 계산된 인덱스가 -1*array.length 보다 작거나 같다면 전체배열이 검색됨.