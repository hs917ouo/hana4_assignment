const assert = require("assert");
// [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] 배열을 객체로 만드시오.
//(makeObjectFromArray)
// => { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }

// 위에서 만든 객체를 다시 배열로 만드시오.
// (makeArrayFromObject)
// { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }
// => [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]

const makeObjectFromArray = (arr) => {
    const ret = {};
    for (const idx in arr){
        const [key,...values] = [...arr[idx]];
        Object.assign(ret,{[key]:values});
    }
    return ret;
}

const makeArrayFromObject = (obj) => {
    const ret = [];
    for(const key in obj){
        ret.push([key,...obj[key]]);
    }
    return ret;
}

// makeObjectFromArray([['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]);
// makeArrayFromObject({ 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] });

assert.deepStrictEqual(makeObjectFromArray([['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]),{ 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] });
assert.deepStrictEqual(makeArrayFromObject({ 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }),[['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]);