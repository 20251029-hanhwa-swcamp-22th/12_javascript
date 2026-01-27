/* 중첩 함수 or 내부함수
* 함수내부에 정의된 또 다른 함수
* 내부함수를 포함한 함수는 외부함수라고 함.
* '중첩함수'는 보통 '외부함수'를 돕는 헬퍼 역할을 한다.
* */
function outer(){
    var outerVal = '외부 함수 변수';

    function inner(){
        var innerVal = '내부 함수 변수';

        /* 외부함수의 변수를 내부함수에서 참조할 수 있다. */
        console.log(`outerVal : ${outerVal}`);
        console.log(`innerVal : ${innerVal}`);

        return `${outerVal} / ${innerVal}`;
    }
    // 내부 함수의 변수는 외부 함수에서 참조할 수 없다.
    /*console.log(`innerVal : ${innerVal}`);*/
    console.log(inner());
}
// outer() 호출 -> inner() 호출 -> 반환된 결과로 log 출력
outer();