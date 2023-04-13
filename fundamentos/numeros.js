const weight_1 = 1.0;
const weight_2 = Number('2.0');

console.log(weight_1, weight_2);
console.log(Number.isInteger(weight_1));
console.log(Number.isInteger(weight_2));

const rating_1 = 9.871;
const rating_2 = 6.871;

const total = rating_1 * weight_1 + rating_2 * weight_2;
const average = total / (weight_1 + weight_2);

console.log(average.toFixed(2));
console.log(average.toString(2)); // in binary
console.log(typeof average);
console.log(typeof Number);