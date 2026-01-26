// 년, 월, 일을 전달하면 해당 날짜의 요일을 '월', '화', '수', '목', '금', '토', '일' 문자열로 반환해주는 함수 getWeekDay를 만든다.

console.log(getWeekDay(2022, 6, 21));       // 2022년 6월 21일
console.log(getWeekDay(2022, 12, 12));      // 2022년 12월 12일

function getWeekDay(year, month, date) {
    // 코드 작성
    const target = new Date(year, month - 1, date);
    // console.log(target.toLocaleString());

    // 2. 정확한 요일을 가져오기 위한 배열 (0: 일요일, 1: 월요일 ...)
    const weekDays = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

    // 3. getDay() 메서드로 해당 날짜의 요일 인덱스를 가져와 반환
    return weekDays[target.getDay()];
}
