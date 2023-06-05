function buscarPalavrasSemelhantes(buscarPalavra, arrayPalavras) {
    const resultado = [];
    for (let palavra of arrayPalavras) {
        if (palavra.includes(buscarPalavra)) {
            resultado.push(palavra);
        }
    }
    return resultado;
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]));
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]));