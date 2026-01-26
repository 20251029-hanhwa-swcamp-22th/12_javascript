// strict-mode 미적용
function test() {
    x = 10;
}

test();

console.log(`x: ${x}`);
// 개발자의 의도와 관계없이 암묵적으로 선언된 전역 변수는
// 잠재적 오류 발생 원인이 될 수 있다.
// ES5 -> strict모드가 추가가 되었다.