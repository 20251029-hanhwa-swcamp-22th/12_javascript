// 함수 호이스팅(끌어올리다)
/* 함수 선언문은 런타임 이전에 JS 엔진에 의해서 먼저 실행된다.
* (실행전에 어떤 함수가 있는지 모두 파악한 상태)
* -> 함수 선언문 이전에 함수를 호출하는 구문이 있어도 오류 없이 실행이 가능하다.
* == 함수 호이스팅
* - 함수 선언문을 위로 끌어올린 것처럼 동작하는 것
* */

console.log(hello('홍길동'));

function hello(name){
    return `${name}님 안녕하세요?`;
}

console.log(hello('홍길동'));

/* 함수 표현식(변수 = 함수)도 호이스팅이 가능한지 확인 */

// hi is not a function -> 오류 발생
console.log(hi('듈리'))

/* 함수 표현식은 호이스팅 되지 않는다 */
/* function 붙은 친구들만 해석 */
var hi = function(name){
    return `${name}님 안녕하세요?`
}