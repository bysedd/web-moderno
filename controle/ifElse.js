const imprimirResultado = function (nota) {
    if (typeof nota === 'number') {
        if (nota >= 7) {
            console.log('Aprovado!');
        } else {
            console.log('Reprovado!');
        }
    }
    else {
        console.log(`'${nota}' não é um número válido!`);
    }
};

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('Epa!'); // cuidado!!!