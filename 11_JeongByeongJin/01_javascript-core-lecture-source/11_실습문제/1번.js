/*  전달 받은 문자열(str) 안에 있는 값을 ',' 기준으로 배열로 분리하고
전달받은 단어(word)가 있는 index 위치를 문자열로 리턴하는 함수
findWord(str, word)를 작성한다.
*
* */

/*
고양이는 배열 index 10번째에 있습니다.
샌드위치는 배열에 존재하지 않습니다.
결과를 확인할 수 없습니다.
*/

const str = '사과,바나나,당근,김밥,치즈,떡볶이,햄버거,환타,사이다,콜라,고양이,강아지';

console.log(findWord(str, '고양이'));
console.log(findWord(str, '샌드위치'));
console.log(findWord(str));

function findWord(str, word) {
    // 코드 작성
    // 1. [10_standard-built-inobject/06_String/02_Stringmethod.js] 참고

    // split 메서드를 사용하여 str을 ',' 기준으로 배열로 만듭니다.

    // 2. [09_array/02_array-method/01_array-method.js] 참고
    // indexOf 메서드를 사용하여 배열에서 word의 인덱스를 찾습니다.

    // 3. 조건문(if)을 사용하여 상황별 메시지를 리턴합니다.
    // - str이나 word가 없을 때: "결과를 확인할 수 없습니다."
    // - 인덱스가 -1일 때: "OO는 배열에 존재하지 않습니다."
    // - 인덱스를 찾았을 때: "OO는 배열 index O번째에 있습니다."


}