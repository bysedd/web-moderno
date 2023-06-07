let n1 = 1
let n2 = 2

n1++ // Postfix
console.log(n1)
--n1 // Prefix
console.log(n1)

console.log(++n1 === n2--) // true
console.log(n1 === n2) // false