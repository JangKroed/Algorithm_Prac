// 제일 작은 수 제거하기

// 정수배열 arr에서 제일 작은수를
// 제거한 배열을 리턴.
// 결과가 []이라면 [-1]을 리턴.

// ex)) arr = [4,3,2,1] 일때, [4,3,2]를 리턴
// arr = [10] 일때, [-1] 리턴

// 배열을 sort, reverse하고 마지막 인덱스 제거후 리턴.
// 제거하고나서 빈배열일 경우 -1을 푸쉬

// 체이닝 (얕은복사) 문제 발생으로 문제해결 안되는듯
// 원래 배열에서 제일작은수만 체이닝으로 제거한 값을 어떻게 구할까?

// let a = []
// for (i = 0; i < 1000000; i++){
//     a.push(i)
// }

// let b = [1,2,3,4,5,6,7]

// function compareNumberic(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//   }

// function solution(arr) {
//     let a = arr.slice()
//     let b = [-1]
//     a.sort().reverse().splice(-1,1)
//     if (a[0] > 0) return a
//     else return b
// }
// // console.log('test = ', solution(a))

// function solution(arr) {
//     let a = arr.slice()
//     let b = [-1]
//     a = a.sort().reverse().splice(-1,1)
//     return arr.filter(c => c !== a);
// } // 코드 잘못짠듯 undefined 리턴됨.

// function compare(a,b){
//     if (a>b) return b
//     if (a<b) return a
// }

// // console.log(b.reverse(compare))
// c = b[1] = 4
// console.log('b = ', b)
// console.log('c = ', c)

// 원래 배열(arr)을 깊은복사 하여 새로운 배열을 a선언
// a.sort(compareNumeric).reverse()[맨뒷자리선택]
// for문 조건식에 arr !== a 하여 나온값들의 배열 리턴

// let copy = a.sort(compareNumeric).reverse().splice(-1,1).reverse()[0] => 가장 낮은수 출력

let a = [1, 2, 3, 4, 5, 6, 7, 1, 1, 1, 1, 9, 10, 11];

// function compareNumberic(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }

// function solution(arr) {
//   // Set으로 중복제거
//   let result1 = new Set(arr);
//   // set을 다시 array로
//   let result2 = Array.from(result1);
//   // 오름차순
//   result2.sort((a, b) => a - b);
//   // 오름차순 첫번째 제거
//   result1.delete(result2[0]);
//   // 최소값이 제거된 길이가 0이 아닌 참값 : 거짓값
//   return result1.size > 0 ? Array.from(result1) : [-1];
// }
// console.log(solution(a));

// // ---------------------------------
// // array 메소드에
// // shift나 pop을 써보세요
// function solution(arr) {
//     const arrSet = new Set(arr);
//     const arr2 = Array.from(arrSet);

//     arr2.sort((a,b)=>a-b);
//     arrSet.delete(arr2[0]);

//     return arrSet.size !== 0 ? Array.from(arrSet) : [-1];
//     }


// arrSet = [...new Set(arr)]으로 중복제거하고
// let minNum = Math.min(...arrSet)
// let idx = arrSet.indexOf(minNum)
// arrSet(idx, 1)

function solution(arr) {
    const arrSet = [...new Set(arr)]
    const minNum = Math.min(...arrSet)
    const idx = arrSet.indexOf(minNum)
    arrSet.splice(idx, 1)
    return arrSet[0] > 0 ? arrSet : [-1]
}

console.log(solution(a));