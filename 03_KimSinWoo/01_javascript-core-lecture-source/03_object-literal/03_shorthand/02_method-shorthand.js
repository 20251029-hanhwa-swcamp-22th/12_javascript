var dog = {
    name : "뽀삐",
    eat : function (food) {
        console.log(`${this.name}(은)는 ${food}를 먹는다.`)
    }
};


var dog2 = {
    name : "뽀삐",
    eat(food) {
        console.log(`${this.name}(은)는 ${food}를 먹는다.`)
    }
};

dog.eat('고구마');
dog.eat('감자튀김')