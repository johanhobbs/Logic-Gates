function greeting() {
  console.log("Hello World");
}

console.log(greeting());

function addTwoNumbers(numA, numB) {
  let numC = numA + numB;
  console.log(`${numA} + ${numB} = ${numC}`);
}

addTwoNumbers(4, 5);

// write a function that takes an array
// check whether the sum of its elements is even or odd,
// return the value of "even" or "odd"

function checkArraySum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  if (sum % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(checkArraySum([0, 1, 3, 5]));

// SECTION - write a function that takes an array of items and returns only integers.
// ['Ali', 3, Isaac, 5, 9] -> [3,5,9]

function onlyIntegers(arr) {
  let integers = [];
  for (j = 0; j < arr.length; j++) {
    if (Number.isInteger(arr[j])) {
      integers.push(arr[j]);
    }
  }
  return integers;
}

console.log(onlyIntegers(["Ali", 3, "Isaac", 5, 9]));
