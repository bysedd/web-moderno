// Storing a function in a variable
const printSum = function (a, b) {
    console.log(a + b);
};
printSum(2, 3);

// Storing an arrow function in a variable
const sum = (a, b) => {
    return a + b;
};
console.log(sum(2, 3));

// Returning an object
const subtraction = (a, b) => ({ sub: a - b });
console.log(subtraction(2, 3));

// Implicit return
const subtraction2 = (a, b) => a - b;
console.log(subtraction2(2, 3));

// Function with only one parameter
const print = a => console.log(a);
print('Cool!!!');

// Function without parameters
const print2 = () => console.log('Cool!!!');
print2();

// Function with more than one parameter
const print3 = (a, b, c) => console.log(a, b, c);
print3('Cool!!!', 'Cool!!!', 'Cool!!!');