// 알고리즘 풀다가 문득 배열의 반복은 어떻게 돌리는것이 실행 효율이 좋을까 싶어서 간단한 실험 코드를 짜봤습니다. 알고리즘 풀면서 참고해보시면 실행 효율을 조금이나마 높이는데 도움이 되지 않을까 싶어서 공유해봅니다.
// 배열의 반복: for문 vs forEach()/map() 메소드
// 1부터 n까지의 수가 담긴 배열에 대한 간단한 연산 100회 시행평균 비교

function forTest(n) {
    const arr = Array.from({length: n}, (_,i)=>i);
    let sum = 0;
    for(j=0; j<n; j++) {
        switch (i%2) {
            case 0:
                sum += i;
                break;
            case 1:
                sum -= i;
                break;
        }
    }
    return sum/n;
}
    
    
function forEachTest(n) {
    const arr = Array.from({length: n}, (_,i)=>i);
    let sum = 0;
    arr.forEach( (_,i)=>{
        switch (i%2) {
            case 0:
                sum += i;
                break;
            case 1:
                sum -= i;
                break;
        }
    });
    return sum/n;
}
    
function main(n) {

    let forEff = 0;
    let forEachEff = 0;

    for(i=0;i<100;i++) {
        const t1 = performance.now();
        forTest(n);
        const t2 = performance.now();

        forEff += t2-t1;
    }

    for(i=0;i<100;i++) {
        const t1 = performance.now();
        forEachTest(n);
        const t2 = performance.now();

        forEachEff += t2-t1;
    }

    console.log("repeat: " + n)
    console.log("forEff: " + forEff / 100);
    console.log("forEachEff: " + forEachEff / 100);
}

main(1000000)

// 결과
// repeat: 1000000
// forEff: 51.998969997167585
// forEachEff: 61.14251300156116

// repeat: 10000000
// forEff: 519.6069179987908
// forEachEff: 594.3643219971657

// 메소드를 써야만하는 상황이 아니라면, 같은 연산을 for문으로 돌리는 것이 실행 효율면에서 약 20% 더 좋습니다.

// 그리고 임의의 숫자 N을 각 자리수별로 처리하는 방법에 대해서도 좋은 내용을 공유해주셨는데요, 받은 숫자를 문자열>숫자>문자열로 처리하기보다 숫자를 나누기와 나머지를 이용해 바로 각 자리수별로 산술연산만으로 처리하는 방법을 쓰면 더 빠르다는 내용이었습니다.

// 임의의 숫자 N을 각 자리수별로 처리하는 방법
function splitNumber(N) {
    const nums = N.toString().split("").map(Number).sort((a,b)=>b-a);

    return nums.join("")
}

function devideNumber(N) {
    const nums = [];
    do {
        nums.push(N%10);
        N = Math.floor(N/10);
    } while(N>0)

    return nums.sort((a,b)=>b-a).join("");
}

function main(n) {

    let splitEff = 0;
    let devideEff = 0;

    for(i=0;i<100;i++) {
        const n = Math.round(Math.random()*1000000000000000);
        const t1 = performance.now();
        splitNumber(n);
        const t2 = performance.now();

        splitEff += t2-t1;
    }

    for(i=0;i<100;i++) {
        const n = Math.round(Math.random()*1000000000000000);
        const t1 = performance.now();
        devideNumber(n);
        const t2 = performance.now();

        devideEff += t2-t1;
    }

    console.log("splitNumber: " + splitEff / 100);
    console.log("devideNumber: " + devideEff / 100);
}

// 결과
// splitNumber: 0.0041939932107925414
// devideNumber: 0.004127001762390137

// splitNumber: 0.004136000871658325
// devideNumber: 0.004142000675201416

// splitNumber: 0.004134998917579651
// devideNumber: 0.004031000733375549

// splitNumber: 0.004323998093605041
// devideNumber: 0.004105001091957093

// 그런데 1000조 자리의 수까지 랜덤으로 난수를 발생시켜 100회 평균을 냈을 때 두 가지 경우 중 어느 무엇이 더 낫다고 확실하게 알 수가 없었습니다. 어떤 때에는 split() 메소드가 더 빨랐고, 어떤 때는 산술연산이 더 빨랐어요.
// 그래서 다시 조금 수정해서 임의의 숫자를 넣어서 다시 해봤었는데요,
// number: 8435434
// splitNumber: 0.0022749990224838258
// devideNumber: 0.0020839965343475344

// number: 7215454658612376
// splitNumber: 0.0040229976177215574
// devideNumber: 0.004514002203941345

// 예시를 2개만 들었지만, 대략 10~11자리 수(1~10억 단위)에서 수 구성에 따라 숫자를 문자열로 변환하여 split()을 쓰는 함수가 더 빨리지게 됩니다.
// 결론은, 숫자를 각 자리수별로 처리를 하실 때 10억 이하의 작은 숫자들을 취급할 때는 나눗셈/나머지를 이용하여 각 자리수를 분리하는 것이 더 빠르지만, 그 이상의 수들을 취급할 경우 문자열로 변환하여 split()메소드를 쓰는게 더 빨라집니다.
// 한가지 덧붙이면, 특히 첫번째 배열 반복의 경우 어디까지나 단순 연산에 한해서입니다. 더 복합적인 연산이 들어갈 경우 어떻게될지는 모르니까, 그냥 참고정도로만 봐주세요!

