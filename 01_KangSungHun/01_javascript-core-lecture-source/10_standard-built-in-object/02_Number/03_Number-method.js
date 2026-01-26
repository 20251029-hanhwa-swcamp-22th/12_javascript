/* 03_Number-method */

// Number.isFinite : 인수로 전달 된 숫자값이 정상적인 유한수인지 검사하여 결과를 불리언으로 반환
console.log(Number.isFinite(10));           // true
console.log(Number.isFinite(-10));          // true
console.log(Number.isFinite(Infinity));     // false
console.log(Number.isFinite(-Infinity));    // false
console.log(Number.isFinite(NaN));          // false

console.log(Number.isFinite(null));

console.log(isFinite(null));            // 빌트인 전역함수 isFinite는 암묵적 타입변환을 한다
console.log('----------------------');

// Number.isNaN : 인수로 전달 된 숫자값이 NaN인지 검사하여 결과를 불리언으로 반환
console.log(Number.isNaN(NaN));             // true
console.log(Number.isNaN(undefined));       // false
console.log(isNaN(undefined));              // 빌트인 전역함수 isNaN은 암묵적 타입변환을 한다
console.log('----------------------');

// Number.isSafeInteger : 인수로 전달 된 숫자값이 안전한 정수인지 검사하여 결과를 불리언으로 반환
console.log(Number.isSafeInteger(10));          // true
console.log(Number.isSafeInteger(1000000000000000000000));         // false
console.log(Number.isSafeInteger(10.10));       // false
console.log(Number.isSafeInteger('10'));        // false
console.log(Number.isSafeInteger(false));       // false
console.log(Number.isSafeInteger(Infinity));    // false
console.log('----------------------');


