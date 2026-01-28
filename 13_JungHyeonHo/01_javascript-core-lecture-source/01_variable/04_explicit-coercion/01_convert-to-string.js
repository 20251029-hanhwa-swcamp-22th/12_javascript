/* 문자열(string) 타입으로 명시적 변환 */

// 1. String 생성자 함수를 new 연산자 없이 호출 */
console.log(String(10),typeof String(10)); // 10 string
console.log(NaN,typeof NaN); // NaN number
console.log(String(NaN),typeof String(NaN)); // NaN string
console.log(Infinity, typeof Infinity); // Infinity number
console.log(String(Infinity), typeof String(Infinity)); // Infinity string
console.log(String(true),typeof String(true)); // true string

// 2. toString() 메서드 사용
// java와 달리 JS에서는 소괄호 내부에 값을 넣음으로써 객체로 만들어서 toString메서드를 호출한다.
console.log(typeof (10).toString()); // string
console.log(typeof (NaN).toString()); // string
console.log(typeof (Infinity).toString()); // string
console.log(typeof true.toString()); // string
console.log(typeof false.toString()); // string