// Q1. 저는 자릿수를 이런 식으로 처리했었습니다 혹시 성능 측정 해주실 수 있나요?
let sum = 0
let solution=(n)=>{
    for (let i=n; i>=1; i = Math.floor(i/10)){
       sum += i%10
    }
    return sum
}
// A1. 큰 수에 대해서는 가장 느렸고, 작은 수에 대해서는 devide 산술 연산과 비슷하거나 더 빠른 것 같아요. (사진 참조)
// A1-1. 본문에서 비교한 방식은 정렬이 들어가다보니 성능비교 방법을 바꿔가면서 더 해봤는데요, 단순히 각 자리의 숫자만 분리만 하는 것이라면 요한님 for문이 가장 빠른 것 같습니다!
// 제 생각에 사람이 논리적으로 생각할때는 둘 다 작업내용과 순서가 똑같아 보이는데, 요한님 코드와 dowhile코드가 사실상 같지만 요한님 코드가 한줄이 더 적잖아요. 그래서 그만큼 분리한 각 자리수를 가지고 처리하는 작업이 단순하면 단순할수록 더 유리한 것 같습니다. 그리고 단순히 각 자리수의 합을 구하는데까지도 for문이 더 빨랐습니다.
// 다만, 그렇다면 왜 작업이 늘어났을 때 for조건에서 처음 주어진 숫자를 한자리씩 줄이는 것과 조건 밖에서 따로 줄이는 것에 차이가 생기는지는 모르겠고, 또 처음에 정렬을 할 때는 for문이나 do/while문이나 sort()와 join()을 리턴에서 한번에 처리했던 부분은 동일한데 왜 for문만 유독 처리 시간이 크게 늘어났는지는 더 생각해봐야겠네요.

// Q2. 배열의 반복 관련하여, for / forEach 메소드와 더불어 map() 메소드 사용시 성능비교를 포함하여 정확히 같은 코드를 돌렸더니 아래와 같은 결과가 나왔습니다. 혹시 for, forEach만으로 map()의 의 성능도도 정확히 비교 가능한 것이라면, 이유도 알려주실 수 있을까요? 감사합니다 :) (사진참조)

// A2. forEach()는 단순히 배열의 처음부터 끝까지 반복만하는 것이지만, map()은 반복 이후에 리턴값을 새 배열로 만드는 작업이 추가됩니다. 그래서 준영님이 실험하신 것처럼 실행시간이 더 긴 것이고, 새 배열이 필요한 것이 아니라면 map()을 사용하는게 실행효율면에서는 무조건 손해가 되는 것 같습니다.

// ------------------------------------------


function randomInt() {
    const radix = Math.random()*16 +1;

    return Math.round(Math.random()*(10**radix));
}


function splitNumber(N) {
    const nums = N.toString().split("").map(Number);

    return nums.reduce((a,b)=>a+b,0);
}

function dowhileNumber(N) {
    let sum = 0;
    do {
        sum += N%10;
        N = Math.floor(N/10);
    } while(N>0)

    return sum;
}

function forNumber(N) {
    let sum = 0
    for (let i=N; i>=1; i = Math.floor(i/10)){
        sum += i%10;
    }
    return sum;
}


function recursiveSum(N) {
    return N/10>=1 ? N%10+recursiveSum(Math.floor(N/10)) : N;
}

function recursiveSum2(N) {
    return N/10<1 ? N : N%10+recursiveSum2(Math.floor(N/10))
}




main3(randomInt())		// 단일시행


// main()				// 100회시행 평균



function main() {
    let splitEff = 0;
    let dowhileEff = 0;
    let forEff = 0;
    let recursiveEff = 0;
    let recursiveEff2 = 0;

    for(let i=0; i<100; i++) {
        const eff = main2(randomInt());
        splitEff += eff.splitEff;
        dowhileEff += eff.dowhileEff;
        forEff += eff.forEff;
        recursiveEff += eff.recursiveEff;
        recursiveEff2 += eff.recursiveEff2;
    }

    console.log("splitEff: " + splitEff / 100);
    console.log("dowhileEff: " + dowhileEff / 100);
    console.log("forEff: " + forEff / 100);
    console.log("recursiveEff: " + recursiveEff / 100);
    console.log("recursiveEff2: " + recursiveEff2 / 100);
}

function main2(N) {
    const splt1 = performance.now();
    splitNumber(N);
    const splt2 = performance.now();

    const dowt1 = performance.now();
    dowhileNumber(N);
    const dowt2 = performance.now();

    const fort1 = performance.now();
    forNumber(N);
    const fort2 = performance.now();

    const rect1 = performance.now();
    recursiveSum(N);
    const rect2 = performance.now();
    
    const rect3 = performance.now();
    recursiveSum2(N);
    const rect4 = performance.now();

    const splitEff = splt2 - splt1;
    const dowhileEff = dowt2 - dowt1;
    const forEff = fort2 - fort1;
    const recursiveEff = rect2 - rect1;
    const recursiveEff2 = rect4 - rect3;

    return { splitEff, dowhileEff, forEff, recursiveEff, recursiveEff2 }
}


function main3(N) {
    const splt1 = performance.now();
    splitNumber(N);
    const splt2 = performance.now();

    const dowt1 = performance.now();
    dowhileNumber(N);
    const dowt2 = performance.now();

    const fort1 = performance.now();
    forNumber(N);
    const fort2 = performance.now();

    const rect1 = performance.now();
    recursiveSum(N);
    const rect2 = performance.now();

    const rect3 = performance.now();
    recursiveSum2(N);
    const rect4 = performance.now();

    console.log("N: " + N);
    console.log("splSum: " + (splt2-splt1));
    console.log("dowSum: " + (dowt2-dowt1));
    console.log("forSum: " + (fort2-fort1));
    console.log("recSum: " + (rect2-rect1));
    console.log("recSum2: " + (rect4-rect3));
}
