const user = {
    id : 'user',
    login : function(){

        // this는 프로토타입에 영향을 받지 않고
        // 항상 . 앞에 있는 객체를 의미한다.
        console.log(`${this.id}님 로그인 되었습니다.`);
    }
};

const student = {
    age : 15,
    __proto__ : user
};

student.id = 'user01'; // 기존 상속 프로퍼티 user.id가 존재하였으나 자식한테 같은 이름의 프로퍼티 student.id를 추가하여 우선순위를 갖는다
student.login(); // user01님 로그인 되었습니다.

// for in 반복문은 상속 프로퍼티로 순회 대상에 포함 시킨다.
for(let key in student) {
    console.log(key);

    const isOwn = student.hasOwnProperty(key);
    if (isOwn) {
        console.log(`student객체 자신의 프로퍼티: ${key}`)
    }else {
        console.log(`student객체 상속 프로퍼티: ${key}`)
    }
}