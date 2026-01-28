// Object 생성자 함수
// - {} 리터럴 객체로 객체 생성하는 것과 같음
// - new 연산자와 함께 Object 생성자 함수를 호출하면 비어있는 객체가 생성된다.

const student = new Object(); // 빈 객체 생성 == {} 선언

/* 객체에 프로퍼티 추가 */
student.name = '정현호'; // 프로퍼티 추가
student.age = 27;
console.log(student);