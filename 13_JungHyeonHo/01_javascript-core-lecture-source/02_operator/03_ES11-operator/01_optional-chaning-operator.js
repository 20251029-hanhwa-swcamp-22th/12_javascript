/* 옵셔널 체이닝 연산자(ES11 (2020)에 추가)
* - 좌항의 피연산자가 null 또는 undefined인 경우 undefined 반환
* - 좌항이 Truthy한 경우 우항을 반환
* */
var obj = null;
var val = obj?.value; // obj(좌항) ?(연산자) value(우항)
    // obj가 null(Falsy)이므로 undefined를 반환
console.log(`val:${val}`);  // undefined

obj = { value:100};
val = obj?.value;
console.log(`val:${val}`);  // 100

/* 단축 평가와 옵셔널 체이닝의 차이를 잘 구분해서 사용하자! */
/* 옵셔널 체이닝
* - str이 null 또는 undefined가 아니기 때문에 "우항" 반환
* */
var str = '';
var len1 = str?.length;
    // 좌항이 String(Truthy)이므로 .length를 반환
console.log(`len1 : ${len1}`); // 0

/* 단축 평가 &&
* - str이 ''(빈문자열)이기 때문에 Falsy하다고 판단되어 "좌항" 반환
* */
var len2 = str && str.length;
    // str은 비어있는 문자열이므로 Falsy하다.
    // 그러므로 str이 반환된다.
console.log(`len2 : ${str}`); // ''