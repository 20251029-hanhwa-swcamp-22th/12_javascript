/* 숫자 타입으로 명시적 변환 */

// 1. Number 생성자 함수를 new 연산자 없이 호출
console.log(Number('10'), typeof Number('10')); // 10 number
console.log(Number('10.001'), typeof Number('10.001')); // 10.001 number
console.log(Number(true), typeof Number(true)); // 1 number

// 2. 내장 함수 parseInt(), parseFloat() 이용
// parsing : 문자열을 적합한 타입으로 변환하는 것
console.log(parseInt('10'), typeof parseInt('10')); // 10 number
console.log(parseInt('10.001'), typeof parseInt('10.001')); // 10 number
    // -> 소수점 사라짐

console.log(parseFloat('10'), typeof parseFloat('10')); // 10 number
    // -> float이여도 10으로 나옴
console.log(parseFloat('10.001'), typeof parseFloat('10.001')); // 10.001 number

// 3. +단항 산술 연산자 이용
// 이전 내용 중복

// 4. * 산술 연산자 이용
// (숫자를 string으로 변경하는 편법과 유사함, 1 + '' -> '1')
console.log(typeof('123'*1)); // number
console.log(typeof('123.123'*1)); // number
console.log(typeof(true*1)); // number
