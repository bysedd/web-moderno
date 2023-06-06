function multiplicar(a, b) {
    if (a >= 0 && b >= 0) {
        let resultado = 0;
        for (let i = 0; i < b; i++) {
            resultado += a;
        }
        return resultado;
    }
}

console.log(multiplicar(5, 5));
console.log(multiplicar(0, 7));