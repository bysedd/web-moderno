const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// O método forEach() executa uma dada função em cada elemento de um array.
// forEach() não retorna nada.
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

// 1. Mercedes
// 2. Audi
// 3. BMW
// Mercedes
// Audi
// BMW