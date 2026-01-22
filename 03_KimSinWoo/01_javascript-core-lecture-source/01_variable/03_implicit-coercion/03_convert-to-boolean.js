/* 논리 타입으로 암묵적 변환 */
// - JS 엔진은 boolean 타입이 아닌 값을 Truthy값(참으로 평가되는 값) 또는 falsy(거짓으로 평가되는 값)을
// 구분한다.

// if( 조건식 ) { 조건식이 true일 때 수행할 코드; }
// undefined -> falsy
if (undefined) {
    console.log("if(undefined)");
}

// null -> falsy
if (null) {
    console.log("if(null)");
}

// 0 -> falsy
if (0) {
    console.log("if(0)");
}

// 1 -> truthy
if (1) {
    console.log("if(1)");
}

// '' -> falsy
if ('') {
    console.log("if('')");
}

// apple -> truthy
if ('apple') {
    console.log("if(apple)");
}

// Symbol() -> truthy
if (Symbol()) {
    console.log("if(Symbol())");
}