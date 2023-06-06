function filtrarPorQuantidadeDeDigitos(arrayNumeros, quantidadeDeDigitos) {
    return arrayNumeros.filter(numero => {
        const quantidadeDigitos = String(numero).length;
        return quantidadeDigitos === quantidadeDeDigitos;
    });
}

console.log(filtrarPorQuantidadeDeDigitos([ 38, 2, 365, 10, 125, 11 ], 2));
console.log(filtrarPorQuantidadeDeDigitos([ 5, 9, 1, 125, 11 ], 1));