const user = {
    activate : true,
    login : function(){
        console.log('로그인 되었습니다.');
    }
};

/* 생성자 함수 */
function Student(name) {
    this.name = name;
}

// .prototype은 "__proto__" 와 이름만 같을 뿐 실제로는 일반 프로퍼티 이다.
// 생성자 함수가 생성할 인스턴스의 부모를 지정
Student.prototype = user;

const student1 = new Student("홍길동");

for(let key in student1) {
    let isOwn = student1.hasOwnProperty(key);

    if(isOwn) {
        console.log(`객체 자신의 property : ${key}`);
    } else {
        console.log(`상속 property : ${key}`);
    }
}