// 메서드 단축
var cat = {
    name: "삠삐",
    eat: function(food){
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요`);
    }
}

var dog = {
    name: "삠삐",
    eat(food){
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요`);
    }
}

cat.eat('츄르');
dog.eat('고고마');