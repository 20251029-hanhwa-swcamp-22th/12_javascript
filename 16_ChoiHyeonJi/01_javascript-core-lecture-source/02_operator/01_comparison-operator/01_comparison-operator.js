/* 비교 연산자
* - 동등 비교 연산자 (==, !=) :                      타입이 같으면 값만 비교하면 되니까
*  암묵적 타입 변환을 통해 타입을 일치 시킨 후 값을 비교
* - 동일(일치) 비교 연산자(===, !==) :            타입 다르면 무조건 false
*   타입부터 비교 후 같은 경우 값을 비교
* */

// number 1, string '1', boolean  true 비교
console.log(`1 == '1' : ${1 == '1'}`); // 동등 비교 true
console.log(`1 === '1' : ${1 === '1'}`); // 동일 비교 (타입먼저 비교) 타입이 다르니까 false

console.log(`1 == true : ${1 == true}`); // true = 1 = true
console.log(`1 === true : ${1 === true}`); // 숫자와 boolean 비교 다르니까 false
console.log(`1 === Number(true) : ${1 === Number(true)}`);  // 타입을 Number로 명시적으로 바꿈 true


// number 0, string '0', boolean false, 빈문자열 '' 비교
console.log(`0 == '0' : ${ 0 == '0'}`);
console.log(`0 === '0' : ${ 0 === '0'}`);

console.log(`0 == false : ${ 0 == false}`);
console.log(`0 === false : ${ 0 === false}`);

console.log(`0 == '' : ${ 0 == ''}`);
console.log(`0 === '' : ${ 0 === ''}`);

// null과 undefined 비교
console.log(`null == undefined : ${null == undefined}`); // true null과 0 둘다 비어있다, 없다의 뜻이라  값만 비교하면 부정 뜻이니 false
console.log(`null === undefined : ${null === undefined}`); // null undefined 서로 타입다름

// NaN 비교
console.log(`NaN == NaN : ${NaN == NaN}`); // 비교 불가라서 false
console.log(`NaN === NaN : ${NaN === NaN}`); // 비교 불가라서 false
console.log(`isNaN(NaN) : ${isNaN(NaN)}`) // true

/* 문자열 비교 */
// Java -> A.equals(B)
// JS -> == 또는 ===
console.log('hello' == 'hello'); // true
console.log('hello' === 'hello'); // true

// 문자열 크기 비교
// -> 같은 인덱스 문자를 하나씩 꺼내와 유니코드로 변환 후 대소 비교
// -> 꺼내온 문자가 같으면 다음 문자를 꺼내와 비교
console.log('apple' > 'banana'); // 하나씩 꺼내서 비교 a = 97 b = 98 유니코드화 시킴 a > b
console.log('hello' > 'hell'); // 5번째 있는게 더 크게 나옴 true
