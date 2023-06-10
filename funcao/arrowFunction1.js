let dobro = function (a) {
  return 2 * a
}

// Arrow Function
dobro = (a) => {
  return 2 * a
}

// Arrow Function reduzida
dobro = a => 2 * a // return implícito

console.log(dobro(Math.PI))

let ola = function () {
  return 'Olá'
}

ola = () => 'Olá'
// ola = _ => 'Olá' // possui um parâmetro
console.log(ola())