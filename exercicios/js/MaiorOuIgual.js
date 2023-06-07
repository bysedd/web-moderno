function maiorOuIgual (num1, num2) {
  return typeof num1 !== typeof num2 ? false : num1 >= num2
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, '0'))
console.log(maiorOuIgual(5, 1))