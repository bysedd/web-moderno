// function without return
function printSum(a, b) {
    // console.log((a || 0) + (b || 0));
    console.log(a + b);
}

printSum(2, 3);
printSum(2);
printSum(2, 10, 4, 5, 6, 7, 8);
printSum();

// function with return
function sum(a, b = 1) {
    return (a || 0) + b;
    // return a + b;
}

console.log(sum(2, 3));
console.log(sum(2));
console.log(sum());
