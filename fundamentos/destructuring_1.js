const people = {
    'name': 'Ana',
    'age': 5,
    'address': {
        'street': 'Rua ABC',
        'number': 1000
    }
};

const { name, age } = people;
console.log(name, age);

const { name: n, age: a } = people;
console.log(n, a);

const { lastName, goodHumored = true } = people;
console.log(lastName, goodHumored);

const { address: { street, number, cep } } = people;
console.log(street, number, cep);

// const { account: { ag, num } } = people;
// console.log(ag, num);