/* 옵셔널 체이닝 연산자 '?' (ES11 (2020)에 추가)
* - 좌항의 피연산자가 null 또는 undefined인 경우 undefined 반환
* - 좌항이 Truthy한 경우 우항을 반환
* */
var obj = null;
var val = obj?.value;

console.log(`val : ${val}`); // undefined

obj = { value:100 };
val = obj?.value;
console.log(`val : ${val}`); // 100

var str = '';
var len1 = str?.length;
console.log(`len1 : ${len1}`); // 0

/* 단축 평가 &&
* - str이 ''(빈문자열)이기 떄문에 falsy하다고 판단되어 "좌항" 반환
* */
var len2 = str && str.length;
console.log(`len2 : ${len2}`);
// str 이 true 면 우항인 str.length 값이 나오고, false 면 좌항(str)이 반환된다.(좌항 값 : ``)
