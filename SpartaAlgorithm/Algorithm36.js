// 소수 만들기

// const { range } = require("express/lib/request");

// 주어진 숫자중 3개의 숫자를 더했을때 소수가 되는 경우의 개수를 리턴
// 숫자들이 들어있는 배열 nums
// 배열 속 숫자들 중 서로다른 3개를 골라 더했을 때 소수가 되는 경우의 수를 count하라.

// nums는 3개 이상 50개 이하
// nums는 1이상 1000이하의 자연수 중복x

// 소수 찾기
// 2,3,5,7을 제외한 2,3,4,7의 배수를 제거

// 새로운 배열에 nums의 가장큰 수까지의 배열을 만들고
// ex) nums = [1,2,3,4] 일때, Math.max(...nums)하고
// let arr = []
// for(i=1;i<=Math.max(...nums);i++){
//     arr.push(i)
// }
// 2,3,5,7을 제외한 2,3,5,7의 배수를 arr에서 slice

// nums = [1,2,3,4] 일때,
// 중첩 반복문으로 각 자리에 한번씩 더해보고 결과가 소수라면 그수를 answer에 push
// answer를 Set한뒤 length값을 리턴

// let a = [1,2,3,4,5,6]

// let idx = a.indexOf(3)

// a.splice(idx,1)

// console.log(a)

let nums = [1, 2, 7, 6, 4];
function solution(nums) {
  let answer = 0;
  for (let a = 0; a < nums.length; a++) {
    for (let b = a + 1; b < nums.length; b++) {
      for (let c = b + 1; c < nums.length; c++) {
        if (is_prime(nums[a] + nums[b] + nums[c])) answer += 1;
      }
    }
  }
  return answer;
}

function is_prime(num) {
  for (i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 소수 판독기를 따로 함수로 만들어서
// if문으로 만족하는 값일때 answer에 + 1 해주려고 했는데 으렵넹..

console.log(solution(nums));
// console.log(is_prime(97));

// 다른 판독기
function primecheck(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

// 다른 판독기 2
function isPrime(num) {
  // num이 소수인지 아닌지 검사.
  let flag = true;
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

// 다른 판독기 3
function prime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  // console.log(num)
  return true;
}

// 다른 풀이
function solution(num) {
  // split odds and evens
  let evens = [],
    odds = [];
  num.forEach((el) => {
    if (el % 2) odds.push(el);
    else evens.push(el);
  });

  // collect prime candidates (all primes are odd except 2)
  // or more precisely, because 2 is a prime number
  // all the other even numbers cannot be prime. lol.
  // candidate 1: even + even + odd
  // candidate 2: odd + odd + odd
  // note keep the biggest number
  let prime_candidates = [];

  // even + even + odd
  if (evens.length >= 2) {
    for (let i = 0; i < evens.length - 1; i++) {
      for (let j = i + 1; j < evens.length; j++) {
        for (let k = 0; k < odds.length; k++) {
          prime_candidates.push(evens[i] + evens[j] + odds[k]);
        }
      }
    }
  }

  // odd+odd+odd
  if (odds.length >= 3) {
    for (let i = 0; i < odds.length - 2; i++) {
      for (let j = i + 1; j < odds.length - 1; j++) {
        for (let k = j + 1; k < odds.length; k++) {
          prime_candidates.push(odds[i] + odds[j] + odds[k]);
        }
      }
    }
  }

  prime_candidates.sort((a, b) => a - b);

  const max = prime_candidates[prime_candidates.length - 1];
  let nums = [];
  // populate the array with trues
  for (let i = 3; i < max + 1; i += 2) nums[i] = true;
  // filter
  let index = 3,
    answer = 0;
  while (index < nums.length) {
    if (nums[index]) {
      while (prime_candidates[0] < index) prime_candidates.shift();
      while (prime_candidates[0] === index) {
        answer++;
        prime_candidates.shift();
      }
      // make false all the multiples of the index
      for (let i = 2; i * index <= max; i++) nums[index * i] = false;
    }
    index++;
  }
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12977

// for (const x of Array(5).keys()) {
//   console.log(x, String.fromCharCode("A".charCodeAt(0) + x));
// }

// function range(size, startAt = 1) {
//     return [...Array(size).keys()].map(i => i + startAt);
// }

// console.log(range(5))

// 세욱님 최적화 버전 판독기
function getPrimes(N) {
  const primeSet = new Set([2]);
  for (let i = 3; i <= N; i += 2) {
    primeSet.add(i);
  }

  const maxSqrt = Math.ceil(N ** 0.5);
  for (let i = 3; i <= maxSqrt; i += 2) {
    for (let j = 3; i * j <= N; j += 2) {
      primeSet.delete(i * j);
    }
  }

  return primeSet;
}

// 체크 해봐야함
// 방법1

function isPrime(num) {
  // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로
  // num > i
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
      return false;
    }
  }
  // 소수는 1보다 큰 정수임으로
  // 1보다 작으면 false를 리턴한다
  return num > 1;
}console.log(isPrime(66456131))

// 방법2
function isPrime(num) {
  if (num <= 1) {
    // 음수와 1은 소수가 아니다
    return false;
  }
  // 2는 짝수 중 유일한 소수이다
  if (num % 2 === 0) {
    return num === 2 ? true : false;
  }
  // 이제 num이 홀수 일때 다른 수에 나눠지는지 판별한다
  // Math.sqrt(num) 즉, √num까지 나눠 떨어지는지 검사한다
  const sqrt = parseInt(Math.sqrt(num));

  for (let divider = 3; divider <= sqrt; divider += 2) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
}
