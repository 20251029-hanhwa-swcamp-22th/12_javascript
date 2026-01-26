// 앞으로 읽어도 거꾸로 읽어도 똑같은 문자인지 판별하는 palindrom 함수를 만든다.
const list = ['기러기', '토마토', '스위스', '인도인', '별똥별', '우별림'];

list.forEach(item => console.log(palindrom(item)));

function palindrom(str) {
    // 코드 작성
    const reversedStr = str.split('').reverse().join('');
    // 원래 문자열(str)과 뒤집은 문자열(reversedStr)이 같은지 비교하여 결과 반환
    return str === reversedStr;
}