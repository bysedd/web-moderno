let isActive = false;
console.log(isActive);

isActive = true;
console.log(isActive);

isActive = 1;
console.log(!!isActive); // !! convert the value to boolean

// Truthy
console.log('\nThe truth...');
console.log(`'3' is ${!!3}`);
console.log(`'-1' is ${!!-1}`);
console.log(`'text' is ${!!'text'}`);
console.log(`'[]' is ${!![]}`);
console.log(`'{}' is ${!!{}}`);
console.log(`'Infinity' is ${!!Infinity}`);
console.log(`'isActive' is ${!!(isActive = true)}`);

// Falsy
console.log('\nThe falsy...');
console.log(`'0' is ${!!0}`);
console.log(`' ' is ${!!''}`);
console.log(`'null' is ${!!null}`);
console.log(`'NaN' is ${!!NaN}`);
console.log(`'undefined' is ${!!undefined}`);
console.log(`'empty string' is ${!!''}`);
