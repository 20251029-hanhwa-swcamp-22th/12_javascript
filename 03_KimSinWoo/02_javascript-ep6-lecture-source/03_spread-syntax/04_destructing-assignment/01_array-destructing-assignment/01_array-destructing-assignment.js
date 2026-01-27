// 배열 구조 분해 할당
const nameArr = ['길동','홍'];
// const firstName = nameArr[0];
// const lastName = nameArr[1];

// nameArr[0] = firstName
// nameArr[1] = lastName
const [firstName, lastName] = nameArr;

console.log("firstName, lastName: ", firstName, lastName);

const [firstName2, lastName2] = "순신 이".split(" ");
console.log("firstName2, lastName2: ",firstName2, lastName2)

// 쉼표를 사용하여 필요하지 않은 배열 요소를 버릴 수 있음.
const arr = ['first','second','third'];

const [var1, ,var2] = arr;
console.log(var1,var2);