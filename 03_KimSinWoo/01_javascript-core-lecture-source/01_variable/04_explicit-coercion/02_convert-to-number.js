/* 숫자 타입으로 명시적 변환 */

// 1. Number 생성자 함수를 new 연산자 없이 호출
console.log(Number('10'), typeof Number('10'));
console.log(Number('10.001'), typeof Number('10.001'));
console.log(Number(true), typeof Number(true));
console.log(Number(false), typeof Number(false));

console.log('-----------------------------------------------------------------------')

// 2. 내장 함수 parseInt(), parseFloat() 이용
console.log(parseInt('10'), typeof parseInt('10')); // 10
console.log(parseInt('10.001'), typeof parseInt('10.001')); // 10

console.log(parseFloat('10'), typeof parseFloat('10')); // 10
console.log(parseFloat('10.001'), typeof parseFloat('10.001')); // 10.001

// * 산술 연산자 이용
console.log(typeof ('123'*1)); // number 