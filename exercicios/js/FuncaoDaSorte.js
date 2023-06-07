function funcaoDaSorte (numero) {
  let numeroAleatorio = Math.floor(Math.random() * 10) + 1
  return numero === numeroAleatorio
    ? `Parabéns! O número sorteado foi o ${numeroAleatorio}`
    : `Que pena! O número sorteado foi o ${numeroAleatorio}`
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))