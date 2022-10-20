// 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환, 길이가 -1
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before: ' + myFish);
// "제거전 myFish 배열: angel,clown,mandarin,surgeon"

var shifted = myFish.shift();

console.log('myFish after: ' + myFish);
// "제거후 myFish 배열: clown,mandarin,surgeon"

console.log('Removed this element: ' + shifted);
// "제거된 배열 요소: angel"
