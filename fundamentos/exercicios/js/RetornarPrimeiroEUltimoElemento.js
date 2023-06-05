function retornarPrimeiroEUltimoElemento(elementos) {
    return [elementos[0], elementos[elementos.length - 1]];
}

console.log(retornarPrimeiroEUltimoElemento([7, 14, "olá"]));
console.log(retornarPrimeiroEUltimoElemento([-100, "aplicativo", 16]));