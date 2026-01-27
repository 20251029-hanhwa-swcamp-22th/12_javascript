/* 2-1. 년, 월, 일을 전달하면 해당 날짜의 요일을
'월', '화', '수', '목', '금', '토', '일' 문자열로 
반환해주는 함수 getWeekDay를 만든다.*/

console.log(getWeekDay(2022, 6, 21));       // 2022년 6월 21일
console.log(getWeekDay(2022, 12, 12));      // 2022년 12월 12일
/*
function getWeekDay(year, month, date) {
    // 코드 작성
    let date = new Date(year, month-1, date);
    let day = date.getDay()
    switch(day){
        case 0: return '일';
        case 1: return '월';
        case 2: return '화';
        case 3: return '수';
        case 4: return '목';
        case 5: return '금';
        case 6: return '토';
    }
}*/

function getWeekDay(year, month, date) {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const today = new Date(year, month-1, date);
    
    return days[today.getDay()];
}



/* 2-2. 오늘 흐른 시간을 초 단위로 알려주는 getSecondsToday 함수와 
오늘 남은 시간을 초단위로 알려주는 getSecondsToTomorrow 함수를 만든다. */

console.log(getSecondsToday());
console.log(getSecondsToTomorrow());

function getSecondsToday() {
  let now = new Date();
  let startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - startTime; // 밀리초
  return Math.round(diff / 1000); // 밀리초 -> 초
}

function getSecondsToTomorrow() {
  let now = new Date();
  let endTime = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  let diff = endTime - now;

  return Math.round(diff / 1000);
}

/* 2-3. arr 배열에는 숫자 뒤에 단위 문자가 붙거나 
숫자 앞에 특수 문자가 1개 붙는 형태의 문자열들이 담겨있다. 
해당 값들의 앞 또는 뒤에 위치한 문자를 제거하고 
숫자로 형변환한 값들이 담긴 새로운 배열을 반환하는 removeChar 함수를 작성한다. */

let arr = ["1080px", "$100", "+200", "60kg", "6m", "-15"];

console.log(removeChar(arr));

function removeChar(arr){
    let result =
        arr.map(str => str.replace(/[^0-9-]/g, ''));

    return result;

}


/* 2-4. 앞으로 읽어도 거꾸로 읽어도 똑같은 문자인지 판별하는 palindrom 함수를 만든다. */

const list = ['기러기', '토마토', '스위스', '인도인', '별똥별', '우별림'];

list.forEach(item => console.log(palindrom(item)));

function palindrom(str) {
    // 기러기
    let strReverse = str.split('').reverse().join('');

    if(str === strReverse) {
        return true;
    }else{
        return false;
    }
}