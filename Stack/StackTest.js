import Stack from "./Stack.js";

const stack = new Stack();

console.log('stack.isEmpty() => ', stack.isEmpty());

stack.push(5);
stack.push(8);

console.log('stack after push 5 and 8 => ', stack.toString());

console.log('stack.peek() => ', stack.peek());

stack.push(11);

console.log('stack.size() after push 11 => ', stack.size());
console.log('stack.isEmpty() => ', stack.isEmpty());

stack.push(15);

stack.pop();
stack.pop();

console.log('stack.size() after push 15 and pop twice => ', stack.size());
