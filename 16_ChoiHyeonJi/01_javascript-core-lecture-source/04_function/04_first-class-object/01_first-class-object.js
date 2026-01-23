// 일급 객체
// - 함수는 특별한 존재가 아니라 일반적인 데이터와 동일 취급

/* 객체 등급 분류
* 1급 : (함수를) 변수 할당 o, (함수를) 인자 o, (함수를) 반환값 o
* 2급 : 변수 할당 x, 인자 o, 반환값 x
* 3급 : 변수 할당 x, 인자 x, 반환값 x
* */

// 1급 객체는 변수(+배열, 객체 등)에 저장할 수 있다.
var hello = () => '안녕?';
var obj = { hello };
console.log(obj);


// 1급 객체는 매개 변수로 인자를 전달할 수 있다.
// 1급 객체는 결과 값을 반환할 수 있다.
var repeat = (callback, count) => { // callback을 count만큼 반복해서 출력
    for(var i= 0; i< count; i++){
        console.log(callback());
    }
    return () => console.log(`${count}번 반복 완료`);  // 반환할 때 함수 담아서 반환 = 1급 객체
};

// - 고차함수 repeat에 콜백함수 obj.hello를 전달
// - 고차함수 repeat 결과로 함수가 반환됨.
var resultFn = repeat(obj.hello, 7);

// - 고차함수 repeat 결과로 반환된 함수를 호출함 -> 실행
resultFn();