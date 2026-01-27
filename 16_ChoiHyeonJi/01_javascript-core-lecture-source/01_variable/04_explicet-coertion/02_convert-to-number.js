/* 숫자 타입으로 명시적 변환 */

// 1. Number 생성자 함수를 new 연산자 없이 호출
// Number를 많이 씀
console.log(Number('10'), typeof Number('10'));
console.log(Number('10.001'), typeof Number('10.001')); // 실수도 숫자임 바꾸면 number
console.log(Number(true), typeof Number(true));
console.log(Number(false), typeof Number(false));


// 2. 내장 함수 parseInt() : 정수 , parseFloat() : 실수로 바꾸겠다
console.log(parseInt('10'), typeof parseInt('10')); // 10
console.log(parseInt('10.001'), typeof parseInt('10.001')); // 10.001-> 정수로 바꾸니까 10

console.log(parseFloat('10'), typeof parseFloat('10')); // 10.0으로 안 나오고 10으로 나옴 javascript는 .0으로 표현하지 x
console.log(parseFloat('10.001'), typeof parseFloat('10.001')); // 10.001

// 3. + 단항 산술 연산자 이용
// pass

// 4. * 산술 연산자 (숫자를 string으로 변경하는 편법과 유사함, 123 + '' -> '123')
console.log(typeof ('123' * 1)); // 문자열 123 * 1 -> number 타입으로 자동 바뀜
console.log(typeof ('10.1' * 1)); // number
console.log(typeof (true * 1));  // number
console.log(typeof (false * 1)); // number


