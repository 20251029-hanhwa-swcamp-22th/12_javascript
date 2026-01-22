// 단축 평가
// - 표현식을 평가하는 도중 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것.



// - &&, || 연산자 표현식의 결과가 때로는 boolean 값이 아닐수도 있다.



// 'apple'은 Truthy한 값이기 때문에 true로 평가되고 전체 평가도중 true가 확정되면 나머지 연산을 수행하지 않는다
// 따라서 결과는 확정된 결과인 'apple'을 반환한다.
console.log('apple' || 'banana'); // apple

// 앞쪽 평가가 실패(false)하면 || 뒤에가 반환됨
console.log(false || 'banana'); // banana

// && 연산은 좌항, 우항을 모두 평가해야하기 때문에 우항이 평가의 결과를 결정한다.
console.log('apple' && 'banana'); // banana
console.log(false && 'banana'); // false


// 객체를 가리키기를 기다리는 변수가 null 또는 undefined인지 확인하고 null 또는 undefined(falsy)로 판단되면
// 객체의 속성(프로퍼티) 참조를 막아서 오류를 예방한다.
var obj = null;
// var temp = obj.value;
// console.log(temp)

var temp = obj && obj.value;
console.log(temp)