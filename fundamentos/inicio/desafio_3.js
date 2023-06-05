let a = 7;
let b = 94;

// trocar os valores das variáveis usando desestruturação de arrays
[ a, b ] = [ b, a ];
// ({a, b} = {a: b, b: a});  // usando desestruturação de objetos

console.log(`a=${a}`);
console.log(`b=${b}`);