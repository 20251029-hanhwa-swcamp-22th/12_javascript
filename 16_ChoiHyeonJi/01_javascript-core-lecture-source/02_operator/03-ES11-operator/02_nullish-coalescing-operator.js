/* null 병합 연산자 */
// 좌항의 피 연산자가 null 또는 undefined인 경우
// "우항"의 피연산자를 반환
// - 그렇지 않으면 좌항의 피연산자를 반환
// - 변수의 기본값을 설정할 때 유용함

/* 삼항 연산자 */
var obj = 'javascript';
var test1 = (obj == null) ? '기본값' : obj; // obj값 그대로 출력
console.log(`test1 : ${test1}`)

/* null 병합 연산자(??) */
var test2 = obj ?? '기본값'; // 좌항이 null 아니니까 좌항 그대로 반환
console.log(`test2 : ${test2}`)

/* 단축 평가 (||) */
var val1 = '' || '기본값'; // '' 빈칸이니까 falsy 뒤에꺼 반환  // 기본값
console.log(val1);

var val2 = '' ?? '기본값'; // '' null und ?? 아니니까 좌항 반환 '' 빈칸
console.log(val2);


