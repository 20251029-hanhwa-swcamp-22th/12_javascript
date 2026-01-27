# JavaScript Core Review

This file tracks the step-by-step review notes and quizzes.

## 1단계: 변수와 타입

### 핵심 개념
- JavaScript는 동적 타입 언어: 값에 따라 타입이 바뀜
- 기본 타입: number, string, boolean, undefined, null, symbol
- 객체 타입: object (배열, 함수도 객체로 취급)

### 기억 포인트
- undefined: 값이 아직 할당되지 않음
- null: 의도적으로 비어 있음을 표현
- typeof null === "object" (오래된 JS 버그)
- 숫자는 정수/실수 구분 없이 모두 number

### 예시
```js
let a = 10;       // number
a = "hi";        // string

let b;            // undefined
let c = null;     // null

typeof 10;        // "number"
typeof "hi";      // "string"
typeof null;      // "object"
```

### 확인 문제
1) let x; 의 타입은?
2) null과 undefined의 차이를 한 줄로 말하면?
3) typeof null의 결과는?

### 정답
1) undefined
2) null은 의도적으로 비어 있음을 표현, undefined는 아직 값이 할당되지 않음
3) "object"

---

## 2단계: 형 변환 (암묵적/명시적)

### 핵심 개념
- 암묵적 변환: JS가 자동으로 타입을 바꿈
- 명시적 변환: 개발자가 직접 타입을 바꿈

### 암묵적 변환 예시
```js
1 + "2"  // "12"
"3" + 4  // "34"
"3" * 2  // 6
"3" - 1  // 2
"삼" / 2 // NaN
```

### 명시적 변환 예시
```js
String(123)  // "123"
Number("45") // 45
Boolean(0)   // false
```

### Boolean 변환 핵심
- false가 되는 값: 0, "", null, undefined, NaN
- 그 외 대부분 true

### 확인 문제
1) "5" + 1 결과는?
2) "5" - 1 결과는?
3) Boolean("0") 결과는?

### 정답
1) "51"
2) 4
3) true

---

## 3단계: 연산자

### 핵심 개념
- == : 값만 비교 (타입 변환 발생)
- === : 값 + 타입 비교
- &&, || : 단축 평가 (값 자체를 반환)
- ?. : 옵셔널 체이닝 (null/undefined면 undefined)
- ?? : 널 병합 (null/undefined면 오른쪽)

### 기억 포인트
- 0 == false -> true
- 0 === false -> false
- null == undefined -> true
- null === undefined -> false
- a ?? b 는 a가 null/undefined일 때만 b

### 확인 문제 1
1) ==와 === 차이?
2) 0 == false 결과?
3) 0 === false 결과?
4) null == undefined 결과?
5) null === undefined 결과?
6) '' || 'hello' 결과?
7) 'hi' && 0 결과?
8) '' && 'hello' 결과?
9) obj?.value가 undefined가 되는 경우?
10) null ?? '기본값' 결과?

### 정답 1
1) ==는 값 비교, ===는 값+타입 비교
2) true
3) false
4) true
5) false
6) "hello"
7) 0
8) ""
9) obj가 null 또는 undefined일 때
10) "기본값"

### 집중 연습 문제 (취약 파트)
1) 0 == false 결과
2) 0 === false 결과
3) null == undefined 결과
4) null === undefined 결과
5) '' || 'A' 결과
6) '' && 'A' 결과
7) undefined ?? 'X' 결과
8) 0 ?? 100 결과
9) let obj = null; obj?.x 결과
10) let obj = {x: 5}; obj?.x 결과

### 정답 2
1) true
2) false
3) true
4) false
5) "A"
6) ""
7) "X"
8) 0
9) undefined
10) 5

---

## 4단계: 객체 리터럴

### 핵심 개념
- 객체는 키-값 쌍의 모음
- 리터럴로 생성: {}
- 접근 방법: 점 표기법(obj.key), 대괄호 표기법(obj["key"])

### 기억 포인트
- 존재하지 않는 키는 undefined
- 프로퍼티 추가/수정/삭제 가능
- in 연산자: 키 존재 여부 확인
- for...in: 객체의 키를 순회

### 예시
```js
const user = { name: "Kim", age: 20 };

user.name;      // "Kim"
user["age"];    // 20

user.job = "dev";  // 추가
user.age = 21;     // 수정
delete user.job;   // 삭제

"name" in user;    // true

for (const key in user) {
  console.log(key, user[key]);
}
```

### 확인 문제
1) 점 표기법과 대괄호 표기법 차이 한 줄로
2) 없는 키 접근 시 반환 값은?
3) 프로퍼티 삭제는 어떤 키워드로?
4) "name" in user 의 의미는?
5) for...in은 무엇을 순회하나?

### 정답
1) 점 표기법은 고정 키, 대괄호는 변수/특수문자 키 접근 가능
2) undefined
3) delete
4) user에 name 키가 존재하는지 확인
5) 객체의 키(프로퍼티 이름)
