// 이전 장표에서 작성한 Stack과 Queue에 공통 기능을 확장하시오.(Collection)
// 공통: length, isEmtpy, clear(), print(), remove(), peek, poll
// peek: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 (요소 삭제 없음!) : `다음 차례`
// poll: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 & 삭제 : `다음 차례 + 삭제`
// remove: 가장 (Stack:나중, Queue:먼저) 들어간 요소 삭제(skip)
// console.log(stack.peek, queue.peek); // 마지막(다음에 나올) 원소
// queue.print(); // 출력해보기
// const arr = queue.toArray().map(a => console.log(a));
// if (!stack.isEmpty) stack.clear();
// if (queue.length) queue.clear();

// const stack = new Stack();
// assert.deepStrictEqual(stack.toArray(), []);
// stack.push(3); // 추가하기
// assert.deepStrictEqual(stack.toArray(), [3]);
// stack.pop();
// assert.deepStrictEqual(stack.toArray(), []);

// const stackT = new Stack(...[[1], [2]]);
// assert.deepStrictEqual(stackT.toArray(), [[1], [2]]);

// const stack2 = new Stack(1, 2);
// const stack2 = new Stack(...[1, 2]);
// assert.deepStrictEqual(stack2.toArray(), [1, 2]);
// stack2.push(2).push(3); // 추가하기
// assert.deepStrictEqual(stack2.toArray(), [1, 2, 2, 3]);
// assert.strictEqual(stack2.pop(), 3);
// assert.deepStrictEqual(stack2.toArray(), [1, 2]);
// stack2.push(4, 5); // 추가하기
// assert.deepStrictEqual(stack2.toArray(), [1, 2, 2, 4, 5]);

// assert.strictEqual(stack2.peek, 5);
// assert.strictEqual(stack2.poll, 1);
// assert.strictEqual(stack2.remove(), 5);
// assert.deepStrictEqual(stack2.toArray(), [1, 2, 2, 4]);

// stack2.arr = [5, 6, 7]; //error
// assert.notDeepStrictEqual(stack2.toArray(), [5, 6, 7]);
// stack2.print();

// stack2.clear();
// assert.deepStrictEqual(stack2.toArray(), []);
// assert.strictEqual(stack2.isEmpty, true);

//--------------------------------

// const queue = new Queue();
// assert.deepStrictEqual(queue.toArray(), []);
// queue.enqueue(3); // 추가하기
// assert.deepStrictEqual(queue.toArray(), [3]);
// queue.enqueue(2); // 추가하기
// assert.deepStrictEqual(queue.toArray(), [2, 3]);
// assert.strictEqual(queue.dequeue(), 3);
// assert.deepStrictEqual(queue.toArray(), [2]);
// queue.enqueue(5, 6); // 추가하기
// assert.deepStrictEqual(queue.toArray(), [6, 5, 2]);
// queue.print();

// assert.strictEqual(queue.peek, 2); // [6, 5, 2]
// assert.strictEqual(queue.poll, 2); // [6, 5]
// assert.strictEqual(queue.remove(), 5); // [6]
// assert.deepStrictEqual(queue.toArray(), [6]);

// queue.clear();
// assert.deepStrictEqual(queue.toArray(), []);
// assert.strictEqual(queue.isEmpty, true);

// const queue2 = new Queue(1, 2);
// assert.deepStrictEqual(queue2.toArray(), [2, 1]);
