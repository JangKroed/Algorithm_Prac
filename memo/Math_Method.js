// Math Method

// 자바스크립트에서 수학적 작업을 손쉽게 할 수 있도록 제공하는 메소드

// 웹브라우저마다 다른 결과값을 얻을 가능성이 높고 같은 자바스크립트 인터프리터라도 운영체제가 다르면 다른 결과값을 반환할 수 있음
// 정밀한 결과값이 필요한경우 지양해야함

// 1. Math.min()
// 인수로 받은 값중 가장 작은 수를 반환
// 전달되지 않으면 Infinity, 비교할수 없는 값이 있으면 NaN을 반환한다.
Math.min();                              // Infinity
Math.min(1, 10, -100, -10, 1000, 0);     // -100
Math.min(1, 10, -100, -10, "-1000", 0);  // -1000
Math.min(1, 10, -100, -10, "문자열", 0); // NaN

// 2. Math.max()
// 가장 큰값을 반환
// 전달되지 않으면 -Infinity를 반환
Math.max();                              // -Infinity
Math.max(1, 10, -100, -10, 100, 0);      // 100
Math.max(1, 10, -100, -10, "1000", 0);   // 1000
Math.max(1, 10, -100, -10, "문자열", 0); // NaN

// 3. Math.random()
// 0보다 크거나 같고 1보다 작은 무작위 숫자(random number)를 반환
var min = 10, max = 20;
Math.random();                     // [0, 1)
Math.random() * (max - min) + min; // [min, max)

// 4. Math.round()
// 전달받은 값을 소수점 첫 번째 자리에서 반올림
Math.round(10.49);  // 10
Math.round(10.5);   // 11
Math.round(-10.5);  // -10
Math.round(-10.51); // -11

// 5. Math.floor()
// 전달받은 값을 같거나 작은 수 중에서 가장 큰 정수로 반환.
Math.floor(10.95);  // 10
Math.floor(11.01);  // 11
Math.floor(-10.95); // -11
Math.floor(-11.01); // -12

// 6. Math.ceil()
// 전달받은 값과 같거나 큰 수 중에서 가장 작은 정수를 반환
Math.ceil(10.95);  // 11
Math.ceil(11.01);  // 12
Math.ceil(11);     // 11
Math.ceil(-10.95); // -10
Math.ceil(-11.01); // -11

// 7. Math.sin()
// 전달받은 값의 사인(sine) 함수값을 반환
Math.sin(0);           // 0
Math.sin(Math.PI / 2); // 1
// - 자바스크립트에서 제공하는 삼각 함수에 관한 모든 메소드는 각도의 단위로 라디안(radian)을 사용
// - 라디안 단위와 60분법 단위를 서로변환하기 위해서는 공식을 사용해야함.
// - 라디안값 = 60분법값 * (Math.PI / 180)
// - Math.Pi는 수학에서 사용하는 파이(π)값을 나타내는 자바스크립트 상수. => 대략적인 값 3.141592

// -------------------------------------------------

// Math 메소드

// Math.min(x, y, ...)	인수로 전달받은 값 중에서 가장 작은 수를 반환함.
// Math.max(x, y, ...)	인수로 전달받은 값 중에서 가장 큰 수를 반환함.
// Math.random()	0보다 크거나 같고 1보다 작은 랜덤 숫자(random number)를 반환함.
// Math.round(x)	x를 소수점 첫 번째 자리에서 반올림하여 그 결과를 반환함.
// Math.floor(x)	x와 같거나 작은 수 중에서 가장 큰 정수를 반환함.
// Math.ceil(x)	x와 같거나 큰 수 중에서 가장 작은 정수를 반환함.
// Math.abs(x)	x의 절댓값을 반환함.
// Math.cbrt(x)	x의 세제곱근을 반환함.
// Math.sqrt(x)	x의 제곱근을 반환함.
// Math.clz32(x)	
// x을 32비트 이진수로 변환한 후, 0이 아닌 비트의 개수를 반환함.

// Math.exp(x)	ex 의 값을 반환함. (e : 오일러의 수)
// Math.expm1(x)	1 - ex 의 값을 반환함.
// Math.fround(x)	x와 가장 근접한 32비트 부동 소수점 수(single precision float)를 반환함.
// Math.hypot(x, y, ...)	인수로 전달받은 값들을 각각 제곱한 후 더한 총합의 제곱근을 반환함.
// Math.imul(x, y)	인수로 전달받은 두 값의 32비트 곱셈의 결과를 반환함.
// Math.log(x)	x의 자연로그 값을 반환함. (ln x)
// Math.log1p(x)	ln(1 + x)의 값을 반환함.
// Math.log10(x)	x의 10을 밑으로 가지는 로그 값을 반환함.
// Math.log2(x)	x의 2를 밑으로 가지는 로그 값을 반환함.
// Math.pow(x, y)	x의 y승을 반환함.
// Math.sign(x)	x의 부호 값을 반환함.
// Math.trunc(x)	x의 모든 소수 부분을 삭제하고 정수 부분만을 반환함.
// Math.sin(x), Math.cos(x), Math.tan(x),Math.asin(x), Math.acos(x), 
// Math.atan(x), Math.asinh(x), Math.acosh(x), Math.atanh(x), Math.atan2(x)
// x의 해당 삼각 함숫값을 반환함.

//--------------------------------------------------------------------------

// 자바스크립트 Math 프로퍼티
// 자바스크립트는 수학에서 사용하는 다양한 상수들을 Math 프로퍼티를 이용해 제공하고 있습니다.
console.log(Math.PI)
// Math.E	오일러의 수(Euler's constant)라고 불리며, 자연로그(natural logarithms)의 밑(base) 값	2.718
// Math.LN2	2의 자연로그 값	0.693
// Math.LN10	10의 자연로그 값	2.303
// Math.LOG2E	오일러 수(e)의 밑 값이 2인 로그 값	1.443
// Math.LOG10E	오일러 수(e)의 밑 값이 10인 로그 값	0.434
// Math.PI	원의 원주를 지름으로 나눈 비율(원주율) 값	3.14159
// Math.SQRT1_2	2의 제곱근의 역수 값	0.707
// Math.SQRT2	2의 제곱근 값	1.414