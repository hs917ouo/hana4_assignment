// Emp type의 hong 객체에 fullName 기능을 Accessor Property를 사용하지 말고, proxy 생성자 함수를 이용하여 구현하시오. (Emp class 소스만 수정해서)

// class Emp {
//   firstName;
//   lastName;
// }
// const hong = new Emp();
// hong.fullName = 'Kildong Hong'; // split하여 firstName, lastName 셋
// console.log(hong.fullName);     // 'Kildong HONG' 출력하면 통과!
// assert.strictEqual(hong.fullName, 'Kildong HONG');
// hong.fullName = 'Lee';
// console.log(hong.firstName, hong.lastName);  // 'Kildong LEE' 출력하면 통과!
// assert.strictEqual(hong.fullName, 'Kildong LEE');
// assert.deepStrictEqual(
//  [hong.firstName, hong.lastName], 'Kildong LEE'.split(' ') );
