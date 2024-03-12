// SECTION - JavaScript Arrays
// NOTE - Arrays are a special type of object that can be accessed through numbers from zero through to N-1 where N is the length of the array
const arr = ["Johan", 1, "Food", 100, "random"];
console.log(arr[2]);

// NOTE - push() and pop() methods
// SECTION - push() adding a new item to the end of an array
arr.push("Joe");
console.log(arr);

// SECTION - pop() removes an item from the end of an array.

let lastItem = arr.pop();
console.log(lastItem);
console.log(arr);

// ANCHOR - Javascript For loop, considered the best way to iterate any array mathematically through a for loop

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

// SECTION - add an item to the beginning of an array

arr.unshift("apples");
console.log(arr);

//NOTE - Remove an item from the beginning of an array
let firstitem = arr.shift();
console.log(firstitem);
console.log(arr);

arr.unshift(arr.pop());
console.log(arr);

arr.push(arr.shift());
console.log(arr);

// ANCHOR - Javascript Iterators

let a = [-5, -4, -3];
let b = 0;
let c = [12, 13, 14];

//NOTE - concat() method which is used to join two or more arrays
let result = a.concat(b, c);

console.log(result);

let numbers = [2, 4, 7, 8, 9];

let isEven = (num) => {
  if (num % 2 == 0) {
    console.log(num + " is even number");
    return;
  } else {
    console.log(num + " is odd number");
    return false;
  }
};

// console.log(isEven(numbers));

console.log(numbers.every(isEven));

console.log(numbers.some(isEven));

for (let j = 0; j < numbers.length; j++) {
  let temp = numbers[j];
  if (temp % 2 == 0) {
    console.log(temp + " is an even number");
  } else {
    console.log(temp + " is an odd number");
  }
}
