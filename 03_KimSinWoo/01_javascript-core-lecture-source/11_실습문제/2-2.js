// 오늘 흐른 시간을 초 단위로 알려주는 getSecondsToday 함수와 오늘 남은 시간을 초단위로 알려주는 getSecondsToTomorrow 함수를 만든다.
console.log(getSecondsToday());
console.log(getSecondsToTomorrow());

function getSecondsToday() {
    const now = new Date();

    // 오늘 00시 00분 00초를 나타내는 객체 생성
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // 현재 시간에서 오늘 시작 시간을 빼서 밀리초(ms) 차이를 구함
    const diff = now - today;

    // 초 단위로 변환 (1000ms = 1s)
    return Math.round(diff / 1000);
}

function getSecondsToTomorrow() {
    const now = new Date();

    // 내일 00시 00분 00초를 나타내는 객체 생성
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    // 내일 시작 시간에서 현재 시간을 뺌
    const diff = tomorrow - now;

    return Math.round(diff / 1000);
}

