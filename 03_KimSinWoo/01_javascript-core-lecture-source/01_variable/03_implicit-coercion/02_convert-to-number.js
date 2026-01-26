/* 숫자 타입으로 암묵적 변환 */
// 1. 산술 연산자
// - 산술 연산자의 피연산자는 모두 숫자(number)이어야만 한다.
//     -> 암묵적으로 피 연산자를 number로 변환(단, +는 제외)
console.log(10-'5', typeof (10 - '5')); // 5 number
console.log(10*'5', typeof (10 * '5')); // 20 number
console.log(10/'5', typeof (10 / '5')); // 2 number
console.log(10%'5', typeof (10 % '5')); // 0 number

console.log(10%'삼'); // NaN: '삼'은 숫자로 변환 불가

// 2. 비교 연산자
// - 비교 연산자는 크기를 비교하기 위해 수치화가 필수이다.
//  -> 암묵적으로 숫자(number)로 변환
console.log(10 > '5'); // true
console.log(10 < '5'); // false

// 문자('a')는 숫자로 변환 시 'NaN'이 되기 때문에 NaN는 비교가 불가능하다
console.log(`10 > 'a' : ${10 > 'a'}`); // 'a'는 비교가 불가능하기 때문에 false

/* 참고: NaN 끼리 비교 */
console.log(`NaN == NaN : ${NaN == NaN}`); // false

/* NaN을 확인하기 위한 별도 함수 isNaN() 이용 */
console.log(`isNaN(NaN) : ${isNaN(NaN)}`); // true

/* 3. + 단항 연산자 */
// 피연산자가 숫자 타입이 아니면 숫자 타입 값으로 암묵적 타입 변환 수행
console.log(+'', typeof +''); // 0 number

console.log(+'javascript');
console.log(+true); // 1
console.log(+false); // 0
console.log(+undefined); // NaN
// console.log(+Symbol()); // TypeError: Cannot convert a Symbol value to a number
console.log(+{}) // NaN
console.log(+[]); // 0
console.log(+[999]); // 999
console.log(+['a']); // NaN
console.log(+[999,888]); // NaN

/* 기억할 것
*
* */