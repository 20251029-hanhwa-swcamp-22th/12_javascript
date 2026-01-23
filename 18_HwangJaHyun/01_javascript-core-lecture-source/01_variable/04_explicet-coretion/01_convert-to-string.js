/* 문자열(string) 타입으로 명시적 변환 */

// 1. string 생성자 함수를 new 연산자 없이 호출
console.log(String(10), typeof String(10));
console.log(String(NaN), typeof String(NaN));
console.log(Infinity, typeof String(Infinity));
console.log(String(true), typeof String(true));
console.log(String(false), typeof String(false));

// 2. toString() 메서드 사용
console.log(typeof (10).toString());
console.log(typeof (NaN).toString());
console.log(typeof (Infinity).toString());
console.log(typeof (true).toString());
console.log(typeof (false).toString());

// 자바에서의 toString 객체의 정보를 한번에 보여줌, 객체만 사용 가능