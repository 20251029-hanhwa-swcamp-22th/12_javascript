console.log("외부 JS 파일의 내용");

/* DOM이 저장된 변수명 앞에는 $ 를 붙이는 관례가 있다
* -> 일반 데이터가 저장된 변수명과 구분을 위해서 관례적으로 사용
* */

/* Document.prototype.querySelect("CSS선택자") */
const $area = document.querySelector(".area");
console.log($area);

const $first = document.querySelector("p");
console.log($first);

// 두번째 p태그 찾는 방법
const $second = document.querySelector(".area:nth-of-type(2)>p");
console.log($second)

/* CSS선택자를 만족하는 요소가 없을 때 null 반환 */
const $noel = document.querySelector("noEl");
console.log($noel);

const $lists = document.querySelectorAll("#list>li");
console.log($lists);

const $foodlist
    = document.querySelector("#list").querySelectorAll(".food");
console.log($foodlist);

/* CSS선택자를 만족시키지 못한 경우 nodeList 반홪 */
const $noElist
    = document.querySelectorAll("noElist");
console.log($noElist);