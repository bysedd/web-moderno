let [a, b, c, d] = [3, 5, 1, 15];

// binary operator
const sum = a + b + c + d;
const subtraction = d - b;
const multiplication = a * b;
const division = d / a;
const mod = a % 2;

// unary operator
const increment1 = a++; // here the value is incremented after the assignment
const increment2 = ++a; // here the value is incremented before the assignment
const decrement1 = a--;
const decrement2 = --a;

console.log(sum, subtraction, multiplication, division, mod);
console.log(increment1, increment2, decrement1, decrement2);