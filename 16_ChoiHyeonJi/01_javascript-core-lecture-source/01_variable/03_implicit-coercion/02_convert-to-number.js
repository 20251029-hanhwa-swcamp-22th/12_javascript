/* 숫자 타입으로 암묵적 변환 */

// 1. 산술 연산자
// - 산술 연산자의 피연산자는 모두 숫자(number) 이여야만 한다.
// -> 암묵적으로 피연산자를 number로 형변환 (단, +는 X)
console.log(10 - '5'); // '5' number 타입으로 바뀜 // 무슨 원리인지 알아야함
console.log(10 * '5');
console.log(10 / '3');
console.log(10 % '3');
console.log(10 % '삼'); //NaN
// -> '삼'을 nubmer로 변경할 수 없기 때문에 NaN 출력

// 2. 비교 연산자 (>, < , >=, <=)            //==, !=
// - 비교 연산자는 크기를 비교하기 위해 수치화가 필수이다.
//  -> 암묵적으로 숫자(number)로 변환
console.log(10 > '5'); // true
console.log(10 < '5'); // false

// 문자 ('a')는 숫자로 변환 시 'NaN'이 되기 때문에
// NaN은 어떠한 비교 연산자를 이용해 비교 불가다!

console.log(`10> 'a':${10> 'a'}`); // 'a'가 큰게 아니라 비교 실패해서 false
console.log(`10> 'a':${10000> 'a'}`);

/* 참고 : NaN끼리 비교 */ //NaN = 예외 발생으로 기억하기 ! 그래서 비교 실패임
console.log(`NaN == NaN: ${NaN == NaN}`); // false -> 비교 실패

/* NaN을 확인하기 위한 별도 함수 isNaN() 이용 */
console.log(`isNaN(NaN): ${isNaN(NaN)}`); // true

/* 3. + 단항 연산자 */
// 피연산자가 숫자 타입이 아니면
// 숫자 타입 값으로 암묵적 변환 수행
// 칸을 하나도 차지하지않지만 string 타입  console.log('', typeof '');
console.log(+'', typeof +''); // 0 빈칸을 숫자로 바꾸면 0이됨
console.log(+1); // 1
console.log(+'javascript') // string -> number 하면 NaN이 나옴

// true : 1, false : 0
console.log(+true) // 1 // false가 0 true 1
console.log(+false) // 0
console.log(+null);       // 0
console.log(+undefined);   // NaN 변수에 값이 대입이 안 되어있다 정의되지 않음 = undefined
// console.log(+Symbol()); // 오류뜸 TypeError: Cannot convert a Symbol value to a number

console.log(+{}); // 객체, NaN
console.log(+[]); // 배열, 0 (빈 배열)
console.log(+[999]); // 배열, 999 (0번 인덱스 값을 숫자로 변환)
console.log(+['a']); // 배열, NaN (0번 인덱스 값을 숫자로 변환)
console.log(+[999, 888]); // 배열, NaN

console.log(+function (){}); //NaN


/* 기억할 것 외우기 !!
*  1) 빈문자열, 빈배열, null, false -> 0
*  2) ture -> 1
*  3) 객체, undefined, 함수 -> NaN */




