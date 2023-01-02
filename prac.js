// // 문제 설명
// // for문을 이용해서 배열 cost의 값을 모두 더해 total_cost 변수에 저장하세요.

// // var cost = [ 85, 42, 37, 10, 22, 8, 15 ];
// // var total_cost = 0;
// // for(i = 0; i < cost.length; i++){
// //     total_cost += cost[i]
// // }
// // console.log(total_cost);

// let sum = 123;
// let solution = (n) => {
//   for (n; n > 0; n = Math.floor(n / 10)) {
//     sum += n % 10;
//   }
//   return sum;
// };

// console.log(solution(sum));

// // -----------백준-----------

// const rl = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on("line", (line) => {
//   input.push(Number(line));
// });

// rl.on("close", () => {
//   const N = input.shift();
//   input.sort((a, b) => a - b);

//   let numbers = [];
//   for (i = 0; i < N - 1; i++) {
//     console.log("first for");
//     numbers.push(input[i + 1] - input[i]);
//   }
//   console.log(numbers);
//   let cd = [];

//   for (i = 0; i < numbers.length - 1; i++) {
//     console.log("second for");
//     cd.push(getGCD(cd[i], cd[i + 1]));
//   }

//   console.log(cd);

//   // const re = /,/g;
//   // console.log(Array.from(cd).toString().replace(re, " "));
// });

// // =======================
// rl.on("line", (line) => {
//   input.push(Number(line));

//   rl.close();
// });
// // ===================================
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = require("fs").readFileSync(filePath).toString();

// // ========================
// // 알고리즘 그래프 문제 많이 풀어봐라.

console.log(115 & 15);

class Unit {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }
  healing(heal) {
    if (this.hp <= 0) return;
    this.hp += heal;
    if (this.hp >= 100) this.hp = 100;
  }
  damaged(damage) {
    if (this.hp <= 0) return;
    this.hp -= damage;
    if (this.hp <= 0) this.hp = 0;
  }
}

const unit = new Unit("유닛", 100);
unit.damaged(70); // 30
unit.healing(10); // 40
unit.damaged(50); // 0
unit.healing(100); // 0
