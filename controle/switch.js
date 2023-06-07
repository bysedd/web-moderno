const imprimirResultado = function (nota) {
  if (typeof nota === 'number') {
    switch (Math.floor(nota)) {
      case 10:
      case 9:
        console.log('Quadro de Honra')
        break // Se não colocar o break, ele vai executar todos os cases abaixo
      case 8:
      case 7:
        console.log('Aprovado')
        break
      case 6:
      case 5:
      case 4:
        console.log('Recuperação')
        break
      case 3:
      case 2:
      case 1:
      case 0: // Pode colocar vários cases na mesma linha
        console.log('Reprovado')
        break
      default: // O default é o valor padrão, caso não caia em nenhum dos cases
        console.log('Nota inválida')
    }
  } else {
    console.log(`'${nota}' não é um número válido!`)
  }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado('Epa!')