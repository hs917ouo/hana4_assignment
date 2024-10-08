// Array.reduce 함수를 고차 함수로 직접 구현하시오.
// const reduce = (arr, fn, initValue) => {
// }
// reduce([1, 2, 3], (a, b) => a + b, 0);       // 6이면 통과!
// // cf. [1,2,3].reduce((a,b) => a + b, 0);       // 6
// reduce([1, 2, 3, 4, 5], (a, b) => a + b);    // 15면 통과!
// reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120이면 통과!
// reduce([2, 2, 2], (a, b) => a * b);          // 8이면 통과!
// reduce([3, 3, 3], (a, b) => a * b, 0);       // 0이면 통과!
// reduce(users, (acc, user) => acc + user.name); // [object Object]LeePark

// const a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// assert.deepStrictEqual(
//   reduce(a10, (acc, cur) => acc + cur, 0),
//   a10.reduce((acc, cur) => acc + cur, 0)
// );

// assert.deepStrictEqual(
//   reduce(users, (acc, user) => acc + user.name),
//   users.reduce((acc, user) => acc + user.name)
// );
