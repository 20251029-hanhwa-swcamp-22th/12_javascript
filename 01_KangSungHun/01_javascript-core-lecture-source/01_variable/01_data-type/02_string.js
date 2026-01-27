// 변수 하나 선언
var str1;

/* 문자열 (string) 변수 선언 바업 */
str1 = "Javascript"; // ""
str1 = 'Javascript' // ''
str1 = `Javascript` // `` (템플릿 리터럴)

console.log(str1);

/* 템플릿 리터럴 ``(백틱)
* - ES6부터 도입
* - 멀티 라인 문자열, 표현식 삽입이 가능함
* */
var str2 = `안녕하세요
    반갑습니다
    이제 공부하시죠`;

console.log(str2);

var lastName = '홍';
var firstNmae = '길동';

console.log("제 이름은" + lastName + firstNmae + "입니다.");
console.log(`제 이름은 ${lastName}${firstNmae} 입니다.`);