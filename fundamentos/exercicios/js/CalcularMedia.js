function calcularMedia(array) {
    const totalNotas = array.reduce((acumulador, atual) => acumulador + atual);
    return totalNotas / array.length;
}

console.log(calcularMedia([ 0, 10 ]));
console.log(calcularMedia([ 1, 2, 3, 4, 5 ]));