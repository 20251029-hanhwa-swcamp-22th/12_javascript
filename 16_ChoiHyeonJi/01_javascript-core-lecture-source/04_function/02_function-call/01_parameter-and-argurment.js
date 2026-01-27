// parameter(매개 변수)와 argument(전달 인자)
// 매개변수 => 함수 선언부넹 써놓고
// 전달인자 => 매개변수 저장

function hello(name){
    // arguments
    // 함수 호출 시 전달된 인수를 참조할 수 있다
    console.log('arguments : ', arguments);
    console.log(arguments[1]);
    return `${name}님 안녕하세요`;
}

// 매개변수 name 한갠데 전달인자 3개함
/* JS는 매개 변수의 개수와 관계 없이 전달 인자의 수를 임의로 지정할 수 있다.*/
hello(); // 변수에 값이 들어가지 않아 타입 지정 x
hello("유관순");
hello("유관순", "홍길동"); // arguments : 내장 프로퍼티 잉ㅇ용해서 저장
hello("유관순", "홍길동", "이순신");

var result = hello();
var result2 = hello('유관순');
var result3 = hello('유관순');

console.log("result : ", result, result2, result3) // 매개변수에 저장된 값만 이용


/* 매개 변수 기본 값 설정
* - 매개 변수에 값이 전달되지 않거나 undefined인 경우
*   설정한 기본 값이 대입되도록 할 수 있다.
* */

function hi(name = '아무개'){
    return `${name} 안녕?`
}

console.log(hi('최현지'));
console.log(hi());
console.log(hi(undefined));




