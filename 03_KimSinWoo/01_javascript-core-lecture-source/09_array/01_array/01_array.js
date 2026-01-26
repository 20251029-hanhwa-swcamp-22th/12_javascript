/* 배열 생성 */

// 1. 배열 리터럴([])을 이용한 생성 (권장)
const arr = ['banana','peach','kiwi'];
console.log(arr);

// arr = []; -> 불가
// const로 선언된 배열은 변경X, 대신 요소 변경은 가능
arr[0] = 'strawberry';
console.log(arr);

// 2. 배열 생성자 함수
const arr2 = new Array();
console.log("arr2: ",arr2);

// 3. 배열의 길이를 지정한 상태로 생성
const arr3 = new Array(10);
console.log(arr3);

const arr4 = new Array(1,2,3);
console.log(arr4);


// 3. Array.of() 메서드
console.log(Array.of(10));
console.log(Array.of(1,2,3));
console.log(Array.of("hello", 123, {name:'홍길동'}, true));


/* 배열은 인덱스를 이용해서 요소 접근 가능 */
console.log("arr: ", arr);
console.log("arr[0]: ", arr[0]);
console.log("arr[1]: ", arr[1]);
console.log("arr[2]: ", arr[2]);

// index가 존재하지 않아도 요소 추가 가능
arr[3] = 'banana';
console.log("arr[3]: ", arr[3]);

// index를 중간에 건너뛰게 되면 건너뛴 index는 empty상태가 된다
arr[5] = 'melon';
console.log(arr);

/* length: arr의 길이를 반환 */
console.log(arr.length);

/* for문 이용 가능*/
for (let i = 0; i < arr.length; i++) {
    console.log(`arr[${i}]: ${arr[i]}`)
}

/* 배열의 타입 확인 */
console.log(typeof arr); // object
