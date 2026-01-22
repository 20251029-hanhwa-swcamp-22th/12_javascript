// 변수 하나 선언
var str1;

/* 문자열(str1) 변수 선언 방법 */
str1 = "Javascript" // ""
str1 = 'Javascript' // ''
str1 = `Javascript` // `` (템플릿 리터럴)

console.log(str1);

/* 템플릿 리터럴 ``(백틱)
* - ES6 부터 도입
* - 멀티 라인 문자열, 표현식 삽입이 가능함
* */
var str2 = `안녕하세요
    반갑습니다
    이제 공부하시죠`;

console.log(str2);

var lastname = '홍';
var firstname = '길동';

console.log("제 이름은 "+lastname+firstname+" 입니다.");
console.log(`제 이름은 ${lastname}${firstname} 입니다.`);