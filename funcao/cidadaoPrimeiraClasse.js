// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1 () { }

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar função como parâmetro
function run (fun) {
  if (typeof fun === 'function') fun()
  else console.log('Não é uma função')
}

run(function () { console.log('Executando...') })

// Uma função pode retornar/conter uma função
function soma (a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)

// Função anônima
const soma2 = function (a, b) {
  return a + b
}

console.log(soma2(2, 3))

// Função arrow
const soma3 = (a, b) => {
  return a + b
}

console.log(soma3(2, 3))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir = a => console.log(a)
imprimir('Legal!!!')