function receberMelhorEstudante(obj) {
    let maiorMedia = 0;
    let melhorEstudante = '';
    for (let estudante in obj) {
        let media = 0;
        for (let nota of obj[estudante]) {
            media += nota;
        }
        media /= obj[estudante].length;
        if (media > maiorMedia) {
            maiorMedia = media;
            melhorEstudante = estudante;
        }
    }
    return { nome: melhorEstudante, media: maiorMedia };
}

console.log(receberMelhorEstudante({
    Joao: [ 8, 7.6, 8.9, 6 ], // média 7.625
    Mariana: [ 9, 6.6, 7.9, 8 ], // média 7.875
    Carla: [ 7, 7, 8, 9 ] // média 7.75
}));