// estratégia 1 para gerar valor padrão
function soma1 (a, b, c) {
  a = a || 1 // se a for falso, recebe 1
  b = b || 1 // se b for falso, recebe 1
  c = c || 1 // se c for falso, recebe 1
  return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) // 3 5 6 3
// 0 é falso, então ele vai receber o valor padrão

// estratégia 2, 3 e 4 para gerar valor padrão
function soma2 (a, b, c) {
  a = a !== undefined ? a : 1 // se a for diferente de undefined, recebe a, senão recebe 1
  b = 1 in arguments ? b : 1 // se o índice 1 existir em arguments, recebe b, senão recebe 1
  c = isNaN(c) ? 1 : c // se c for NaN, recebe 1, senão recebe c
  return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0)) // 3 5 6 0

// valor padrão do es2015
function soma3 (a = 1, b = 1, c = 1) { // se a, b ou c não forem passados, recebem 1
  return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0)) // 3 5 6 0