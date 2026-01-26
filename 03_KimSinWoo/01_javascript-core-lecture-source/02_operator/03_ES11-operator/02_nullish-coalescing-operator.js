/* null 병합 연산자 */
/* - 좌항의 피연산자가 null 또는 undefined인 경우
*  "우항"의 피연산자를
*
* */

/* 삼항 연산자 */
var obj = 'JavaScript';
var test1 = (obj == null) ? '기본값' : obj;
console.log(`test1 : ${test1}`);

/* null 병합 연산자(??) */
var test2 = obj ?? '기본값';
console.log(`test2 : ${test2}`);

var val1 = '' || '기본값';
console.log(val1) // 기본값
var val2 = "" ?? "기본값";
console.log(val2) // 공백