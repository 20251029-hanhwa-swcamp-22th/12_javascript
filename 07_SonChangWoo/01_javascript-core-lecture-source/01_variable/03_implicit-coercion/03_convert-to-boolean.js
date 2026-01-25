/* 논리 타입으로 암묵적 변환 */
// - JS 엔진은 boolean 타입이 아닌 값을
// Truthy값(참으로 평가되는 값) 또는 Falsy(거짓으로 평가되는 값)을 구분

// if ( 조건식 ) { 조건식이 true일 때 수행할 코드; }

if (undefined){ // undefined -> Falsy
    console.log("if(undefined)");
}

if (null){ // null -> Falsy -> false
    console.log("if(null)");
}

if (0){ // 0 -> Falsy -> false
    console.log("if(0)");
}

if (1){ // 1 -> Truthy(참으로 평가됨) -> true 반환
    console.log("if(1)");
}

if (NaN){ // NaN -> Falsy -> false 반환
    console.log("if(NaN)");
}

if (''){ // '' -> Falsy -> false 반환
    console.log("if('')");
}

// 'apple' -> Truthy -> true
if ('apple'){
    console.log("if('apple')");
}

// [] -> Truthy -> true
if ([]){
    console.log("if([])");
}

// {} -> Truthy -> true
if ({}){
    console.log("if({})");
}

if(Symbol()){
    console.log("if(Symbol())");
}

/* 기억할 것
* 1) Falsy(false) : undefined, null, 0, NaN, ''
* 2) Truthy(true) : 나머지 다
* */