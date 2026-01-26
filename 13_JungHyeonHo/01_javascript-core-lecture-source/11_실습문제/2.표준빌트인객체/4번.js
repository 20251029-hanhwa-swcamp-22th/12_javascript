const list = ['기러기', '토마토', '스위스', '인도인', '별똥별', '우별림'];

list.forEach(item => console.log(palindrom(item)));

function palindrom(str) {
    // 코드 작성

    // 이게 뭔지 해석해봐라
    // split('') : str문자열을 하나의 글자씩 요소로 하는 배열로 만든 후
    // reverse() : 뒤집은 후
    // join('') : 연결자를 ''로 해서 문자열로 만든다
    // ===을 통해 동일 비교를 한다.
    return str === str.split('').reverse().join('');
}