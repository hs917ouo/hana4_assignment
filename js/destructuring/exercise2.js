// user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오.
// (Function signature를 3개 이상으로 표현하기)
// 1.    function f1(user) { console.log(user.id, user.name); }
// 2.    function f2({id, name}) { console.log(id, name); }
// 3.    const f3 = ({id, name}) => { console.log(id, name); }

const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };
// f1(hong);  f2(lee); f3(hong);
// ⇒ 1, 'Hong'

const f1 = (user) => {
  console.log(user.id, user.name);
};

const f2 = ({ id, name }) => {
  console.log(id, name);
};

const f3 = (user) => {
  const { id, name } = user;
  console.log(id, name);
};

f1(hong);
f2(lee);
f3(hong);
