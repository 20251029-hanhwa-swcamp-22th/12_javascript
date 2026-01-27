console.log("외부 JS 파일의 내용");

/* DOM이 저장된 변수명 앞에는 $를 붙이는 관례가 있음
* -> 일반 데이터가 저장된 변수명과의 구분을 위해서 관례적으로 사용
* */

/* Document.prototype.querySelect("CSS선택자") */
// DOM 객체에서 class 속성 값이 .area
const $area = document.querySelector(".area");
console.log($area);

// DOM 객체에서 p태그 중 첫 번째 요소 노드 반환
const $first = document.querySelector("p");
console.log($first);

// DOM 객체에서 p태그 중 두 번째 요소 노드 반환
const $second = document.querySelector(".area:nth-of-type(2) > p");
console.log($second);


/* CSS 선택자를 만족하는 요소가 없을 때 ??? 반환 */
const $noEl = document.querySelector(".noEl");
console.log($noEl); // null


const $lists = document.querySelectorAll("#list > li");
console.log($lists);

/* class가 food인 요소만 선택하기 */
const $foodLists
    = document.querySelector("#list")
    .querySelectorAll(".food");
console.log($foodLists);

/* CSS 선택자를 만족 시키지 못한 경우 ??? 반환 */
const $noElList = document.querySelectorAll(".noElList");
console.log($noElList);