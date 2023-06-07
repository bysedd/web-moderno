let name       = 'Rebeca';
const template = `
    Hi
    ${name}!
`;
console.log(template);

// expressions...
console.log(`1 + 1 = ${1 + 1}`);

// arrow function...
const print = text => console.log(text);
const upper = text => text.toUpperCase();

print(`Hey... ${upper('cuidado')}!`);