// JS에서 function은 객체(object)이다
// -> 객체는 값으로 취급할 수 있음
// -> K : V
// -> K : object
// -> K : function(){} == method
var cat = {
    name : '삠삐',
    eat : function(food){
        /* 메서드에서 같은 객체의 프로퍼티를 참조하려면 this를 사용함*/
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요`);
    }
}
// JS는 메서드/함수 호출 시 매개변수가 없거나 많아도 호출은 된다.
cat.eat('츄르', '사료');



