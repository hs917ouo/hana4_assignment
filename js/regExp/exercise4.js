// 1)  문자열 str에서 대문자만 골라 소문자로 다음과 같이 변환하세요.
// upperToLower('Senior Coding Learning JS');
// // ⇒ '*s*-enior *c*-oding *l*-earning *j*-*s*-'
//
//
// 2) 문자열 str에서 대문자는 소문자로, 소문자는 대문자로로 변환하세요.
// assert.equal(swapCase('Senior Coding Learning JS'), 'sENIOR cODING lEARNING js');
// assert.equal(swapCase('Hanaro 4 Class'), 'hANARO 4 cLASS');
// assert.equal(swapCase('HeLLo WoRLd'), 'hEllO wOrlD');
//
// 3) 전화번호를 정확한 형식으로 출력하는 함수를 작성하시오.
// telfmt('0101234567');    // '010-123-4567’
// telfmt('01012345678');   // '010-1234-5678’
// telfmt('0212345678');    // '02-1234-5678’
// telfmt('021234567');     // '02-123-4567’
// telfmt('0331234567');    // '033-123-4567’
// telfmt('15771577');      // '1577-1577’
// telfmt('07012341234');   // '070-1234-1234’
// ex) in JSX
// <small>{telfmt(user.tel)}</small>
//
// assert.deepStrictEqual(telfmt('0101234567'), '010-123-4567');
// assert.deepStrictEqual(telfmt('01012345678'), '010-1234-5678');
// assert.deepStrictEqual(telfmt('0212345678'), '02-1234-5678');
// assert.deepStrictEqual(telfmt('021234567'), '02-123-4567');
// assert.deepStrictEqual(telfmt('0331234567'), '033-123-4567');
// assert.deepStrictEqual(telfmt('15771577'), '1577-1577');
// assert.deepStrictEqual(telfmt('07012341234'), '070-1234-1234');
// assert.deepStrictEqual(telfmt('050712345678'), '0507-1234-5678');
