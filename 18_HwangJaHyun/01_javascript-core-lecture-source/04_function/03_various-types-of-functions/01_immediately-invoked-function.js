/* 즉시 실행 함수 */
/* 함수의 정의와 동시에 즉시 호출되는 함수
* 단 한번만 호출이 가능하다. (다시 호출 못함)
* 익명 함수를 이용해서 작성하는 것이 일반적
* 반드시 ()로 함수 정의부분을 감싸야한다.
* */

function test(){
    console.log('즉시 실행 함수 테스트');
}
test();

(function(){
    console.log('즉시 실행 함수 테스트');
})();

(()=>console.log('얍얍'))();

((name)=>console.log(`name: ${name}`))('잉어킹');

/* 즉시 실행 함수는 왜 사용할까?
* 혹시 모를 변수명 충돌 문제를 방지할 때 주로 사용 */
var name = '피카츄';
console.log(`전역 name : ${name}`);

(()=>{
    var name = '라이츄';
    console.log(`즉시 실행 함수 name : ${name}`);
})();

