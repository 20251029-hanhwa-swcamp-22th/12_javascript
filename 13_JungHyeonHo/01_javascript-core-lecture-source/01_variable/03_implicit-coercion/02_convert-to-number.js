/* 숫자 타입으로 암묵적 변환 */

// 1. 산술 연산자
// - 산술 연산자의 피연산자는 모두 숫자(number) 이여야만 한다
//  -> 암묵적으로 피연산자를 number로 변환 (단, +는 제외)
// '5' -> 5
console.log(10 - '5'); // 5
console.log(10 * '5'); // 50
console.log(10 / '5'); // 2
console.log(10 % '3'); // 1

console.log(10 % '삼'); // NaN
// -> '삼'을 number로 변경할 수 없기 때문에 NaN이 출력

// 2. 비교 연산자 (==, !=, >, <, <=, >=)
// - 비교 연산자는 크기를 비교하기 위해 수치화가 필수이다.
//  -> 암묵적으로 숫자(number)로 변환
console.log(10 > '5'); // true
console.log(10 < '5'); // false
console.log(0.1 + 0.2 > 0.3); // true, !!모든 실수는 부동소수점으로 표현되기에 true가 나온다

// 문자('a')는 숫자로 변환 시 'NaN'이 되기 때문에
// NaN은 어떠한 비교 연산자를 이용해 비교 불가다!
// a가 큰게 아니라 비교가 실패해서 false 출력
console.log(`10 > 'a' : ${10 > 'a'}`); // 10 > 'a': false
console.log(`10000 < 'a' : ${10000 < 'a'}`); // 10000 < 'a': false

/* 참고 : NaN 끼리 비교 */
// NaN은 예외같은 경우이기 때문에 비교 실패 => false
console.log(`NaN == NaN : ${NaN == NaN}`) // NaN == NaN : false

/* NaN을 확인하기 위한 별도 함수 isNaN() 이용 */
console.log(`isNaN(NaN) : ${isNaN(NaN)}`) // isNaN(NaN) : true

/* 3. +,- 단항 연산자 */
// 피연산자가 숫자 타입이 아니면
// 숫자 타입 값으로 암묵적 타입 변환 수행
console.log('', typeof ''); // string
console.log(+'', typeof +''); // 0 number
console.log(+'javascript'); // NaN
console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
console.log(+undefined); // NaN
// console.log(+Symbol()); // TypeError: Cannot convert a Symbol value to a number

console.log(+{}); // NaN
// 배열에 값이 하나 있을때만 숫자로 변환 가능. 여러개가 있으면 NaN.
console.log(+[]); // 0
console.log(+[3]); // 3
console.log(+['a']); // NaN
console.log(+[1, 2]); // NaN

console.log(+function () {}); // NaN

/* 기억할 것
* 1) 빈문자열, 빈배열, null, false -> 0
* 2) true -> 1
* 3) 객체, undefined, 함수 -> NaN
* */