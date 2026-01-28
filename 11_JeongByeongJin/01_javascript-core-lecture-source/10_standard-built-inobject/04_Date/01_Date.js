// 1. new Date() : 현재 날짜와 시간을 가지는 Date객체 반환
console.log(new Date());

// 2. new Date(milliseconds) : 1970년 1월 1일 00:00:00(UTC)를 기점으로 전달된 밀리초만큼 경과한 날짜와 시간을 나타내는 Date객체 반환
console.log(new Date(0));
console.log(new Date(1000 * 60 * 60 * 24));