// 1. for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.
// 2. for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)
// 3. for-in문을 사용하여 프로퍼티 이름(키)들을 출력하시오.
// 4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
// 5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
// 6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오.
//  // Object.defineProperty
// 7. role 프로퍼티는 읽기전용으로 설정하시오. // Object.defineProperty vs freeze(전체)

const arr = [100, 200, 300, 400, 500, 600, 700];
const obj = { name: "Kim", addr: "Yongsan", level: 1, role: 9, receive: false };

// assert.deepStrictEqual(forInKeys(arr), Object.keys(arr));
// assert.deepStrictEqual(forInValues(arr), Object.values(arr));
