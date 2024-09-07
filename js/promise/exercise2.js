// 다음 코드에서 then 함수가 실수로 Promise 객체를 반환하지 않았을 경우 에러로 처리(Error!! 출력)하도록 수정하시오.
//     const promiseFn = (id = 1) =>
//     new Promise((resolve, reject) => {
//         console.log('id>>', id);
//         if (id < 7) resolve(id + 1);
//         reject(new Error('어디로?' + id));
//     });
//
// promiseFn()
//     .then(res => {
//         console.log('res1>>', res);
//         promiseFn(res); // Need Return the Promise Object!!
//     })
//     .then(res => {
//         console.log('res2>>', res); // res가 undefined 이라면 ⇒ 여기서 throw 하면 될까?
//     })
//     .catch(err => console.log('Error!!>>', err));
