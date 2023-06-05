function objetoParaArray(obj) {
    let array = [];
    for (let chave in obj) {
        array.push([ chave, obj[chave] ]);
    }
    return array;
}

console.log(objetoParaArray({
    nome: 'Maria',
    profissao: 'Desenvolvedora de software'
}));

console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
}));
