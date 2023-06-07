function removerPropriedade (objeto, nomeDaPropriedade) {
  const copia = Object.assign({}, objeto)
  delete copia[nomeDaPropriedade]
  return copia
}

const obj1 = { a: 1, b: 2 }
const obj2 = {
  id: 20,
  nome: 'caneta',
  descricao: 'Não preenchido',
}

console.log(removerPropriedade(obj1, 'a'))
console.log(removerPropriedade(obj2, 'descricao'))

console.log(Object.is(removerPropriedade(obj1, 'a'), obj1))
console.log(Object.is(removerPropriedade(obj2, 'descricao'), obj2))