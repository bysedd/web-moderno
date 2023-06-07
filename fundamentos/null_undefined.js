let value // not initialized
console.log(value)

value = null // absence of value
console.log(value)
// console.log(value.toString()); // TypeError

const product = {}
console.log(product.price)
console.log(product)

product.price = 3.50
console.log(product)

product.price = undefined // avoid assigning undefined
console.log(!!product.price)
// delete product.price;
console.log(product)

product.price = null // without price
console.log(!!product.price)
console.log(product)