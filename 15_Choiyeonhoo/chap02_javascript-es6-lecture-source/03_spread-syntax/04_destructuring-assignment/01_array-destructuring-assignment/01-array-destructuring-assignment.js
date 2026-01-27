/* 01-array-destructuring-assignment */

// 배열 구조 분해 할당
const nameArr = ['길동','홍'];

// 분해 할당 미 적용
// const firstName = nameArr[0];
// const lastName = nameArr[1];

// nameArr[0] 값을 firstName
// nameArr[1] 값을 lastName 할당
const [firstName, lastName] = nameArr;
console.log("first name : ", firstName);
console.log("last name : ", lastName);

// 반환 값이 배열인 split method 활용
const [firstName2, lastName2] = "순신 이".split(" ");
console.log("first name : ", firstName2);
console.log("last name : ", lastName2);

// 쉼표를 사용하여 필요하지 않은 배열 요소를 버릴 수 있음.
const arr = ['first', 'second', 'third'];
const [var1,,var2] = arr;
console.log(var1);
console.log(var2);