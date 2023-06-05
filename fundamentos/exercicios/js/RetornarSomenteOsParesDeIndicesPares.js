function receberSomenteOsParesDeIndicesPares(array) {
    return array.filter((elemento, i) => {
        return elemento % 2 === 0 && i % 2 === 0;
    });
}

console.log(receberSomenteOsParesDeIndicesPares([ 1, 2, 3, 4 ]));
console.log(receberSomenteOsParesDeIndicesPares([ 10, 70, 22, 43 ]));