/* 반환문 */
function hello(name){

    // return
    // - 현재 함수를 바로 종료 시키고
    //   해당 함수를 호출한 곳으로 값을 들고 돌아감.
    return `${name}님 안녕하세요?`;

    console.log("test");
}

console.log(hello("현호"));

/* 반환 값이 없는 함수 */
function func(){
    console.log("함수가 호출 되었습니다");
    return;
}
console.log(func()); // undefined, 함수는 객체인데 반환한게 아무것도 없다.