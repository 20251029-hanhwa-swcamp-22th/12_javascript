console.log(getWeekDay(2022, 6, 21));       // 2022년 6월 21일
console.log(getWeekDay(2022, 12, 12));      // 2022년 12월 12일

function getWeekDay(year, month, date) {
    // 코드 작성
    let day = ['일','월','화','수','목','금','토'];
    return day[new Date(year,month-1,date).getDay()];
    // month는 0부터 시작
    // getDay로 요일 가져오기
}
