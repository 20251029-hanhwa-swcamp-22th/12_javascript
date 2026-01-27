/* 다양한 사용법 */

// 1. 객체 프로퍼티에서 사용하기
const user = {};
[user.firstName, user.lastName] = "진호 정".split(" ");
console.log(user);

// 2. 변수 값 교환
let student = '학생';
let teacher = '선생님';

// 방법1)
let temp = student;
student = teacher;
teacher = temp;
console.log("student: ", student, "teacher: ", teacher); // 선생님, 학생

// 방법2)
const arr = [student, teacher];
[teacher, student] = arr;
console.log(arr);

// 3. rest parameter와 함께 사용하기
const [sign1, sign2, ...rest]
    = ['양자리','염소자리','사자자리','처녀자리','개자리','물병자리'];
console.log(sign1)
console.log(sign2)
console.log(rest)


/* !중요! */
// 4. 기본값 설정하고 사용하기
const [firstName, lastName = "김"] = ["병진"];
console.log(firstName)
console.log(lastName) // undefined

