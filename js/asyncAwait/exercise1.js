// 이전 챕터에서 만든 promiseAllAsync 함수를 async/await으로 refactoring 해보세요.

// const vals = [1, 2, 3];
// const randTime = val =>
//     new Promise(resolve => setTimeout(resolve, Math.random() * 1000, val));
//
// promiseAllAsync([randTime(1), randTime(2), randTime(3)]).then(arr => {
//     console.table(arr);
//     assert.deepStrictEqual(arr, vals);
// }).catch(console.error);
//
// promiseAllAsync([randTime(11), Promise.reject('RRR'), randTime(33)])
//     .then(array => {
//         console.log('여긴 과연 호출될까?!');
//     }).catch(error => {
//     console.log('reject!!!!!!>>', error);
// });
