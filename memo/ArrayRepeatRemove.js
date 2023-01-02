const array1 = ['C', 'A', 'B', 'A', 'C', 'D', 'C', 'C', 'E', 'D'];
console.log(array1);	// ['C', 'A', 'B', 'A', 'C', 'D', 'C', 'C', 'E', 'D']

let result1 = [...new Set(array1)];
console.log(result1);	// ['C', 'A', 'B', 'D', 'E']

let result2 = array1.filter((v, i) => array1.indexOf(v) === i);
console.log(result2);	// ['C', 'A', 'B', 'D', 'E']

let result3 = array1.reduce((ac, v) => ac.includes(v) ? ac : [...ac, v], []);
console.log(result3);	// ['C', 'A', 'B', 'D', 'E']

let result4 = [];
for(v of array1) {
  if (!result4.includes(v)) result4.push(v);
}
console.log(result4);	// ['C', 'A', 'B', 'D', 'E']

let result5 = Object.keys(Object.fromEntries(array1.map(v => [v, 0])));
console.log(result5);	// ['C', 'A', 'B', 'D', 'E']

// ----------------------------------------------

const array2 = ['C', 'A', 'B', 'A', 'C', 'D', 'C', 'C', 'E', 'D'];
console.log(array2);	// ['C', 'A', 'B', 'A', 'C', 'D', 'C', 'C', 'E', 'D']

let result11 = [];
for (v of array2) {
  if (!result11.includes(v)) result11.push(v);
}
console.log(result11);	// ['C', 'A', 'B', 'D', 'E']

let result21 = [];
array2.forEach((v) => {
  if (!result21.includes(v)) result21.push(v);
});
console.log(result21);	// ['C', 'A', 'B', 'D', 'E']

let result31 = [];
for (let i = 0; i < array2.length; i++) {
  if (!result31.includes(array2[i])) result31.push(array2[i]);
}
console.log(result31);	// ['C', 'A', 'B', 'D', 'E']

// -------------------------------------------

const array = ['C', 'A', 'B', 'A', 'C', 'D', 'C', 'C', 'E', 'D'];
console.log(array);	// ['C', 'A', 'B', 'A', 'C', 'D', 'C', 'C', 'E', 'D']

let result = Object.keys(Object.fromEntries(array.map(v => [v, null])));
console.log(result);	// ['C', 'A', 'B', 'D', 'E']