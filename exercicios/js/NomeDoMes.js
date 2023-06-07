function nomeDoMes (numero) {
  const meses = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
  ]
  return meses[--numero]
}

console.log(nomeDoMes(1))
console.log(nomeDoMes(4))