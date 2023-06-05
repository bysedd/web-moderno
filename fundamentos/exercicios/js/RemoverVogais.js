function removerVogais(frase) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    vogais.forEach(vogal => frase = frase.replace(new RegExp(vogal, 'ig'), ''));
    return frase;
}

console.log(removerVogais("Cod3r"));
console.log(removerVogais("Fundamentos"));