var obj = {
    normal : 'normal value',
    '@ s p a c e @' : 'space value',
    0 : 1, // 0 -> '0' 자동 변환
    var : 'var', // 예약어를 key로 사용할 순 있지만 권장되진 않는다
    normal : "new value" // key가 중복시 나중에 작성한 값으로 덮어쓰기
}

console.log(obj);