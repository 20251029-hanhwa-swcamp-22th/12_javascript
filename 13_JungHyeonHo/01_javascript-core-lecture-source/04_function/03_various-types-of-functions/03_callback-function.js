/* 콜백 함수
* - 함수의 매개 변수를 통해
*   다른 함수의 내부로 전달되는 함수
*
* - 매개 변수를 통해
*   함수의 외부에서 콜백 함수를 전달 받는 함수 == 고차 함수*
* */

var increase = value => value + 1;
var decrease = value => value - 1;

/* apply가 콜백 함수를 전달 받아 func에 저장함
* -> apply는 고차 함수
* */
var apply = (func, value) => {

    return func(value);
}

/* increase 함수가 apply의 매개 변수로 전달됨
* -> increase는 callback 함수 */
console.log(apply(increase, 5));