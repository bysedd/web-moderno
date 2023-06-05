const a = 3;

try {
    a += 10;
} catch (TypeError) {
    console.log('\'a\' is a constant and cannot be changed.');
}

console.log(a);
