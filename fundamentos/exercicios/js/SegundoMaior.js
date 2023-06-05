function segundoMaior(arrayNumeros) {
    const sortedArray = arrayNumeros.sort((a, b) => a - b);
    return sortedArray[sortedArray.length - 2];
}

console.log(segundoMaior([ 12, 16, 1, 5 ]));
console.log(segundoMaior([ 8, 4, 5, 6 ]));