var dog = {
    name: "뽀삐 MK-1",
    eat: function (food) {
        console.log(`${this.name}(은)는 ${food}(을)를 맛있게 먹어오!`);
    }
}
dog.eat("개밥");

// 메서드 단축
var dog2 = {
    name: "뽀삐 MK-2",
    eat(food) {
        console.log(`${this.name}(은)는 ${food}(을)를 맛있게 먹어오!`);
    }
}
dog2.eat("스시");