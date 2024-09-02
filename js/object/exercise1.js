const assert = require("assert");

const arr = [100, 200, 300, 400, 500, 600, 700];
// 1. for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.
// for (idx in arr) console.log(idx);
const forInKeys = (arr) => {
  const ret = [];
  for (idx in arr) ret.push(idx);
  return ret;
};

// 2. for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)
// for (idx in arr) console.log(arr[idx]);
const forInValues = (arr) => {
  const ret = [];
  for (idx in arr) ret.push(arr[idx]);
  return ret;
};

const obj = { name: "Kim", addr: "Yongsan", level: 1, role: 9, receive: false };
// 3. for-in문을 사용하여 프로퍼티 이름(키)들을 출력하시오.
for (a in obj) console.log(a);

// 4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
for (a in obj) console.log(obj[a]);

// 5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
for (a of Object.values(obj)) console.log(a);

// 6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오.
//  // Object.defineProperty
Object.defineProperty(obj, "level", { enumerable: false });
// console.log(Object.getOwnPropertyDescriptors(obj));
// console.log(obj);

// 7. role 프로퍼티는 읽기전용으로 설정하시오.
// Object.defineProperty vs freeze(전체)
Object.defineProperty(obj, "role", { writable: false });
// console.log(Object.getOwnPropertyDescriptors(obj));
// Object.freeze(obj);
// console.log(Object.getOwnPropertyDescriptors(obj));

assert.deepStrictEqual(forInKeys(arr), Object.keys(arr));
assert.deepStrictEqual(forInValues(arr), Object.values(arr));
