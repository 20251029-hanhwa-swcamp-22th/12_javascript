/* 객체 구조 분해 할당의 다양한 사용법 */
const pants = {
    productName: '배기 팬츠',
    color: 'black',
    price: 30000
}

/* 중요 */
// 1. 프로퍼티가 많은 객체에서 원하는 정보만 뽑을 때 사용
const {productName} = pants;
console.log(productName);

// 2. 객체에 존재하지 않는 프로퍼티에 기본 값 설정
const shirts = {
    productName: "화이트셔츠"
};

const {productName:pn, color:co = "빨강", price:pr =0} = pants;
console.log(pn);
console.log(co);
console.log(pr);

const {productName1, ...rest} = pants;
console.log(productName);
console.log(rest);

let pn3, co3, pr3; // 미리 let로 변수 선언

// let {productName:pn3, color:co3, price:pr3} = pants; -> let으로 인해 변수명 중복검사 시행되어 에러 발생

// 전체 영역을 "()" 로 감싸서 구조분해할당 문법으로 인식처리
({productName:pn3, color:co3, price:pr3} = pants);
console.log(pn3, co3, pr3);

