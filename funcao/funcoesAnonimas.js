const soma = function (x, y) {
  return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b)) // operacao = soma é um parâmetro padrão
}

imprimirResultado(3, 4) // 7
imprimirResultado(3, 4, soma) // 7
imprimirResultado(3, 4, function (x, y) {
  return x - y
}) // -1
imprimirResultado(3, 4, (x, y) => x * y) // 12

const pessoa = {
  nome: 'Ana',
  oiNome: function () {
    console.log('Oi, meu nome é ' + this.nome)
  },
}
pessoa.oiNome() // Oi, meu nome é Ana

pessoa.nome = 'João'
pessoa.oiNome() // Oi, meu nome é João