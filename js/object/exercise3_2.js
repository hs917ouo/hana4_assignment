// 원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 Object의 클래스 메소드 또는 spread(...) 연산자를  사용하지 말고 작성하시오.

// deep copy
const kim = { nid: 3, nm: "Kim", addr: { city: "Pusan" } };
const newKim = copyObject(kim);
newKim.addr.city = "Daegu";
console.log(kim.addr.city !== newKim.addr.city); // true면 통과!
