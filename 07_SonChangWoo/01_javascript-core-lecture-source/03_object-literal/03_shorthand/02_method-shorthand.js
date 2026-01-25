// 메서드 단축
var dog = {
    name : "poppy",
    eat : function (food){
        console.log(`${this.name}은/는 ${food}를 맛있게 먹는다.`)
    }
};

var dog2 = {
    name : "poppy",
    eat(food){
        console.log(`${this.name}은/는 ${food}를 맛있게 먹는다.`)
    }
};

dog.eat('고구마');
dog2.eat('감자');