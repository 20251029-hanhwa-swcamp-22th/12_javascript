// ## 2-2. 오늘 흐른 시간을 초 단위로 알려주는 getSecondsToday 함수와 오늘 남은 시간을 초단위로 알려주는 getSecondsToTomorrow 함수를 만든다.

// output
/*
xxxxx초나 흘렀습니다. 시간을 소중히 씁시다^^
xxxxx초 밖에 안 남았습니다. 다시는 오지 않는 오늘입니다^^
*/

console.log(getSecondsToday());
console.log(getSecondsToTomorrow());

function getSecondsToday() {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = Math.floor((now - start) / 1000);
  return `${diff}초나 흘렀습니다. 시간을 소중히 씁시다^^`;
}

function getSecondsToTomorrow() {
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const diff = Math.floor((tomorrow - now) / 1000);
  return `${diff}초 밖에 안 남았습니다. 다시는 오지 않는 오늘입니다^^`;
}
