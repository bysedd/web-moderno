let price = 19.90;
let discount = 0.4;
// console.log(`Discount price: ${price * (1 - discount)}`);

let finalPrice = price * (1 - discount);
// console.log(`Discount price: ${finalPrice.toFixed(2)}`);

let product = {
    'name': 'Pencil',
    'category': 'Stationery',
    'price': price,
    'discount': discount
};
for (const k in product) {
    console.log(`${k}: ${product[k]}`);
}