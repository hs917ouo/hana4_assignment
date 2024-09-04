// 1) 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.

// 2) 이 달의 날짜 5개를 무작위(rand)로 만들어 역순으로 정렬하시오.

// 3) 내년(2025년)의 오늘(9월 3일)의 요일을 출력하시오.

// 4) 오늘(9월 3일)로 부터 100일 후의 날짜는?

fn1 = () => {
  date1 = new Date(1970, 1, 1);
  date2 = new Date(1970, 1, 2);
  console.log((date2 - date1) / 1000);
};

fn2 = () => {
  date = new Date();
  tmp_date = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  day = () => 1 + Math.round((tmp_date.getDate() - 1) * Math.random());
  let arr = [];
  for (i = 0; i < 5; i++) {
    arr.push(day());
  }

  arr.sort((a, b) => b - a);
  console.log(arr);
};

fn3 = () => {
  date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  const day = "일월화수목금토";
  console.log(`${day[date.getDay()]}요일`);
};

fn4 = () => {
  date = new Date();
  date.setDate(date.getDate() + 100);
  console.log(date);
};
