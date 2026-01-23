// JS에서 function은 객체(object)이다
// -> 객체는 값으로 취급할 수 있음
// -> K : V
// -> K : object
// -> K : function(){} == method
var dog = {
    name: "뽀삐",
    eat : function(food){
        /* 메서드에서 같은 객체의 프로퍼티를 참조하려면 this를 사용함 */
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어오`);
    }
}

dog.eat(); // undefined == 변수에 값 대입 X 타입 X
dog.eat('고구마','감자') // 뽀삐(은)는 고구마를 맛있게 먹어오
    // JS는 메서드/함수 호출 시 매개 변수가 없거나 많아도 호출은 된다.