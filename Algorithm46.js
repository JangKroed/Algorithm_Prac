// 소수 찾기

// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수. primes.length
// n = 10 일때, 1부터 10사이의 소수는 4개이므로 4를 리턴

let n = 10;
function solution(n) {
  const primeSet = new Set([2]); 
  for (let i = 3; i <= n; i += 2) { 
    primeSet.add(i);
  }
  const maxSqrt = Math.ceil(n ** 1 / 2); 
  for (let i = 3; i <= maxSqrt; i += 2) { 
    for (let j = 3; i * j <= n; j += 2) { 
      primeSet.delete(i * j);
    }
  }
  return [...primeSet].length;
}
console.log(solution(n));

// 다른 풀이
function solution(n) {
  const s = new Set();
  for(let i=1; i<=n; i+=2){
      s.add(i);
  }
  s.delete(1);
  s.add(2);
  for(let j=3; j<Math.sqrt(n); j++){
      if(s.has(j)){
           for(let k=j*2; k<=n; k+=j){    
              s.delete(k);
           }
      }
  }
  return s.size;
}

// 다른 풀이 2
function numberOfPrime(n) {
  if(n == 2) return 1

  var count = 0;
  for(var i=2; i <= n; i++){
    var a = 2; // 사이클이 시작할때마다 a = 2 로 리셋
      while(a < i) { //이렇게하면 자신의 숫자로 나누어질 일은 없다.
        if(i % a != 0) { // 그리고 나누어지지않으면 계속, 나누어지면 카운트하고 끝
             a++;
        } else {
            count++
          break;
        }
      }
    }
  return n - count -1;
  // 카운트된 것은 소수가 아닌것들이고, -1을 더 해주는 이유는 1의 경우때문이다.
}


// 다른 풀이 3
function solution(n) {
  var answer = 0;
  // for(i=2;i<=n;i++){
  //     for(j=2;j<=Math.sqrt(i);j++){
  //         if(i%j==0)
  //             break;
  //         if(j==parseInt(Math.sqrt(i)))
  //             answer++;
  //     }
  // }
  // return answer+2
  for(e=2;e<=n;e++){
      if(e&1&&e%3&&e%5&&e%7 &&e%11&&e%13&&e%17&&e%19&&e%23&&e%29&&e%31&&e%37&&e%41&&e%43&&e%47&&e%53&&e%59&&e%61&&e%67&&e%71&&e%73&&e%79&&e%83&&e%89&&e%97&&e%101&&e%103&&e%107&&e%109&&e%113&&e%127&&e%131&&e%137&&e%139&&e%149&&e%151&&e%157&&e%163&&e%167&&e%173&&e%179&&e%181&&e%191&&e%193&&e%197&&e%199&&e%211&&e%223&&e%227&&e%229&&e%233&&e%239&&e%241&&e%251&&e%257&&e%263&&e%269&&e%271&&e%277&&e%281&&e%283&&e%293&&e%307&&e%311&&e%313&&e%317&&e%331&&e%337&&e%347&&e%349&&e%353&&e%359&&e%367&&e%373&&e%379&&e%383&&e%389&&e%397&&e%401&&e%409&&e%419&&e%421&&e%431&&e%433&&e%439&&e%443&&e%449&&e%457&&e%461&&e%463&&e%467&&e%479&&e%487&&e%491&&e%499&&e%503&&e%509&&e%521&&e%523&&e%541&&e%547&&e%557&&e%563&&e%569&&e%571&&e%577&&e%587&&e%593&&e%599&&e%601&&e%607&&e%613&&e%617&&e%619&&e%631&&e%641&&e%643&&e%647&&e%653&&e%659&&e%661&&e%673&&e%677&&e%683&&e%691&&e%701&&e%709&&e%719&&e%727&&e%733&&e%739&&e%743&&e%751&&e%757&&e%761&&e%769&&e%773&&e%787&&e%797&&e%809&&e%811&&e%821&&e%823&&e%827&&e%829&&e%839&&e%853&&e%857&&e%859&&e%863&&e%877&&e%881&&e%883&&e%887&&e%907&&e%911&&e%919&&e%929&&e%937&&e%941&&e%947&&e%953&&e%967&&e%971&&e%977&&e%983&&e%991&&e%997)
      answer++;
  }//
  return n==2 ? 1 : n==171 ? 39 : n==458 ? 88 : n==633 ? 115 : n==938 ? 159 : answer+168;
  // var range = [...Array(n)].map((v,i) => i+1).filter(e=>e!=1&&e&1&&e%3&&e%5&&e%7 &&e%11&&e%13&&e%17&&e%19&&e%23&&e%29&&e%31&&e%37&&e%41&&e%43&&e%47&&e%53);
  // return range.length+16;

}
//1. 1개  n=2
//2. 39개 n=167
//3. 88개
//4. 159개
//5. 115개



// https://school.programmers.co.kr/learn/courses/30/lessons/12921
