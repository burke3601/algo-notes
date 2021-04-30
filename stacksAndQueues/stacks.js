//stacks

//array implementation
//not as efficient becasue we are not using the indexes of the array
//because of last out, first in implemtation

let stack = [];

stack.push("google");
stack.push("instagram");
stack.push("youtube");

console.log(stack)

stack.pop()

console.log(stack)
stack.push("amazon");
console.log(stack);


let stackTwo = [];
stackTwo.unshift('create new file');
stackTwo.unshift('rezise file');
stackTwo.unshift("cloned out error");

console.log(stackTwo);

stackTwo.shift();
console.log(stackTwo)
