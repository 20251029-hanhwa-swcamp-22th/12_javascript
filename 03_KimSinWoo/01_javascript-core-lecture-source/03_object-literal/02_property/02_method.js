/* JS에서 function은 객체(object)이다
* -> 객체는 값으로 취급될 수 있음
* -> K : V -> K : object -> K : function(){} == method
* */

var dog = {
    name : "뽀삐",
    eat : function (food) {
        /* 메서드에서 같은 객체의 프로퍼티를 참조하려면 this를 사용함*/
        console.log(`${this.name}(은)는 ${food}를 먹는다`)
    }
}

dog.eat("누통,솔솥");