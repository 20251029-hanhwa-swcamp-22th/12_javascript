console.log(getSecondsToday());
console.log(getSecondsToTomorrow());

function getSecondsToday() {
    // 코드 작성
    let now = new Date();
    let seconds = now.getHours()*60*60+now.getMinutes()*60+now.getSeconds();
    return `${seconds}초나 흘렀습니다. 시간을 소중히 씁시다 ^^`;
}

function getSecondsToTomorrow() {
    // 코드 작성
    let now = new Date();
    let seconds = 60*60*24-(now.getHours()*60*60+now.getMinutes()*60+now.getSeconds());
    return `${seconds}초 밖에 안 남았습니다. 다시는 오지 않는 오늘입니다^^`;
}
