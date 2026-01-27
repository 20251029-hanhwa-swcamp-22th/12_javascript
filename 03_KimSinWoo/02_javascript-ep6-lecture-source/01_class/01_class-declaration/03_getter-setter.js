class Product {

    constructor(name, price) {
        /* 값 초기화 시 setter가 동작함 */
        this.name = name;
        this.price = price;
    }

    // getter & setter 내부에서는 실제 데이터가 저장되는 프로퍼티 명 앞에 "_"를 붙여준다.
    // ex) name -> _name, price -> _price

    // getter
    get name() {
        // Product객체.name -> getter 메서드가 자동 호출
        console.log("get name() 동작");
        return this._name;
    }

    get price() {
        console.log("get price() 동작");
        return this._price;
    }

    // setter
    set name(name) {
        // Product객체.name = "value"; 대입 시 자동으로 호출
        console.log("set name() 동작");
        this._name = name;
    }

    set price(price) {
        console.log("set price() 동작");
        this._price = price;
    }

}

let phone = new Product("갤럭시 트라이폴드",3590000);
console.log(phone.name, phone.price);

/* JS의 getter & setter는
* 값을 대입/반환 시 수행할 기능을 작서하는 메서드 역할 */