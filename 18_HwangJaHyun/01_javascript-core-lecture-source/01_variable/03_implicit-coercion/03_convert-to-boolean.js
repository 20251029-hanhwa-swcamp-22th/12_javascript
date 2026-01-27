/* 논리 타입으로 암묵적 변환 */
// JS 엔진은 boolean 타입이 아닌 값을
// Truthy값(참으로 평가되는 값) 또는 Falsy(거짓으로 평가되는 값)을 구분한다.

// if(조건식){ 조건식이 true일 때 수행할 코드; }

// undefined -> Falsy -> false
if(undefined){
    console.log(`if(undefined)`);
} // false

// null -> Falsy -> false
if(null){
    console.log(`if(null)`);
}

// 0 -> Falsy -> false
if(0){
    console.log(`if(0)`);
}

// NaN -> Falsy -> false
if(NaN){
    console.log(`if(NaN)`);
}

// '' -> Falsy -> false
if(''){
    console.log(`if('')`);
}

// 'apple' -> truthy -> true
if('apple'){
    console.log(`if('apple')`);
}

// [] -> truthy -> true
if([]){
    console.log(`if([])`);
}

// {} -> truthy -> true
if({}){
    console.log(`if({})`);
}

// Symbol() -> truthy -> true
if(Symbol()){
    console.log(`if(Symbol())`);
}

/* 기억할 것
* 1) Falsy(false) : undefined, null, 0, Nan, ''
* 2) Truthy(true) : 나머지 다
* */